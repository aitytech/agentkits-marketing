# Google Search Console Integration

> Search performance analytics, indexing status, and SEO insights

## Overview

Google Search Console (GSC) provides data about your website's presence in Google Search results. Essential for SEO monitoring, content optimization, and technical SEO.

## Capabilities

### Search Analytics
| Tool | Description |
|------|-------------|
| `get_search_analytics` | Query performance data (clicks, impressions, CTR, position) |
| `get_search_analytics_by_page` | Performance breakdown by URL |
| `get_search_analytics_by_query` | Performance breakdown by search query |
| `get_search_analytics_by_country` | Performance by country |
| `get_search_analytics_by_device` | Performance by device type |

### URL Inspection
| Tool | Description |
|------|-------------|
| `inspect_url` | Check indexing status of a URL |
| `request_indexing` | Request Google to crawl a URL |

### Sitemaps
| Tool | Description |
|------|-------------|
| `list_sitemaps` | Get all submitted sitemaps |
| `submit_sitemap` | Submit a new sitemap |
| `delete_sitemap` | Remove a sitemap |

### Sites Management
| Tool | Description |
|------|-------------|
| `list_sites` | Get all verified sites |
| `get_site` | Get site details |

## Authentication

### Service Account (Required)
```bash
# Path to service account JSON key file
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
```

### Setup Steps
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable "Search Console API"
4. Create Service Account with appropriate permissions
5. Download JSON key file
6. Add service account email to Search Console property

## Use Cases

### 1. SEO Performance Report
```
Goal: Get weekly SEO performance summary

Steps:
1. get_search_analytics(
     site_url="https://yoursite.com",
     start_date="2024-01-01",
     end_date="2024-01-07",
     dimensions=["query", "page"],
     row_limit=100
   )
2. Analyze top queries and pages
3. Compare with previous period
```

### 2. Content Optimization
```
Goal: Find underperforming pages to optimize

Steps:
1. get_search_analytics_by_page(
     site_url="https://yoursite.com",
     start_date="2024-01-01",
     end_date="2024-01-31"
   )
2. Filter: High impressions, low CTR (< 2%)
3. These pages need title/meta optimization
```

### 3. Keyword Gap Analysis
```
Goal: Find keywords with high impressions but low position

Steps:
1. get_search_analytics_by_query(
     site_url="https://yoursite.com",
     start_date="2024-01-01",
     end_date="2024-01-31"
   )
2. Filter: Position 8-20, impressions > 100
3. These keywords are optimization opportunities
```

### 4. Index Coverage Check
```
Goal: Ensure important pages are indexed

Steps:
1. inspect_url(url="https://yoursite.com/important-page")
2. Check indexing status
3. If not indexed, request_indexing()
```

### 5. Mobile vs Desktop Analysis
```
Goal: Compare mobile and desktop performance

Steps:
1. get_search_analytics_by_device(
     site_url="https://yoursite.com",
     start_date="2024-01-01",
     end_date="2024-01-31"
   )
2. Compare CTR and position by device
3. Identify mobile optimization needs
```

## Integration with Marketing Workflow

### For SEO Campaigns
```
1. /seo:audit → Use GSC for performance baseline
2. /seo:keywords → Combine with GSC query data
3. /content:blog → Target GSC opportunity keywords
4. /report:weekly → Include GSC metrics
```

### For Content Strategy
```
1. GSC top queries → Content ideas
2. GSC low CTR pages → Title/meta optimization
3. GSC position 4-10 → Link building targets
```

## Best Practices

1. **Date Range**: GSC data has 3-day delay, use dates accordingly
2. **Sampling**: Large sites may have sampled data, use shorter ranges
3. **Dimensions**: Max 3 dimensions per query
4. **Rate Limits**: ~1200 queries/min, batch requests when possible
5. **Data Retention**: GSC keeps 16 months of data

## Related Integrations

- **[SensorTower](../sensortower/)** - App store search data
- **[Ahrefs](../ahrefs/)** - Backlink & keyword research
- **[Google Analytics](../google-analytics/)** - User behavior data
