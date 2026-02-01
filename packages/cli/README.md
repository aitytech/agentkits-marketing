# AgentKits Engineer CLI

**Multi-IDE AI Development Framework Installer**

AgentKits Engineer supports 17+ AI IDEs including Claude Code, Cursor, Windsurf, GitHub Copilot, Gemini CLI, and more.

## Quick Start

```bash
npx agentkits-engineer install
```

Follow the interactive prompts to select your AI tools and modules.

## Supported AI IDEs

### Preferred (Recommended)

| IDE | Description | Target Directory |
|-----|-------------|-----------------|
| **Claude Code** | Anthropic's official CLI | `.claude/commands` |
| **Cursor** | AI-first code editor | `.cursor/commands` |
| **Windsurf** | AI-powered IDE with cascade flows | `.windsurf/workflows` |

### Other Supported

| IDE | Description | Target Directory |
|-----|-------------|-----------------|
| GitHub Copilot | GitHub's AI pair programmer | `.github/agents` |
| Gemini CLI | Google's CLI for Gemini | `.gemini/commands` |
| Cline | AI coding assistant for VS Code | `.clinerules/workflows` |
| Roo Cline | Enhanced Cline fork | `.roo/commands` |
| Trae | AI coding tool | `.trae/rules` |
| OpenCode | Terminal coding assistant | `.opencode/command` |
| Auggie | Augment AI development tool | `.augment/commands` |
| QwenCoder | Qwen AI coding assistant | `.qwen/commands` |
| KiloCoder | AI coding platform | `.kilocodemodes` |
| Codex | OpenAI Codex integration | `.codex` |
| Rovo Dev | Atlassian's Rovo environment | `.rovodev/workflows` |
| Google Antigravity | Google's AI environment | `.agent/workflows` |
| Crush | AI development assistant | `.crush/commands` |
| iFlow | AI workflow automation | `.iflow/commands` |
| Kiro CLI | Kiro command-line interface | `.kiro` |

## Available Modules

| Module | Required | Description |
|--------|----------|-------------|
| **Core** | Yes | Essential agents, skills, and commands |
| **GDJ** | No | Guided Developer Journeys (60+ templates, 19 guides) |
| **Quality** | No | Code review, TDD, adversarial review |
| **Security** | No | Security review, OWASP, authentication |
| **Development** | No | Architect, debugger, refactorer specialists |
| **Automation** | No | Docs search, repomix, automation tools |
| **Training** | No | Interactive training modules |

## Commands

### Install

```bash
# Interactive installation
npx agentkits-engineer install

# Skip prompts with defaults
npx agentkits-engineer install --yes

# Specify IDE
npx agentkits-engineer install --ide cursor

# Specify multiple modules
npx agentkits-engineer install --modules "core,gdj,quality,security"

# Specify installation path
npx agentkits-engineer install --path /path/to/project
```

### List

```bash
# List supported IDEs
npx agentkits-engineer list-ides

# List available modules
npx agentkits-engineer list-modules
```

### Update

```bash
# Update existing installation
npx agentkits-engineer update
```

## Installation Structure

After installation, your project will have:

```
your-project/
├── .claude/                    # AgentKits core files
│   ├── agents/                 # AI agent definitions
│   ├── skills/                 # Skill modules
│   ├── commands/               # Command definitions
│   ├── memory/                 # CPS memory files
│   ├── journeys/               # GDJ journey guides
│   └── workflows/              # Workflow definitions
│
├── .cursor/commands/           # Cursor launchers (if selected)
│   ├── agentkits-pie-init.md
│   ├── agentkits-gdj.md
│   └── ...
│
├── .windsurf/workflows/        # Windsurf launchers (if selected)
│   ├── agentkits-pie-init.md
│   └── ...
│
├── .github/agents/             # GitHub Copilot agents (if selected)
│   ├── pie-init.agent.md
│   └── ...
│
└── _agentkits-output/          # Generated artifacts
```

## Architecture

### Platform Codes Configuration

The installer uses `platform-codes.yaml` to configure IDE-specific behavior:

```yaml
platforms:
  claude-code:
    name: "Claude Code"
    preferred: true
    installer:
      target_dir: .claude/commands
      template_type: claude
```

### Template System

Each IDE has specific template formats:

- **Markdown** (`.md`) - Most IDEs (Claude, Cursor, Windsurf)
- **TOML** (`.toml`) - Gemini CLI
- **Agent** (`.agent.md`) - GitHub Copilot agents
- **Instructions** (`.instructions.md`) - GitHub Copilot instructions

### Launcher Pattern

Instead of duplicating agents for each IDE, AgentKits uses lightweight launchers:

```markdown
---
name: 'pie-init'
description: 'Initialize project with PIE analysis'
---

LOAD the FULL @{project-root}/.claude/commands/pie-init.md
READ its contents and follow instructions exactly!
```

## AgentKits PAID Architecture

- **PIE™** (Project Intelligence Engine) - Auto-detect tech stacks
- **CPS™** (Context Persistence System) - Memory that survives sessions
- **GDJ™** (Guided Developer Journeys) - Step-by-step implementation guides

## Development

### Local Development

```bash
cd tools/cli
npm install
npm run install-local
```

### Testing

```bash
npm test
```

## Cross-IDE Compatibility

AgentKits agents, commands, and skills work across all supported IDEs:

| IDE | Experience | Capabilities |
|-----|------------|--------------|
| Claude Code | Best | Full automation |
| Cursor | Great | Search + Apply |
| Windsurf | Great | Cascade flows |
| GitHub Copilot | Good | Chat + Apply |
| Gemini CLI | Good | Terminal |
| Other IDEs | Moderate | Guidance mode |

See the [main README](../../README.md#-cross-platform-compatibility) for details.

### Adaptive Behavior

All AgentKits components include `ide_compatibility` metadata that enables:
- Automatic capability detection
- Tool fallbacks for limited IDEs
- Universal checkpoint patterns
- File-based state management

## License

MIT License - see [LICENSE](../../LICENSE) for details.

---

**AgentKits Engineer by AityTech**

- Website: https://agentkits.net
- GitHub: https://github.com/agentkits/agentkits-engineer
- Support: https://github.com/agentkits/agentkits-engineer/issues
