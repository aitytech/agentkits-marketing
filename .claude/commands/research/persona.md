---
description: Create detailed buyer persona
version: "1.0.0"
brand: AgentKits Marketing by AityTech
argument-hint: [product-or-segment]
---

## Prerequisites

Before running this command, ensure you have:
- [ ] Product or segment defined
- [ ] Data sources identified (customer data, sales feedback, etc.)

## Context Loading

Load these files first:
1. `./README.md` - Product context
2. `./docs/personas/` - Existing personas
3. `.claude/skills/marketing-fundamentals/SKILL.md` - Persona frameworks

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of persona detail do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Core demographics and pain points
- **Recommended** - Full persona with journey
- **Complete** - Comprehensive with messaging
- **Custom** - I'll specify what I need

---

### Step 2: Ask Persona Type

**Question:** "What type of buyer are you targeting?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **B2B Decision Maker** - Executive/manager buyer
- **B2B Influencer** - Technical/user influencer
- **B2C Consumer** - Individual consumer
- **B2B2C Hybrid** - Both business and consumer

---

### Step 3: Ask Data Sources

**Question:** "What data sources can we use?"
**Header:** "Sources"
**MultiSelect:** true

**Options:**
- **Customer Data** - Existing customer interviews/surveys
- **Analytics** - Website/product usage data
- **Sales Feedback** - Sales team insights
- **Research** - Industry research and assumptions

---

### Step 4: Ask Focus Areas

**Question:** "What aspects should the persona emphasize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Pain Points** - Problems and frustrations
- **Goals** - Aspirations and objectives
- **Buying Process** - Decision journey
- **Objections** - Concerns and barriers

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Persona Configuration

| Parameter | Value |
|-----------|-------|
| Product/Segment | [description] |
| Persona Type | [selected type] |
| Data Sources | [selected sources] |
| Focus Areas | [selected focus] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this buyer persona?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create persona** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Data Collection**
   - Customer interviews
   - Survey data
   - Analytics insights
   - Sales feedback

2. **Pattern Identification**
   - Common characteristics
   - Shared challenges
   - Similar goals
   - Behavior patterns

3. **Persona Construction**
   - Demographics
   - Psychographics
   - Goals and challenges
   - Buying behavior

4. **Validation**
   - Team review
   - Customer verification
   - Refinement

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Research synthesis | `researcher` | Data gathering |
| Persona creation | `lead-qualifier` | Primary task |
| Messaging alignment | `copywriter` | Complete scope |

---

## Output Format

### Basic Scope

```markdown
## Persona: [Name]
**Role:** [Job Title]
**Company:** [Type/Size]

### Demographics
- Age: [Range]
- Location: [Type]

### Goals
1. [Primary goal]
2. [Secondary goal]

### Challenges
1. [Main pain point]
2. [Secondary pain point]

### How We Help
- [Solution to pain 1]
- [Solution to pain 2]
```

### Recommended Scope

[Include Basic + Full journey map + Objection handling + Channel preferences + Quote + Buying triggers]

### Complete Scope

[Include all + Messaging recommendations + Content mapping + Competitor comparison + Persona variations + Anti-persona]

---

## Output Location

Save persona to: `./docs/personas/[persona-name]-[YYYY-MM-DD].md`

---

## Pre-Delivery Validation

Before delivering persona:
- [ ] Based on real data (not assumptions alone)
- [ ] Goals and pain points clearly articulated
- [ ] Buying journey mapped
- [ ] Objections and triggers identified
- [ ] Messaging recommendations included (Complete)

---

## Next Steps

After persona creation, consider:
- `/content:landing` - Create persona-targeted landing page
- `/sequence:nurture` - Create persona-specific nurture
- `/sales:pitch` - Create persona-specific pitch
