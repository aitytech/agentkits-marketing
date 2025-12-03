---
description: Create ad copy for paid campaigns
argument-hint: [platform] [objective]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `paid-advertising`, `copywriting`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of ad copy output do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Single ad set with 3 variations
- **Recommended** - Multiple ad sets with A/B options
- **Complete** - Full campaign with all formats
- **Custom** - I'll select specific deliverables

---

### Step 2: Ask Platform

**Question:** "Which advertising platform?"
**Header:** "Platform"
**MultiSelect:** false

**Options:**
- **Google Ads** - Search, Display, YouTube
- **Meta (FB/IG)** - Facebook and Instagram ads
- **LinkedIn** - B2B professional network
- **TikTok** - Short-form video ads

---

### Step 3: Ask Campaign Objective

**Question:** "What's the primary campaign objective?"
**Header:** "Objective"
**MultiSelect:** false

**Options:**
- **Lead Generation** - Capture leads, form fills
- **Conversions** - Sales, signups, purchases
- **Traffic** - Drive website visits
- **Awareness** - Brand visibility, reach

---

### Step 4: Ask Ad Format

**Question:** "Which ad formats do you need?"
**Header:** "Format"
**MultiSelect:** true

**Options:**
- **Text/Search Ads** - Headlines + descriptions
- **Image Ads** - Static visual with copy
- **Video Ads** - Script + CTA overlays
- **Carousel/Collection** - Multi-image storytelling

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Ad Copy Configuration

| Parameter | Value |
|-----------|-------|
| Platform | [selected platform] |
| Objective | [selected objective] |
| Formats | [selected formats] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Generate ad copy?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create ads** - Start ad copy creation
- **No, change settings** - Go back to modify

---

## Platform Specifications

| Platform | Headline | Description | Visual |
|----------|----------|-------------|--------|
| Google Search | 30 chars × 3 | 90 chars × 2 | N/A |
| Google Display | 25-30 chars | 60-90 chars | Image |
| Facebook/IG | 40 chars | 125 chars | Image/Video |
| LinkedIn | 70 chars | 100 chars | Image |
| TikTok | 100 chars | N/A | Video |

---

## Workflow

1. **Platform Analysis**
   - Ad format requirements
   - Character limits
   - Best practices
   - Competitor ads

2. **Message Development**
   - Unique value proposition
   - Benefit-focused hooks
   - Urgency elements
   - Social proof

3. **Copy Variations**
   - Multiple headlines
   - Description options
   - CTA variations
   - A/B test sets

4. **Compliance Check**
   - Platform policies
   - Claim substantiation
   - Required disclaimers

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Ad copy creation | `copywriter` | All formats |
| Platform strategy | `attraction-specialist` | Campaign planning |
| CRO review | `conversion-optimizer` | Landing page alignment |

---

## Output Format

### Basic Scope

```markdown
## [Platform] Ad Set

### Ad 1
**Headline 1:** [Benefit-focused]
**Headline 2:** [Feature-focused]
**Headline 3:** [Social proof]
**Description 1:** [Value prop + CTA]
**Description 2:** [Overcome objection]
**CTA:** [Action]

### Ad 2-3 (Variations)
[Alternative approaches]

**Visual Direction:** [Image/video guidance]
```

### Recommended Scope

[Include Basic + Multiple ad sets + A/B test variations + Audience targeting suggestions]

### Complete Scope

[Include all + Full funnel ads + Retargeting copy + Landing page recommendations]

---

## Output Location

Save ads to: `./docs/content/ads/[platform]-[objective]-[YYYY-MM-DD].md`
