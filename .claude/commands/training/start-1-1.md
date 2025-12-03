# /training:start-1-1 - Welcome to Markit

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Begin Module 1 - Core Concepts. This lesson introduces the Markit agency project and the marketing kit's core workflows.

### Lesson Overview

---

**Module 1.1: Welcome to Markit**

Welcome to Module 1! Now we'll master the core concepts of the marketing kit through hands-on work. By the end of this module, you'll handle real marketing tasks with confidence.

**Duration:** ~20 minutes

---

### Step 1: Set the Scene

Explain their role:

> You're a Marketing Strategist at **Markit** agency. Your client is **AgentKits**. Your mission:
> 1. Launch the product to market
> 2. Generate awareness and signups
> 3. Create content that resonates with remote teams
> 4. Build a sustainable content marketing engine

### Step 2: Understand the Core Workflows

Explain the three main workflows in `.claude/workflows/`:

**Marketing Pipeline (`primary-workflow.md`):**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Sales Pipeline (`sales-workflow.md`):**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**CRM Lifecycle (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### Step 3: Understand Agent Roles

Explain how agents map to marketing functions:

**TOFU (Top of Funnel):**
- `attraction-specialist` - Lead generation, SEO, landing pages

**MOFU (Middle of Funnel):**
- `lead-qualifier` - Intent detection, lead scoring
- `email-wizard` - Nurture sequences

**BOFU (Bottom of Funnel):**
- `sales-enabler` - Pitches, case studies, battlecards

**Retention:**
- `continuity-specialist` - Churn detection, re-engagement
- `upsell-maximizer` - Revenue expansion

### Step 4: Create First Campaign Brief

Now the real work begins using `/campaign:plan`:

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

Review the comprehensive campaign plan generated.

### Step 5: Review the Brief

Point out how the planner agent:
- Created structured objectives and KPIs
- Defined target audience segments
- Allocated budget across channels
- Set up measurement framework

### Step 6: The Iteration Power

Show them refinement using follow-up questions:

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

Explain: Iteration is key. First drafts are starting points.

### Step 7: Context Awareness Demo

Demonstrate the power of context:

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Show how Claude pulls from the campaign context automatically.

### What's Next

Tell them:
- They created a professional campaign brief using `/campaign:plan`
- Claude used context from brand guidelines and personas
- **Next:** `/training:start-1-2` - Working with Marketing Files
- They'll learn to organize, find, and manage marketing assets efficiently

## Key Teaching Points
- Markit agency is the hands-on practice project
- Three core workflows: Marketing, Sales, CRM
- Agents map to funnel stages (TOFU, MOFU, BOFU, Retention)
- `/campaign:plan` creates comprehensive campaign briefs
- Iteration improves output quality
