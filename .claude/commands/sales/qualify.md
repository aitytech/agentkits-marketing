---
description: Qualify a lead using BANT/MEDDIC frameworks
argument-hint: [lead-info-or-company]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of qualification analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick score and recommendation
- **Recommended** - Full scorecard with talking points
- **Complete** - Comprehensive with case studies
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Framework

**Question:** "Which qualification framework should we use?"
**Header:** "Framework"
**MultiSelect:** false

**Options:**
- **BANT** - Budget, Authority, Need, Timeline (SMB)
- **MEDDIC** - Enterprise qualification framework
- **CHAMP** - Challenges, Authority, Money, Priority
- **Auto-Select** - Choose based on company size

---

### Step 3: Ask Deal Size

**Question:** "What's the expected deal size?"
**Header:** "Deal"
**MultiSelect:** false

**Options:**
- **SMB (<$10K)** - Small business deal
- **Mid-Market ($10-50K)** - Growing company
- **Enterprise ($50-250K)** - Large organization
- **Strategic (>$250K)** - Major account

---

### Step 4: Ask Information Available

**Question:** "What information do you have about the lead?"
**Header:** "Info"
**MultiSelect:** true

**Options:**
- **Company Details** - Name, size, industry
- **Contact Info** - Person, title, role
- **Engagement History** - Website, emails, demos
- **Conversation Notes** - Call/meeting notes

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Lead Qualification Configuration

| Parameter | Value |
|-----------|-------|
| Lead | [lead info] |
| Framework | [selected framework] |
| Deal Size | [selected size] |
| Available Info | [selected info] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Qualify this lead?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, qualify lead** - Start analysis
- **No, change settings** - Go back to modify

---

## Qualification Frameworks

### BANT (0-100) - SMB/Mid-Market
| Criteria | Weight | Description |
|----------|--------|-------------|
| Budget | 25 | Can they afford it? |
| Authority | 25 | Is this the decision maker? |
| Need | 25 | Do they have the problem? |
| Timeline | 25 | When do they need solution? |

### MEDDIC (0-100) - Enterprise
| Criteria | Weight | Description |
|----------|--------|-------------|
| Metrics | 17 | Quantifiable goals |
| Economic Buyer | 17 | Budget authority |
| Decision Criteria | 17 | Evaluation criteria |
| Decision Process | 17 | How they buy |
| Identify Pain | 16 | Core problems |
| Champion | 16 | Internal advocate |

---

## Workflow

1. **Company Research**
   - Company size, industry, location
   - Recent news and funding
   - Tech stack
   - Decision makers

2. **Framework Application**
   - Score each criteria
   - Document evidence
   - Identify gaps

3. **Temperature Assignment**
   - 70-100: 🔥 Hot (<5 min SLA)
   - 50-69: 🌡️ Warm (<1 hr SLA)
   - 30-49: ❄️ Cool (<24 hr SLA)
   - 0-29: 🧊 Cold (Nurture only)

4. **Action Recommendation**
   - Next best action
   - Talking points
   - Relevant case studies

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Company research | `researcher` | Data gathering |
| Lead scoring | `lead-qualifier` | Primary task |
| Case study matching | `sales-enabler` | Social proof |

---

## Output Format

### Basic Scope

```markdown
## Lead Qualification: [Company]

### Score: [X]/100
### Temperature: [🔥/🌡️/❄️/🧊]
### Framework: [BANT/MEDDIC]

### Quick Scorecard
| Criteria | Score | Evidence |
|----------|-------|----------|
| [Criteria] | X/25 | [Notes] |

### Recommended Action
[Next step with urgency]
```

### Recommended Scope

[Include Basic + Full scorecard + Talking points + Relevant case studies + Objection preparation]

### Complete Scope

[Include all + Competitive positioning + Champion development + Deal strategy + Risk assessment + Timeline forecast]

---

## Output Location

Save qualification to: `./docs/sales/qualify-[company]-[YYYY-MM-DD].md`
