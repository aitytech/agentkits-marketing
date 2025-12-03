---
description: Generate creative brief for campaign execution
argument-hint: [campaign-name] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `content-strategy`, `brand-building` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of creative brief do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - Essential brief for simple campaigns
- **Standard** - Comprehensive brief (Recommended)
- **Complete** - Full brief with all specifications
- **Custom** - I'll specify what I need

---

### Step 2: Ask Campaign Type

**Question:** "What type of campaign is this?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Launch** - Product or feature launch
- **Awareness** - Brand awareness campaign
- **Demand Gen** - Lead generation campaign
- **Retention** - Customer retention/engagement

---

### Step 3: Ask Deliverables

**Question:** "What deliverables are needed?"
**Header:** "Assets"
**MultiSelect:** true

**Options:**
- **Digital** - Web, email, social assets
- **Content** - Blog, video, podcast
- **Advertising** - Paid ads, display, PPC
- **Sales** - Collateral, presentations

---

### Step 4: Ask Timeline

**Question:** "What's the campaign timeline?"
**Header:** "Timeline"
**MultiSelect:** false

**Options:**
- **Sprint** - 1-2 weeks
- **Standard** - 1 month
- **Quarter** - 3 months
- **Long-term** - 6+ months

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Creative Brief Configuration

| Parameter | Value |
|-----------|-------|
| Campaign | [description] |
| Type | [selected type] |
| Deliverables | [selected assets] |
| Timeline | [selected timeline] |
| Scope | [Quick/Standard/Complete] |
```

**Question:** "Create this creative brief?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create brief** - Start generation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Extract Campaign Context**
   - Review campaign objectives
   - Understand target outcomes
   - Identify constraints and requirements

2. **Define Audience**
   - Detail target persona(s)
   - Document pain points and motivations
   - Specify audience segments

3. **Messaging Framework**
   - Define key messages and USPs
   - Create message hierarchy
   - Develop supporting proof points

4. **Deliverables Specification**
   - List all required assets
   - Define formats and specifications
   - Set quality standards

5. **Brand Compliance**
   - Reference brand guidelines
   - Specify voice and tone requirements
   - Define visual requirements

6. **Success Criteria**
   - Define acceptance criteria
   - Set performance benchmarks
   - Establish review process

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Messaging strategy | `copywriter` | Key messages |
| Campaign structure | `planner` | Timeline planning |
| Audience insights | `researcher` | Persona development |
| Brand alignment | `brand-voice-guardian` | Voice/tone review |

---

## Output Format

### Quick Scope

```markdown
## Creative Brief: [Campaign Name]

### Objective
[One-line campaign goal]

### Target Audience
[Primary persona description]

### Key Message
[Core message]

### Deliverables
[List of assets needed]
```

### Standard Scope

[Include Quick + Detailed audience + Messaging framework + Channel strategy + Timeline + Success metrics]

### Complete Scope

[Include all + Competitor context + Brand guidelines reference + Detailed specs + Review process + Approval workflow]

---

## Brief Template

```markdown
# Creative Brief: [Campaign Name]
**Date:** [Date]
**Owner:** [Team/Person]

## 1. Campaign Overview
- **Objective:** [What we want to achieve]
- **Success Metrics:** [How we measure success]
- **Timeline:** [Start - End dates]

## 2. Target Audience
- **Primary Persona:** [Name, role, pain points]
- **Secondary Persona:** [If applicable]
- **Audience Size:** [Estimated reach]

## 3. Messaging
- **Key Message:** [Core value proposition]
- **Supporting Points:** [3-5 proof points]
- **Tone:** [Voice characteristics]

## 4. Deliverables
| Asset | Format | Specs | Owner | Deadline |
|-------|--------|-------|-------|----------|

## 5. Brand Guidelines
- **Colors:** [Brand colors]
- **Fonts:** [Typography]
- **Logo Usage:** [Guidelines]

## 6. Approval Process
- [ ] Draft review
- [ ] Stakeholder approval
- [ ] Final sign-off
```

---

## Output Location

Save brief to: `./docs/campaign/brief-[campaign-name]-[YYYY-MM-DD].md`
