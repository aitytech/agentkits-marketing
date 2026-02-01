# GA4 Implementation & Analytics Guide

Based on research from [Google](https://developers.google.com/analytics), [Simo Ahava](https://www.simoahava.com/), [Measure School](https://measureschool.com/).

---

## GA4 vs Universal Analytics

### Key Differences
| Aspect | Universal Analytics | GA4 |
|--------|---------------------|-----|
| Data model | Session-based | Event-based |
| User tracking | Cookies only | Cookies + User ID + ML |
| Reporting | Pre-built reports | Explorations + custom |
| Privacy | Limited controls | Privacy-centric |
| AI/ML | Basic | Enhanced predictions |
| Cross-platform | Limited | Native |

---

## Essential Events to Track

### Automatically Collected Events
| Event | Description |
|-------|-------------|
| page_view | Page loads |
| session_start | New session begins |
| first_visit | First time visitor |
| user_engagement | Active 10+ seconds |
| scroll | 90% page scroll |
| click | Outbound link clicks |
| file_download | File downloads |
| video_start/progress/complete | Video engagement |

### Recommended Events (E-commerce)
| Event | When to Fire | Parameters |
|-------|--------------|------------|
| view_item | Product page | item_id, item_name, price |
| add_to_cart | Cart add | item_id, quantity, value |
| begin_checkout | Checkout start | items, value, currency |
| add_payment_info | Payment entered | payment_type |
| purchase | Order complete | transaction_id, value, items |

### Recommended Events (SaaS)
| Event | When to Fire | Parameters |
|-------|--------------|------------|
| sign_up | Registration complete | method |
| login | User logs in | method |
| generate_lead | Lead form submit | value, currency |
| tutorial_begin | Onboarding starts | - |
| tutorial_complete | Onboarding done | - |
| level_up | Activation milestone | level_name |

### Custom Events (Marketing)
| Event | Description | Parameters |
|-------|-------------|------------|
| cta_click | CTA button clicked | cta_text, cta_location |
| form_start | Form interaction began | form_name |
| form_submit | Form submitted | form_name, lead_type |
| video_watch | Video milestone | video_title, percent |
| pricing_view | Pricing page viewed | - |
| demo_request | Demo requested | plan_interest |
| trial_start | Trial activated | trial_type |

---

## Event Implementation

### GTM Data Layer Push
```javascript
// Form submission event
dataLayer.push({
  'event': 'form_submit',
  'form_name': 'demo_request',
  'lead_type': 'marketing_qualified',
  'form_location': 'pricing_page'
});

// CTA click event
dataLayer.push({
  'event': 'cta_click',
  'cta_text': 'Start Free Trial',
  'cta_location': 'hero_section',
  'page_type': 'homepage'
});

// Purchase event
dataLayer.push({
  'event': 'purchase',
  'transaction_id': 'T12345',
  'value': 99.00,
  'currency': 'USD',
  'items': [{
    'item_id': 'PRO_PLAN',
    'item_name': 'Pro Plan Monthly',
    'price': 99.00,
    'quantity': 1
  }]
});
```

### Direct GA4 Implementation
```javascript
// gtag.js implementation
gtag('event', 'sign_up', {
  'method': 'email'
});

gtag('event', 'generate_lead', {
  'value': 50.00,
  'currency': 'USD'
});
```

---

## Conversion Setup

### Key Conversions to Mark
| Conversion | Priority | Value |
|------------|----------|-------|
| purchase | High | Transaction value |
| sign_up | High | Estimated LTV |
| generate_lead | High | Lead value |
| demo_request | High | Lead value |
| trial_start | High | Trial value |
| tutorial_complete | Medium | - |

### Conversion Value Assignment
```
Lead Value = (Conversion Rate × Average Deal Size) / Leads

Example:
- 10% of demo leads become customers
- Average deal = $5,000/year
- Demo lead value = 0.10 × $5,000 = $500
```

---

## Attribution Models

### Available Models in GA4
| Model | Description | Best For |
|-------|-------------|----------|
| Data-driven | ML-based, distributes credit | Default, most accurate |
| Last click | 100% to final touchpoint | Direct response |
| First click | 100% to first touchpoint | Brand awareness |
| Linear | Equal across all | Long consideration |
| Position-based | 40/20/40 first/middle/last | Balanced view |
| Time decay | More to recent | Short cycles |

### Attribution Comparison Report
1. Go to Advertising → Attribution
2. Select conversion event
3. Compare models side-by-side
4. Analyze channel value differences

---

## Key Reports & Explorations

### Essential Reports
| Report | Purpose | Key Metrics |
|--------|---------|-------------|
| Acquisition overview | Traffic sources | Users, sessions, conversions |
| Engagement overview | User behavior | Engagement time, events |
| Monetization | Revenue | Revenue, transactions, ARPU |
| Retention | User stickiness | Retention rate by cohort |
| User attributes | Demographics | Age, gender, interests |

### Custom Explorations
| Exploration Type | Use Case |
|------------------|----------|
| Free-form | Custom report building |
| Funnel exploration | Conversion funnel analysis |
| Path exploration | User journey visualization |
| Segment overlap | Audience comparison |
| Cohort exploration | Retention by cohort |
| User lifetime | LTV analysis |

### Funnel Exploration Setup
```
Steps:
1. page_view (landing page)
2. cta_click (primary CTA)
3. form_start (lead form)
4. form_submit (conversion)

Breakdown by:
- Traffic source
- Device category
- Country
```

---

## Audiences & Segments

### High-Value Audiences
| Audience | Definition |
|----------|------------|
| Engaged users | engagement_time_msec > 120000 |
| Recent converters | purchase in last 7 days |
| Cart abandoners | add_to_cart but no purchase |
| High-intent | pricing_view + feature_page_view |
| Churning users | last_visit > 30 days ago |

### Predictive Audiences
| Audience | Description |
|----------|-------------|
| Likely purchasers | Predicted to buy in 7 days |
| Likely churning | Predicted to not return |
| Predicted revenue | High/medium/low LTV |

### Audience Activation
- Export to Google Ads for remarketing
- Export to Display & Video 360
- Use for personalization testing
- Trigger email automation

---

## UTM Tracking Best Practices

### Standard Parameters
| Parameter | Purpose | Example |
|-----------|---------|---------|
| utm_source | Traffic origin | google, facebook, newsletter |
| utm_medium | Marketing channel | cpc, email, social |
| utm_campaign | Campaign name | spring_sale_2024 |
| utm_content | Ad variation | blue_button, video_ad |
| utm_term | Keywords | running+shoes |

### Naming Conventions
```
Source: lowercase, no spaces
- google, facebook, linkedin, twitter

Medium: standardized
- cpc (paid search)
- display (banner ads)
- social (organic social)
- email (email campaigns)
- referral (partner links)

Campaign: descriptive, consistent
- {year}{month}_{product}_{offer}
- 2024q1_pro_plan_trial
```

### URL Builder Template
```
https://example.com/landing-page
?utm_source=google
&utm_medium=cpc
&utm_campaign=2024q1_brand_awareness
&utm_content=responsive_ad_v2
&utm_term=project+management+software
```

---

## Dashboard KPIs

### Executive Dashboard
| KPI | Calculation | Target |
|-----|-------------|--------|
| Total Users | Unique users | Growth |
| New Users | First-time visitors | Growth |
| Conversion Rate | Conversions/Users | >3% |
| Revenue | Total transaction value | Growth |
| ROAS | Revenue/Ad Spend | >3:1 |

### Marketing Dashboard
| KPI | Calculation | Target |
|-----|-------------|--------|
| Sessions | Total visits | Growth |
| Avg Engagement Time | Time actively on site | >2 min |
| Pages/Session | Pageviews/Sessions | >2 |
| Bounce Rate | Single-page sessions | <50% |
| Lead Volume | form_submit events | Growth |
| Cost per Lead | Ad Spend/Leads | Decrease |

### Product Dashboard
| KPI | Calculation | Target |
|-----|-------------|--------|
| Signups | sign_up events | Growth |
| Activation Rate | Activated/Signups | >40% |
| Trial-to-Paid | Purchases/Trials | >10% |
| Feature Adoption | feature_use events | Track |
| Retention (Day 7) | Returned users | >40% |

---

## Troubleshooting

### Common Issues
| Issue | Diagnosis | Fix |
|-------|-----------|-----|
| Missing events | DebugView empty | Check GTM triggers |
| Double counting | Event fires 2x | Dedupe in GTM |
| No conversions | Events but no conversions | Mark as conversion |
| User count high | Bot traffic | Filter internal/bots |
| Revenue = 0 | Value not passed | Check value parameter |

### Debug Tools
1. **GA4 DebugView** - Real-time event monitoring
2. **GTM Preview** - Tag firing verification
3. **Chrome DevTools** - Network requests
4. **Tag Assistant** - Legacy debugging
5. **GA4 Realtime** - Live data verification
