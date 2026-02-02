<p align="center">
  <img src="https://raw.githubusercontent.com/aitytech/agentkits-marketing/main/assets/logo.svg" alt="AgentKits Logo" width="80" height="80">
</p>

<h1 align="center">AgentKits Marketing</h1>

<p align="center">
  <a href="https://github.com/aitytech/agentkits-marketing/stargazers"><img src="https://img.shields.io/github/stars/aitytech/agentkits-marketing?style=flat" alt="Stars"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Claude_Code%20|%20Cursor%20|%20Copilot-Compatible-blueviolet" alt="AI Assistants">
  <br>
  <img src="https://img.shields.io/badge/Agents-18-green" alt="Agents">
  <img src="https://img.shields.io/badge/Commands-93-orange" alt="Commands">
  <img src="https://img.shields.io/badge/Skills-28-blue" alt="Skills">
</p>

<p align="center">
  <strong>Enterprise-grade AI marketing automation for Claude Code, Cursor, GitHub Copilot, and any AI assistant supporting agents & skills.</strong>
</p>

<p align="center">
  Production-ready marketing agents, skills, commands, and workflows built for SaaS founders, marketers, and growth teams. Campaign planning, content creation, SEO, CRO, email sequences, and analytics - all powered by specialized AI agents.
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">Website</a> •
  <a href="https://www.agentkits.net/docs">Docs</a> •
  <a href="#installation">Install</a> •
  <a href="#training">Training</a>
</p>

<p align="center">
  <strong>English</strong> | <a href="README.vi.md">Tiếng Việt</a> | <a href="README.ja.md">日本語</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *Inspired by the "Vibe Coding" movement from developers... we're expanding the universe: **Vibe Marketing** for the AI era where everything just works.*

| | |
|---|---|
| **With AI** | Let AI agents handle your campaigns while you focus on strategy. Just vibe and let the agents do the heavy lifting. |
| **Without AI** | This repo is a **comprehensive reference library** of marketing best practices, frameworks, and templates. Use the skills docs as your marketing playbook. |

---

## What's Inside

Works with **Claude Code**, **Cursor**, **GitHub Copilot**, and any AI assistant supporting agents & skills. Install as plugin or copy components manually.

```
agentkits-marketing/
|-- .claude-plugin/      # Plugin and marketplace manifests
|   |-- plugin.json            # Plugin metadata and component paths
|   |-- marketplace.json       # Marketplace catalog for /plugin marketplace add
|
|-- .claude/
|   |-- agents/          # 18 specialized marketing agents
|   |   |-- attraction-specialist.md    # Lead gen, SEO, landing pages
|   |   |-- lead-qualifier.md           # Lead scoring, segmentation
|   |   |-- email-wizard.md             # Email sequences, automation
|   |   |-- sales-enabler.md            # Sales collateral, battlecards
|   |   |-- continuity-specialist.md    # Retention, re-engagement
|   |   |-- upsell-maximizer.md         # Revenue expansion
|   |   |-- copywriter.md               # High-converting copy
|   |   |-- conversion-optimizer.md     # CRO specialist
|   |   |-- seo-specialist.md           # SEO optimization
|   |   |-- brand-voice-guardian.md     # Brand consistency
|   |   |-- ...and more
|   |
|   |-- commands/        # 93 slash commands by category
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...and more
|   |
|   |-- skills/          # 28 marketing skills
|   |   |-- marketing-psychology/       # 70+ mental models
|   |   |-- marketing-ideas/            # 140+ SaaS strategies
|   |   |-- page-cro/                   # Landing page optimization
|   |   |-- copywriting/                # Marketing copy
|   |   |-- programmatic-seo/           # Scaled page generation
|   |   |-- pricing-strategy/           # Pricing & packaging
|   |   |-- ...and more
|   |
|   |-- workflows/       # Core marketing workflows
|       |-- primary-workflow.md         # Campaign lifecycle
|       |-- sales-workflow.md           # Lead to customer
|       |-- crm-workflow.md             # Contact lifecycle
|
|-- training/            # 23 interactive training lessons (English)
|-- training-vi/         # Vietnamese training (Tiếng Việt)
|-- training-ja/         # Japanese training (日本語)
|-- docs/                # Documentation and guides
|-- marketplace.json     # Self-hosted marketplace config
```

---

## Installation

### Option 1: Install via npx (Recommended)

One command to install 18 agents, 28 skills, 93 commands:

```bash
npx @aitytech/agentkits-marketing install
```

**Platform-specific installation:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # All platforms
```

**Other CLI commands:**

```bash
npx @aitytech/agentkits-marketing --help        # Show all commands
npx @aitytech/agentkits-marketing list-ides     # List supported IDEs
npx @aitytech/agentkits-marketing list-modules  # List available modules
npx @aitytech/agentkits-marketing update        # Update existing installation
```

---

### Option 2: Clone and Use

Clone the repository and work within it:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### Option 3: Install as Plugin (Coming Soon)

> **Note:** Plugin marketplace submission is pending approval.

Once approved, install directly via Claude Code's plugin system:

```bash
# Add this repo as a marketplace
/plugin marketplace add aitytech/agentkits-marketing

# Install the plugin
/plugin install agentkits-marketing@agentkits-marketing
```

---

### Option 4: Manual Installation

Copy individual components to your Claude config:

```bash
# Clone the repo
git clone https://github.com/aitytech/agentkits-marketing.git

# Copy agents
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# Copy commands
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# Copy skills
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# Copy workflows
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## Quick Start

### Campaign Launch

```bash
# Research and plan
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# Generate content
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# Optimize
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### Content Creation

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### Conversion Optimization

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### Growth & Strategy

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## Available Skills

| Skill | Description | Use When |
|-------|-------------|----------|
| **Core Marketing** |
| `marketing-psychology` | 70+ mental models for marketing | Persuasion, pricing, objections |
| `marketing-ideas` | 140 proven SaaS strategies | Need marketing ideas |
| `marketing-fundamentals` | Funnel, journey, positioning | Foundation concepts |
| **Conversion Optimization** |
| `page-cro` | Landing page, homepage, pricing | Page not converting |
| `form-cro` | Lead capture, contact forms | Form optimization |
| `popup-cro` | Modals, overlays, exit intent | Popup creation |
| `signup-flow-cro` | Registration, trial signup | Signup friction |
| `onboarding-cro` | Post-signup activation | User activation |
| `paywall-upgrade-cro` | In-app paywalls, upgrade screens | Freemium conversion |
| `ab-test-setup` | Experiment design | A/B testing |
| **Content & Copy** |
| `copywriting` | Marketing page copy | Write new copy |
| `copy-editing` | Edit and polish | Improve existing copy |
| `email-sequence` | Drip campaigns, nurture | Email automation |
| **SEO & Growth** |
| `seo-mastery` | Keyword, technical, on-page | SEO optimization |
| `programmatic-seo` | Template pages at scale | Scaled SEO |
| `schema-markup` | Structured data, rich snippets | Schema implementation |
| `competitor-alternatives` | vs pages, alternatives | Comparison content |
| `launch-strategy` | Product launches, announcements | Go-to-market |
| `pricing-strategy` | Pricing, packaging, tiers | Pricing decisions |
| `referral-program` | Referral, affiliate | Viral growth |
| `free-tool-strategy` | Engineering-as-marketing | Free tool planning |

---

## Marketing Agents

### Core Agents
| Agent | Focus |
|-------|-------|
| `attraction-specialist` | Lead gen, SEO, landing pages |
| `lead-qualifier` | Lead scoring, segmentation |
| `email-wizard` | Email sequences, automation |
| `sales-enabler` | Sales collateral, battlecards |
| `continuity-specialist` | Retention, re-engagement |
| `upsell-maximizer` | Revenue expansion, cross-sell |

### Supporting Agents
| Agent | Focus |
|-------|-------|
| `researcher` | Market research, competitive intel |
| `brainstormer` | Campaign ideation, creative concepts |
| `planner` | Campaign planning, calendars |
| `copywriter` | High-converting copy |
| `project-manager` | Campaign coordination |
| `docs-manager` | Marketing documentation |

### Reviewer Agents
| Agent | Perspective |
|-------|-------------|
| `brand-voice-guardian` | Brand consistency |
| `conversion-optimizer` | CRO best practices |
| `seo-specialist` | SEO optimization |
| `solopreneur` | Freelancer/small business |
| `startup-founder` | Early-stage startup |

---

## Command Categories

| Category | Commands | Examples |
|----------|----------|----------|
| Campaign | 4 | `/campaign:plan`, `/campaign:brief` |
| Content | 10 | `/content:blog`, `/content:landing`, `/content:editing` |
| SEO | 6 | `/seo:keywords`, `/seo:audit`, `/seo:programmatic` |
| CRO | 6 | `/cro:page`, `/cro:form`, `/cro:signup` |
| Growth | 3 | `/growth:launch`, `/growth:referral` |
| Email | 4 | `/sequence:welcome`, `/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`, `/analytics:funnel` |
| Sales | 4 | `/sales:pitch`, `/sales:battlecard` |
| Research | 3 | `/research:market`, `/research:persona` |
| Marketing | 2 | `/marketing:psychology`, `/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...more | 45+ | See full command reference |

---

## Training

**22 interactive lessons** to master AI-powered marketing. Learn by doing real marketing work inside your AI assistant.

| | |
|---|---|
| **Method** | Interactive lessons taught by Claude |
| **Project** | Markit agency working for client AgentKits |
| **Duration** | 5-6 hours total |
| **Prerequisite** | Claude Code, Cursor, or compatible AI assistant |
| **Languages** | English, Vietnamese (Tiếng Việt), Japanese (日本語) |

```bash
# Start training now
/training:start-0-0           # English
/training-vi:start-0-0        # Vietnamese (Tiếng Việt)
/training-ja:start-0-0        # Japanese (日本語)
```

---

### Practice Project: Markit Agency

You're a Marketing Strategist at **Markit**, a B2B SaaS marketing agency.

**Your Client:** AgentKits - AI marketing automation toolkit

| | |
|---|---|
| **Product** | Enterprise-grade AI marketing automation |
| **Target** | SaaS founders, marketers, and growth teams |
| **Pricing** | Free & Open Source (MIT license) |
| **Competitors** | Jasper, Copy.ai, HubSpot |

**Key Personas:**
- **Solo Sam** (25-35) - Solopreneur/indie hacker, bootstrapped SaaS
- **Marketer Maya** (30-40) - Marketing manager, mid-size SaaS company
- **Founder Felix** (28-40) - Technical founder, early-stage startup

---

### Module 0: Getting Started (30 min)

Learn the basics and complete your first marketing task.

| Command | Lesson | Duration |
|---------|--------|----------|
| `/training:start-0-0` | Course Introduction | 10 min |
| `/training:start-0-1` | Installation & Setup | 15 min |
| `/training:start-0-2` | Your First Marketing Task | 15 min |

**What You'll Learn:**
- AI assistant interface and basic commands
- File creation and management
- Interacting with AI for marketing tasks

---

### Module 1: Core Concepts (90 min)

Master fundamental workflows through the Markit agency project.

| Command | Lesson | Duration |
|---------|--------|----------|
| `/training:start-1-1` | Welcome to Markit | 20 min |
| `/training:start-1-2` | Working with Marketing Files | 25 min |
| `/training:start-1-3` | First Marketing Tasks | 30 min |
| `/training:start-1-4` | Using Agents for Marketing | 35 min |
| `/training:start-1-5` | Reviewer Agents Deep Dive | 30 min |
| `/training:start-1-6` | Project Memory (CLAUDE.md) | 20 min |
| `/training:start-1-7` | Navigation & Search | 20 min |

**What You'll Learn:**
- Campaign brief creation
- Brand voice and persona development
- Agent coordination and delegation
- File organization best practices
- Using project memory effectively

**What You'll Build:**
- Complete campaign brief
- Brand guidelines document
- Customer personas
- Custom reviewer agents

---

### Module 2: Advanced Applications (120 min)

Apply skills to real marketing scenarios at scale.

| Command | Lesson | Duration |
|---------|--------|----------|
| `/training:start-2-1` | Write a Campaign Brief | 45 min |
| `/training:start-2-2` | Develop Content Strategy | 40 min |
| `/training:start-2-3` | Generate Marketing Copy | 35 min |
| `/training:start-2-4` | Analyze Campaign Data | 35 min |
| `/training:start-2-5` | Competitive Analysis | 30 min |
| `/training:start-2-6` | SEO Optimization | 40 min |

**What You'll Learn:**
- Strategic campaign planning
- Multi-channel content creation
- Data analysis and insights
- Competitive intelligence gathering
- SEO best practices

**What You'll Build:**
- Complete content library (blog, email, social, ads)
- Competitive analysis report
- SEO optimization plan
- Campaign analytics dashboard

---

### Module 3: CRO & Conversion (60 min)

Master conversion rate optimization with specialized CRO skills.

| Command | Lesson | Duration |
|---------|--------|----------|
| `/training:start-3-1` | CRO Fundamentals | 20 min |
| `/training:start-3-2` | Form & Signup Optimization | 20 min |
| `/training:start-3-3` | Popup & Onboarding CRO | 20 min |

**What You'll Learn:**
- 7 CRO skills for the full conversion funnel
- Form optimization (5-field rule)
- Signup flow best practices
- Popup design and triggers
- Onboarding and activation
- Paywall and upgrade screens
- A/B test design

**What You'll Build:**
- Landing page CRO audit
- Optimized form design
- Onboarding flow
- Upgrade screen
- A/B test hypotheses

**Full CRO Funnel Coverage:**
```
Visitor → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (capture abandoners)
     ↓
New User → Onboarding CRO → Activation
     ↓
Free User → Paywall CRO → Paid Customer
```

---

### Bonus Content

| Command | Description |
|---------|-------------|
| `/training:bonus-patterns` | Pattern library for headlines, emails, social, ads, CRO |
| `/training:bonus-secret` | The 10x Marketer Framework |
| `/training:help` | Show all available training commands |

---

### Multi-Language Training

Training is available in 3 languages. All content is identical - choose your preferred language:

| Language | Command Prefix | Example |
|----------|---------------|---------|
| **English** | `/training:` | `/training:start-0-0` |
| **Vietnamese** (Tiếng Việt) | `/training-vi:` | `/training-vi:start-0-0` |
| **Japanese** (日本語) | `/training-ja:` | `/training-ja:start-0-0` |

**Available localized commands:**
- `start-0-0` to `start-0-2` (Module 0)
- `start-1-1` to `start-1-7` (Module 1)
- `start-2-1` to `start-2-6` (Module 2)
- `start-3-1` to `start-3-3` (Module 3)
- `help`, `bonus-patterns`, `bonus-secret`, `persona-builder`

---

### The Compounding Effect

Each campaign makes the next one faster:

| Campaign | Time | Improvement |
|----------|------|-------------|
| First (Module 2) | 40 hrs | Build from scratch |
| 5th campaign | 15 hrs | 62% faster |
| 10th campaign | 10 hrs | 75% faster |

**What You'll Accumulate:**
- Campaign brief templates
- Brand voice guidelines
- Content templates (blog, email, social, ads)
- Persona frameworks
- Competitive analysis templates
- SEO optimization checklists
- Custom reviewer agents
- Workflow automation patterns

---

## Learning Paths

### Path 1: Quick Start (30 min)
For experienced marketers - jump straight to production:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### Path 2: Full Training (5-6 hrs)
For beginners - complete interactive training:
```bash
/training:start-0-0  # Start here
```

### Path 3: Skill-Specific (15-30 min each)
Learn specific skills as needed:

| Goal | Commands |
|------|----------|
| **Improve conversions** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **Write better copy** | `/content:good`, `/content:editing` |
| **Launch a product** | `/growth:launch`, `/campaign:plan` |
| **Optimize pricing** | `/pricing:strategy` |
| **Scale SEO** | `/seo:programmatic`, `/seo:schema` |
| **Design referrals** | `/growth:referral` |
| **A/B testing** | `/test:ab-setup` |

### Path 4: CRO Mastery (60 min)
Complete conversion optimization training:
```bash
/training:start-3-1  # Start with fundamentals
/training:start-3-2  # Form & signup
/training:start-3-3  # Popup & onboarding
```

---

## MCP Integrations

Real data from connected services (see `data-reliability-rules.md`):

| Server | Use For |
|--------|---------|
| `sensortower` | App analytics, ASO |
| `google-search-console` | Search performance |
| `google-analytics` | Web analytics |
| `semrush` | Keywords, backlinks |
| `dataforseo` | SERP data |
| `meta-ads` | Facebook/Instagram ads |
| `hubspot` | CRM, automation |

---

## Contributing

Contributions welcome! If you have:
- Improved agents or skills
- New marketing commands
- Better workflows
- Bug fixes

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ideas for Contributions
- Industry-specific skills (B2B, e-commerce, SaaS)
- Platform-specific agents (TikTok, YouTube, Reddit)
- Regional marketing (APAC, EMEA, LATAM)
- Analytics integrations

---

## Resources

### AgentKits
- [AgentKits Homepage](https://agentkits.net)
- [Marketing Kit Page](https://www.agentkits.net/marketing)
- [Documentation](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### AI Assistants
- [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Cursor Docs](https://docs.cursor.com)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### Community
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## Star History

<a href="https://star-history.com/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## License

MIT - Use freely, modify as needed, contribute back if you can.

---

**Star this repo if it helps. Start building AI-powered marketing campaigns today.**
