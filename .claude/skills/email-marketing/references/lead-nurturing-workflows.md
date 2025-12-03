# Lead Nurturing Workflows

Comprehensive lead nurturing sequences aligned with `crm-workflow.md` and `sales-workflow.md`.

## Workflow References

- `crm-workflow.md` - Lead lifecycle stages (Subscriber → Lead → MQL → SQL → Customer)
- `sales-workflow.md` - BANT/MEDDIC qualification frameworks

## Lead Temperature Integration

| Temperature | Score | Sequence Type | Goal | SLA |
|-------------|-------|---------------|------|-----|
| Hot | 70-100 | Fast-track sales | Immediate handoff | <5 min |
| Warm (MQL) | 50-69 | Accelerated nurture | Convert to SQL | <1 hr |
| Cool | 30-49 | Standard nurture | Progress to MQL (50+) | <24 hr |
| Cold | 0-29 | Long-term nurture | Build awareness | Ongoing |

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Sequence design | `email-wizard` | New sequence request |
| Lead scoring | `lead-qualifier` | Engagement events |
| Copy creation | `copywriter` | Email drafting |
| Sales handoff | `sales-enabler` | Score reaches 70+ |

## Welcome Sequence (7 Days)

**Trigger**: New subscriber/lead
**Goal**: First impression, build trust, identify intent

**GDPR/CCPA Note**: Ensure valid consent before sending. Include unsubscribe in every email. Document consent source and timestamp.

### Email Flow

```
Day 0: Welcome + Value Delivery
  ↓
Day 1: Quick Win / Resource
  ↓
Day 3: Story / Social Proof
  ↓
Day 5: Deeper Value + Soft CTA
  ↓
Day 7: Bridge to Nurture
```

### Day 0: Welcome Email
- Subject: "Welcome to [Brand] - Here's your [resource]"
- Deliver promised asset immediately
- Set expectations for future emails
- Single CTA: Access resource
- Include 1-click preference link

### Day 1: Quick Win
- Subject: "[First name], try this today"
- One actionable tip they can implement immediately
- Show you understand their problem
- CTA: Reply with questions

### Day 3: Social Proof
- Subject: "How [Customer] achieved [Result]"
- Brief case study or testimonial
- Relatable customer story
- CTA: Learn more about solution

### Day 5: Deep Value
- Subject: "The #1 mistake [audience] makes"
- Educational content showing expertise
- Address common objection
- Soft CTA: Book a call / Try free

### Day 7: Bridge Email
- Subject: "What's next, [First name]?"
- Summary of value delivered
- Segment by interest (click tracking)
- CTA: Choose your path (triggers appropriate nurture)

## Lead Nurturing Sequence (6 Weeks)

**Trigger**: Cool leads (score 30-49) needing progression to MQL (50+)
**Goal**: Educate, build trust, move to sales-ready (MQL)

**GDPR/CCPA Note**: Verify consent is still valid. Provide preference center link. Respect data retention limits.

### Week-by-Week Framework

```
Week 1-2: TOFU (Problem Aware)
  ↓
Week 3-4: MOFU (Solution Aware)
  ↓
Week 5-6: BOFU (Product Aware)
```

### TOFU Phase (Weeks 1-2)
**Focus**: Problem education, establish expertise

| Day | Email Type | Content |
|-----|-----------|---------|
| 1 | Problem | "Are you struggling with [pain]?" |
| 4 | Education | Industry insights / trends |
| 7 | Myth-buster | "Why [common belief] is wrong" |
| 10 | How-to | Solve specific problem (no pitch) |
| 14 | Quiz/Poll | Engagement + data collection |

**Scoring**:
- Opens: +2 points
- Clicks: +5 points
- Downloads: +10 points

### MOFU Phase (Weeks 3-4)
**Focus**: Solution exploration, comparison

| Day | Email Type | Content |
|-----|-----------|---------|
| 15 | Solution | "3 ways to solve [problem]" |
| 18 | Comparison | Evaluate different approaches |
| 21 | Case Study | Customer success story |
| 24 | Objection | Address main concern |
| 28 | ROI | Cost of inaction |

**Scoring**:
- Case study view: +15 points
- Pricing page: +20 points
- Comparison click: +10 points

### BOFU Phase (Weeks 5-6)
**Focus**: Product awareness, conversion

| Day | Email Type | Content |
|-----|-----------|---------|
| 29 | Product | How [Product] solves [problem] |
| 32 | Demo | See it in action |
| 35 | Trial | Limited-time offer |
| 38 | Urgency | Deadline reminder |
| 42 | Final | Last chance + handoff |

**Scoring**:
- Demo request: +25 points (→ SQL)
- Trial signup: +30 points (→ SQL)
- Pricing view: +15 points

## Re-engagement Sequence (21 Days)

**Trigger**: 90+ days inactive
**Goal**: Win back or clean list

### Flow

```
Day 0: "We miss you"
  ↓
Day 5: "Here's what you missed"
  ↓
Day 10: "Exclusive offer"
  ↓
Day 15: "Last chance"
  ↓
Day 21: Sunset (remove if no engagement)
```

### Day 0: Miss You
- Subject: "[First name], it's been a while..."
- Acknowledge absence
- Remind of value
- Single CTA: Click to stay subscribed

### Day 5: Catch Up
- Subject: "Here's what you missed at [Brand]"
- Top 3 updates since they engaged
- New features, content, offers
- CTA: Check out updates

### Day 10: Special Offer
- Subject: "A special offer just for you"
- Exclusive discount or bonus
- Time-limited (7 days)
- CTA: Claim offer

### Day 15: Urgency
- Subject: "Last chance: Your offer expires soon"
- Reminder of offer
- Scarcity messaging
- CTA: Don't miss out

### Day 21: Sunset Decision
- Subject: "Should we say goodbye?"
- Ask if they want to stay
- One-click to stay subscribed
- If no action → remove from list

**GDPR Note**: Ensure consent records before re-engagement. If consent expired, require re-opt-in.

## Behavior-Triggered Sequences

### High-Intent Triggers
| Trigger | Action | SLA |
|---------|--------|-----|
| Pricing page view | Sales alert + targeted email | <5 min |
| Demo request | Sales handoff | <5 min |
| Multiple case study views | "Ready to talk?" email | <1 hr |
| Cart abandonment | Recovery sequence | 1-24 hr |

### Engagement-Based Triggers
| Behavior | Sequence Adjustment |
|----------|---------------------|
| Opens but no clicks | More compelling CTAs |
| Clicks but no conversion | Address objections |
| High engagement | Accelerate to BOFU |
| Low engagement | Re-engagement flow |

## Scoring Thresholds

| Score | Status | Action |
|-------|--------|--------|
| 0-29 | Cold | Long-term nurture |
| 30-49 | Cool | Standard nurture |
| 50-69 | Warm (MQL) | Accelerated nurture |
| 70-100 | Hot (SQL) | Sales handoff <5 min |

## Integration Points

### Commands
- `/sequence/welcome` - Generate welcome sequence
- `/sequence/nurture` - Generate nurture sequence
- `/sequence/re-engage` - Generate re-engagement sequence

### Workflows
- `crm-workflow.md` - Lead lifecycle stages
- `sales-workflow.md` - BANT/MEDDIC qualification

### Agents
- `email-wizard` - Sequence creation
- `lead-qualifier` - Score calculation
- `sales-enabler` - Handoff preparation
