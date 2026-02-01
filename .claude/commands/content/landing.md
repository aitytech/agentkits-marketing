---
description: Create high-converting landing page copy
version: "1.0.0"
brand: AgentKits Marketing by AityTech
argument-hint: [offer] [audience]
---

## Prerequisites

Before running this command, ensure:
- [ ] Offer/product clearly defined
- [ ] Target audience identified
- [ ] Conversion goal specified (signup, demo, purchase)

---

## Context Loading (Execute First)

Load context in this order:
1. **Project**: Read `./README.md` for product and positioning
2. **Brand**: Read `./docs/brand-guidelines.md` for voice
3. **Copywriting**: Load `.claude/skills/copywriting/SKILL.md`
4. **Psychology**: Load `.claude/skills/marketing-psychology/SKILL.md`
5. **CRO Skill**: Load `.claude/skills/page-cro/SKILL.md`
6. **Templates**: Check `.claude/skills/common/templates/headline-formulas.md`

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `copywriting`, `marketing-psychology`, `page-cro` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of landing page copy do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Hero + key sections copy
- **Recommended** - Full page with variations
- **Complete** - Full page + wireframe + A/B variants
- **Custom** - I'll select specific sections

---

### Step 2: Ask Page Type

**Question:** "What type of landing page?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Lead Gen** - Email capture, lead magnet
- **Sales Page** - Product or service sale
- **Demo/Trial** - Software demo, free trial
- **Event/Webinar** - Registration page

---

### Step 3: Ask Target Audience

**Question:** "Who is the target audience?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **B2B Decision Makers** - Executives, managers
- **B2B Technical** - Developers, IT professionals
- **B2C Consumers** - General consumers
- **Mixed/Broad** - Multiple segments

---

### Step 4: Ask Page Sections

**Question:** "Which sections do you need?"
**Header:** "Sections"
**MultiSelect:** true

**Options:**
- **Hero & Value Prop** - Headline, subheadline, CTA
- **Features/Benefits** - What you offer, why it matters
- **Social Proof** - Testimonials, logos, stats
- **FAQ & Objections** - Address concerns, close gaps

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Landing Page Configuration

| Parameter | Value |
|-----------|-------|
| Offer | [offer description] |
| Type | [selected type] |
| Audience | [selected audience] |
| Sections | [selected sections] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create landing page copy?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create copy** - Start landing page creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Audience Analysis**
   - Pain points
   - Desired outcomes
   - Objections
   - Decision criteria

2. **Value Proposition**
   - Core benefit
   - Unique differentiator
   - Proof points
   - Risk reversal

3. **Copy Structure**
   - Hero section
   - Problem agitation
   - Solution presentation
   - Social proof
   - FAQ/objections
   - Final CTA

4. **Conversion Optimization**
   - Clear CTA hierarchy
   - Trust signals
   - Urgency elements
   - Form optimization

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Landing page copy | `copywriter` | Primary creation |
| CRO optimization | `conversion-optimizer` | Conversion review |
| SEO elements | `attraction-specialist` | Organic visibility |

---

## Output Format

### Basic Scope

```markdown
## Hero Section
**Headline:** [Big promise/benefit]
**Subheadline:** [How you deliver]
**CTA:** [Primary action]
**Social proof:** [Quick credibility]

## Problem Section
[Agitate the pain point]

## Solution Section
[Present your solution]

## Social Proof
- [Testimonial 1]
- [Stats/logos]

## Final CTA
[Urgency + clear action]
```

### Recommended Scope

[Include Basic + Feature sections + FAQ + Multiple CTA variations]

### Complete Scope

[Include all + Wireframe structure + A/B headline variants + SEO meta tags]

---

## Output Location

Save landing page to: `./docs/content/landing/[offer]-[audience]-[YYYY-MM-DD].md`

---

## Pre-Delivery Validation

Before delivering landing page copy:

- [ ] **Value Prop Clear**: 5-second test passes
- [ ] **Headline Compelling**: Specific benefit + credibility
- [ ] **CTA Strong**: Action verb + value statement
- [ ] **Objections Addressed**: Key concerns handled
- [ ] **Social Proof**: Testimonials or logos included
- [ ] **Mobile Considered**: Copy works on small screens
- [ ] **Brand Voice**: Matches guidelines
- [ ] **Variations Provided**: 2-3 headline options

---

## Next Steps After Delivery

1. **Review**: Stakeholder feedback on copy
2. **Design**: Hand to designer with copy structure
3. **Build**: Implement in landing page tool
4. **CRO Check**: Run `/cro:page` for optimization
5. **Launch**: Go live with tracking in place
6. **Test**: Run `/test:ab-setup` for A/B variants
