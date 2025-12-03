---
description: Optimize signup, registration, or trial activation flows
argument-hint: [url-or-flow-description]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `signup-flow-cro`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of signup flow optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit with key fixes
- **Recommended** - Full analysis with redesign
- **Complete** - Comprehensive with A/B variants
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Signup Type

**Question:** "What type of signup flow?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Free Trial** - Time-limited full access
- **Freemium** - Free tier account
- **Paid Only** - Direct to payment
- **Waitlist** - Pre-launch signup

---

### Step 3: Ask Current Flow

**Question:** "How is your signup currently structured?"
**Header:** "Flow"
**MultiSelect:** false

**Options:**
- **Single Page** - All fields on one page
- **Multi-Step** - Progressive form steps
- **Social First** - OAuth primary option
- **Unknown** - Need to analyze

---

### Step 4: Ask Current Performance

**Question:** "What's your current signup conversion rate?"
**Header:** "Rate"
**MultiSelect:** false

**Options:**
- **Unknown** - Not tracking conversion
- **Low (<30%)** - Significant drop-off
- **Medium (30-60%)** - Room for improvement
- **High (>60%)** - Fine-tuning needed

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Signup Flow CRO Configuration

| Parameter | Value |
|-----------|-------|
| Product | [product/flow description] |
| Signup Type | [selected type] |
| Current Flow | [selected flow] |
| Conversion Rate | [selected rate] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Optimize signup flow?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize signup** - Start analysis
- **No, change settings** - Go back to modify

---

## Scope Boundaries

**This skill covers:**
- Account signup/registration
- Free trial signup
- Freemium account creation
- OAuth/SSO flows
- Email verification steps

**For post-signup onboarding:** Use `/cro:onboarding`
**For lead forms (not account creation):** Use `/cro:form`

---

## Signup Patterns

| Pattern | Conversion Impact | Best For |
|---------|------------------|----------|
| Single-page minimal | Highest | B2C, simple products |
| Multi-step with progress | High | B2B, complex products |
| Social-first | Very high | Consumer apps |
| Email-only to start | Highest | Progressive profiling |

---

## Workflow

1. **Flow Assessment**
   - Number of steps
   - Fields at each step
   - OAuth/social options
   - Email verification required?

2. **Friction Audit**
   - Unnecessary fields to defer
   - Password requirements friction
   - Email verification timing
   - Mobile experience

3. **Value Reinforcement**
   - Value reminder during signup
   - Progress indication
   - Social proof integration
   - Exit prevention

4. **Technical Factors**
   - Page speed
   - Error handling UX
   - Form validation
   - Browser compatibility

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Signup analysis | `conversion-optimizer` | Primary task |
| Copy optimization | `copywriter` | Labels, CTAs, errors |
| Psychology review | `brand-voice-guardian` | Trust elements |

---

## Output Format

### Basic Scope

```markdown
## Signup Flow Audit: [Product]

### Quick Wins
- [Issue 1]: [Fix]
- [Issue 2]: [Fix]

### Field Recommendations
- Defer: [fields to move post-signup]
- Remove: [unnecessary fields]
- Keep: [essential fields]

### CTA Improvement
Before: [current CTA]
After: [optimized CTA]
```

### Recommended Scope

[Include Basic + Step-by-step redesign + OAuth recommendations + Trust elements + Error message improvements]

### Complete Scope

[Include all + A/B test variants + Mobile-specific flow + Verification optimization + Implementation checklist + Success metrics]

---

## Output Location

Save signup audit to: `./docs/cro/signup-[product]-[YYYY-MM-DD].md`
