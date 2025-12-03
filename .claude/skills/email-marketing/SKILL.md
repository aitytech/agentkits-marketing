---
name: email-marketing
description: Email campaign strategy, automation, and optimization. Use when creating email sequences, improving deliverability, designing automation workflows, or optimizing email performance.
---

# Email Marketing

Email campaign strategy, automation, and optimization for engagement and conversion.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## When to Use This Skill

Apply email expertise when:
- Creating email sequences and automations
- Improving deliverability and inbox placement
- Optimizing open rates and click rates
- Designing lifecycle email workflows
- Segmenting audiences for personalization
- A/B testing email elements

## Core Concepts

### Email Types & Timing

| Type | Purpose | Timing | Frequency |
|------|---------|--------|-----------|
| Welcome | Onboard new subscribers | Immediate (<5 min) | Once |
| Nurture | Build trust over time | Drip sequence | 1-2x/week |
| Promotional | Drive sales/signups | Campaign-based | 1-4x/month |
| Transactional | Confirm actions | Triggered | As needed |
| Re-engagement | Win back inactive | 30-90 days inactive | Once per cycle |

### Email Performance Benchmarks

| Metric | Acceptable | Good | Excellent |
|--------|------------|------|-----------|
| Open Rate | 15-20% | 20-25% | 25%+ |
| Click Rate | 1-2% | 2-5% | 5%+ |
| Click-to-Open | 10-15% | 15-20% | 20%+ |
| Unsubscribe | <1% | <0.5% | <0.2% |
| Bounce Rate | <5% | <2% | <0.5% |
| Spam Complaint | <0.1% | <0.05% | <0.01% |

### Email Anatomy

```
From: [Name] from [Brand] <email@domain.com>
Subject: [Hook + Benefit] (50 chars optimal)
Preview: [Extends subject curiosity] (90-100 chars)

[Personalized greeting]
[Hook - address pain/desire in first line]
[Value delivery - main content]
[Social proof - testimonial/stat - optional]
[Single CTA button - clear action]
[P.S. - additional hook or urgency]

[Signature with human touch]
```

### Subject Line Formulas

| Formula | Example | Best For |
|---------|---------|----------|
| Question | "Still struggling with [pain]?" | Engagement |
| How-to | "How to [achieve outcome] in [time]" | Education |
| Curiosity | "[X] thing [audience] forget about [topic]" | Opens |
| Social Proof | "How [customer] got [result]" | Conversion |
| Urgency | "[X] hours left: [offer]" | Promotions |
| Personal | "{{first_name}}, quick question" | Response |

### Sequence Framework

**Welcome Sequence (7 days, 5 emails)**:
1. Day 0: Welcome + deliver lead magnet
2. Day 1: Quick win / immediate value
3. Day 3: Brand story / why we exist
4. Day 5: Social proof / case study
5. Day 7: Engagement check / preferences

**Nurture Sequence (6 weeks)**:
1. Week 1-2: Problem awareness
2. Week 3-4: Solution education
3. Week 5-6: Product introduction + offer

### Segmentation Strategy

| Segment Type | Criteria | Use For |
|--------------|----------|---------|
| Engagement | Open/click behavior | Re-engagement targeting |
| Interest | Content consumed | Topic personalization |
| Lifecycle | Lead stage | Funnel-appropriate content |
| Demographic | Role, company size | Message customization |
| Behavioral | Website actions | Trigger-based emails |

## Best Practices

### Deliverability Excellence
1. **Warm Up New Domains**: Gradual volume increase
2. **Authentication**: SPF, DKIM, DMARC properly configured
3. **List Hygiene**: Remove bounces and inactive regularly
4. **Engagement Signals**: Encourage replies, adds to contacts

### Copy Excellence
1. **Mobile First**: 60%+ read on mobile
2. **Scannable**: Short paragraphs, bullets, bold
3. **One CTA**: Don't compete with yourself
4. **Personal Tone**: Write to one person, not a list

### Testing Excellence
1. **Subject Lines**: Always A/B test
2. **Send Times**: Find optimal windows per segment
3. **Content Length**: Test short vs. long
4. **CTA Buttons**: Text, color, placement

## Agent Integration

| Agent | How They Use This Skill |
|-------|------------------------|
| `email-wizard` | Sequence design, automation setup |
| `copywriter` | Email copy creation |
| `lead-qualifier` | Segmentation criteria, triggers |
| `continuity-specialist` | Re-engagement strategies |

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Wrong | Do This Instead |
|--------------|----------------|-----------------|
| Buying email lists | Destroys deliverability | Build organic list |
| No segmentation | Irrelevant content = unsubscribes | Segment by behavior |
| Too many CTAs | Confuses reader, dilutes clicks | One primary CTA |
| No unsubscribe | Illegal + spam complaints | Clear, easy unsubscribe |
| Batch and blast | No personalization | Behavior-triggered emails |

## Workflow Integration

- `crm-workflow.md` - Lead lifecycle stages, MQL/SQL definitions
- `sales-workflow.md` - Lead scoring thresholds for email triggers

## Related Commands

- `/sequence/welcome` - 7-day welcome sequence
- `/sequence/nurture` - 6-week lead nurture
- `/sequence/re-engage` - 21-day win-back
- `/content/email` - Email copy creation

## References

- `references/sequence-design.md` - Email sequence blueprints
- `references/deliverability.md` - Getting to inbox
- `references/segmentation.md` - Audience segmentation
- `references/automation.md` - Automation workflows
- `references/lead-nurturing-workflows.md` - Lead nurturing sequences
