# AgentKits Marketing Plugins

Plugin-based extensions for specialized marketing workflows, inspired by the Compounding Marketing philosophy.

## Available Plugins

### 1. Content Factory (CF)
**Location:** `./content-factory/`

High-volume, high-quality content creation across multiple formats with parallel generation.

**Commands:**
- `generate` - Batch content creation (blog, email, social, video)
- `repurpose` - Transform content across formats
- `schedule` - Generate content calendars

**Templates:**
- Blog post templates
- Social media templates
- Video script templates
- Email templates

**Use Cases:**
- Product launch content blitz
- Content repurposing at scale
- Monthly content calendar automation
- Educational content series

**Integration:** Use with `/content:*` commands in main kit

---

### 2. Campaign Manager (CM)
**Location:** `./campaign-manager/`

Systematic campaign planning with compounding efficiency—each campaign makes the next easier.

**Commands:**
- `plan` - Research and create campaign briefs
- `execute` - Multi-channel content generation (Coming Soon)
- `review` - Specialized multi-agent review (Coming Soon)

**Agents (Persona Reviewers):**
- Brand Voice Guardian - Ensures brand consistency
- Conversion Optimizer - Maximizes conversion rates
- SEO Specialist - Search optimization expert
- Startup Founder - Founder perspective (28yo startup founder)
- Marketing Manager - Manager perspective (38yo team manager)
- Solopreneur - Solopreneur perspective (32yo freelancer)

**Templates:**
- Campaign brief template
- Content calendar template
- Email sequence template

**Use Cases:**
- Campaign planning and execution
- Multi-perspective content review
- Brand consistency validation
- Persona-driven content optimization

**Integration:** Extends `/campaign:*` commands with specialized reviewers

---

## How Plugins Work

### Plugin Architecture

Plugins are self-contained modules that extend the core marketing kit with:
- **Commands** - Specialized slash commands for workflows
- **Agents** - Domain-specific AI agents and reviewers
- **Templates** - Reusable content and planning templates
- **Workflows** - Documented processes and best practices

### Integration with Core Kit

Plugins integrate seamlessly with agentkits-marketing:

1. **Command Integration**
   - Plugin commands accessible via main command system
   - Example: CF `generate` → `/content:generate` command

2. **Agent Coordination**
   - Plugin agents work alongside core agents
   - Example: Persona reviewers enhance content review workflows

3. **Template Library**
   - Plugin templates merge with core templates
   - Accessible via skills and commands

4. **Workflow Enhancement**
   - Plugins extend existing workflows
   - Optional - use when needed

### Using Plugins

#### Content Factory Usage

**Generate batch content:**
```bash
# Reference CF templates in content commands
/content:good "Product launch blog posts"
# Then specify: Use Content Factory blog template

# Or use CF directly via plugin commands
# See plugins/content-factory/commands/ for details
```

**Repurpose existing content:**
```bash
# Future integration with /content:repurpose command
# Convert blog → social, email, video scripts
```

**Create content calendar:**
```bash
# Future integration with /content:schedule command
# Generate and organize monthly content plans
```

#### Campaign Manager Usage

**Plan campaign with CM framework:**
```bash
/campaign:plan "Q2 Product Launch"
# Uses CM templates and research frameworks
```

**Review with persona agents:**
```bash
# After creating content, get multi-perspective feedback
# Future: /campaign:review command will launch all persona reviewers
# Current: Agents available in .claude/agents/reviewers/
```

**Execute campaign:**
```bash
# Future: /campaign:execute command
# Multi-agent parallel content generation
```

## Plugin Development

### Creating New Plugins

Structure for new plugins:
```
plugins/
└── your-plugin/
    ├── README.md              # Plugin documentation
    ├── commands/              # Slash commands
    │   └── command-name.md
    ├── agents/                # Specialized agents
    │   └── agent-name.md
    ├── templates/             # Content templates
    │   └── template-name.md
    └── workflows/             # Process documentation
        └── workflow-name.md
```

### Plugin Guidelines

1. **Self-Contained** - Each plugin is independent
2. **Well-Documented** - Clear README and command docs
3. **Integration Points** - Document how to use with core kit
4. **Naming Conventions** - Follow kebab-case, descriptive names
5. **Compounding Philosophy** - Build reusable assets

## The Compounding Effect

### How Plugins Compound Efficiency

**Campaign 1 (40 hours)**
- Use plugins to create foundation
- Document patterns and learnings
- Build template library

**Campaign 5 (15 hours - 62% faster)**
- Leverage accumulated templates
- Automated multi-agent workflows
- Pattern recognition from past work

**Campaign 10 (10 hours - 75% faster)**
- Fully systematized workflows
- Rich template library
- Focus on strategy, not execution

### Building Your Plugin Library

As you use plugins:
1. **Customize Templates** - Adapt to your brand
2. **Create Patterns** - Document what works
3. **Extend Agents** - Add domain-specific reviewers
4. **Share Knowledge** - Contribute back to community

## Advanced Usage

### Combining Plugins

Use multiple plugins together for maximum efficiency:

**Product Launch Workflow:**
1. Plan with CM: `/campaign:plan "Product Launch"`
2. Generate with CF: Use CF templates for batch content
3. Review with CM: Persona reviewers validate messaging
4. Optimize with core: `/seo:optimize`, `/content:cro`
5. Track with core: `/analytics:funnel`, `/analytics:roi`

### Plugin + Core Workflows

**Content Marketing Stack:**
- Plan: `/campaign:plan` (CM)
- Research: `/seo:keywords`, `/competitor:deep` (Core)
- Generate: CF templates (Plugin)
- Optimize: `/content:cro` (Core)
- Review: CM persona reviewers (Plugin)
- Schedule: `/social:schedule` (Core)
- Report: `/report:weekly` (Core)

## Community Plugins

Want to contribute a plugin? See main CONTRIBUTING.md

**Plugin Ideas:**
- Analytics Dashboard Generator
- A/B Test Manager
- Social Media Scheduler
- Email Sequence Optimizer
- Landing Page Builder
- Competitor Intelligence Tracker

## Support

- **Documentation:** See individual plugin README files
- **Issues:** Main repository issue tracker
- **Discussions:** GitHub Discussions for ideas and Q&A

## License

MIT License - Same as agentkits-marketing core

---

**Start compounding today.** Each plugin makes your marketing more efficient. 🚀
