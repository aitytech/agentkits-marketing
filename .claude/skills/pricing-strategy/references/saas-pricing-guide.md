# SaaS Pricing Strategy Guide

Based on research from [Price Intelligently](https://www.priceintelligently.com/), [OpenView](https://openviewpartners.com/), [Kyle Poyar](https://www.growthunhinged.com/).

---

## Pricing Models

### Model Types
| Model | Description | Best For |
|-------|-------------|----------|
| Flat-rate | One price, all features | Simple products |
| Tiered | Multiple packages | Most SaaS |
| Per-seat | Price × users | Collaboration tools |
| Usage-based | Pay for what you use | Infrastructure, API |
| Freemium | Free + paid tiers | PLG, viral products |
| Hybrid | Combination | Complex products |

### Per-Seat Pricing
**Pros:**
- Predictable revenue
- Easy to understand
- Scales with value

**Cons:**
- Discourages adoption
- Seat-sharing workarounds
- Misaligned with value

**When to use:** Collaboration tools, team-based products

### Usage-Based Pricing
**Pros:**
- Aligns price with value
- Low barrier to entry
- Scales naturally

**Cons:**
- Revenue unpredictability
- Complex to explain
- Harder to forecast

**When to use:** APIs, infrastructure, variable-value products

### Tiered Pricing
**Pros:**
- Captures different segments
- Psychological anchoring
- Upsell path clear

**Cons:**
- Feature decisions complex
- Middle tier optimization
- Feature creep

**When to use:** Most B2B SaaS products

---

## Pricing Tiers Best Practices

### Number of Tiers
| Tiers | Pros | Cons |
|-------|------|------|
| 2 | Simple, clear choice | Limited capture |
| 3 | Decoy effect works | Most common |
| 4 | Enterprise segment | More complex |
| 5+ | Avoid | Decision paralysis |

### Tier Structure Template
```
FREE           STARTER        PRO            ENTERPRISE
$0/mo          $X/mo          $Y/mo          Custom

Limited        Core           Full           Everything +
features       features       features       Custom needs

Individual     Small teams    Growing        Large orgs
users                         companies
```

### Tier Naming
| Convention | Examples |
|------------|----------|
| Good/Better/Best | Basic, Pro, Enterprise |
| Audience-based | Starter, Growth, Scale |
| Size-based | Individual, Team, Business |
| Creative | Launch, Grow, Dominate |

### Feature Distribution
| Feature Type | Free | Basic | Pro | Enterprise |
|--------------|------|-------|-----|------------|
| Core value | Limited | ✓ | ✓ | ✓ |
| Power features | ✗ | Limited | ✓ | ✓ |
| Team features | ✗ | ✗ | ✓ | ✓ |
| Admin/security | ✗ | ✗ | Limited | ✓ |
| Support level | Self-serve | Email | Priority | Dedicated |

---

## Pricing Psychology

### Anchoring
Show higher price first to anchor expectations:
```
ENTERPRISE     PRO            BASIC
$199/mo        $49/mo         $19/mo
```
Middle tier seems more reasonable after seeing high anchor.

### Decoy Effect
Design middle tier to push toward target tier:
```
BASIC          PRO ← Target   ENTERPRISE
$19/mo         $49/mo         $199/mo
3 users        10 users       Unlimited
Basic features All features   All features + support
```
Middle tier offers much more value per dollar.

### Price Endings
| Ending | Perception | Use For |
|--------|------------|---------|
| $XX9 | Value, deals | Consumer, low-tier |
| $XX0 | Premium | Enterprise |
| $XX7 | Tested, specific | Higher conversion |

### Annual vs Monthly
| Display | Impact |
|---------|--------|
| Monthly default | More signups |
| Annual default | Higher LTV |
| Show savings | +20-30% annual choice |
| Toggle | User control |

**Savings display:** "Save 20%" or "2 months free"

---

## Pricing Research Methods

### Van Westendorp Analysis
Ask 4 questions:
1. At what price is it too cheap? (quality doubt)
2. At what price is it a bargain? (great deal)
3. At what price is it getting expensive? (need to think)
4. At what price is it too expensive? (won't buy)

**Plot responses to find:**
- Optimal price point (OPP)
- Indifference price point (IDP)
- Range of acceptable prices

### Conjoint Analysis
Test feature/price bundles:
- Which features drive willingness to pay
- Optimal feature packaging
- Price sensitivity by segment

### Competitive Pricing Analysis
| Competitor | Price | Features | Position |
|------------|-------|----------|----------|
| Competitor A | $X | Features | Premium |
| Competitor B | $Y | Features | Value |
| Competitor C | $Z | Features | Budget |
| **You** | $? | Features | Target |

---

## Value Metrics

### What is a Value Metric?
The unit you charge for that scales with customer value.

### Value Metric Examples
| Product Type | Value Metric |
|--------------|--------------|
| Email marketing | Contacts, emails sent |
| CRM | Contacts, users |
| Analytics | Events, MTU |
| Storage | GB, files |
| Project management | Projects, users |
| API | Calls, compute |

### Good Value Metric Criteria
1. **Scales with value** - More usage = more value
2. **Easy to understand** - Customer can calculate
3. **Predictable** - Customer can forecast cost
4. **Measurable** - You can track accurately
5. **Hard to game** - Can't cheat the system

### Value Metric vs Feature Gating
| Approach | Pros | Cons |
|----------|------|------|
| Value metric | Aligns with value | Complex pricing |
| Feature gating | Simple to understand | May not align with value |
| Hybrid | Best of both | Most complex |

---

## Freemium Strategy

### When Freemium Works
✓ Large market size (millions of potential users)
✓ Viral/network effects possible
✓ Low marginal cost to serve free users
✓ Clear value cliff between free/paid
✓ Product-led growth model

### When Freemium Doesn't Work
✗ Small market (freemium dilutes)
✗ High cost per user
✗ No natural upgrade trigger
✗ Sales-led motion needed
✗ Complex implementation

### Freemium Conversion Benchmarks
| Metric | Poor | Average | Good |
|--------|------|---------|------|
| Free-to-paid | <1% | 2-5% | >7% |
| Time to convert | >90 days | 30-60 days | <30 days |
| Upgrade triggers | 0-1 | 2-3 | 4+ |

### Free Tier Design
| Include | Exclude |
|---------|---------|
| Core value (limited) | Advanced features |
| First aha moment | Team collaboration |
| Hook features | Integration depth |
| Self-serve only | Priority support |
| Branding/watermark | White-label |

---

## Price Increase Strategy

### When to Raise Prices
- Significant new value added
- Cost increases (reasonable)
- Underpriced vs. value delivered
- Market research supports it
- Strong product-market fit

### How to Communicate
```
Subject: Important update to your [Product] plan

Hi [Name],

I'm writing to let you know about upcoming changes to
our pricing, effective [date].

Here's what's changing:
• [Current plan] will increase from $X to $Y/month

Why we're making this change:
• [Added features/value since signup]
• [Investment in product/support]
• [First price change in X years]

What this means for you:
• [Grandfather clause, if applicable]
• [When it takes effect]
• [How to contact with questions]

We're committed to continuing to deliver value that
far exceeds this investment.

[Founder name]
```

### Grandfather Clauses
| Approach | When to Use |
|----------|-------------|
| Full grandfather | Loyal customers, small increase |
| Time-limited | Balance fairness/revenue |
| Feature grandfather | New features drive increase |
| No grandfather | Major value add, competitive pricing |

---

## Enterprise Pricing

### Why "Contact Sales"
- High deal values justify sales cost
- Custom requirements need scoping
- Security/compliance requirements
- Multi-year negotiations
- Custom contracts

### Enterprise Features to Include
| Feature | Value |
|---------|-------|
| SSO/SAML | Security requirement |
| Audit logs | Compliance |
| Custom roles | Admin control |
| SLA | Reliability guarantee |
| Dedicated support | High-touch service |
| Custom integrations | Flexibility |
| Data residency | Compliance |
| Training | Onboarding |

### Enterprise Pricing Tactics
- Price anchoring in conversations
- ROI-based selling
- Value-based negotiation
- Multi-year discounts
- Volume discounts

---

## Pricing Page Best Practices

### Page Elements
1. **Clear tier comparison** - Table or cards
2. **Recommended tier** - Highlight "Most Popular"
3. **Annual/monthly toggle** - Show savings
4. **Feature comparison** - Detailed breakdown
5. **FAQ** - Common pricing questions
6. **Trust elements** - Logos, testimonials
7. **Clear CTAs** - Per tier

### Mobile Optimization
- Swipeable tier cards
- Collapsible feature lists
- Sticky CTA on scroll
- Easy tier comparison

### Common Mistakes
| Mistake | Fix |
|---------|-----|
| Too many tiers | 3-4 maximum |
| Unclear differences | Highlight key diff |
| Hidden costs | Transparent pricing |
| No social proof | Add logos/reviews |
| Complex feature list | Group by category |
| No FAQ | Add common questions |

---

## Metrics & Analysis

### Key Pricing Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| ARPU | Revenue / Users | Growing |
| ARPPU | Revenue / Paying Users | Track |
| Conversion rate | Paid / Total | >3% (freemium) |
| Annual mix | Annual / Total | >50% |
| Expansion revenue | Upgrades + Add-ons | >30% of new |
| Price sensitivity | Churn after increase | <5% |

### Pricing Experiments
| Test | What to Measure |
|------|-----------------|
| Price point | Conversion, revenue |
| Annual discount % | Annual mix |
| Tier structure | Tier distribution |
| Default tier | Conversion |
| Free tier limits | Upgrade rate |
| Pricing page layout | Conversion |
