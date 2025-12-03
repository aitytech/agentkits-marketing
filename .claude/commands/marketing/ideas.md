---
description: Get 140+ proven SaaS marketing ideas and strategies
argument-hint: [product-or-goal]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-ideas`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of marketing ideas do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Top 5 ideas with first steps
- **Recommended** - 10+ ideas with implementation
- **Complete** - Full strategy with roadmap
- **Custom** - I'll specify what I need

---

### Step 2: Ask Marketing Stage

**Question:** "What stage is your product at?"
**Header:** "Stage"
**MultiSelect:** false

**Options:**
- **Pre-Launch** - Building initial audience
- **Launch** - Getting first customers
- **Growth** - Scaling acquisition
- **Mature** - Optimizing and expanding

---

### Step 3: Ask Resource Level

**Question:** "What resources are available?"
**Header:** "Resources"
**MultiSelect:** false

**Options:**
- **Bootstrap** - Solo, minimal budget
- **Lean** - Small team, limited budget
- **Growing** - Team available, budget for experiments
- **Scaling** - Full team, significant budget

---

### Step 4: Ask Focus Area

**Question:** "Which marketing areas interest you most?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Content & SEO** - Organic, blog, search
- **Product-Led** - Freemium, virality, loops
- **Paid** - Ads, sponsorships, influencers
- **Community** - Partnerships, referrals

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Marketing Ideas Configuration

| Parameter | Value |
|-----------|-------|
| Product/Goal | [description] |
| Stage | [selected stage] |
| Resources | [selected resources] |
| Focus Areas | [selected focus] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Generate these marketing ideas?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate ideas** - Start ideation
- **No, change settings** - Go back to modify

---

## Idea Categories

### Content Marketing
- Blog strategy, SEO content, thought leadership
- Podcasting, video content, webinars
- Lead magnets, templates, tools

### Organic Growth
- SEO, community building, partnerships
- Referral programs, word-of-mouth
- Integrations, marketplace listings

### Paid Acquisition
- Google Ads, Meta, LinkedIn, TikTok
- Retargeting, lookalike audiences
- Sponsorships, influencer marketing

### Product-Led
- Freemium, free tools, templates
- Viral mechanics, invites
- In-app growth loops

### Launch Tactics
- Product Hunt, BetaList, Hacker News
- Press/PR, email outreach
- Early access, waitlists

---

## Workflow

1. **Context Discovery**
   - Understand product/service
   - Identify current marketing stage
   - Assess available resources

2. **Idea Filtering**
   - Match ideas to stage and resources
   - Filter by focus areas
   - Consider competitive landscape

3. **Prioritization**
   - Rank by impact and feasibility
   - Identify quick wins vs long plays
   - Consider dependencies

4. **Implementation Planning**
   - Provide first steps for each idea
   - Suggest metrics to track
   - Outline resource requirements

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Idea generation | `brainstormer` | Primary task |
| Implementation planning | `planner` | Roadmap creation |
| Channel research | `researcher` | Competitive context |

---

## Output Format

### Basic Scope

```markdown
## Marketing Ideas: [Product/Goal]

### Top 5 Ideas

1. **[Idea]**
   - Why: [Fit reason]
   - First step: [Action]

2. **[Idea]**
   - Why: [Fit reason]
   - First step: [Action]
...

### Quick Win
[Idea implementable this week]
```

### Recommended Scope

[Include Basic + 10+ prioritized ideas + Effort/Impact matrix + 30-day plan + Skip for now list]

### Complete Scope

[Include all + Full 140+ idea review + Quarterly roadmap + Resource allocation + Success metrics]

---

## Output Location

Save ideas to: `./docs/marketing/ideas-[topic]-[YYYY-MM-DD].md`
