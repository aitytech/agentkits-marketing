---
description: Design lead scoring model
argument-hint: [business-context]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Data Sources
- `hubspot` MCP for actual lead data and scoring
- **Design models** without fabricating conversion rates
- **If no CRM data**: Create framework, note "Calibrate with actual conversion data"

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of scoring model do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Simple scoring framework
- **Recommended** - Full model with thresholds
- **Complete** - Comprehensive with automation
- **Custom** - I'll specify parameters

---

### Step 2: Ask Scoring Focus

**Question:** "Which scoring factors are most important?"
**Header:** "Focus"
**MultiSelect:** false

**Options:**
- **Behavioral** - Actions and engagement
- **Demographic** - Fit-based scoring
- **Balanced** - Both equally weighted
- **Intent** - Purchase intent signals

---

### Step 3: Ask Signal Categories

**Question:** "Which signal categories to include?"
**Header:** "Signals"
**MultiSelect:** true

**Options:**
- **Website** - Page visits, time on site
- **Email** - Opens, clicks, replies
- **Content** - Downloads, form fills
- **Product** - Trial, usage, features

---

### Step 4: Ask Integration

**Question:** "Where will this scoring model be implemented?"
**Header:** "Platform"
**MultiSelect:** false

**Options:**
- **HubSpot** - HubSpot CRM/Marketing
- **Salesforce** - Salesforce + Pardot/Marketing Cloud
- **Other CRM** - Different platform
- **Manual** - Spreadsheet-based

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Lead Scoring Configuration

| Parameter | Value |
|-----------|-------|
| Business Context | [description] |
| Scoring Focus | [selected focus] |
| Signal Categories | [selected signals] |
| Platform | [selected platform] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Design this scoring model?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, design model** - Start design
- **No, change settings** - Go back to modify

---

## Workflow

1. **Identify Scoring Signals**
   - Website behavior signals
   - Email engagement signals
   - Content consumption patterns
   - Direct interactions

2. **Weight Behavioral Factors**
   - Page visits (which, frequency)
   - Content downloads
   - Form submissions
   - Trial/demo activity

3. **Weight Demographic Factors**
   - Job title/role
   - Company size
   - Industry fit
   - Tech stack fit

4. **Define Thresholds**
   - Cold (0-20)
   - Warm (21-50)
   - MQL (51-75)
   - SQL (76-100)

5. **Map Scores to Actions**
   - Nurture triggers
   - Outreach triggers
   - Sales alerts
   - Re-engagement

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Model design | `lead-qualifier` | Primary task |
| Behavioral analysis | `continuity-specialist` | Engagement patterns |
| Implementation spec | `docs-manager` | Complete scope |

---

## Output Format

### Basic Scope

```markdown
## Lead Scoring Model: [Context]

### Scoring Signals
| Signal | Category | Points | Trigger |
|--------|----------|--------|---------|
| Pricing page visit | Behavioral | +15 | Intent |
| Demo request | Behavioral | +30 | High intent |
| Director+ title | Demographic | +10 | Authority |

### Thresholds
- MQL: 50+ points
- SQL: 75+ points

### Decay Rules
- [Decay rule]
```

### Recommended Scope

[Include Basic + Full signal inventory + Negative scoring + Stage definitions + Automation triggers + Testing framework]

### Complete Scope

[Include all + Platform implementation + Score alerts + Re-engagement triggers + Reporting dashboard + Calibration process]

---

## Output Location

Save scoring model to: `./docs/leads/score-[context]-[YYYY-MM-DD].md`
