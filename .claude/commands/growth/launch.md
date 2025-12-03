---
description: Plan product launch, feature announcement, or release strategy
argument-hint: [product-or-feature-to-launch]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `launch-strategy`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of launch plan do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Launch checklist and timeline
- **Recommended** - Full plan with channels
- **Complete** - Comprehensive with assets
- **Custom** - I'll specify parameters

---

### Step 2: Ask Launch Type

**Question:** "What type of launch is this?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **New Product** - First-time product launch
- **Feature Release** - Major feature announcement
- **Update/Version** - Product update or version
- **Re-launch** - Repositioning or rebrand

---

### Step 3: Ask Launch Phase

**Question:** "Which phase are you planning for?"
**Header:** "Phase"
**MultiSelect:** false

**Options:**
- **Pre-Launch** - Building anticipation
- **Launch Day** - Day-of execution
- **Post-Launch** - Follow-up momentum
- **Full Lifecycle** - All phases

---

### Step 4: Ask Channel Focus

**Question:** "Which channels should the launch prioritize?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Owned** - Email, blog, community
- **Rented** - Social, app stores
- **Borrowed** - PR, influencers, partnerships
- **Product Hunt** - Product Hunt launch

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Launch Strategy Configuration

| Parameter | Value |
|-----------|-------|
| Product/Feature | [description] |
| Launch Type | [selected type] |
| Phase | [selected phase] |
| Channels | [selected channels] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this launch plan?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create plan** - Start planning
- **No, change settings** - Go back to modify

---

## Five-Phase Launch Approach

### Phase 1: Internal Launch
- Recruit early users for testing
- Collect feedback on usability
- Validate core functionality

### Phase 2: Alpha Launch
- Landing page with early access signup
- Announce product exists
- Individual user invitations

### Phase 3: Beta Launch
- Work through early access list
- Start marketing with teasers
- Recruit friends, investors, influencers

### Phase 4: Early Access
- Leak product details
- Gather quantitative/qualitative data
- Run product/market fit survey

### Phase 5: Full Launch
- Open self-serve signups
- Start charging
- Maximum visibility campaign

---

## Workflow

1. **Pre-Launch Preparation**
   - Asset creation
   - Landing page
   - Email sequences
   - Social content

2. **Channel Activation**
   - Owned channels first
   - Rented channels second
   - Borrowed channels third

3. **Launch Execution**
   - Coordinated release
   - Real-time engagement
   - Issue response

4. **Post-Launch Follow-up**
   - Momentum maintenance
   - User onboarding
   - Feedback collection

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Launch planning | `planner` | Primary task |
| Launch copy | `copywriter` | Asset creation |
| Email sequences | `email-wizard` | Automation |

---

## Output Format

### Basic Scope

```markdown
## Launch Plan: [Product/Feature]

### Timeline
- T-14: [Milestone]
- T-7: [Milestone]
- T-0: Launch day
- T+7: [Follow-up]

### Pre-Launch Checklist
- [ ] Landing page ready
- [ ] Email capture active
- [ ] Launch assets created

### Launch Day Checklist
- [ ] Announcement email
- [ ] Blog post published
- [ ] Social posts scheduled
```

### Recommended Scope

[Include Basic + Channel strategy (ORB) + Asset list + Engagement plan + Success metrics]

### Complete Scope

[Include all + Product Hunt strategy + PR outreach + Influencer list + Crisis plan + Post-launch optimization]

---

## Output Location

Save launch plan to: `./docs/growth/launch-[product]-[YYYY-MM-DD].md`
