# Semrush Integration

> Comprehensive SEO, PPC, and competitive research platform

## Overview

Access Semrush data for keyword research, backlink analysis, domain analytics, and position tracking.

## Capabilities

| Tool | Description |
|------|-------------|
| `domain_overview` | Get domain SEO metrics |
| `keyword_overview` | Get keyword volume, difficulty |
| `organic_positions` | Domain's organic rankings |
| `backlinks_overview` | Backlink profile summary |
| `keyword_gap` | Compare keywords between domains |
| `traffic_analytics` | Estimated traffic data |

## Authentication

```bash
export SEMRUSH_API_KEY="your-semrush-api-key"
```

Get API key from: Semrush Dashboard → Settings → API

## Use Cases

### 1. Competitor Analysis
```
Analyze competitor's top organic keywords
→ organic_positions(domain="competitor.com", limit=100)
```

### 2. Keyword Research
```
Find keyword opportunities
→ keyword_overview(keywords=["marketing automation", "crm software"])
```

### 3. Backlink Audit
```
Check domain's backlink profile
→ backlinks_overview(target="yoursite.com")
```

### 4. Keyword Gap
```
Find keywords competitors rank for that you don't
→ keyword_gap(domains=["you.com", "competitor1.com", "competitor2.com"])
```

## Integration with Marketing

- `/seo:keywords` → Use Semrush keyword data
- `/competitor:deep` → Combine with domain analytics
- `/content:blog` → Target Semrush keyword opportunities

## Pricing Note

Semrush API uses credits/units. Each call consumes units based on data volume.

## Related
- [DataForSEO](../dataforseo/) - Alternative SEO data
- [Google Search Console](../google-search-console/) - Your own search data
