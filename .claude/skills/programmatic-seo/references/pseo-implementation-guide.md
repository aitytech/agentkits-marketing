# Programmatic SEO Implementation Guide

Based on research from [Ahrefs](https://ahrefs.com/blog/programmatic-seo/), [Webflow](https://webflow.com/blog/programmatic-seo), [Positional](https://www.positional.com/blog/programmatic-seo-guide).

---

## What is Programmatic SEO?

Creating hundreds or thousands of SEO-optimized pages at scale using:
- Templates + Databases
- Dynamic content generation
- Structured data automation
- Scalable internal linking

**Examples:**
- Zapier: 800K+ integration pages
- Tripadvisor: Millions of location pages
- G2: Thousands of software comparison pages
- Nomadlist: City pages with dynamic data

---

## pSEO Page Types

### 1. Location Pages
**Pattern:** [Service] in [City/State/Country]
**Example:** "Plumbers in Austin, TX"

| Data Fields | Content Elements |
|-------------|------------------|
| City name | H1: [Service] in [City] |
| State/region | Local stats, population |
| ZIP codes | Service area coverage |
| Nearby cities | Related locations |

### 2. Integration/Connector Pages
**Pattern:** [Product A] + [Product B] Integration
**Example:** "Connect Slack to Salesforce"

| Data Fields | Content Elements |
|-------------|------------------|
| App 1 name, logo | Integration overview |
| App 2 name, logo | Use case examples |
| Integration features | Setup instructions |
| Triggers/actions | Automation workflows |

### 3. Comparison Pages
**Pattern:** [Product A] vs [Product B]
**Example:** "HubSpot vs Salesforce"

| Data Fields | Content Elements |
|-------------|------------------|
| Product features | Feature comparison table |
| Pricing data | Price comparison |
| Pros/cons | Verdict/recommendation |
| User ratings | Review summaries |

### 4. Alternative Pages
**Pattern:** [Product] Alternatives
**Example:** "Best Notion Alternatives"

| Data Fields | Content Elements |
|-------------|------------------|
| Competitor name | Why switch section |
| Key features | Top X alternatives list |
| Pricing | Comparison table |
| Ratings | Detailed breakdowns |

### 5. Tool/Calculator Pages
**Pattern:** [Type] Calculator for [Use Case]
**Example:** "ROI Calculator for Marketing"

| Data Fields | Content Elements |
|-------------|------------------|
| Input fields | Interactive calculator |
| Formulas | How to use guide |
| Industry benchmarks | Related resources |

---

## Template Architecture

### Base Template Components
```
┌─────────────────────────────────────┐
│ Dynamic H1: {keyword} {modifier}     │
├─────────────────────────────────────┤
│ Introduction (templated + dynamic)   │
├─────────────────────────────────────┤
│ Data Section (tables, stats)         │
├─────────────────────────────────────┤
│ Content Sections (conditional)       │
├─────────────────────────────────────┤
│ FAQ Section (schema-enabled)         │
├─────────────────────────────────────┤
│ Related Pages (internal links)       │
├─────────────────────────────────────┤
│ CTA Block                           │
└─────────────────────────────────────┘
```

### Dynamic Content Rules
| Element | Source | Variation Logic |
|---------|--------|-----------------|
| Title tag | Template + data | {Keyword} {Modifier} - {Brand} |
| H1 | Database field | Best {Category} in {Location} |
| Intro paragraph | Template + inserts | Population, stats |
| Body sections | Conditional display | If data exists, show |
| Related links | Query logic | Same category, nearby |

---

## Data Requirements

### Database Structure Example (Location Pages)
```yaml
locations:
  - city: "Austin"
    state: "Texas"
    state_abbr: "TX"
    population: 1000000
    median_income: 75000
    businesses_count: 5000
    slug: "austin-tx"
    nearby_cities:
      - "Round Rock"
      - "Cedar Park"
      - "Georgetown"
```

### Database Structure Example (Comparison Pages)
```yaml
products:
  - name: "HubSpot"
    slug: "hubspot"
    category: "CRM"
    pricing_start: 0
    pricing_high: 3200
    features:
      - name: "Email Marketing"
        included: true
        tier: "Free"
      - name: "Automation"
        included: true
        tier: "Professional"
    g2_rating: 4.4
    capterra_rating: 4.5
```

### Data Quality Requirements
- **Accuracy:** Verify sources, update regularly
- **Completeness:** All required fields populated
- **Consistency:** Standardized formatting
- **Uniqueness:** No duplicate entries
- **Freshness:** Regular update schedule

---

## Content Differentiation

### Avoiding Thin Content
| Problem | Solution |
|---------|----------|
| All pages look same | Add unique data per page |
| No original content | Include expert commentary |
| Just data tables | Add contextual paragraphs |
| Duplicate sections | Conditional content logic |
| Missing depth | Layer in related content |

### Unique Content Elements per Page
1. **Dynamic statistics** - Population, market data
2. **User-generated content** - Reviews, testimonials
3. **Third-party data** - Ratings, rankings
4. **Local/contextual info** - Relevant to that page
5. **Related internal links** - Unique per page

### Content Volume Guidelines
| Page Type | Minimum Words | Target Words |
|-----------|---------------|--------------|
| Location pages | 500 | 800-1200 |
| Comparison pages | 1000 | 1500-2500 |
| Alternative pages | 800 | 1200-2000 |
| Integration pages | 400 | 600-1000 |
| Tool pages | 300 | 500-800 |

---

## Internal Linking Strategy

### Hub and Spoke Model
```
        [Main Hub]
       /    |    \
      /     |     \
[Spoke] [Spoke] [Spoke]
   |       |       |
[Page] [Page]  [Page]
```

### Link Density Guidelines
| From Page Type | Link To | Quantity |
|----------------|---------|----------|
| Hub page | All spokes | 10-50 |
| Spoke page | Hub + related | 5-10 |
| Individual page | Hub + siblings | 3-7 |

### Contextual Linking Rules
- Link in first 100 words
- Use descriptive anchor text
- Link related pages (same category)
- Create breadcrumb navigation
- Add "related" sections

---

## Technical Implementation

### URL Structure
| Pattern | Example |
|---------|---------|
| /{category}/{item} | /tools/hubspot |
| /{location}/{service} | /austin-tx/plumbers |
| /{product1}-vs-{product2} | /hubspot-vs-salesforce |
| /{item}-alternatives | /notion-alternatives |

### Pagination & Indexing
- Use rel="canonical" on each page
- Implement pagination for lists
- Submit XML sitemap
- Use robots.txt for crawl budget
- Monitor index coverage

### Page Speed Considerations
- Lazy load below-fold content
- Optimize images (WebP format)
- Minimize database queries
- Implement caching
- Use CDN for static assets

---

## Schema Markup

### Required Schema per Page Type
| Page Type | Schema Types |
|-----------|-------------|
| Location | LocalBusiness, FAQPage |
| Comparison | Product, Review, FAQPage |
| Alternative | ItemList, Product |
| How-to/Tool | HowTo, FAQPage |
| Integration | SoftwareApplication |

### Example: Comparison Page Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HubSpot CRM",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "10000"
  }
}
```

---

## Quality Control

### Pre-Launch Checklist
- [ ] All data fields populated
- [ ] No broken internal links
- [ ] Schema validation passing
- [ ] Page speed >50 (mobile)
- [ ] Unique titles and metas
- [ ] No duplicate content
- [ ] CTA functioning
- [ ] Tracking implemented

### Ongoing Monitoring
| Metric | Target | Frequency |
|--------|--------|-----------|
| Index coverage | >95% | Weekly |
| Page errors | <1% | Weekly |
| Avg position | Improving | Monthly |
| Traffic per page | >10/mo | Monthly |
| Conversions | Tracked | Monthly |

### Quality Gates
- **Thin content filter:** Remove pages <300 words
- **Data completeness:** Hide if missing key fields
- **Performance:** Block pages loading >3s
- **Duplicate check:** Canonical or merge

---

## Scaling Strategy

### Phase 1: Prove Concept (100-500 pages)
- Build template
- Test with subset of data
- Monitor indexing
- Measure performance
- Iterate on template

### Phase 2: Scale (500-5000 pages)
- Automate data updates
- Add content variations
- Build internal link graph
- Expand to adjacent keywords
- Add schema automation

### Phase 3: Optimize (5000+ pages)
- Prune low-performers
- Update stale content
- Expand data sources
- A/B test templates
- Add new page types

---

## Common Pitfalls

| Pitfall | Impact | Prevention |
|---------|--------|------------|
| Duplicate content | Penalty | Canonical tags, unique elements |
| Thin pages | Poor ranking | Minimum content requirements |
| Broken links | Crawl issues | Regular audits |
| Missing data | Empty pages | Hide incomplete pages |
| No internal links | Orphan pages | Automated linking |
| Slow pages | Poor UX | Caching, optimization |
| Stale data | Accuracy issues | Update schedules |

---

## Tools & Resources

### Database/CMS Options
- Airtable + Webflow
- Notion + Next.js
- Google Sheets + static site
- Headless CMS (Contentful, Sanity)
- Custom database + framework

### Automation Tools
- Whalesync (Airtable sync)
- Make/Zapier (data updates)
- Python scripts (bulk operations)
- GitHub Actions (automated builds)

### Monitoring Tools
- Google Search Console
- Ahrefs/SEMrush
- Screaming Frog
- PageSpeed Insights
