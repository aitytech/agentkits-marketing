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
