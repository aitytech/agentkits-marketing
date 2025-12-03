---
description: Manage contact lifecycle stage transitions
argument-hint: [contact-or-segment] [action]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of lifecycle management do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Stage assessment and criteria
- **Recommended** - Full analysis with actions
- **Complete** - Comprehensive with playbook
- **Custom** - I'll specify what I need

---

### Step 2: Ask Management Action

**Question:** "What lifecycle action do you need?"
**Header:** "Action"
**MultiSelect:** false

**Options:**
- **Assess** - Evaluate current stage
- **Transition** - Move to next stage
- **Playbook** - Get stage-specific tactics
- **Automate** - Set up stage triggers

---

### Step 3: Ask Current Stage

**Question:** "What's the current lifecycle stage?"
**Header:** "Stage"
**MultiSelect:** false

**Options:**
- **Subscriber/Lead** - Early stage
- **MQL** - Marketing qualified
- **SQL/Opportunity** - Sales ready
- **Customer** - Post-purchase

---

### Step 4: Ask Priority

**Question:** "What's the priority for this contact/segment?"
**Header:** "Priority"
**MultiSelect:** false

**Options:**
- **High Value** - Strategic accounts
- **Standard** - Normal priority
- **At Risk** - Churn prevention
- **Re-activation** - Win back

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Lifecycle Configuration

| Parameter | Value |
|-----------|-------|
| Contact/Segment | [description] |
| Action | [selected action] |
| Current Stage | [selected stage] |
| Priority | [selected priority] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Manage this lifecycle transition?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, proceed** - Start management
- **No, change settings** - Go back to modify

---

## Lifecycle Stages

```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

---

## Workflow

1. **Current State Assessment**
   - Stage identification
   - Time in stage
   - Score evaluation

2. **Transition Analysis**
   - Criteria for next stage
   - Gap identification
   - Readiness score

3. **Action Planning**
   - Progression tactics
   - Automation triggers
   - Content delivery

4. **Playbook Execution**
   - Stage best practices
   - Touchpoint cadence
   - Success metrics

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Stage assessment | `lead-qualifier` | Primary task |
| Progression tactics | `email-wizard` | Nurture planning |
| Playbook creation | `sales-enabler` | Complete scope |

---

## Output Format

### Basic Scope

```markdown
## Lifecycle: [Contact/Segment]

### Current State
- Stage: [Current]
- Time in stage: [Duration]
- Score: [X]/100

### Next Stage Criteria
| Requirement | Status |
|-------------|--------|
| [Criteria] | ✅/❌ |

### Readiness: [X]%
```

### Recommended Scope

[Include Basic + Gap analysis + Recommended actions + Automation triggers + Content plan]

### Complete Scope

[Include all + Full playbook + Touchpoint cadence + Success metrics + Risk assessment]

---

## Output Location

Save lifecycle to: `./docs/crm/lifecycle-[contact]-[YYYY-MM-DD].md`
