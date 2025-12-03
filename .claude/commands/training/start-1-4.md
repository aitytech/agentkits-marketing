# /training:start-1-4 - Using Agents for Marketing

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Instructions for Claude

Teach the concept of agents - specialized AI team members that handle different marketing functions.

### Lesson Overview

---

**Module 1.4: Using Agents for Marketing**

The marketing kit has 18 specialized agents. Think of them as AI team members who can work on specific marketing tasks with expertise.

**Duration:** ~35 minutes

---

### Step 1: Explain the Agent System

The marketing kit has agents organized by function:

**Core Marketing Agents (6):**
| Agent | Focus | Use Cases |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, lead gen | SEO, landing pages, competitor intel |
| `lead-qualifier` | Intent detection | Lead scoring, behavioral analysis |
| `email-wizard` | Email marketing | Sequences, automation, optimization |
| `sales-enabler` | Sales support | Pitches, case studies, battlecards |
| `continuity-specialist` | Retention | Churn detection, re-engagement |
| `upsell-maximizer` | Revenue expansion | Cross-sell, upsell, feature adoption |

**Supporting Agents (6):**
| Agent | Focus | Use Cases |
|-------|-------|-----------|
| `researcher` | Market intelligence | Research, competitive analysis |
| `brainstormer` | Creative ideation | Campaign concepts, messaging angles |
| `planner` | Strategic planning | Campaign plans, content calendars |
| `project-manager` | Coordination | Status tracking, campaign oversight |
| `copywriter` | Content creation | Copy, messaging, creative |
| `docs-manager` | Documentation | Brand guidelines, style guides |

**Reviewer Agents (6):**
| Agent | Perspective | Reviews For |
|-------|-------------|-------------|
| `brand-voice-guardian` | Brand consistency | Voice, tone, messaging |
| `conversion-optimizer` | CRO expert | Conversion, persuasion |
| `seo-specialist` | Search optimization | Keywords, technical SEO |
| `manager-maria` | Marketing manager (38yo, B2B) | Strategy, team fit |
| `solo-steve` | Solopreneur (32yo) | Time, budget, DIY |
| `startup-sam` | Startup founder (28yo) | Growth, virality, speed |

### Step 2: Agent Exercise - Multi-Perspective Review

Create content and review from multiple perspectives:

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

Explain what just happened - three specialized reviews in one command.

### Step 3: Using Lead Qualification

Demonstrate lead-qualifier agent via commands:

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

Show how lead-qualifier creates:
- Demographic scoring criteria
- Behavioral scoring signals
- MQL/SQL thresholds

### Step 4: Using Email Wizard

Demonstrate email-wizard agent:

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### Step 5: Using Sales Enabler

Demonstrate sales-enabler agent:

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### Step 6: Real-World Scenario - Quick Response

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### Step 7: Agent Best Practices

Share these tips:
- Be specific with task objectives
- Reference brand guidelines and personas
- Define outputs clearly (format, length)
- Use specialized agents for specialized tasks
- Combine agents for complex projects

### What's Next

Tell them:
- They now understand the 18-agent system
- **Next:** `/training:start-1-5` - Custom Marketing Sub-Agents
- They'll learn about persona reviewers and how to get targeted feedback

## Key Teaching Points
- 18 agents organized: Core (6), Supporting (6), Reviewers (6)
- Core agents map to funnel stages
- Reviewer agents provide multi-perspective feedback
- Commands invoke specific agent capabilities
- Combine agents for complex projects
