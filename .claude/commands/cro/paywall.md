---
description: Optimize in-app paywalls, upgrade screens, and feature gates
argument-hint: [product-or-upgrade-context]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `paywall-upgrade-cro`, `pricing-strategy`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of paywall optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit with key fixes
- **Recommended** - Full analysis with copy
- **Complete** - Comprehensive with A/B variants
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Paywall Type

**Question:** "What type of paywall/upgrade moment?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Feature Gate** - Premium feature blocked
- **Usage Limit** - Quota reached screen
- **Trial Expiration** - Trial ending modal
- **Upgrade Prompt** - Proactive upsell

---

### Step 3: Ask Business Model

**Question:** "What's your pricing model?"
**Header:** "Model"
**MultiSelect:** false

**Options:**
- **Freemium** - Free tier + paid plans
- **Free Trial** - Time-limited full access
- **Usage-Based** - Pay per usage/credits
- **Subscription** - Monthly/annual plans

---

### Step 4: Ask Current Conversion

**Question:** "Current free-to-paid conversion rate?"
**Header:** "Rate"
**MultiSelect:** false

**Options:**
- **Unknown** - Not tracking conversion
- **Low (<2%)** - Needs significant work
- **Medium (2-5%)** - Room for improvement
- **High (>5%)** - Fine-tuning for gains

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Paywall CRO Configuration

| Parameter | Value |
|-----------|-------|
| Context | [product/feature description] |
| Paywall Type | [selected type] |
| Business Model | [selected model] |
| Current Rate | [selected rate] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Optimize this paywall?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize paywall** - Start analysis
- **No, change settings** - Go back to modify

---

## Scope Boundaries

**This skill covers:**
- In-app paywalls
- Upgrade modals/screens
- Feature gates
- Trial expiration screens
- Limit reached screens
- Plan upgrade prompts
- Upsell/cross-sell moments

**For public pricing pages:** Use `/cro:page`
**For checkout forms:** Use `/cro:form`

---

## Paywall Patterns

| Pattern | Context | Conversion Driver |
|---------|---------|-------------------|
| Hard gate | Premium feature access | Feature desirability |
| Soft gate | Usage limit reached | Continued usage value |
| Trial expiry | Time-limited trial | Fear of loss |
| Upgrade prompt | After value moment | Momentum/satisfaction |
| Feature preview | Locked feature hover | Curiosity/desire |

---

## Workflow

1. **Trigger Context Analysis**
   - What triggers paywall?
   - User state (frustrated vs exploring)
   - Usage context
   - Prior value exposure

2. **Value Presentation**
   - Benefit articulation
   - Feature comparison clarity
   - ROI/value demonstration
   - Social proof integration

3. **Friction Reduction**
   - Upgrade path simplicity
   - Payment options
   - Trial extension options
   - Downgrade alternatives

4. **Psychological Factors**
   - Urgency elements
   - Loss aversion framing
   - Anchoring strategy
   - Commitment progression

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Paywall analysis | `conversion-optimizer` | Primary task |
| Revenue strategy | `upsell-maximizer` | Pricing/packaging |
| Copy optimization | `copywriter` | Headlines, CTAs |

---

## Output Format

### Basic Scope

```markdown
## Paywall Audit: [Feature/Product]

### Quick Wins
- [Issue 1]: [Fix]
- [Issue 2]: [Fix]

### Copy Improvements
- Headline: [current] → [optimized]
- CTA: [current] → [optimized]

### Trigger Recommendation
[Timing/context optimization]
```

### Recommended Scope

[Include Basic + Value messaging hierarchy + Objection handling + Urgency approach + A/B test suggestions]

### Complete Scope

[Include all + Multiple headline variants + Segment targeting + Testing plan + Success metrics + Implementation guide]

---

## Output Location

Save paywall audit to: `./docs/cro/paywall-[feature]-[YYYY-MM-DD].md`
