---
description: Apply psychological principles and mental models to marketing
argument-hint: [marketing-challenge-or-context]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-psychology`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of psychology guidance do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Top models with applications
- **Recommended** - Full analysis with examples
- **Complete** - Comprehensive with implementation
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Challenge Type

**Question:** "What marketing challenge are you facing?"
**Header:** "Challenge"
**MultiSelect:** false

**Options:**
- **Conversion** - Low conversions, cart abandonment
- **Pricing** - Objections, value perception
- **Trust** - Credibility, authority building
- **Retention** - Churn, engagement decline

---

### Step 3: Ask Application Context

**Question:** "Where will you apply these principles?"
**Header:** "Context"
**MultiSelect:** true

**Options:**
- **Landing Pages** - Headlines, CTAs, layout
- **Pricing** - Tiers, anchoring, framing
- **Email** - Subject lines, sequences
- **Product** - Onboarding, features

---

### Step 4: Ask Depth Level

**Question:** "How deep should the psychology analysis go?"
**Header:** "Depth"
**MultiSelect:** false

**Options:**
- **Quick Reference** - Top models, fast tips
- **Standard** - Explained with examples
- **Deep Dive** - Research-backed, case studies
- **Implementation** - Step-by-step application

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Marketing Psychology Configuration

| Parameter | Value |
|-----------|-------|
| Challenge | [description] |
| Challenge Type | [selected type] |
| Application Context | [selected context] |
| Depth | [selected depth] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Analyze with these psychology principles?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze** - Start analysis
- **No, change settings** - Go back to modify

---

## Quick Reference

| Challenge | Relevant Models |
|-----------|-----------------|
| Low conversions | Hick's Law, Activation Energy, BJ Fogg, Friction |
| Price objections | Anchoring, Framing, Mental Accounting, Loss Aversion |
| Building trust | Authority, Social Proof, Reciprocity, Pratfall Effect |
| Increasing urgency | Scarcity, Loss Aversion, Zeigarnik Effect |
| Retention/churn | Endowment Effect, Switching Costs, Status-Quo Bias |
| Growth stalling | Theory of Constraints, Local vs Global Optima |
| Decision paralysis | Paradox of Choice, Default Effect, Nudge Theory |
| Onboarding | Goal-Gradient, IKEA Effect, Commitment & Consistency |

---

## Model Categories

### Foundational Thinking
First Principles, Jobs to Be Done, Pareto (80/20), Inversion, Occam's Razor

### Buyer Psychology
Fundamental Attribution Error, Mere Exposure, Availability Heuristic, Confirmation Bias, Mimetic Desire

### Behavior & Persuasion
Reciprocity, Commitment & Consistency, Authority, Scarcity, Loss Aversion, Anchoring

### Pricing Psychology
Charm Pricing, Rule of 100, Price Relativity, Mental Accounting

### Growth & Scale
Feedback Loops, Compounding, Network Effects, Flywheel, Switching Costs

---

## Workflow

1. **Challenge Identification**
   - Define the specific marketing problem
   - Identify symptoms and root causes
   - Establish success metrics

2. **Model Matching**
   - Select relevant mental models
   - Explain psychological foundations
   - Map to marketing context

3. **Application Design**
   - Translate theory to tactics
   - Provide specific implementations
   - Include real-world examples

4. **Ethical Implementation**
   - Ensure transparent application
   - Balance persuasion with value
   - Avoid dark patterns

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Psychology analysis | `brainstormer` | Primary task |
| Copy applications | `copywriter` | Messaging tactics |
| CRO implementation | `conversion-optimizer` | Conversion focus |

---

## Output Format

### Basic Scope

```markdown
## Psychology Analysis: [Challenge]

### Top 3 Models

1. **[Model Name]**
   - Definition: [Brief]
   - Application: [Specific action]

2. **[Model Name]**
   - Definition: [Brief]
   - Application: [Specific action]

### Quick Implementation
[Immediate action based on principles]
```

### Recommended Scope

[Include Basic + 5-7 models + Detailed examples + Before/after comparisons + Implementation checklist]

### Complete Scope

[Include all + Full model library reference + Case studies + A/B test suggestions + Measurement framework]

---

## Output Location

Save analysis to: `./docs/marketing/psychology-[challenge]-[YYYY-MM-DD].md`
