---
name: analytics-attribution
description: Performance measurement, attribution modeling, and marketing ROI analysis. Use when setting up tracking, analyzing campaign performance, building attribution models, or creating marketing reports.
---

# Analytics & Attribution

Performance measurement and attribution modeling for data-driven marketing decisions.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## When to Use This Skill

Apply analytics expertise when:
- Setting up marketing tracking and measurement
- Analyzing campaign or channel performance
- Building attribution models
- Creating dashboards and reports
- Calculating marketing ROI and CAC/LTV
- Troubleshooting data discrepancies

## Core Concepts

### Analytics Framework

**Dimensions** (What you're measuring by):
- Channel, campaign, source/medium
- Device, geography, time period
- Audience segment, persona
- Content type, landing page

**Metrics** (What you're measuring):
- Traffic: Sessions, users, pageviews
- Engagement: Time on site, bounce rate, pages/session
- Conversion: Goal completions, conversion rate
- Revenue: Transaction value, ROAS, ROI
- Cost: CPC, CPL, CAC

### Key Marketing Reports

| Report | Questions Answered | Frequency |
|--------|-------------------|-----------|
| Acquisition | Where do visitors come from? | Weekly |
| Behavior | What do they do on site? | Weekly |
| Conversion | Do they complete goals? | Daily |
| Attribution | What drove the conversion? | Monthly |
| Funnel | Where do they drop off? | Weekly |
| Cohort | How do segments perform over time? | Monthly |

### Attribution Models

| Model | Credit Distribution | Best For |
|-------|-------------------|----------|
| Last Click | 100% to final touchpoint | Short cycles, direct response |
| First Click | 100% to first touchpoint | Brand awareness, TOFU |
| Linear | Equal across all | Understanding full journey |
| Time Decay | More to recent touches | Long sales cycles |
| Position-Based | 40/20/40 first-mid-last | Balanced view |
| Data-Driven | ML-based distribution | High volume, mature programs |

### Marketing KPIs by Funnel Stage

**TOFU (Awareness)**
- Impressions, reach, traffic
- CPM, cost per visitor
- Brand search volume

**MOFU (Consideration)**
- Leads, MQLs, engagement
- CPL, cost per MQL
- Content downloads, webinar registrations

**BOFU (Decision)**
- SQLs, opportunities, customers
- CAC, cost per opportunity
- Demo requests, trial signups

**Retention**
- NPS, retention rate, churn
- LTV, expansion revenue
- Referrals, advocacy

## Best Practices

### Setup Excellence
1. **UTM Discipline**: Consistent naming convention across all campaigns
2. **Goal Hierarchy**: Primary conversions > secondary > micro-conversions
3. **Cross-Domain Tracking**: Proper setup for checkout/payment flows
4. **Event Taxonomy**: Clear naming for custom events

### Reporting Excellence
1. **Context Always**: Never report numbers without comparison (vs target, vs previous)
2. **Action-Oriented**: Every insight should suggest an action
3. **Visualization**: Use appropriate chart types (trends=line, comparison=bar)
4. **Segmentation**: Break down by meaningful dimensions

### Attribution Excellence
1. **Window Matching**: Attribution window matches sales cycle
2. **Model Selection**: Choose model based on marketing maturity
3. **Multi-Touch Visibility**: Track full journey, not just last touch
4. **Offline Integration**: Include phone, events, direct sales

## Agent Integration

| Agent | How They Use This Skill |
|-------|------------------------|
| `researcher` | Compiling performance data, competitive benchmarks |
| `lead-qualifier` | Funnel conversion analysis, lead source quality |
| `planner` | Budget allocation based on channel ROI |
| `project-manager` | Campaign performance tracking |

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Wrong | Do This Instead |
|--------------|----------------|-----------------|
| Vanity metrics only | Impressions ≠ impact | Focus on conversion metrics |
| Last-click bias | Ignores awareness touchpoints | Use multi-touch attribution |
| No control groups | Can't prove causation | A/B test when possible |
| Siloed data | Missing full picture | Integrate CRM + analytics |
| Report without action | Wastes time and attention | Include recommendations |

## Workflow Integration

- `crm-workflow.md` - Lead stage definitions, scoring thresholds
- `sales-workflow.md` - SQL criteria, deal velocity metrics

## Related Commands

- `/report/weekly` - Weekly performance report
- `/report/monthly` - Monthly strategic report
- `/checklist/analytics-monthly` - Monthly analytics review
- `/analytics/roi` - Campaign ROI calculation
- `/analytics/funnel` - Funnel performance analysis

## References

- `references/google-analytics.md` - GA4 setup and usage
- `references/search-console.md` - SEO performance tracking
- `references/attribution-models.md` - Attribution deep dive
- `references/dashboards.md` - Reporting best practices
- `references/reporting-templates.md` - Client-ready report templates
