---
description: Design referral program, affiliate program, or word-of-mouth strategy
argument-hint: [product-or-context]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `referral-program`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of referral program design do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Program type and incentive structure
- **Recommended** - Full program with mechanics
- **Complete** - Comprehensive with launch plan
- **Custom** - I'll specify what I need

---

### Step 2: Ask Program Type

**Question:** "What type of referral program?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Customer Referral** - User-to-user referrals
- **Partner/Affiliate** - Revenue share model
- **Ambassador** - Community advocates
- **Influencer** - Paid + commission hybrid

---

### Step 3: Ask Incentive Model

**Question:** "What incentive structure do you prefer?"
**Header:** "Incentive"
**MultiSelect:** false

**Options:**
- **Two-Sided** - Both referrer and referee get rewards
- **Referrer Only** - Only referrer gets reward
- **Tiered** - Increasing rewards for more referrals
- **Points/Credits** - Product credits or points

---

### Step 4: Ask Product Context

**Question:** "What's your product type?"
**Header:** "Product"
**MultiSelect:** false

**Options:**
- **B2B SaaS** - Business software
- **B2C App** - Consumer application
- **E-commerce** - Physical products
- **Services** - Professional services

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Referral Program Configuration

| Parameter | Value |
|-----------|-------|
| Product/Context | [description] |
| Program Type | [selected type] |
| Incentive Model | [selected incentive] |
| Product Type | [selected product] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Design this referral program?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, design program** - Start design
- **No, change settings** - Go back to modify

---

## Program Types

| Type | Best For | Incentive Model |
|------|----------|-----------------|
| Customer Referral | B2C, high-volume | Two-sided rewards |
| Partner/Affiliate | B2B, services | Revenue share/commission |
| Ambassador | Community-driven | Status + rewards |
| Influencer | Consumer products | Fee + commission |

---

## Workflow

1. **Program Economics**
   - Customer Acquisition Cost (CAC)
   - Lifetime Value (LTV)
   - Max referral reward budget
   - Break-even analysis

2. **Incentive Design**
   - Referrer reward type
   - Referee reward type
   - Timing (immediate vs delayed)
   - Caps and limits

3. **Viral Mechanics**
   - Sharing friction
   - Share channels
   - Tracking mechanism
   - Attribution window

4. **Promotion Strategy**
   - In-app placement
   - Email integration
   - Post-purchase prompts
   - Milestone triggers

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Program design | `upsell-maximizer` | Primary task |
| Launch planning | `planner` | Complete scope |
| Referral copy | `copywriter` | Messaging |

---

## Output Format

### Basic Scope

```markdown
## Referral Program: [Product]

### Program Type
- Type: [Customer/Partner/Ambassador]
- Model: [Two-sided/Tiered/etc.]

### Incentives
- Referrer: [Reward]
- Referee: [Reward]
- Timing: [Immediate/Delayed]

### Economics
- CAC target: $[X]
- Max reward: $[X]
```

### Recommended Scope

[Include Basic + Viral mechanics + Share channels + Tracking requirements + Success metrics]

### Complete Scope

[Include all + Launch plan + A/B test framework + Fraud prevention + Scaling triggers + Optimization roadmap]

---

## Output Location

Save program to: `./docs/growth/referral-[product]-[YYYY-MM-DD].md`
