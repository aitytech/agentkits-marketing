/**
 * AgentKits Memory Setup
 *
 * Handles the setup of the memory system for Claude Code hooks integration.
 * Sets up auto-capture of sessions, observations, and context persistence.
 *
 * @author AityTech
 * @license MIT
 */

const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');

/**
 * MCP Server configuration for Claude Code
 */
const MCP_CONFIG = {
  mcpServers: {
    memory: {
      command: 'npx',
      args: ['agentkits-memory-server'],
    },
  },
};

/**
 * Memory hooks configuration for Claude Code
 */
const HOOKS_CONFIG = {
  $schema: 'https://raw.githubusercontent.com/anthropics/claude-code/main/hooks.schema.json',
  hooks: {
    SessionStart: [
      {
        matcher: '.*',
        hooks: [
          {
            type: 'command',
            command: 'npx agentkits-memory-hook context',
          },
        ],
      },
    ],
    UserPromptSubmit: [
      {
        matcher: '.*',
        hooks: [
          {
            type: 'command',
            command: 'npx agentkits-memory-hook session-init',
          },
        ],
      },
    ],
    PostToolUse: [
      {
        matcher: '.*',
        hooks: [
          {
            type: 'command',
            command: 'npx agentkits-memory-hook observation',
          },
        ],
      },
    ],
    Stop: [
      {
        matcher: '.*',
        hooks: [
          {
            type: 'command',
            command: 'npx agentkits-memory-hook summarize',
          },
        ],
      },
    ],
  },
};

/**
 * Default memory markdown templates
 */
const MEMORY_TEMPLATES = {
  'project-context.md': `# Project Context

> Semantic memory: Project facts and configuration (update rarely)

## Project Overview
<!-- Auto-populated by PIE on /pie-init -->

## Tech Stack
<!-- Auto-populated by PIE on /pie-init -->

## Key Patterns
<!-- Document important patterns discovered -->

## Architecture Notes
<!-- High-level architecture decisions -->
`,

  'active-context.md': `# Active Context

> Episodic memory: Current work focus (update frequently)

## Current Task
<!-- What you're working on right now -->

## Recent Changes
<!-- Files and features recently modified -->

## Blockers
<!-- Any issues blocking progress -->

## Next Steps
<!-- Immediate next actions -->
`,

  'session-state.md': `# Session State

> Episodic memory: Session handoff information (update on session end)

## Last Session Summary
<!-- Auto-populated by memory hooks -->

## Handoff Notes
<!-- Important context for the next session -->

## Pending Tasks
<!-- Tasks that weren't completed -->
`,

  'progress.md': `# Progress Tracking

> Episodic memory: Feature and task completion tracking

## Completed
<!-- Completed features and tasks -->

## In Progress
<!-- Currently being worked on -->

## Planned
<!-- Upcoming work -->
`,

  'patterns.md': `# Patterns

> Semantic memory: Discovered code patterns and conventions

## Code Patterns
<!-- Patterns found in the codebase -->

## Naming Conventions
<!-- Naming standards used -->

## File Organization
<!-- How files are organized -->
`,

  'decisions.md': `# Decisions

> Procedural memory: Architecture Decision Records (ADRs)

## Recent Decisions
<!-- Recent architectural decisions -->

---

<!-- ADR Template:
## ADR-XXX: Title

**Status:** Proposed | Accepted | Deprecated | Superseded
**Date:** YYYY-MM-DD

### Context
What is the issue?

### Decision
What was decided?

### Consequences
What are the results?
-->
`,

  'errors.md': `# Error Solutions

> Procedural memory: Documented error solutions

## Recent Errors
<!-- Errors encountered and their solutions -->

---

<!-- Error Template:
## Error: [Error Name]

**First Seen:** YYYY-MM-DD
**Times Occurred:** N

### Symptoms
What does the error look like?

### Cause
What causes this error?

### Solution
How to fix it?
-->
`,
};

class MemorySetup {
  constructor() {
    this.hooksFileName = 'hooks.json';
    this.memoryDirName = 'memory';
  }

  /**
   * Set up memory system for a project
   * @param {string} projectDir - The project directory
   * @param {string} claudeDir - The .claude directory path
   * @param {object} options - Setup options
   */
  async setup(projectDir, claudeDir, options = {}) {
    const { verbose = false } = options;

    // Step 1: Create memory directory structure
    await this.createMemoryDirectory(claudeDir, verbose);

    // Step 2: Create memory template files
    await this.createMemoryTemplates(claudeDir, verbose);

    // Step 3: Create hooks.json for Claude Code
    await this.createHooksConfig(claudeDir, verbose);

    // Step 4: Create database directory
    await this.createDatabaseDirectory(claudeDir, verbose);

    // Step 5: Create MCP configuration for memory tools
    await this.createMcpConfig(projectDir, verbose);

    return {
      memoryDir: path.join(claudeDir, this.memoryDirName),
      hooksFile: path.join(claudeDir, this.hooksFileName),
      mcpFile: path.join(projectDir, '.mcp.json'),
    };
  }

  /**
   * Create memory directory
   */
  async createMemoryDirectory(claudeDir, verbose) {
    const memoryDir = path.join(claudeDir, this.memoryDirName);
    await fs.ensureDir(memoryDir);

    if (verbose) {
      console.log(chalk.dim(`  Created: ${memoryDir}`));
    }
  }

  /**
   * Create memory template files
   */
  async createMemoryTemplates(claudeDir, verbose) {
    const memoryDir = path.join(claudeDir, this.memoryDirName);

    for (const [fileName, content] of Object.entries(MEMORY_TEMPLATES)) {
      const filePath = path.join(memoryDir, fileName);

      // Don't overwrite existing files
      if (!(await fs.pathExists(filePath))) {
        await fs.writeFile(filePath, content, 'utf-8');

        if (verbose) {
          console.log(chalk.dim(`  Created: ${filePath}`));
        }
      }
    }
  }

  /**
   * Create hooks.json configuration
   */
  async createHooksConfig(claudeDir, verbose) {
    const hooksFile = path.join(claudeDir, this.hooksFileName);

    // Check if hooks.json already exists
    if (await fs.pathExists(hooksFile)) {
      // Merge with existing hooks
      const existingHooks = await fs.readJson(hooksFile);
      const mergedHooks = this.mergeHooksConfig(existingHooks, HOOKS_CONFIG);
      await fs.writeJson(hooksFile, mergedHooks, { spaces: 2 });

      if (verbose) {
        console.log(chalk.dim(`  Updated: ${hooksFile}`));
      }
    } else {
      await fs.writeJson(hooksFile, HOOKS_CONFIG, { spaces: 2 });

      if (verbose) {
        console.log(chalk.dim(`  Created: ${hooksFile}`));
      }
    }
  }

  /**
   * Create database directory for SQLite storage
   */
  async createDatabaseDirectory(claudeDir, verbose) {
    const dbDir = path.join(claudeDir, this.memoryDirName, '.db');
    await fs.ensureDir(dbDir);

    // Create .gitignore to exclude database files
    const gitignorePath = path.join(dbDir, '.gitignore');
    if (!(await fs.pathExists(gitignorePath))) {
      await fs.writeFile(gitignorePath, '# Ignore memory database files\n*.db\n*.db-journal\n', 'utf-8');
    }

    if (verbose) {
      console.log(chalk.dim(`  Created: ${dbDir}`));
    }
  }

  /**
   * Create MCP configuration for memory tools
   */
  async createMcpConfig(projectDir, verbose) {
    const mcpFile = path.join(projectDir, '.mcp.json');

    // Check if .mcp.json already exists
    if (await fs.pathExists(mcpFile)) {
      // Merge with existing config
      const existingConfig = await fs.readJson(mcpFile);
      const mergedConfig = this.mergeMcpConfig(existingConfig, MCP_CONFIG);
      await fs.writeJson(mcpFile, mergedConfig, { spaces: 2 });

      if (verbose) {
        console.log(chalk.dim(`  Updated: ${mcpFile}`));
      }
    } else {
      await fs.writeJson(mcpFile, MCP_CONFIG, { spaces: 2 });

      if (verbose) {
        console.log(chalk.dim(`  Created: ${mcpFile}`));
      }
    }
  }

  /**
   * Merge existing MCP config with new memory config
   */
  mergeMcpConfig(existing, newConfig) {
    const merged = { ...existing };

    if (!merged.mcpServers) {
      merged.mcpServers = {};
    }

    // Add memory server if not present
    if (!merged.mcpServers.memory) {
      merged.mcpServers.memory = newConfig.mcpServers.memory;
    }

    return merged;
  }

  /**
   * Merge existing hooks config with new memory hooks
   */
  mergeHooksConfig(existing, newConfig) {
    const merged = { ...existing };

    if (!merged.hooks) {
      merged.hooks = {};
    }

    // Merge each hook type
    for (const [hookType, hookConfigs] of Object.entries(newConfig.hooks)) {
      if (!merged.hooks[hookType]) {
        merged.hooks[hookType] = hookConfigs;
      } else {
        // Check if memory hooks already exist
        const existingCommands = merged.hooks[hookType]
          .flatMap(h => h.hooks || [])
          .filter(h => h.type === 'command')
          .map(h => h.command);

        for (const config of hookConfigs) {
          const newCommands = (config.hooks || [])
            .filter(h => h.type === 'command')
            .map(h => h.command);

          // Only add if not already present
          const hasMemoryHook = newCommands.some(cmd =>
            existingCommands.some(existing => existing.includes('agentkits-memory-hook'))
          );

          if (!hasMemoryHook) {
            merged.hooks[hookType].push(config);
          }
        }
      }
    }

    return merged;
  }

  /**
   * Check if memory is already set up
   */
  async isSetUp(claudeDir) {
    const hooksFile = path.join(claudeDir, this.hooksFileName);
    const memoryDir = path.join(claudeDir, this.memoryDirName);

    return (await fs.pathExists(hooksFile)) && (await fs.pathExists(memoryDir));
  }

  /**
   * Get memory status
   */
  async getStatus(claudeDir) {
    const memoryDir = path.join(claudeDir, this.memoryDirName);
    const dbDir = path.join(memoryDir, '.db');
    const hooksFile = path.join(claudeDir, this.hooksFileName);

    const status = {
      memoryDirExists: await fs.pathExists(memoryDir),
      hooksFileExists: await fs.pathExists(hooksFile),
      databaseExists: false,
      templateFiles: [],
    };

    if (status.memoryDirExists) {
      // Check for template files
      for (const fileName of Object.keys(MEMORY_TEMPLATES)) {
        const filePath = path.join(memoryDir, fileName);
        if (await fs.pathExists(filePath)) {
          status.templateFiles.push(fileName);
        }
      }

      // Check for database
      const dbPath = path.join(dbDir, 'memory.db');
      status.databaseExists = await fs.pathExists(dbPath);
    }

    return status;
  }
}

module.exports = { MemorySetup, HOOKS_CONFIG, MEMORY_TEMPLATES, MCP_CONFIG };
