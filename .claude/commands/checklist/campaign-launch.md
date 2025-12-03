---
description: Pre-launch campaign checklist to ensure nothing is missed
argument-hint: [campaign-name] [launch-date]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of launch checklist do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Essential checks only
- **Recommended** - Full launch checklist
- **Complete** - Comprehensive with sign-offs
- **Custom** - I'll specify what I need

---

### Step 2: Ask Campaign Type

**Question:** "What type of campaign is this?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Product Launch** - New product/feature
- **Lead Gen** - Lead generation campaign
- **Brand Awareness** - Visibility campaign
- **Promotional** - Sale or offer

---

### Step 3: Ask Channels Involved

**Question:** "Which channels are involved?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Email** - Email marketing
- **Paid Ads** - PPC, social ads
- **Landing Pages** - Web pages
- **Social** - Organic social media

---

### Step 4: Ask Timeline

**Question:** "How long until launch?"
**Header:** "Timeline"
**MultiSelect:** false

**Options:**
- **Rush** - Less than 3 days
- **Standard** - 1-2 weeks
- **Full** - 2+ weeks
- **Extended** - Month+ planning

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Campaign Launch Configuration

| Parameter | Value |
|-----------|-------|
| Campaign | [description] |
| Type | [selected type] |
| Channels | [selected channels] |
| Timeline | [selected timeline] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this launch checklist?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create checklist** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Strategy & Planning (T-14)**
   - Define objectives and KPIs
   - Finalize target audience
   - Complete competitive check
   - Align stakeholders

2. **Content & Creative (T-7)**
   - Landing page ready
   - Copy and messaging finalized
   - Visual assets prepared
   - Legal review complete

3. **Technical Setup (T-3)**
   - Tracking configured
   - CRM lead flow tested
   - Email automation ready
   - Paid ads built

4. **Launch & Monitor (T-0)**
   - Go live verification
   - Initial monitoring
   - Quick optimization
   - Team standby

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Copy review | `copywriter` | Content QA |
| Landing page | `attraction-specialist` | Page optimization |
| Lead routing | `lead-qualifier` | CRM setup |
| Sales alignment | `sales-enabler` | Handoff prep |

---

## Output Format

### Basic Scope

```markdown
## Campaign Launch: [Name]
**Launch Date:** [Date]

### Essential Checks
- [ ] Objective defined
- [ ] Landing page live
- [ ] Tracking working
- [ ] Form submitting to CRM
- [ ] Emails scheduled
- [ ] Ads approved
```

### Recommended Scope

[Include Basic + Full timeline (T-14 to T+7) + Channel-specific checklists + Sign-off matrix]

### Complete Scope

[Include all + Emergency contacts + Backup plans + Post-launch review template + Metrics tracking]

---

## Launch Timeline

### T-14 Days: Strategy & Planning
- [ ] Campaign objective clearly defined (SMART)
- [ ] Target audience documented
- [ ] Key messages finalized
- [ ] Budget approved and allocated
- [ ] Success metrics defined

### T-7 Days: Content & Creative
- [ ] Landing page live and loading fast
- [ ] Mobile responsive verified
- [ ] Form working correctly
- [ ] Copy proofread
- [ ] Visual assets ready

### T-3 Days: Technical Setup
- [ ] Analytics goals configured
- [ ] Conversion tracking installed
- [ ] CRM lead flow tested
- [ ] Email automation ready
- [ ] Ads built and approved

### T-1 Day: Final QA
- [ ] Complete user journey tested
- [ ] All links verified
- [ ] Cross-browser tested
- [ ] Sales team briefed
- [ ] Backup plans ready

### T-0: Launch Day
- [ ] Final systems check
- [ ] Activate all campaigns
- [ ] Monitor for errors
- [ ] Respond to early engagement

### T+1: Early Performance
- [ ] Review overnight performance
- [ ] Check lead quality
- [ ] Address any issues
- [ ] Optimize based on data

---

## Sign-Off Matrix

| Area | Owner | Approved | Date |
|------|-------|----------|------|
| Strategy | | ☐ | |
| Creative | | ☐ | |
| Copy | | ☐ | |
| Technical | | ☐ | |
| Legal | | ☐ | |
| **Final Go** | | ☐ | |

---

## Output Location

Save checklist to: `./docs/campaigns/launch-[campaign]-[YYYY-MM-DD].md`
