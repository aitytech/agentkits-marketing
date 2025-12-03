---
description: Daily social media management checklist
argument-hint: [platforms] [brand]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `social-media`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of social checklist do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Essential daily tasks
- **Recommended** - Full daily workflow
- **Complete** - Comprehensive with metrics
- **Custom** - I'll specify what I need

---

### Step 2: Ask Platforms

**Question:** "Which platforms are you managing?"
**Header:** "Platforms"
**MultiSelect:** true

**Options:**
- **LinkedIn** - Professional network
- **Twitter/X** - Real-time engagement
- **Instagram** - Visual content
- **TikTok** - Video content

---

### Step 3: Ask Role

**Question:** "What's your primary role?"
**Header:** "Role"
**MultiSelect:** false

**Options:**
- **Solo** - Managing everything alone
- **Manager** - Overseeing team
- **Creator** - Content focused
- **Community** - Engagement focused

---

### Step 4: Ask Time Budget

**Question:** "How much time for social daily?"
**Header:** "Time"
**MultiSelect:** false

**Options:**
- **Minimal** - 30 min or less
- **Standard** - 1-2 hours
- **Full** - 2-4 hours
- **Dedicated** - Full-time focus

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Social Daily Configuration

| Parameter | Value |
|-----------|-------|
| Brand | [description] |
| Platforms | [selected platforms] |
| Role | [selected role] |
| Time Budget | [selected time] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this social checklist?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create checklist** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Morning: Community & Publishing**
   - Check notifications
   - Respond to comments/DMs
   - Publish scheduled content
   - Quick monitoring

2. **Midday: Engagement Window**
   - Respond to new comments
   - Proactive engagement
   - Share third-party content

3. **Afternoon: Content Prep**
   - Draft tomorrow's posts
   - Prepare graphics
   - Schedule content

4. **End of Day: Performance**
   - Log key metrics
   - Note learnings
   - Prepare for tomorrow

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Content ideas | `brainstormer` | Content gaps |
| Copy creation | `copywriter` | Post drafting |
| Engagement strategy | `brainstormer` | Community building |
| Performance review | `researcher` | Daily metrics |

---

## Output Format

### Basic Scope

```markdown
## Social Daily: [Date]

### Morning (15 min)
- [ ] Check notifications
- [ ] Respond to comments
- [ ] Publish today's content

### Midday (10 min)
- [ ] Respond to new engagement
- [ ] Engage with 5 posts

### End of Day (10 min)
- [ ] Log metrics
- [ ] Schedule tomorrow
```

### Recommended Scope

[Include Basic + Platform-specific tasks + Proactive outreach + Content prep + Weekly tracker]

### Complete Scope

[Include all + Full time blocks + Engagement quality guidelines + Response time goals + Best practices]

---

## Daily Schedule

### Morning (First 30 min)
**Community Management (15 min)**
- [ ] Check notifications across all platforms
- [ ] Respond to comments from last 24 hours
- [ ] Reply to DMs (prioritize leads)
- [ ] Address any complaints

**Content Publishing (10 min)**
- [ ] Review scheduled posts
- [ ] Verify links and media
- [ ] Publish time-sensitive content

**Quick Monitoring (5 min)**
- [ ] Check brand mentions
- [ ] Note trending topics

### Midday (15 min)
- [ ] Respond to new comments
- [ ] Engage with 5-10 posts (influencers, customers)
- [ ] Share valuable third-party content

### Afternoon (15 min)
- [ ] Draft tomorrow's posts
- [ ] Queue content in scheduler
- [ ] Final engagement check

### End of Day (10 min)
- [ ] Log metrics: followers, engagement, DMs
- [ ] Note best/worst performing content
- [ ] Verify tomorrow's schedule

---

## Response Time Goals

| Lead Temperature | Response Time |
|------------------|---------------|
| Hot leads (70-100) | < 5 min |
| Warm leads (50-69) | < 1 hour |
| Customer complaints | < 15 min |
| General comments | < 4 hours |

---

## Weekly Metrics Tracker

| Metric | Mon | Tue | Wed | Thu | Fri | Avg |
|--------|-----|-----|-----|-----|-----|-----|
| New Followers | | | | | | |
| Engagement Rate | | | | | | |
| DMs | | | | | | |

---

## Output Location

Save checklist to: `./docs/social/daily-[date]-[YYYY-MM-DD].md`
