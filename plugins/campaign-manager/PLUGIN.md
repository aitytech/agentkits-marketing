# CM Plugin

> Where each campaign makes the next one easier through accumulated templates, patterns, and automated workflows.

## Overview

The CM Plugin brings systematic, efficient marketing workflows to Claude Code. Inspired by the Compounding Engineering Philosophy, this plugin helps marketers plan, execute, and review campaigns with increasing efficiency over time.

**Core Philosophy:** Each campaign you run documents patterns, creates templates, and builds knowledge that makes future campaigns faster and better.

## What This Plugin Provides

### Commands (Workflow Automation)

- **`/cm:plan`** - Research, analyze, and create comprehensive campaign briefs
- **`/cm:execute`** - Generate multi-channel content with parallel subagents (Coming Soon)
- **`/cm:review`** - Launch 12+ specialized reviewers for comprehensive feedback (Coming Soon)

### Subagents (Specialized Reviewers)

**Quality & Brand:**
- `@brand-voice-guardian` - Ensures brand consistency
- `@copywriter-specialist` - Reviews copy quality and effectiveness (Coming Soon)

**Conversion & Performance:**
- `@conversion-optimizer` - Maximizes conversion rates
- `@email-specialist` - Email-specific optimization (Coming Soon)
- `@social-media-expert` - Platform-specific social review (Coming Soon)

**SEO & Content:**
- `@seo-specialist` - Search optimization expert
- `@content-strategist` - Content planning and strategy review (Coming Soon)

**Persona Validation:**
- `@startup-sam-reviewer` - Founder perspective (28-year-old startup founder)
- `@manager-maria-reviewer` - Manager perspective (38-year-old team manager)
- `@solo-steve-reviewer` - Solopreneur perspective (32-year-old freelancer)

**Analytics & Strategy:**
- `@analytics-expert` - Data analysis and insights (Coming Soon)
- `@competitive-analyst` - Competitive positioning (Coming Soon)

### Skills (Auto-Invoked Expertise)

- **Marketing Research Skill** - Automatically provides research frameworks when analyzing competitors or markets (Coming Soon)
- **Campaign Planning Skill** - Auto-invokes campaign brief templates and best practices (Coming Soon)
- **Content Generation Skill** - Provides copywriting frameworks and format templates (Coming Soon)
- **Brand Guidelines Skill** - Automatically validates brand voice consistency (Coming Soon)

### Templates (Reusable Assets)

- Campaign brief template
- Content calendar template
- Email sequence template
- Landing page template
- Social media plan template
- Competitive analysis template
- Blog post outline template

### Hooks (Workflow Automation)

- Brand voice validation (pre-save)
- SEO checklist enforcement (pre-save)
- Multi-agent review trigger (post-create)

## Installation

### Prerequisites

- Claude Code installed (2025 native installer)
- Basic understanding of Claude Code marketplace system
- Completed "Claude Code for Marketers" course (recommended)

### Install from Marketplace

```bash
# Add the marketplace (when published)
/plugin marketplace add agentkits/cc4.marketing

# Install the plugin
/plugin install cm@cc4.marketing

# Verify installation
/help
```

### Manual Installation (Development)

```bash
# Clone or link the plugin directory
ln -s /path/to/cm-plugin ~/.claude/plugins/cm

# Restart Claude Code
```

## Quick Start

### 1. Plan Your Campaign

```bash
/cm:plan "Q2 Product Launch" --budget 50000 --duration "6 weeks"
```

This will:
- Research similar past campaigns in your project
- Analyze target audience and competitors
- Generate comprehensive campaign brief
- Create todo checklist for execution
- Save structured plan to campaigns/ folder

### 2. Execute Content Creation (Coming Soon)

```bash
/cm:execute campaigns/q2-product-launch/brief.md
```

This will:
- Read the campaign plan
- Launch parallel subagents for each content type
- Generate email sequences, social posts, ad copy, blog content
- Validate against brand guidelines using Skills
- Organize all assets with proper naming conventions

### 3. Review Everything (Coming Soon)

```bash
/cm:review campaigns/q2-product-launch/
```

This will:
- Launch 12+ specialized reviewer subagents in parallel
- Each provides perspective-specific feedback
- Aggregates feedback into prioritized action items
- Generates comprehensive review report with scores

## The Compounding Effect

### Campaign 1 (40 hours)
- Start from scratch
- Create initial templates
- Document what works
- Build foundation

### Campaign 5 (15 hours - 62% faster)
- Leverage accumulated templates
- Skills auto-invoke best practices
- Automated multi-agent reviews
- Pattern recognition from past campaigns

### Campaign 10 (10 hours - 75% faster)
- Fully systematized workflows
- Rich template library
- Intelligent Skills with deep context
- Focus on strategy, not execution

## Features

### ✅ Currently Available (MVP)

- `/cm:plan` command
- 6 specialized subagent reviewers
- Basic template library
- Campaign brief automation
- Research framework integration

### 🚧 Coming Soon

- `/cm:execute` command
- `/cm:review` command
- 6 additional specialized subagents (12 total)
- 4 auto-invoked Skills
- 3 workflow hooks
- Expanded template library
- Pattern recognition system

## Use Cases

### For Content Marketers
- Plan content calendars systematically
- Generate multi-format content from one brief
- Ensure brand voice consistency
- Optimize for SEO automatically

### For Growth Marketers
- Create data-driven campaign briefs
- A/B test copy variations
- Track campaign performance
- Analyze competitor strategies

### For Marketing Managers
- Standardize team workflows
- Ensure quality with automated reviews
- Onboard team members faster
- Scale operations efficiently

### For Solo Marketers
- Do the work of a full team
- Maintain consistency across channels
- Build knowledge base over time
- Compound efficiency with every campaign

## Configuration

### Team Setup

Configure the plugin at repository level for consistent tooling:

**`.claude/config.json`:**
```json
{
  "plugins": {
    "cm": {
      "enabled": true,
      "brand_guidelines": "brand/guidelines.md",
      "template_library": "templates/",
      "auto_review": true,
      "reviewers": [
        "brand-voice-guardian",
        "seo-specialist",
        "conversion-optimizer"
      ]
    }
  }
}
```

### Project Memory (CLAUDE.md)

The plugin works best with a comprehensive CLAUDE.md file:

```markdown
# Marketing Project Memory

## Brand Voice
[Your brand voice guidelines]

## Target Personas
[Detailed persona profiles]

## Past Campaign Insights
[What worked, what didn't]

## Template Library Location
templates/
```

## Documentation

- **User Guide**: See course Module 3 (Coming Soon)
- **API Reference**: See `docs/api.md` (Coming Soon)
- **Examples**: See `examples/` directory
- **Contributing**: See `CONTRIBUTING.md`

## Support & Community

- **Course**: Claude Code for Marketers (cc4mkt)
- **Issues**: Submit via GitHub Issues
- **Discussions**: GitHub Discussions
- **Updates**: Watch repository for releases

## Roadmap

### v0.1 (MVP - Current)
- ✅ Basic plugin structure
- ✅ `/plan` command
- ✅ 6 subagent reviewers
- ✅ Template library foundation

### v0.2 (Planned)
- `/execute` command
- `/review` command
- Parallel content generation
- Multi-agent review aggregation

### v0.3 (Planned)
- 4 auto-invoked Skills
- 3 workflow hooks
- Pattern recognition system
- Enhanced template library

### v1.0 (Goal)
- Complete 3-stage workflow
- 12+ specialized subagents
- Intelligent Skills with learning
- Full automation capabilities
- Community template marketplace

## License

MIT License - See LICENSE file

## Credits

- **Inspired by**: EveryInc/every-marketplace - Compounding Engineering Philosophy
- **Created for**: Claude Code for Marketers course
- **Maintained by**: agentkits team

## Version

**Current**: v0.1.0 (MVP)
**Released**: 2025-01-14
**Compatibility**: Claude Code 2025+

---

**Start compounding today.** Each campaign makes the next one easier. 🚀
