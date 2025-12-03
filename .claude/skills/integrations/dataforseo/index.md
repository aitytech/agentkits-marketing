# DataForSEO Integration

> Enterprise SEO data API with 750+ SEO tools

## Overview

DataForSEO provides comprehensive SEO data including SERP results, keyword data, backlinks, and on-page analysis. Pay-as-you-go pricing model.

## Capabilities

| Tool | Description |
|------|-------------|
| `serp_google_organic_live` | Live Google SERP results |
| `keywords_google_ads_search_volume` | Keyword search volume |
| `labs_google_keyword_ideas` | Keyword suggestions |
| `backlinks_summary` | Domain backlink profile |
| `onpage_task_post` | On-page SEO audit |

## Authentication

```bash
export DATAFORSEO_LOGIN="your-login-email"
export DATAFORSEO_PASSWORD="your-api-password"
```

## Use Cases

### 1. SERP Analysis
```
Check current Google rankings for keyword
→ serp_google_organic_live(keyword="marketing automation", location="US")
```

### 2. Keyword Research
```
Get keyword ideas and volume
→ labs_google_keyword_ideas(keywords=["crm software"], location="US")
```

### 3. Backlink Analysis
```
Analyze domain backlink profile
→ backlinks_summary(target="competitor.com")
```

## Pricing

Pay-per-request model:
- SERP API: ~$0.002/request
- Keywords API: ~$0.001/keyword
- Backlinks API: ~$0.004/request

## Integration with Marketing

- `/seo:audit` → Use on-page analysis
- `/seo:keywords` → Keyword research data
- `/competitor:deep` → SERP and backlink data

## Related
- [Semrush](../semrush/) - Alternative SEO platform
- [Google Search Console](../google-search-console/) - Own site data
