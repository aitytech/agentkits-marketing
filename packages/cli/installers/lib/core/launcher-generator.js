/**
 * Launcher Generator
 *
 * Generates IDE-specific launcher files from AgentKits commands and agents
 *
 * @author AityTech
 * @license MIT
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('yaml');

class LauncherGenerator {
  constructor() {
    this.agentkitsFolderName = '.claude';
    this.templatesDir = path.join(__dirname, '../ide/templates/combined');
  }

  /**
   * Set the AgentKits folder name
   */
  setAgentkitsFolderName(folderName) {
    this.agentkitsFolderName = folderName;
  }

  /**
   * Generate all launchers for a project
   */
  async generateAll(projectDir, agentkitsDir, targetDir, templateType, options = {}) {
    const results = {
      commands: 0,
      agents: 0,
      total: 0,
    };

    // Generate command launchers
    results.commands = await this.generateCommandLaunchers(
      agentkitsDir,
      targetDir,
      templateType,
      options
    );

    // Generate agent launchers
    results.agents = await this.generateAgentLaunchers(
      agentkitsDir,
      targetDir,
      templateType,
      options
    );

    results.total = results.commands + results.agents;
    return results;
  }

  /**
   * Generate launchers for commands
   */
  async generateCommandLaunchers(agentkitsDir, targetDir, templateType, options = {}) {
    const commandsDir = path.join(agentkitsDir, 'commands');
    if (!(await fs.pathExists(commandsDir))) {
      return 0;
    }

    const template = await this.loadTemplate(templateType, 'command');
    const files = await fs.readdir(commandsDir);
    let count = 0;

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const filePath = path.join(commandsDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      const frontmatter = this.parseFrontmatter(content);

      const name = frontmatter.name || path.basename(file, '.md');
      const description = frontmatter.description || `${name} command`;
      const slug = this.slugify(name);

      const launcherContent = this.renderTemplate(template, {
        name,
        description,
        slug,
        path: `commands/${file}`,
        agentkitsFolderName: this.agentkitsFolderName,
      });

      const outputPath = path.join(targetDir, this.getFilename(name, templateType, 'command', count));
      await fs.writeFile(outputPath, launcherContent);
      count++;
    }

    return count;
  }

  /**
   * Convert name to slug format
   */
  slugify(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Generate launchers for agents
   */
  async generateAgentLaunchers(agentkitsDir, targetDir, templateType, options = {}) {
    const agentsBaseDir = path.join(agentkitsDir, 'agents');
    if (!(await fs.pathExists(agentsBaseDir))) {
      return 0;
    }

    const template = await this.loadTemplate(templateType, 'agent');
    let count = 0;

    // Scan agent directories
    const categories = await fs.readdir(agentsBaseDir);

    for (const category of categories) {
      const categoryPath = path.join(agentsBaseDir, category);
      const stat = await fs.stat(categoryPath);

      if (!stat.isDirectory()) continue;

      const agentFiles = await fs.readdir(categoryPath);

      for (const file of agentFiles) {
        if (!file.endsWith('.md')) continue;

        const filePath = path.join(categoryPath, file);
        const content = await fs.readFile(filePath, 'utf8');
        const frontmatter = this.parseFrontmatter(content);

        const name = frontmatter.name || path.basename(file, '.md');
        const description = frontmatter.description || `${name} agent`;
        const slug = this.slugify(name);

        const launcherContent = this.renderTemplate(template, {
          name,
          description,
          slug,
          path: `agents/${category}/${file}`,
          agentkitsFolderName: this.agentkitsFolderName,
        });

        const outputPath = path.join(targetDir, this.getFilename(name, templateType, 'agent', count));
        await fs.writeFile(outputPath, launcherContent);
        count++;
      }
    }

    return count;
  }

  /**
   * Load template file
   */
  async loadTemplate(templateType, artifactType) {
    // Try different template file extensions
    const extensions = ['.md', '.yaml', '.toml'];

    for (const ext of extensions) {
      const templateName = `${templateType}-${artifactType}${ext}`;
      const templatePath = path.join(this.templatesDir, templateName);

      try {
        return await fs.readFile(templatePath, 'utf8');
      } catch {
        // Try next extension
      }
    }

    // Try template type specific files (e.g., cline-rule.md, kiro-steering.md)
    const specificTemplates = [
      `${templateType}-rule.md`,
      `${templateType}-steering.md`,
      `${templateType}-modes.yaml`,
    ];

    for (const templateName of specificTemplates) {
      const templatePath = path.join(this.templatesDir, templateName);
      try {
        return await fs.readFile(templatePath, 'utf8');
      } catch {
        // Try next
      }
    }

    // Fall back to default template
    const defaultPath = path.join(this.templatesDir, `default-${artifactType}.md`);
    try {
      return await fs.readFile(defaultPath, 'utf8');
    } catch {
      // Ultimate fallback
      return this.getDefaultTemplate(artifactType);
    }
  }

  /**
   * Get default template
   */
  getDefaultTemplate(artifactType) {
    if (artifactType === 'agent') {
      return `---
name: '{{name}}'
description: '{{description}}'
---

You must fully embody this agent's persona.

LOAD the agent from: {project-root}/{{agentkitsFolderName}}/{{path}}
`;
    }

    return `---
name: '{{name}}'
description: '{{description}}'
---

LOAD and execute: {project-root}/{{agentkitsFolderName}}/{{path}}
`;
  }

  /**
   * Render template with data
   */
  renderTemplate(template, data) {
    let rendered = template;

    for (const [key, value] of Object.entries(data)) {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      rendered = rendered.replace(regex, value);
    }

    return rendered;
  }

  /**
   * Parse YAML frontmatter
   */
  parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};

    try {
      return yaml.parse(match[1]) || {};
    } catch {
      return {};
    }
  }

  /**
   * Get output filename
   */
  getFilename(name, templateType, artifactType, index = 0) {
    // Handle special cases for GitHub Copilot
    if (templateType === 'copilot_agents') {
      return `${name}.agent.md`;
    }
    if (templateType === 'copilot_instructions') {
      return `${name}.instructions.md`;
    }

    // Gemini CLI uses TOML
    if (templateType === 'gemini') {
      return `agentkits-${name}.toml`;
    }

    // Cline uses numbered files (01-name.md)
    if (templateType === 'cline') {
      const paddedIndex = String(index + 1).padStart(2, '0');
      return `${paddedIndex}-agentkits-${name}.md`;
    }

    // Kiro steering files
    if (templateType === 'kiro') {
      return `agentkits-${name}.md`;
    }

    // Trae rules
    if (templateType === 'trae') {
      return `agentkits-${name}.md`;
    }

    // Roo rules
    if (templateType === 'roo_rules') {
      return `agentkits-${name}.md`;
    }

    // Default markdown
    return `agentkits-${name}.md`;
  }
}

module.exports = { LauncherGenerator };
