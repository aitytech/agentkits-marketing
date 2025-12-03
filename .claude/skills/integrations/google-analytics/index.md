# Google Analytics Integration

> GA4 web analytics data for traffic, user behavior, and conversions

## Overview

Access Google Analytics 4 data including page views, sessions, user behavior, conversions, and real-time metrics.

## Capabilities

| Tool | Description |
|------|-------------|
| `run_report` | Run custom GA4 reports with dimensions/metrics |
| `run_realtime_report` | Get real-time active users and events |
| `get_account_summaries` | List all GA4 accounts and properties |
| `get_property_details` | Get property configuration |
| `get_custom_dimensions_and_metrics` | List custom definitions |

## Authentication

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
export GA4_PROPERTY_ID="properties/123456789"
```

## Use Cases

### 1. Traffic Report
```
Get page views and sessions for last 7 days by source/medium
→ run_report(dimensions=["sessionSource", "sessionMedium"],
             metrics=["sessions", "pageviews"], date_range="last7days")
```

### 2. Real-time Monitoring
```
Check current active users on site
→ run_realtime_report(metrics=["activeUsers"])
```

### 3. Conversion Analysis
```
Get conversion events by landing page
→ run_report(dimensions=["landingPage"],
             metrics=["conversions", "totalRevenue"])
```

## Integration with Marketing

- `/analytics:report` → Include GA4 metrics
- `/campaign:analyze` → Attribution data
- `/seo:audit` → Traffic by organic search

## Related
- [Google Search Console](../google-search-console/) - Search rankings
- [Meta Ads](../meta-ads/) - Paid traffic source
