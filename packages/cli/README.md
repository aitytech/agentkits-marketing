# AgentKits Marketing CLI

**Multi-IDE AI Marketing Framework Installer**

AgentKits Marketing supports 17+ AI IDEs including Claude Code, Cursor, Windsurf, GitHub Copilot, Gemini CLI, and more.

## Quick Start

```bash
npx @aitytech/agentkits-marketing install
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
| Kiro CLI | AWS agentic IDE | `.kiro` |

## Available Modules

| Module | Required | Description |
|--------|----------|-------------|
| **Core** | Yes | 18 marketing agents, essential skills, base commands |
| **SEO** | No | Keyword research, competitor analysis, content optimization |
| **CRO** | No | Page, form, signup, popup, onboarding optimization |
| **Content** | No | Blog, social, landing pages, copywriting, editing |
| **Email** | No | Welcome, nurture, re-engagement sequences |
| **Analytics** | No | Campaign ROI, funnel analysis, attribution |
| **Training** | No | 23 interactive modules, pattern library |

## Commands

### Install

```bash
# Interactive installation
npx @aitytech/agentkits-marketing install

# Skip prompts with defaults
npx @aitytech/agentkits-marketing install --yes

# Specify IDE
npx @aitytech/agentkits-marketing install --ide cursor

# Specify multiple modules
npx @aitytech/agentkits-marketing install --modules "core,seo,cro,content"

# Specify installation path
npx @aitytech/agentkits-marketing install --path /path/to/project
```

### List

```bash
# List supported IDEs
npx @aitytech/agentkits-marketing list-ides

# List available modules
npx @aitytech/agentkits-marketing list-modules
```

### Update

```bash
# Update existing installation
npx @aitytech/agentkits-marketing update
```

## Installation Structure

After installation, your project will have:

```
your-project/
├── .claude/                    # AgentKits Marketing core files
│   ├── agents/                 # 18 marketing AI agents
│   │   ├── core/               # Core marketing agents
│   │   ├── supporting/         # Supporting agents
│   │   └── reviewers/          # Reviewer agents
│   ├── skills/                 # 40+ marketing skills
│   ├── commands/               # 76 slash commands
│   ├── memory/                 # Memory markdown files
│   └── workflows/              # Marketing workflows
│
├── docs/                       # Marketing documentation
│   ├── usage-guide.md
│   ├── brand-guidelines.md
│   ├── campaign-playbooks.md
│   └── ...
│
├── .cursor/commands/           # Cursor launchers (if selected)
│   ├── agentkits-campaign-plan.md
│   ├── agentkits-content-blog.md
│   └── ...
│
├── .windsurf/workflows/        # Windsurf launchers (if selected)
│   ├── agentkits-campaign-plan.md
│   └── ...
│
├── .github/agents/             # GitHub Copilot agents (if selected)
│   ├── campaign-plan.agent.md
│   └── ...
│
└── _agentkits-output/          # Generated marketing assets
```

## Marketing Agents

### Core Marketing Agents
- `attraction-specialist` - Lead generation, SEO, TOFU
- `lead-qualifier` - Intent detection, lead scoring
- `email-wizard` - Email campaigns, sequences
- `sales-enabler` - Sales collateral, case studies
- `continuity-specialist` - Retention, engagement
- `upsell-maximizer` - Revenue expansion

### Supporting Agents
- `researcher` - Market research, competitive analysis
- `brainstormer` - Campaign ideation
- `planner` - Campaign planning
- `project-manager` - Coordination
- `copywriter` - Content creation
- `docs-manager` - Documentation

### Reviewer Agents
- `brand-voice-guardian` - Brand consistency
- `conversion-optimizer` - CRO review
- `seo-specialist` - SEO optimization
- `manager-maria` - B2B perspective
- `solo-steve` - Solopreneur perspective
- `startup-sam` - Startup perspective

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
name: 'campaign-plan'
description: 'Create comprehensive marketing campaign plan'
---

LOAD the FULL @{project-root}/.claude/commands/campaign/plan.md
READ its contents and follow instructions exactly!
```

## Cross-IDE Compatibility

AgentKits Marketing agents, commands, and skills work across all supported IDEs:

| IDE | Experience | Capabilities |
|-----|------------|--------------|
| Claude Code | Best | Full automation |
| Cursor | Great | Search + Apply |
| Windsurf | Great | Cascade flows |
| GitHub Copilot | Good | Chat + Apply |
| Gemini CLI | Good | Terminal |
| Other IDEs | Moderate | Guidance mode |

### Adaptive Behavior

All AgentKits components include `ide_compatibility` metadata that enables:
- Automatic capability detection
- Tool fallbacks for limited IDEs
- Universal checkpoint patterns
- File-based state management

## Development

### Local Development

```bash
cd packages/cli
npm install
npm run install-local
```

### Testing

```bash
npm test
```

## License

MIT License - see [LICENSE](../../LICENSE) for details.

---

**AgentKits Marketing by AityTech**

- Website: https://agentkits.net
- GitHub: https://github.com/aitytech/agentkits-marketing
- Support: https://github.com/aitytech/agentkits-marketing/issues
