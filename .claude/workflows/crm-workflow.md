# CRM Workflow

Customer relationship management automation and lifecycle marketing.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

**Activate:** `marketing-fundamentals`, `email-marketing` skills

## Contact Lifecycle Stages

```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

| Stage | Definition | Automation Trigger |
|-------|------------|-------------------|
| Subscriber | Email opt-in only | Welcome sequence |
| Lead | Showed interest | Nurture sequence |
| MQL | Marketing qualified | Sales notification |
| SQL | Sales qualified | CRM assignment |
| Opportunity | Active deal | Deal tracking |
| Customer | Closed won | Onboarding sequence |
| Advocate | Happy customer | Referral program |

## Lead Scoring Model

### Demographic Score (0-50 points)

| Factor | Criteria | Points |
|--------|----------|--------|
| Job Title | C-level/VP | +20 |
| Job Title | Director/Manager | +15 |
| Job Title | Individual contributor | +5 |
| Company Size | 500+ employees | +15 |
| Company Size | 50-499 employees | +10 |
| Company Size | <50 employees | +5 |
| Industry | Target industry | +15 |
| Location | Target geography | +10 |

### Behavioral Score (0-50 points)

| Action | Points | Decay |
|--------|--------|-------|
| Pricing page visit | +15 | -5/week |
| Demo request | +20 | None |
| Case study download | +10 | -3/week |
| Webinar attendance | +15 | -3/week |
| Blog visit | +2 | -1/week |
| Email open | +1 | -1/week |
| Email click | +3 | -1/week |
| Free trial signup | +25 | None |
| Return visit (within 7 days) | +5 | None |

### Unified Lead Temperature (Aligned with Sales Workflow)

| Score | Temperature | Action | SLA |
|-------|-------------|--------|-----|
| 70-100 | 🔥 Hot | Immediate sales outreach | <5 minutes |
| 50-69 | 🌡️ Warm | Sales alert, priority follow-up | <1 hour |
| 30-49 | ❄️ Cool | Accelerated nurture | <24 hours |
| 0-29 | 🧊 Cold | Marketing nurture only | Standard |

**Speed-to-Lead Research:** Responding within 5 minutes increases conversion 21x vs 30-minute response.

### Score Decay Rules

- Scores decay 10% weekly if no engagement
- Minimum score floor: 10 (never below if any engagement)
- Reset to 0 after 90 days of no activity

## Automation Sequences

### Welcome Sequence (New Subscriber)

**Trigger:** Email signup
**Goal:** Introduce brand, deliver value, build trust

| Day | Email | Subject Line | Content |
|-----|-------|--------------|---------|
| 0 | Welcome | Welcome to [Brand]! | Brand intro + what to expect |
| 1 | Value | [Quick win content] | Immediate actionable value |
| 3 | Story | How we help [audience] | Brand story + mission |
| 5 | Social Proof | See what others achieved | Case study highlight |
| 7 | Engagement | Quick question for you | Survey or preference center |

**Best Practice:** Complete welcome sequence within 7 days while engagement is highest.

### Lead Nurture Sequence (MQL)

**Trigger:** Lead score reaches 50 (MQL threshold)
**Goal:** Educate, build trust, move to SQL

| Week | Email | Content Type |
|------|-------|--------------|
| 1 | Problem aware | Blog: Industry pain points |
| 2 | Solution aware | Guide: How to solve [problem] |
| 3 | Product aware | Case study: [Similar company] results |
| 4 | Evaluation | Comparison: [Your solution] vs alternatives |
| 5 | Decision | Offer: Free consultation/demo |
| 6 | Urgency | Limited time offer or scarcity |

### Re-engagement Sequence (Inactive)

**Trigger:** No engagement for 30 days
**Goal:** Win back or clean list

| Day | Email | Subject Line |
|-----|-------|--------------|
| 0 | Miss you | We haven't heard from you |
| 3 | Value | [Best content] you might have missed |
| 7 | Offer | Special offer just for you |
| 14 | Feedback | Quick question: What happened? |
| 21 | Breakup | Should we part ways? |

**After breakup:** Move to "Inactive" segment, suppress from campaigns

### Customer Onboarding Sequence

**Trigger:** Deal closed won
**Goal:** Successful adoption, reduce churn

| Day | Email | Content |
|-----|-------|---------|
| 0 | Welcome | Welcome aboard + next steps |
| 1 | Getting Started | Quick start guide |
| 3 | First Win | How to achieve [quick win] |
| 7 | Check-in | How's it going? Need help? |
| 14 | Feature | Did you know about [feature]? |
| 21 | Success | Tips from successful customers |
| 30 | Review | How are we doing? (NPS) |

### Upsell/Cross-sell Sequence

**Trigger:** Customer for 90+ days + high engagement
**Goal:** Expand account value

| Week | Email | Content |
|------|-------|---------|
| 1 | Success | Congrats on [milestone/achievement] |
| 2 | Unlock | You're ready for [next level feature] |
| 3 | Social Proof | How [similar customer] upgraded |
| 4 | Offer | Exclusive upgrade offer |

## Segmentation Rules

### By Engagement Level

| Segment | Criteria | Treatment |
|---------|----------|-----------|
| Highly Engaged | 5+ interactions/month | VIP content, early access |
| Engaged | 2-4 interactions/month | Standard nurture |
| Low Engagement | 1 interaction/month | Re-engagement focus |
| Inactive | 0 interactions/30 days | Win-back sequence |

### By Lifecycle Stage

| Segment | Criteria | Content Focus |
|---------|----------|---------------|
| New | <30 days | Education, brand building |
| Developing | 30-90 days | Product value, use cases |
| Established | 90+ days | Advanced features, upgrades |
| At Risk | Declining engagement | Retention, support |

### By Intent

| Segment | Signals | Action |
|---------|---------|--------|
| High Intent | Pricing views, demo requests | Fast-track to sales |
| Medium Intent | Multiple content downloads | Accelerate nurture |
| Low Intent | Single visit, newsletter only | Long-term nurture |

## Data Hygiene

### Daily Tasks
- [ ] Process bounced emails
- [ ] Update unsubscribes
- [ ] Merge duplicate contacts

### Weekly Tasks
- [ ] Review spam complaints
- [ ] Validate new contacts
- [ ] Update lead scores

### Monthly Tasks
- [ ] Segment audit
- [ ] List cleaning (remove 6-month inactive)
- [ ] Data enrichment update
- [ ] Compliance check

### Data Quality Rules

| Field | Validation | Action if Invalid |
|-------|------------|-------------------|
| Email | Valid format + deliverable | Mark invalid, suppress |
| Company | Not empty for B2B | Flag for enrichment |
| Phone | Valid format | Flag for verification |
| Country | ISO standard | Standardize |

## Compliance & Privacy (GDPR/CCPA)

### Consent Management
- **Explicit opt-in** required for marketing communications
- **Double opt-in** recommended for EU contacts
- **Preference center** for granular consent control
- **Easy unsubscribe** in every email (one-click)

### Data Rights
| Right | Action | SLA |
|-------|--------|-----|
| Access | Provide data export | 30 days |
| Rectification | Update contact data | 7 days |
| Erasure | Delete all data | 30 days |
| Portability | Export in standard format | 30 days |

### Retention Policy
- Active contacts: Retain indefinitely with consent
- Inactive (12+ months): Archive or delete
- Unsubscribed: Keep suppression list only
- Bounced: Remove after 30 days

## Reporting & Metrics

### Engagement Metrics

| Metric | Target | Frequency |
|--------|--------|-----------|
| Email Open Rate | >25% | Weekly |
| Click Rate | >3% | Weekly |
| Unsubscribe Rate | <0.5% | Weekly |
| List Growth Rate | >5%/month | Monthly |

### Conversion Metrics

| Metric | Target | Frequency |
|--------|--------|-----------|
| Lead → MQL | >20% | Monthly |
| MQL → SQL | >30% | Monthly |
| SQL → Opportunity | >50% | Monthly |
| Opportunity → Customer | >25% | Monthly |

### Lifecycle Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Time to MQL | Days from lead to MQL | <14 days |
| Time to SQL | Days from MQL to SQL | <7 days |
| Customer Lifetime Value | Total revenue per customer | Track trend |
| Churn Rate | Customers lost/month | <5% |

## Integration Points

### Marketing → CRM
- Lead capture forms
- Landing page submissions
- Content downloads
- Event registrations
- Chat conversations

### CRM → Marketing
- Stage changes (trigger sequences)
- Deal updates (personalization)
- Customer status (segment updates)
- Activity data (scoring)

### CRM → Sales
- MQL notifications
- Lead assignments
- Activity alerts
- Score changes

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Lead scoring review | `lead-qualifier` | Weekly audit |
| Segment analysis | `lead-qualifier` | Monthly review |
| Sequence creation | `email-wizard` | New campaign |
| Re-engagement copy | `copywriter` | Win-back campaign |
| Churn analysis | `continuity-specialist` | At-risk segment |
| Upsell opportunities | `upsell-maximizer` | Customer review |
| Data enrichment | `researcher` | New leads batch |
| Lead generation | `attraction-specialist` | Pipeline building |
| Sales enablement | `sales-enabler` | MQL → SQL handoff |
| Competitive intel | `researcher` | Market analysis |
