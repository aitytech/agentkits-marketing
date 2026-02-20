# Orchestration Protocol

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## Sequential Chaining (Marketing)

Chain agents when tasks have dependencies or require outputs from previous steps:

### Research → Insights → Creative
- Market understanding phase
- Each agent completes fully before the next begins
- Pass context and outputs between agents

### Plan → Create → Edit
- Content production phase
- Planning informs creation, editing refines output
- Maintain consistent messaging throughout

### Publish → Measure → Optimize
- Performance loop phase
- Publishing triggers measurement
- Insights feed optimization cycle

---

## Parallel Execution (Marketing)

Spawn multiple agents simultaneously for independent tasks:

### Multi-channel Content
- Same message, platform-adapted
- Blog + Social + Email created in parallel
- Ensure consistent messaging across variants

### A/B Variants
- Test versions created simultaneously
- Headlines, CTAs, or full content variations
- Plan testing strategy before creation

### Campaign Assets
- Copy + visuals + emails in parallel
- Coordinate handoffs between creative types
- Ensure brand consistency across assets

### Research Sprints
- Multiple researchers on different topics
- Competitor analysis + market research + audience research
- Synthesize findings before planning

---

## Agent Handoffs

| From | To | Trigger |
|------|-----|---------|
| researcher | attraction-specialist | SEO insights needed |
| researcher | planner | Research complete, planning begins |
| attraction-specialist | copywriter | Content creation phase |
| copywriter | email-wizard | Email sequences needed |
| copywriter | sales-enabler | Sales collateral needed |
| lead-qualifier | sales-enabler | MQL to SQL handoff |
| lead-qualifier | email-wizard | Segment-specific campaigns |
| continuity-specialist | upsell-maximizer | Expansion opportunity identified |
| upsell-maximizer | sales-enabler | Upsell collateral needed |

---

## Funnel Stage Routing

### TOFU (Top of Funnel) - Awareness
**Primary:** `attraction-specialist`
**Supporting:** `researcher`, `copywriter`
**Focus:** SEO content, thought leadership, social media

### MOFU (Middle of Funnel) - Consideration
**Primary:** `lead-qualifier`, `email-wizard`
**Supporting:** `copywriter`, `ui-ux-designer`
**Focus:** Lead magnets, email nurtures, webinars

### BOFU (Bottom of Funnel) - Decision
**Primary:** `sales-enabler`
**Supporting:** `copywriter`, `lead-qualifier`
**Focus:** Case studies, demos, proposals

### Post-Purchase
**Primary:** `continuity-specialist`, `upsell-maximizer`
**Supporting:** `email-wizard`, `sales-enabler`
**Focus:** Onboarding, retention, expansion

---

## Campaign Type Protocols

### Product Launch
1. `researcher` → Market analysis
2. `planner` → Launch plan
3. `attraction-specialist` → Landing pages, SEO
4. `copywriter` → Announcement content
5. `email-wizard` → Launch sequences
6. `sales-enabler` → Sales materials
7. Parallel: Social + PR + Ads

### Lead Generation
1. `researcher` → Audience research
2. `attraction-specialist` → SEO strategy, landing pages
3. `copywriter` → Lead magnet content
4. `email-wizard` → Nurture sequences
5. `lead-qualifier` → Scoring and routing

### Retention Campaign
1. `continuity-specialist` → Churn analysis
2. `planner` → Retention strategy
3. `email-wizard` → Re-engagement sequences
4. `upsell-maximizer` → Expansion opportunities

---

## Quality Gates

### Before Publishing
- [ ] Brand voice consistency check
- [ ] Readability score meets standards
- [ ] CTAs are clear and action-oriented
- [ ] Legal/compliance review (if required)
- [ ] UTM parameters configured

### Before Handoff
- [ ] Context documented
- [ ] Assets organized
- [ ] Dependencies identified
- [ ] Success criteria defined

---

## Skill Selection Protocol

### Overview

Skills are specialized knowledge modules that agents load for specific tasks. Use the skills registry for intelligent selection.

### Skill Selection Algorithm

1. **Parse User Intent**
   - Extract keywords from request
   - Identify domain (CRO, SEO, content, etc.)
   - Determine primary goal

2. **Query Skills Registry**
   - Read `.claude/skills/skills-registry.json`
   - Match against skill triggers
   - Score relevance (0-1)

3. **Load Prerequisites**
   - Check `dependencyGraph` for requirements
   - Load foundation skills first
   - Maintain depth-first order

4. **Limit Context**
   - Maximum 5 skills per request
   - Prioritize: Direct match > Prerequisites > Related
   - Avoid context overload

5. **Activate Skills**
   - Read SKILL.md files for selected skills
   - Load references on-demand
   - Apply skill instructions

### Skill Categories

| Category | Skills | Primary Use |
|----------|--------|-------------|
| core | marketing-fundamentals, marketing-psychology, marketing-ideas, seo-mastery, social-media, email-marketing, paid-advertising, content-strategy, analytics-attribution, brand-building, problem-solving | Foundation knowledge |
| cro | page-cro, form-cro, popup-cro, signup-flow-cro, onboarding-cro, paywall-upgrade-cro, ab-test-setup | Conversion optimization |
| content | copywriting, copy-editing, email-sequence | Content creation |
| seo-growth | programmatic-seo, schema-markup, competitor-alternatives, launch-strategy, pricing-strategy, referral-program, free-tool-strategy | Growth strategies |
| document | docx, pdf, pptx, xlsx | Document creation |

### Skill-to-Agent Mapping

| Agent | Primary Skills |
|-------|---------------|
| conversion-optimizer | page-cro, form-cro, popup-cro, signup-flow-cro, onboarding-cro, paywall-upgrade-cro, ab-test-setup |
| attraction-specialist | seo-mastery, programmatic-seo, schema-markup, content-strategy, paid-advertising, competitor-alternatives |
| copywriter | copywriting, copy-editing, email-sequence |
| email-wizard | email-marketing, email-sequence |
| seo-specialist | seo-mastery, programmatic-seo, schema-markup |
| brand-voice-guardian | brand-building, copywriting, copy-editing |
| brainstormer | marketing-ideas, marketing-psychology, problem-solving |

### MCP Integration Resolution

Before executing skills that require data:

1. Check `mcp-mapping-matrix.yaml` for skill-MCP mappings
2. Verify MCP server availability
3. If unavailable, request manual data input
4. Never fabricate metrics

### Skill Loading Examples

**Example 1: CRO Request**
```
User: "Optimize our signup form"
→ Match: signup-flow-cro (0.9)
→ Prerequisites: form-cro → page-cro
→ Load order: page-cro, form-cro, signup-flow-cro
```

**Example 2: Content Request**
```
User: "Write landing page copy"
→ Match: copywriting (0.9), page-cro (0.6)
→ Prerequisites: none
→ Load order: copywriting, page-cro
```

**Example 3: Launch Request**
```
User: "Plan Product Hunt launch"
→ Match: launch-strategy (0.95)
→ Prerequisites: content-strategy, social-media
→ Load order: content-strategy, social-media, launch-strategy
```

### Reference Data Access

Skills can reference common data files:

- `.claude/skills/common/data/benchmark-metrics.yaml` - Industry benchmarks
- `.claude/skills/common/data/conversion-formulas.yaml` - Metric calculations
- `.claude/skills/common/data/mcp-mapping-matrix.yaml` - Data source mappings
- `.claude/skills/common/templates/` - Copy templates and formulas

### Output Standardization

Use output schemas from `.claude/skills/schemas/output-schemas.yaml`:

- `cro-analysis` - CRO recommendations
- `content-plan` - Content strategy
- `campaign-brief` - Campaign planning
- `seo-audit` - SEO analysis
- `email-sequence` - Email design
- `ab-test-plan` - Test design

---

## Skill Commands

### /skills:select [task]
Intelligently select optimal skills for a task.

### Usage
When task complexity warrants multiple skills:
1. Invoke skill selector
2. Review recommended skills
3. Confirm or adjust selection
4. Execute with selected skills
