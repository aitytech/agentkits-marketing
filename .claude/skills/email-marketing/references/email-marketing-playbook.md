# Email Marketing Playbook

Based on research from [Litmus](https://www.litmus.com/), [Mailchimp](https://mailchimp.com/resources/), [Really Good Emails](https://reallygoodemails.com/).

---

## Email Benchmarks

### Industry Averages (2024)
| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| Open Rate | <15% | 15-25% | 25-35% | >35% |
| Click Rate | <1% | 1-3% | 3-5% | >5% |
| CTOR | <10% | 10-15% | 15-25% | >25% |
| Unsubscribe | >0.5% | 0.2-0.5% | 0.1-0.2% | <0.1% |
| Bounce Rate | >5% | 2-5% | 1-2% | <1% |
| Spam Complaint | >0.1% | 0.05-0.1% | <0.05% | <0.01% |

### By Email Type
| Type | Avg Open | Avg Click |
|------|----------|-----------|
| Welcome | 50-60% | 14% |
| Newsletter | 20-25% | 2-3% |
| Promotional | 15-20% | 1-2% |
| Transactional | 60-80% | 10-15% |
| Re-engagement | 10-15% | 1-2% |
| Abandoned cart | 40-50% | 8-10% |

---

## Email Types & Purposes

### Lifecycle Emails
| Email | Trigger | Goal |
|-------|---------|------|
| Welcome | Signup | Engagement, value delivery |
| Onboarding | Post-signup | Activation |
| Feature education | Usage milestone | Adoption |
| Re-engagement | Inactivity | Win back |
| Anniversary | Time-based | Retention |
| Renewal | Subscription ending | Retention |

### Marketing Emails
| Email | Purpose | Frequency |
|-------|---------|-----------|
| Newsletter | Value, engagement | Weekly/bi-weekly |
| Promotional | Sales, offers | As needed |
| Announcement | News, launches | As needed |
| Event | Webinar, conference | Event-based |
| Content | Blog, resources | With new content |

### Transactional Emails
| Email | Trigger |
|-------|---------|
| Confirmation | Sign up, purchase |
| Receipt | Purchase complete |
| Shipping | Order shipped |
| Password reset | User request |
| Account alerts | Security, usage |

---

## Subject Line Optimization

### Best Practices
- **Length:** 30-50 characters (mobile-friendly)
- **Preview text:** Extends subject, not repeats
- **Personalization:** Can increase open 10-14%
- **Urgency:** Use sparingly, be genuine
- **Numbers:** Specific > vague
- **Questions:** Create curiosity

### Subject Line Formulas
| Formula | Example |
|---------|---------|
| [Number] + [Benefit] | "5 ways to save 2 hours today" |
| Question | "Still struggling with [problem]?" |
| How-to | "How to [achieve result] in [time]" |
| Urgency | "[Time left]: Your offer expires" |
| Personalization | "[Name], you're invited" |
| Curiosity gap | "The mistake you're probably making" |

### Words to Test
| Increase Opens | May Decrease |
|----------------|--------------|
| You, Your | We, Our (overused) |
| Free (if genuine) | Free (if spammy) |
| New | Limited (overused) |
| Exclusive | Don't miss |
| Quick, Easy | Urgent (if fake) |

### A/B Test Ideas
1. Question vs statement
2. With emoji vs without
3. Short vs long
4. Personalized vs generic
5. Urgency vs no urgency
6. Numbers vs no numbers

---

## Email Design Best Practices

### Layout Principles
```
┌─────────────────────────────────┐
│           HEADER/LOGO           │
├─────────────────────────────────┤
│         HERO IMAGE/TEXT         │
│                                 │
│      Main headline here         │
├─────────────────────────────────┤
│          BODY CONTENT           │
│  Supporting text and value      │
│                                 │
│      [PRIMARY CTA BUTTON]       │
│                                 │
├─────────────────────────────────┤
│       SECONDARY CONTENT         │
│   (optional additional info)    │
├─────────────────────────────────┤
│            FOOTER               │
│   Unsubscribe • Contact • Social│
└─────────────────────────────────┘
```

### Design Specifications
| Element | Specification |
|---------|--------------|
| Width | 600px max (500-600 ideal) |
| Font size | 14-16px body, 22-28px headline |
| Line height | 1.5 |
| CTA button | 44px+ height, 120px+ width |
| Image width | Match container |
| Alt text | Always include |

### Mobile Optimization
- Single column layout
- Large touch targets (44px+)
- 16px minimum font
- Stacked content
- Tap-friendly CTAs
- Test on actual devices

---

## CTA Optimization

### Button Best Practices
| Element | Best Practice |
|---------|---------------|
| Color | Contrast with email, brand aligned |
| Size | Large, easy to tap |
| Position | Above fold, repeated below |
| Copy | Action verb + benefit |
| Quantity | One primary CTA |

### CTA Copy Examples
| Weak | Strong |
|------|--------|
| Click Here | Start My Free Trial |
| Submit | Get My Report |
| Learn More | See How It Works |
| Buy Now | Get Instant Access |
| Download | Download the Guide |

### CTA Placement
- **Hero section:** Primary CTA
- **Mid-content:** Repeat for scanners
- **Bottom:** Final chance
- **PS line:** Text link (high visibility)

---

## Segmentation Strategies

### Segmentation Types
| Type | Criteria | Example |
|------|----------|---------|
| Demographic | Role, company size | CMOs at enterprise |
| Behavioral | Actions, engagement | Active users |
| Purchase | Buyer stage, history | Recent purchasers |
| Engagement | Email activity | Opened 3+ recently |
| Interest | Content consumed | Blog readers |

### Key Segments
| Segment | Definition | Strategy |
|---------|------------|----------|
| Highly engaged | Opens 75%+, clicks | Rewards, advanced content |
| Engaged | Opens 25-75% | Regular nurture |
| At-risk | Opens <25% | Re-engagement campaign |
| Inactive | No opens 90+ days | Win-back or sunset |
| New subscribers | <30 days | Welcome sequence |
| Customers | Has purchased | Upsell, loyalty |

### Personalization Levels
| Level | Implementation | Example |
|-------|----------------|---------|
| Basic | Name, company | "Hi [First Name]" |
| Behavioral | Past actions | "Since you downloaded..." |
| Dynamic | Content blocks | Show relevant products |
| Predictive | AI recommendations | "You might like..." |

---

## Deliverability

### Authentication Setup
| Protocol | Purpose |
|----------|---------|
| SPF | Authorizes sending servers |
| DKIM | Cryptographic signature |
| DMARC | Reporting and policy |

### List Hygiene
| Action | Frequency |
|--------|-----------|
| Remove hard bounces | Immediate |
| Flag soft bounces | After 3 |
| Sunset inactive | 90-180 days |
| Re-confirm stale | Annually |
| Remove spam complaints | Immediate |

### Reputation Factors
| Factor | Impact | Maintenance |
|--------|--------|-------------|
| Bounce rate | High | Keep <2% |
| Spam complaints | Very High | Keep <0.1% |
| Engagement | High | Segment by activity |
| Sending consistency | Medium | Regular schedule |
| Authentication | High | SPF, DKIM, DMARC |

### Warm-Up Schedule (New Domain)
| Week | Daily Volume | Ramp |
|------|-------------|------|
| 1 | 50-100 | Start slow |
| 2 | 100-500 | 2-5x |
| 3 | 500-2,000 | 2-4x |
| 4 | 2,000-10,000 | 2-5x |
| 5+ | Full volume | Gradual increase |

---

## Automation Workflows

### Essential Automations
| Workflow | Trigger | Emails |
|----------|---------|--------|
| Welcome | Signup | 3-7 emails |
| Onboarding | Trial start | 5-10 emails |
| Abandoned cart | Cart + no purchase | 2-3 emails |
| Re-engagement | Inactive 30+ days | 3-5 emails |
| Post-purchase | Purchase | 2-4 emails |

### Welcome Sequence Template
```
Email 1 (Immediate): Welcome + Deliver Promise
Email 2 (Day 1-2): Quick Win / First Value
Email 3 (Day 3-4): Story / Why We Exist
Email 4 (Day 5-6): Social Proof
Email 5 (Day 7-8): Feature Highlight
Email 6 (Day 10-12): Objection Handler
Email 7 (Day 14): Soft Pitch / Next Step
```

### Behavior-Based Triggers
| Trigger | Email |
|---------|-------|
| Downloaded ebook | Related content |
| Visited pricing | Pricing FAQ |
| Used feature | Advanced tips |
| Trial ending | Upgrade reminder |
| Churned | Win-back |

---

## Testing Framework

### What to Test
| Element | Priority | Impact |
|---------|----------|--------|
| Subject line | High | Open rate |
| Send time | Medium | Open rate |
| CTA copy | High | Click rate |
| CTA design | Medium | Click rate |
| Email length | Medium | Engagement |
| Personalization | Medium | Both |
| Content order | Low | Engagement |

### Test Duration
- Minimum sample: 1,000 per variant
- Minimum time: 24-48 hours
- Statistical significance: 95%
- Consider time zones

### Testing Calendar
| Week | Test Focus |
|------|------------|
| 1 | Subject line A/B |
| 2 | Send time |
| 3 | CTA copy |
| 4 | Personalization |
| 5 | Content length |
| 6 | Analyze, implement winners |

---

## Metrics & Reporting

### Key Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| Open Rate | Opens / Delivered | >25% |
| Click Rate | Clicks / Delivered | >3% |
| CTOR | Clicks / Opens | >15% |
| Conversion Rate | Conversions / Clicks | Track |
| Revenue per Email | Revenue / Sent | Track |
| List Growth | (New - Unsubs) / Total | >2%/mo |

### Dashboard Template
```
WEEKLY EMAIL REPORT

Campaigns Sent: X
Total Emails: XX,XXX
Overall Open Rate: XX%
Overall Click Rate: X.X%
Conversions: XXX
Revenue: $X,XXX

Top Performing:
1. [Campaign] - XX% open, X.X% click
2. [Campaign] - XX% open, X.X% click

List Health:
- New subscribers: +XXX
- Unsubscribes: -XX
- Net growth: +XXX (X.X%)
```
