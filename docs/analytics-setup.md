# Analytics Setup

Tracking and measurement configuration for marketing performance.

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

---

## Analytics Stack

### Core Tools

| Tool | Purpose | Setup Priority |
|------|---------|----------------|
| Google Analytics 4 | Website analytics | Critical |
| Google Search Console | SEO performance | Critical |
| CRM | Lead tracking | Critical |
| Email Platform | Email metrics | High |
| Social Analytics | Social performance | Medium |
| Attribution Tool | Multi-touch | Medium |

---

## Google Analytics 4 Setup

### Account Structure

```
Account: [Company Name]
└── Property: [Website]
    └── Data Stream: Web (primary)
```

### Event Tracking

**Recommended Events:**

| Event | Trigger | Parameters |
|-------|---------|------------|
| `page_view` | Page load | page_title, page_location |
| `scroll` | 90% scroll | percent_scrolled |
| `click` | CTA clicks | link_url, link_text |
| `form_start` | Form focus | form_name |
| `form_submit` | Form complete | form_name, form_destination |
| `video_start` | Video play | video_title |
| `video_complete` | Video finish | video_title |
| `file_download` | Download click | file_name, file_type |

### Conversion Setup

| Conversion | Event | Value |
|------------|-------|-------|
| Lead | form_submit (contact) | [Estimated value] |
| Demo Request | form_submit (demo) | [Estimated value] |
| Signup | sign_up | [Estimated value] |
| Purchase | purchase | Transaction value |

### Custom Dimensions

| Dimension | Scope | Use Case |
|-----------|-------|----------|
| User ID | User | Cross-device tracking |
| Content Type | Event | Blog vs landing page |
| Author | Event | Content performance |
| CTA Type | Event | Button effectiveness |

### Audiences

**Create these audiences:**

| Audience | Definition | Use |
|----------|------------|-----|
| Engaged Users | 2+ sessions, 2+ pages | Retargeting |
| Converters | Completed conversion | Exclude from ads |
| High Intent | Pricing page visitors | Priority retargeting |
| Content Consumers | 3+ blog views | Content promotion |

---

## UTM Tracking

### Naming Convention

```
utm_source: lowercase, no spaces (google, facebook, linkedin)
utm_medium: marketing medium (cpc, email, social, organic)
utm_campaign: campaign-name-date (spring-launch-2024)
utm_content: variant identifier (hero-cta-a)
utm_term: keyword (for paid search only)
```

### Examples

**Email Campaign:**
```
?utm_source=newsletter&utm_medium=email&utm_campaign=weekly-digest-dec2024&utm_content=hero-cta
```

**Social Post:**
```
?utm_source=linkedin&utm_medium=social&utm_campaign=product-launch-2024&utm_content=carousel-1
```

**Paid Search:**
```
?utm_source=google&utm_medium=cpc&utm_campaign=brand-terms&utm_term=company-name
```

### UTM Builder Template

| Field | Format | Example |
|-------|--------|---------|
| Source | platform | linkedin |
| Medium | channel | cpc |
| Campaign | name-YYMMDD | spring-launch-241215 |
| Content | variant | ad-a |
| Term | keyword | marketing-software |

---

## CRM Integration

### Lead Source Tracking

**Required Fields:**

| Field | Source | Purpose |
|-------|--------|---------|
| Original Source | UTM or referrer | First touch |
| Lead Source | Most recent UTM | Last touch |
| Campaign | utm_campaign | Attribution |
| Content | utm_content | A/B tracking |

### Lead Scoring Setup

**Demographic Scoring (0-50):**

| Factor | Criteria | Points |
|--------|----------|--------|
| Job Title | C-level/VP | +20 |
| Job Title | Director/Manager | +15 |
| Company Size | 500+ | +15 |
| Company Size | 50-499 | +10 |
| Industry | Target | +15 |
| Location | Target geo | +10 |

**Behavioral Scoring (0-50):**

| Action | Points | Decay |
|--------|--------|-------|
| Pricing page | +15 | -5/week |
| Demo request | +20 | None |
| Case study | +10 | -3/week |
| Webinar | +15 | -3/week |
| Blog visit | +2 | -1/week |
| Email open | +1 | -1/week |
| Email click | +3 | -1/week |

### MQL/SQL Thresholds

| Stage | Score | Action |
|-------|-------|--------|
| Lead | 0-29 | Marketing nurture |
| Cool Lead | 30-49 | Accelerated nurture |
| MQL | 50-69 | Sales notification |
| Hot Lead | 70+ | Immediate sales action |

---

## Reporting Dashboards

### Executive Dashboard

| Metric | Source | Frequency |
|--------|--------|-----------|
| Traffic | GA4 | Weekly |
| Leads | CRM | Weekly |
| MQLs | CRM | Weekly |
| Pipeline value | CRM | Weekly |
| Revenue | CRM | Monthly |
| CAC | Calculated | Monthly |

### Marketing Dashboard

| Metric | Source | Drill-down |
|--------|--------|------------|
| Sessions by source | GA4 | Channel detail |
| Conversion rate | GA4 | By page/source |
| Email performance | Email platform | By campaign |
| Social engagement | Social tools | By platform |
| Ad performance | Ad platforms | By campaign |

### Campaign Dashboard

| Metric | Definition | Target |
|--------|------------|--------|
| Reach | Total impressions | [Target] |
| Engagement | Clicks + interactions | [Target] |
| Leads | Form submissions | [Target] |
| Cost per lead | Spend / leads | <$[X] |
| ROAS | Revenue / spend | 3:1+ |

---

## Attribution Model

### Recommended: Position-Based (40/20/40)

| Touchpoint | Credit |
|------------|--------|
| First touch | 40% |
| Middle touches | 20% (split evenly) |
| Last touch | 40% |

### Attribution Window

| Conversion Type | Window |
|-----------------|--------|
| B2B Enterprise | 90 days |
| B2B SMB | 30 days |
| B2C | 7-14 days |

### Multi-Touch Tracking

**Track these touchpoints:**
- First organic visit
- Content downloads
- Email engagements
- Paid ad clicks
- Direct visits
- Conversion event

---

## Data Quality

### Daily Checks

- [ ] Tracking firing correctly
- [ ] No spam traffic spikes
- [ ] Conversion tracking working
- [ ] UTMs capturing properly

### Weekly Checks

- [ ] Data matches across platforms
- [ ] Lead source attribution accurate
- [ ] No duplicate contacts
- [ ] Scoring updating correctly

### Monthly Audit

- [ ] GA4 filters working
- [ ] Goals/conversions accurate
- [ ] Attribution window appropriate
- [ ] Report accuracy verified

---

## Privacy Compliance

### Cookie Consent

**Required for GDPR/CCPA:**
- Cookie banner on first visit
- Opt-in before tracking (GDPR)
- Opt-out option visible (CCPA)
- Consent mode in GA4

### Data Retention

| Data Type | Retention | Notes |
|-----------|-----------|-------|
| GA4 user data | 14 months | Configurable |
| CRM contacts | Active + 2 years | Per policy |
| Email lists | Active only | Remove inactive |

---

## Agent Integration

| Task | Agent | Notes |
|------|-------|-------|
| Performance analysis | `researcher` | Regular reporting |
| Attribution review | `lead-qualifier` | Lead journey |
| Dashboard creation | `project-manager` | Report templates |
| Tracking implementation | Manual | Technical setup |

---

*Last updated: [Date]*
*Version: 1.0*
