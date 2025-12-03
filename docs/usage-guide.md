# AgentKits Marketing Usage Guide

Complete guide to using agentkits-marketing for production marketing workflows.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Quick Start

### Getting Started

```bash
cd /path/to/agentkits-marketing
claude
```

Start with any command:
```bash
# Plan a campaign
/campaign:plan "Q1 Product Launch"

# Generate content
/content:good "Blog post about new feature"

# Analyze competitors
/competitor:deep "competitor-url.com"

# Create SEO strategy
/seo:keywords "your topic"
```

---

## System Architecture

### Directory Structure

```
agentkits-marketing/
├── .claude/
│   ├── agents/              # 18 marketing agents
│   │   ├── reviewers/       # 6 reviewer agents
│   │   └── *.md            # Core marketing agents
│   ├── commands/            # 76 slash commands
│   │   ├── analytics/       # ROI, funnel, reporting
│   │   ├── audit/           # Full marketing audits
│   │   ├── brainstorm/      # Ideation commands
│   │   ├── brand/           # Voice, book, assets
│   │   ├── campaign/        # Plan, brief, analyze
│   │   ├── checklist/       # Operational checklists
│   │   ├── competitor/      # Deep analysis
│   │   ├── content/         # Blog, social, email, ads
│   │   ├── crm/             # Segments, scoring, lifecycle
│   │   ├── leads/           # Scoring, nurture, qualify
│   │   ├── ops/             # Daily, weekly, monthly
│   │   ├── report/          # Client reports
│   │   ├── research/        # Market, persona, trends
│   │   ├── sales/           # Pitch, outreach, battlecard
│   │   ├── seo/             # Keywords, audit, optimize
│   │   ├── sequence/        # Welcome, nurture, re-engage
│   │   ├── social/          # Engage, viral, schedule
│   │   └── use-mcp/         # MCP integrations
│   ├── skills/              # 11 marketing skills
│   └── workflows/           # Core workflows
├── docs/                    # Documentation
│   ├── brand-guidelines.md
│   ├── content-style-guide.md
│   ├── campaign-playbooks.md
│   ├── channel-strategies.md
│   ├── analytics-setup.md
│   └── usage-guide.md
└── README.md
```

---

## Agent System

### Core Marketing Agents

| Agent | Focus | Use Cases |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, lead gen | SEO, landing pages, competitor intel |
| `lead-qualifier` | Intent detection | Lead scoring, behavioral analysis |
| `email-wizard` | Email marketing | Sequences, automation, optimization |
| `sales-enabler` | Sales support | Pitches, case studies, battlecards |
| `continuity-specialist` | Retention | Churn detection, re-engagement |
| `upsell-maximizer` | Revenue expansion | Cross-sell, upsell, feature adoption |

### Supporting Agents

| Agent | Focus | Use Cases |
|-------|-------|-----------|
| `researcher` | Market intelligence | Research, competitive analysis |
| `brainstormer` | Creative ideation | Campaign concepts, messaging angles |
| `planner` | Strategic planning | Campaign plans, content calendars |
| `project-manager` | Coordination | Status tracking, campaign oversight |
| `copywriter` | Content creation | Copy, messaging, creative |
| `docs-manager` | Documentation | Brand guidelines, style guides |
| `mcp-manager` | Tool integration | MCP server orchestration |

### Reviewer Agents (Quality Assurance)

| Agent | Perspective | Reviews For |
|-------|-------------|-------------|
| `brand-voice-guardian` | Brand consistency | Voice, tone, messaging |
| `conversion-optimizer` | CRO expert | Conversion, persuasion |
| `seo-specialist` | Search optimization | Keywords, technical SEO |
| `manager-maria` | Marketing manager (B2B) | Strategy, team fit |
| `solo-steve` | Solopreneur | Time, budget, DIY |
| `startup-sam` | Startup founder | Growth, virality, speed |

---

## Skills Catalog

Activate relevant skills during tasks:

| Skill | Focus | Activates For |
|-------|-------|---------------|
| `marketing-fundamentals` | Core concepts | Funnels, psychology, frameworks |
| `seo-mastery` | Search optimization | Keywords, technical SEO |
| `social-media` | Social strategies | Platform tactics, engagement |
| `email-marketing` | Email automation | Deliverability, sequences |
| `paid-advertising` | Paid media | ROAS, budget optimization |
| `content-strategy` | Content planning | Editorial, distribution |
| `analytics-attribution` | Measurement | Attribution, reporting |
| `brand-building` | Brand strategy | Voice, positioning |
| `problem-solving` | Marketing challenges | Creative blocks, scaling |

---

## Command Categories

### Campaign Management

| Command | Purpose | Example |
|---------|---------|---------|
| `/campaign:plan` | Create campaign plan | `/campaign:plan "Q1 Launch"` |
| `/campaign:brief` | Generate creative brief | `/campaign:brief "Spring Campaign"` |
| `/campaign:analyze` | Analyze performance | `/campaign:analyze "campaign-url"` |
| `/campaign:calendar` | Content calendar | `/campaign:calendar "6 weeks"` |

### Content Creation

| Command | Purpose | Example |
|---------|---------|---------|
| `/content:blog` | SEO blog post | `/content:blog "topic" "keyword"` |
| `/content:social` | Platform-specific | `/content:social "topic" "linkedin"` |
| `/content:email` | Email copy | `/content:email "welcome" "trial"` |
| `/content:landing` | Landing page | `/content:landing "offer" "audience"` |
| `/content:ads` | Ad copy | `/content:ads "meta" "conversions"` |
| `/content:good` | High-quality copy | `/content:good "user request"` |
| `/content:fast` | Quick copy | `/content:fast "user request"` |
| `/content:enhance` | Improve copy | `/content:enhance "issues"` |
| `/content:cro` | Optimize conversion | `/content:cro "issues"` |

### SEO Optimization

| Command | Purpose | Example |
|---------|---------|---------|
| `/seo:keywords` | Keyword research | `/seo:keywords "topic"` |
| `/seo:competitor` | Competitor SEO | `/seo:competitor "url"` |
| `/seo:optimize` | Content optimization | `/seo:optimize "file" "keyword"` |
| `/seo:audit` | SEO audit | `/seo:audit "url"` |

### Social Media

| Command | Purpose | Example |
|---------|---------|---------|
| `/social:engage` | Engagement strategy | `/social:engage "linkedin"` |
| `/social:viral` | Viral content | `/social:viral "topic" "twitter"` |
| `/social:schedule` | Posting schedule | `/social:schedule "all" "month"` |

### Email & Sequences

| Command | Purpose | Example |
|---------|---------|---------|
| `/sequence:welcome` | Welcome sequence | `/sequence:welcome "brand" "audience"` |
| `/sequence:nurture` | Lead nurture | `/sequence:nurture "product" "segment"` |
| `/sequence:re-engage` | Re-engagement | `/sequence:re-engage "brand" "30-day"` |

### Analytics & Reporting

| Command | Purpose | Example |
|---------|---------|---------|
| `/analytics:roi` | ROI calculation | `/analytics:roi "campaign"` |
| `/analytics:funnel` | Funnel analysis | `/analytics:funnel "signup"` |
| `/analytics:report` | Performance report | `/analytics:report "Q1" "all"` |
| `/report:weekly` | Weekly report | `/report:weekly "client" "week"` |
| `/report:monthly` | Monthly report | `/report:monthly "client" "month"` |

### Sales & Leads

| Command | Purpose | Example |
|---------|---------|---------|
| `/sales:outreach` | Outreach sequence | `/sales:outreach "prospect" "cold"` |
| `/sales:pitch` | Sales pitch | `/sales:pitch "company" "use-case"` |
| `/sales:battlecard` | Competitive battlecard | `/sales:battlecard "competitor"` |
| `/sales:qualify` | Lead qualification | `/sales:qualify "lead-info"` |
| `/leads:score` | Lead scoring model | `/leads:score "context"` |
| `/leads:nurture` | Nurture strategy | `/leads:nurture "segment"` |
| `/leads:qualify` | Qualification criteria | `/leads:qualify "product"` |

### CRM & Lifecycle

| Command | Purpose | Example |
|---------|---------|---------|
| `/crm:sequence` | Automated sequence | `/crm:sequence "type" "segment"` |
| `/crm:segment` | Customer segment | `/crm:segment "criteria"` |
| `/crm:score` | Lead score | `/crm:score "lead-data"` |
| `/crm:lifecycle` | Lifecycle management | `/crm:lifecycle "contact" "action"` |

### Brand Management

| Command | Purpose | Example |
|---------|---------|---------|
| `/brand:voice` | Voice guidelines | `/brand:voice "context"` |
| `/brand:book` | Brand book | `/brand:book "brand-name"` |
| `/brand:assets` | Asset management | `/brand:assets "action" "type"` |

### Research & Competitive

| Command | Purpose | Example |
|---------|---------|---------|
| `/research:market` | Market research | `/research:market "industry"` |
| `/research:persona` | Buyer persona | `/research:persona "segment"` |
| `/research:trend` | Trend analysis | `/research:trend "topic"` |
| `/competitor:deep` | Deep analysis | `/competitor:deep "url"` |

### Operations & Checklists

| Command | Purpose | Example |
|---------|---------|---------|
| `/ops:daily` | Daily tasks | `/ops:daily "focus"` |
| `/ops:weekly` | Weekly review | `/ops:weekly "date"` |
| `/ops:monthly` | Monthly review | `/ops:monthly "month"` |
| `/checklist:campaign-launch` | Launch checklist | `/checklist:campaign-launch "name" "date"` |
| `/checklist:seo-weekly` | SEO checklist | `/checklist:seo-weekly "domain"` |
| `/checklist:social-daily` | Social checklist | `/checklist:social-daily "platforms"` |
| `/checklist:analytics-monthly` | Analytics review | `/checklist:analytics-monthly "month"` |
| `/checklist:ab-testing` | A/B test framework | `/checklist:ab-testing "type" "element"` |
| `/checklist:content-approval` | Approval workflow | `/checklist:content-approval "type" "approvers"` |

### Utilities

| Command | Purpose | Example |
|---------|---------|---------|
| `/brainstorm` | Ideation session | `/brainstorm "question"` |
| `/use-mcp` | MCP integration | `/use-mcp "task"` |
| `/audit:full` | Full marketing audit | `/audit:full "brand-or-website"` |

---

## Core Workflows

### Marketing Pipeline

```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Workflow File:** `.claude/workflows/primary-workflow.md`

### Sales Pipeline

```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**Workflow File:** `.claude/workflows/sales-workflow.md`

### CRM Lifecycle

```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

**Workflow File:** `.claude/workflows/crm-workflow.md`

---

## Integration Examples

### Full Campaign Workflow

```bash
# 1. Planning Phase
/campaign:plan "Q2 Product Launch"
/research:market "productivity software"
/competitor:deep "competitor.com"
/research:persona "remote team managers"

# 2. Strategy Phase
/seo:keywords "team productivity"
/campaign:calendar "6 weeks"

# 3. Content Creation
/content:blog "10 ways to improve team focus" "team productivity"
/content:email "welcome" "trial users"
/content:social "productivity tips" "linkedin"
/content:landing "free trial offer" "team managers"
/content:ads "linkedin" "awareness"

# 4. Optimization
/seo:optimize "blog-post.md" "team productivity"
/content:cro "landing page"

# 5. Sales Enablement
/sales:pitch "enterprise prospect" "team collaboration"
/sales:battlecard "competitor.com"

# 6. Execution
/sequence:welcome "product" "trial users"
/social:schedule "linkedin,twitter" "6 weeks"

# 7. Tracking
/analytics:funnel "trial signup"
/report:weekly "Q2 Launch" "Week 1"
```

### Content Sprint

```bash
# Generate week's content
/content:blog "topic 1" "keyword"
/content:social "topic 1" "linkedin"
/content:social "topic 1" "twitter"
/content:email "newsletter" "subscribers"

# Optimize
/seo:optimize "blog.md" "keyword"
/content:cro "all copy"
```

### Lead Generation Campaign

```bash
# Setup
/leads:score "business-context"
/leads:qualify "product"
/sequence:nurture "product" "mql-segment"

# Attract
/seo:keywords "topic"
/content:landing "lead-magnet" "target-audience"

# Convert
/content:email "lead-magnet-delivery" "new-leads"
/sequence:welcome "brand" "new-subscribers"
```

---

## Documentation Reference

### Core Documentation

| Document | Purpose |
|----------|---------|
| `docs/brand-guidelines.md` | Brand standards, voice, visual identity |
| `docs/content-style-guide.md` | Writing standards, formatting |
| `docs/campaign-playbooks.md` | Campaign templates, phase guides |
| `docs/channel-strategies.md` | Platform-specific tactics |
| `docs/analytics-setup.md` | Tracking, attribution, reporting |
| `docs/usage-guide.md` | This guide |

### Workflow Documentation

| Workflow | Purpose |
|----------|---------|
| `.claude/workflows/primary-workflow.md` | Marketing pipeline |
| `.claude/workflows/sales-workflow.md` | Sales process |
| `.claude/workflows/crm-workflow.md` | CRM lifecycle |
| `.claude/workflows/marketing-rules.md` | Operating rules |
| `.claude/workflows/orchestration-protocol.md` | Agent coordination |
| `.claude/workflows/documentation-management.md` | Doc management |

---

## Best Practices

### Workflow Optimization

1. **Start with planning** - Use `/campaign:plan` before creating
2. **Research first** - Use `/research:*` and `/seo:keywords` early
3. **Create systematically** - Follow content creation order
4. **Optimize before publishing** - Use `/content:cro` and `/seo:optimize`
5. **Review with agents** - Use reviewer agents for quality
6. **Measure and iterate** - Use `/analytics:*` and `/report:*`

### Agent Orchestration

**When to delegate:**
- Complex research → `researcher`
- Strategic planning → `planner`
- Content review → `copywriter` + reviewers
- Multi-channel campaigns → `project-manager`
- Brand consistency → `brand-voice-guardian`
- Conversion optimization → `conversion-optimizer`

### Building Your Library

1. **Customize templates** - Adapt for your brand
2. **Document patterns** - What works for you
3. **Create personas** - Your specific audience
4. **Build sequences** - Reusable email flows
5. **Refine voice** - Brand consistency

---

## Troubleshooting

### Command Not Found

**Issue:** Slash command doesn't work
**Solution:**
- Check spelling: `/campaign:plan` not `/campaignplan`
- Use colon separator: `/content:blog` not `/contentblog`
- See CLAUDE.md for full command list

### Agent Not Responding

**Issue:** Agent doesn't activate
**Solution:**
- Check `.claude/agents/` directory
- Verify agent file exists
- Review CLAUDE.md for agent coordination

### Skill Not Activating

**Issue:** Skill doesn't load
**Solution:**
- Check `.claude/skills/` directory
- Verify skill file exists
- Skills activate automatically based on task context

---

## Support

### Getting Help

- Use `/brainstorm` for creative challenges
- Check `docs/` for detailed documentation
- Review `README.md` for project context

### Resources

- **Main README** - `./README.md`
- **CLAUDE.md** - Agent instructions
- **Workflows** - `.claude/workflows/`
- **Documentation** - `./docs/`

---

*Last updated: December 2024*
*Version: 2.0*
