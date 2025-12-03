---
description: Create social media posting schedule
argument-hint: [platforms] [timeframe]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `social-media`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of social schedule do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Weekly posting calendar
- **Recommended** - Monthly with content types
- **Complete** - Quarterly with campaigns
- **Custom** - I'll specify timeframe

---

### Step 2: Ask Platforms

**Question:** "Which platforms should be included?"
**Header:** "Platforms"
**MultiSelect:** true

**Options:**
- **LinkedIn** - Professional content
- **Twitter/X** - News and engagement
- **Instagram** - Visual content
- **TikTok** - Video content

---

### Step 3: Ask Content Mix

**Question:** "What content mix do you prefer?"
**Header:** "Mix"
**MultiSelect:** false

**Options:**
- **Promotional** - Product-focused (60/40)
- **Educational** - Value-first (40/60)
- **Balanced** - Even mix (50/50)
- **Community** - Engagement-focused (30/70)

---

### Step 4: Ask Posting Frequency

**Question:** "How often should you post?"
**Header:** "Frequency"
**MultiSelect:** false

**Options:**
- **Light** - 3-5 posts/week total
- **Standard** - 1-2 posts/day
- **Active** - 3-5 posts/day
- **Aggressive** - 5+ posts/day

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Social Schedule Configuration

| Parameter | Value |
|-----------|-------|
| Platforms | [selected platforms] |
| Timeframe | [description] |
| Content Mix | [selected mix] |
| Frequency | [selected frequency] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this social schedule?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create schedule** - Start creation
- **No, change settings** - Go back to modify

---

## Platform Guidelines

| Platform | Posts/Day | Best Times | Focus |
|----------|-----------|------------|-------|
| LinkedIn | 1-2 | 8-10am, 12pm | Professional |
| Twitter/X | 3-5 | 9am, 12pm, 5pm | Engagement |
| Instagram | 1-2 | 11am, 2pm, 7pm | Visual |
| TikTok | 1-3 | 7-9pm | Entertainment |

---

## Workflow

1. **Timing Analysis**
   - Best posting times
   - Audience activity patterns
   - Time zone considerations

2. **Content Mapping**
   - Content types per platform
   - Content pillars allocation
   - Promotional ratio

3. **Calendar Creation**
   - Daily/weekly schedule
   - Campaign integration
   - Special dates

4. **Optimization**
   - Engagement windows
   - Cross-posting strategy
   - Performance tracking

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Schedule creation | `project-manager` | Primary task |
| Content planning | `planner` | Content calendar |
| Trend alignment | `researcher` | Campaign timing |

---

## Output Format

### Basic Scope

```markdown
## Social Schedule: [Timeframe]

### Weekly Calendar
| Day | Platform | Time | Content Type |
|-----|----------|------|--------------|
| Mon | LinkedIn | 9am | [Type] |
| Tue | Twitter | 12pm | [Type] |

### Content Slots
- Promotional: [X] posts/week
- Educational: [X] posts/week
- Engagement: [X] posts/week
```

### Recommended Scope

[Include Basic + Monthly calendar + Content briefs + Campaign integration + Hashtag strategy]

### Complete Scope

[Include all + Quarterly planning + Performance targets + A/B test schedule + Crisis slots]

---

## Output Location

Save schedule to: `./docs/social/schedule-[timeframe]-[YYYY-MM-DD].md`
