---
description: Generate content calendar for campaign
argument-hint: [timeframe] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `content-strategy`, `social-media`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of content calendar do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - Basic weekly schedule
- **Standard** - Monthly calendar (Recommended)
- **Complete** - Quarterly with full details
- **Custom** - I'll specify timeframe

---

### Step 2: Ask Channels

**Question:** "Which channels to include?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Social** - LinkedIn, Twitter, Instagram
- **Email** - Newsletter, sequences
- **Blog** - Articles, SEO content
- **Paid** - Ads, sponsored content

---

### Step 3: Ask Content Types

**Question:** "What content types to schedule?"
**Header:** "Content"
**MultiSelect:** true

**Options:**
- **Educational** - How-to, tutorials
- **Promotional** - Launches, offers
- **Engagement** - Polls, discussions
- **Curated** - Industry news, shares

---

### Step 4: Ask Frequency

**Question:** "What's the target posting frequency?"
**Header:** "Frequency"
**MultiSelect:** false

**Options:**
- **Light** - 2-3 posts per week
- **Moderate** - Daily posts
- **Active** - 2-3 posts per day
- **Intensive** - 5+ posts per day

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Content Calendar Configuration

| Parameter | Value |
|-----------|-------|
| Timeframe | [selected scope] |
| Channels | [selected channels] |
| Content Types | [selected types] |
| Frequency | [selected frequency] |
| Total Posts | [estimated count] |
```

**Question:** "Generate this content calendar?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate calendar** - Start generation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Phase Mapping**
   - Align campaign phases with dates
   - Identify key milestones
   - Map dependencies

2. **Content Assignment**
   - Assign content types per channel
   - Map content to audience segments
   - Balance content mix

3. **Publishing Schedule**
   - Set optimal posting frequencies
   - Define publishing times per platform
   - Schedule content bursts for launches

4. **Event Alignment**
   - Integrate industry events
   - Include seasonal opportunities
   - Add company milestones

5. **Workflow Integration**
   - Set review/approval deadlines
   - Define handoff points
   - Create production milestones

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Content strategy | `planner` | Calendar structure |
| Content ideas | `brainstormer` | Topic generation |
| Copy creation | `copywriter` | Content drafting |
| Coordination | `project-manager` | Timeline management |

---

## Output Format

### Quick Scope

```markdown
## Content Calendar: Week of [Date]

| Day | Channel | Content | Topic |
|-----|---------|---------|-------|
| Mon | LinkedIn | Article | [Topic] |
| Wed | Twitter | Thread | [Topic] |
| Fri | Email | Newsletter | [Topic] |
```

### Standard Scope

[Include Quick + Full month view + Content mix breakdown + Publishing times + Owner assignments + Status tracking]

### Complete Scope

[Include all + Quarter overview + Campaign alignment + Performance targets + Resource allocation + Review schedule]

---

## Calendar Template

```markdown
# Content Calendar: [Month/Quarter]
**Campaign:** [Campaign name]
**Generated:** [Date]

## Week 1: [Date Range]

| Date | Channel | Type | Topic | CTA | Owner | Status |
|------|---------|------|-------|-----|-------|--------|
| Mon  | LinkedIn | Educational | [Topic] | [CTA] | [Name] | Draft |
| Tue  | Twitter | Engagement | [Topic] | [CTA] | [Name] | Scheduled |
| Wed  | Blog | SEO | [Topic] | [CTA] | [Name] | Review |
| Thu  | Email | Newsletter | [Topic] | [CTA] | [Name] | Approved |
| Fri  | Instagram | Promotional | [Topic] | [CTA] | [Name] | Published |

## Content Mix Summary

| Content Type | Count | Percentage |
|--------------|-------|------------|
| Educational | X | X% |
| Promotional | X | X% |
| Engagement | X | X% |
| Curated | X | X% |

## Key Dates
- [Date]: [Event/Milestone]
- [Date]: [Event/Milestone]
```

---

## Optimal Posting Times

| Platform | Best Times | Best Days |
|----------|------------|-----------|
| LinkedIn | 8-10 AM, 12 PM | Tue-Thu |
| Twitter | 8 AM, 12 PM, 5 PM | Mon-Fri |
| Instagram | 11 AM, 1 PM, 7 PM | Mon, Wed, Fri |
| Email | 10 AM, 2 PM | Tue, Thu |

---

## Output Location

Save calendar to: `./docs/campaign/calendar-[timeframe]-[YYYY-MM-DD].md`
