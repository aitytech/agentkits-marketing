# SensorTower Skill

> App Intelligence & Market Analysis for Mobile Apps

## Overview

SensorTower provides app store intelligence data including:
- **App Analysis**: Metadata, rankings, reviews, downloads
- **Store Marketing (ASO)**: Keywords, search rankings, optimization
- **Market Analysis**: Category trends, top apps, market sizing
- **Your Metrics**: Your connected app's analytics (requires integration)

## Quick Start

### Available Tools (via MCP Server)

#### App Analysis
| Tool | Description |
|------|-------------|
| `get_app_metadata` | Get app info (name, publisher, ratings) |
| `get_app_rankings` | Historical chart rankings |
| `get_app_reviews` | User reviews for sentiment analysis |
| `get_app_ratings` | Rating breakdown over time |
| `get_review_summary` | Positive/negative review trends |
| `get_app_update_history` | Version release history |

#### Store Marketing / ASO
| Tool | Description |
|------|-------------|
| `get_keyword_rankings` | ASO keyword positions |
| `search_keywords` | Keyword research & traffic |
| `get_keyword_stats` | Traffic scores for keywords |
| `get_trending_searches` | Trending App Store searches |
| `get_search_ads_keywords` | Apple Search Ads by app |
| `get_search_ads_by_keyword` | Search Ads competition |

#### Market Analysis
| Tool | Description |
|------|-------------|
| `get_top_apps` | Category top charts |
| `get_category_breakdown` | Market sizing by category |
| `get_download_revenue_estimates` | Download/revenue estimates |
| `get_top_apps_by_active_users` | Top apps by DAU/MAU |
| `get_top_publishers` | Leading publishers |
| `get_apps_by_category` | All app IDs in category |

#### Publisher & Search
| Tool | Description |
|------|-------------|
| `search_apps_publishers` | Find apps/publishers by name |
| `get_publisher_apps` | Get publisher's app portfolio |
| `get_unified_app_info` | Cross-platform app data |

#### Ad Intelligence
| Tool | Description |
|------|-------------|
| `get_top_advertisers` | Top advertisers by impressions |
| `get_top_creatives` | Best performing ad creatives |
| `get_app_ad_creatives` | Creatives for specific app |
| `get_ad_networks_list` | Available ad networks |

#### Featured & Promotion
| Tool | Description |
|------|-------------|
| `get_featured_apps` | Currently featured apps |
| `get_featured_history` | App featuring history |

#### Your Metrics (Connected Apps)
| Tool | Description |
|------|-------------|
| `get_analytics_metrics` | Your app's analytics |
| `get_sales_reports` | Your app's revenue data |

### Authentication

Set environment variable:
```bash
export SENSOR_TOWER_API_TOKEN="your-api-token"
```

## Common Use Cases

### 1. Competitor Research
```
1. get_app_metadata → Get competitor app details
2. get_app_rankings → Track ranking trends
3. get_app_reviews → Analyze user feedback
```

### 2. ASO (App Store Optimization)
```
1. search_keywords → Find keyword opportunities
2. get_keyword_stats → Check volume & difficulty
3. get_keyword_rankings → Track your positions
```

### 3. Market Intelligence
```
1. get_top_apps → See category leaders
2. get_category_breakdown → Understand market size
3. get_app_metadata → Deep dive top players
```

### 4. Performance Tracking
```
1. get_analytics_metrics → Daily impressions, downloads
2. get_sales_reports → Revenue by country
```

## API Coverage

| Category | Tools | Key Features |
|----------|-------|--------------|
| App Analysis | 6 | Metadata, rankings, reviews, ratings, versions |
| Store Marketing | 6 | Keywords, ASO, trending, Search Ads |
| Market Analysis | 6 | Top apps, estimates, publishers, active users |
| Publisher & Search | 3 | Search, publisher apps, unified data |
| Ad Intelligence | 4 | Top advertisers, creatives, ad networks |
| Featured | 2 | Featured apps, featuring history |
| Your Metrics | 2 | Analytics, sales reports |
| **Total** | **29** | **Core marketing/sales features** |

## Best Practices

1. **Rate Limits**: Respect API rate limits, cache responses
2. **Date Ranges**: Keep to 90 days max for performance
3. **Countries**: Specify countries to reduce data volume
4. **App IDs**:
   - iOS: Numeric ID (e.g., `284882215`)
   - Android: Package name (e.g., `com.facebook.katana`)

## Resources

- [SensorTower API Docs](https://sensortower.com/product/connect)
- [OpenAPI Specs](./swagger/)
- [MCP Server](./mcp-server/)

## Related Skills

- `seo-mastery` - SEO optimization (web)
- `analytics-attribution` - Performance measurement
- `marketing-fundamentals` - Marketing strategy
