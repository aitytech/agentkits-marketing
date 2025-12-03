---
description: Daily marketing tasks checklist and review
argument-hint: [focus-area] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `social-media`, `sales-workflow.md`, `crm-workflow.md` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_DAY=$(date +"%A, %B %d, %Y")
YESTERDAY=$(date -v-1d +%Y-%m-%d 2>/dev/null || date -d "-1 day" +%Y-%m-%d)
TOMORROW=$(date -v+1d +%Y-%m-%d 2>/dev/null || date -d "+1 day" +%Y-%m-%d)

echo "Today: $CURRENT_DAY"
```

---

### Step 1: Ask Output Scope

**Question:** "What level of daily review do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - Brief priority check
- **Standard** - Full daily review (Recommended)
- **Complete** - Comprehensive with all metrics
- **Custom** - I'll select specific sections

---

### Step 2: Ask Review Type

**Question:** "What type of review is this?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Morning Kickoff** - Start day with priorities and hot leads
- **Midday Check** - Quick status update and adjustments
- **End of Day** - Wrap-up and tomorrow prep
- **Full Day** - Complete daily overview

---

### Step 3: Ask Date (DYNAMIC - use Step 0 values)

**Question:** "Which day are you reviewing?"
**Header:** "Date"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Today ([CURRENT_DAY])** - Current day review
- **Yesterday ([YESTERDAY])** - Previous day recap
- **Tomorrow ([TOMORROW])** - Advance planning
- **Custom date** - Enter specific date

---

### Step 4: Ask Focus Area

**Question:** "What's your primary focus today?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Lead Response** - Hot leads and follow-ups (SLA focus)
- **Content & Social** - Publishing and engagement
- **Campaign Monitoring** - Ad performance checks
- **Analytics Review** - Metrics and anomalies

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Daily Review Configuration

| Parameter | Value |
|-----------|-------|
| Date | [selected date] |
| Scope | [Quick/Standard/Complete] |
| Review Type | [selected type] |
| Focus Areas | [selected areas] |
```

**Question:** "Generate daily review?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate review** - Create daily checklist
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### MCP Sources
Use MCP for real-time data; tasks from `./plans/` files:
- `hubspot` - Hot leads, follow-ups
- `slack` - Team notifications
- `asana`, `notion` - Task management

---

## Workflow

1. **Priority Collection**
   - Urgent items from previous day
   - Scheduled content for today
   - Engagement responses needed
   - Lead follow-ups due

2. **Lead Status Check**
   - 🔥 Hot leads (70-100): Immediate response (<5 min SLA)
   - 🌡️ Warm leads (50-69): Priority follow-up (<1 hr SLA)
   - ❄️ Cool leads (30-49): Accelerated nurture (<24 hr SLA)
   - MQL notifications from overnight

3. **Content & Campaign Review**
   - Scheduled posts status
   - Campaign performance alerts
   - Social engagement queue

4. **Prioritization & Output**
   - Review and prioritize by impact and SLA
   - Create actionable checklist
   - Set clear deadlines

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Daily task compilation | `project-manager` | Morning routine |
| Lead scoring review | `lead-qualifier` | New leads/score changes |
| Content scheduling | `copywriter` | Content calendar |
| Social engagement | `brainstormer` | Engagement strategy |

---

## Output Format

### Quick Scope

```markdown
# Daily Review: [Date]

## 🔥 Priority Leads
| Lead | Score | Action | SLA |
|------|-------|--------|-----|

## Top 3 Priorities
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

### Standard Scope

```markdown
# Daily Marketing Review: [Date]

## 🔥 Priority Leads (Respond Now)
| Lead | Score | Action Needed | SLA |
|------|-------|---------------|-----|
| [Name] | [X] | [Action] | <5 min |

## Today's Content Schedule
| Time | Platform | Content | Status |
|------|----------|---------|--------|
| [Time] | [Platform] | [Description] | Ready |

## Top 3 Priorities
1. [Priority with deadline]
2. [Priority with deadline]
3. [Priority with deadline]
```

### Complete Scope

[Include Standard + Campaign metrics + Full analytics + Team tasks + End of day preview]

---

## End of Day Template

```markdown
# Daily Wrap-up: [Date]

## Completed Today
- [Task 1] ✅
- [Task 2] ✅

## Blockers for Tomorrow
- [Issue 1]

## Tomorrow Preview
1. [Key task 1]
2. [Key task 2]
```

---

## Output Location

Save review to: `./docs/ops/daily/[YYYY-MM-DD].md`
