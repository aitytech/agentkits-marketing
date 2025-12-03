# Meta Ads Integration

> Facebook & Instagram advertising management and analytics

## Overview

Meta Ads (formerly Facebook Ads) enables advertising across Facebook, Instagram, Messenger, and Audience Network. This integration provides campaign management, audience targeting, and performance analytics.

## Capabilities

### Campaign Management
| Tool | Description |
|------|-------------|
| `list_campaigns` | Get all ad campaigns |
| `get_campaign` | Get campaign details |
| `create_campaign` | Create new campaign |
| `update_campaign` | Update campaign settings |
| `pause_campaign` | Pause active campaign |

### Ad Set Management
| Tool | Description |
|------|-------------|
| `list_ad_sets` | Get all ad sets in campaign |
| `get_ad_set` | Get ad set details |
| `create_ad_set` | Create new ad set |
| `update_ad_set` | Update targeting, budget |

### Ad Creative
| Tool | Description |
|------|-------------|
| `list_ads` | Get all ads |
| `get_ad` | Get ad details |
| `create_ad` | Create new ad |
| `get_ad_preview` | Preview ad appearance |

### Insights & Analytics
| Tool | Description |
|------|-------------|
| `get_account_insights` | Account-level metrics |
| `get_campaign_insights` | Campaign performance |
| `get_ad_set_insights` | Ad set performance |
| `get_ad_insights` | Individual ad metrics |

### Audience
| Tool | Description |
|------|-------------|
| `list_custom_audiences` | Get custom audiences |
| `create_custom_audience` | Create new audience |
| `get_audience_estimate` | Estimate audience size |

## Authentication

### Access Token
```bash
# Meta Marketing API access token
export META_ACCESS_TOKEN="your-access-token"

# Optional: Ad Account ID (if managing multiple accounts)
export META_AD_ACCOUNT_ID="act_123456789"
```

### Getting Access Token
1. Go to [Meta Business Suite](https://business.facebook.com)
2. Navigate to Business Settings > System Users
3. Create System User with `ads_management` permission
4. Generate access token

## Use Cases

### 1. Campaign Performance Report
```
Goal: Get daily campaign performance

Steps:
1. list_campaigns(
     ad_account_id="act_123456",
     effective_status=["ACTIVE"]
   )
2. get_campaign_insights(
     campaign_id="123456789",
     date_preset="last_7d",
     fields=["spend", "impressions", "clicks", "ctr", "cpc", "conversions"]
   )
3. Generate report with ROI analysis
```

### 2. Create New Campaign
```
Goal: Launch awareness campaign

Steps:
1. create_campaign(
     name="Q1 Brand Awareness",
     objective="BRAND_AWARENESS",
     status="PAUSED",
     special_ad_categories=[]
   )
2. create_ad_set(
     campaign_id="<campaign_id>",
     name="Interest - Tech Enthusiasts",
     targeting={
       "geo_locations": {"countries": ["US"]},
       "interests": [{"id": "123", "name": "Technology"}]
     },
     daily_budget=5000,  // cents
     optimization_goal="REACH"
   )
3. create_ad(
     ad_set_id="<ad_set_id>",
     creative_id="<creative_id>"
   )
```

### 3. Budget Optimization
```
Goal: Reallocate budget to best performers

Steps:
1. get_ad_set_insights(
     date_preset="last_7d",
     fields=["spend", "cost_per_result", "roas"]
   )
2. Identify top performers (lowest CPA or highest ROAS)
3. update_ad_set(
     ad_set_id="top_performer_id",
     daily_budget=<increased_budget>
   )
4. pause_ad_set(ad_set_id="poor_performer_id")
```

### 4. Audience Research
```
Goal: Estimate audience size for targeting

Steps:
1. get_audience_estimate(
     targeting={
       "geo_locations": {"countries": ["US"]},
       "age_min": 25,
       "age_max": 45,
       "interests": [{"id": "123", "name": "Marketing"}]
     }
   )
2. Adjust targeting based on audience size
3. Compare with competitor audience overlap
```

### 5. A/B Testing Analysis
```
Goal: Compare ad creative performance

Steps:
1. list_ads(
     ad_set_id="<ab_test_ad_set>",
     effective_status=["ACTIVE"]
   )
2. get_ad_insights(
     ad_ids=["ad_a", "ad_b"],
     date_preset="last_14d",
     fields=["ctr", "cpc", "conversions", "cost_per_conversion"]
   )
3. Determine winning creative
4. pause losing variant
```

## Key Metrics

| Metric | Description | Good Benchmark |
|--------|-------------|----------------|
| CTR | Click-through rate | > 1% |
| CPC | Cost per click | < $1 (varies) |
| CPM | Cost per 1000 impressions | $5-15 |
| ROAS | Return on ad spend | > 3x |
| Frequency | Avg times user sees ad | < 3 |

## Integration with Marketing Workflow

### For Campaign Planning
```
1. /campaign:plan → Include Meta Ads strategy
2. /content:ads → Create ad copy
3. Meta Ads → Create campaigns
4. /analytics:report → Include Meta metrics
```

### For Audience Research
```
1. /research:persona → Define target audience
2. Meta Ads → get_audience_estimate
3. Refine targeting based on estimates
```

### For Performance Optimization
```
1. Meta Ads → get_campaign_insights
2. /campaign:analyze → Analyze performance
3. Meta Ads → update_ad_set (optimize)
```

## Best Practices

1. **Campaign Structure**: 1 campaign per objective, multiple ad sets for testing
2. **Budget**: Start small ($20-50/day), scale winners
3. **Audience**: Broad to start, then narrow based on data
4. **Creative**: Test 3-5 variants per ad set
5. **Frequency Cap**: Keep below 3 to avoid ad fatigue
6. **Attribution**: Use 7-day click, 1-day view window

## Rate Limits

- Standard: 200 calls/hour per ad account
- Insights: 60 calls/hour per ad account
- Batch requests: Up to 50 operations per batch

## Related Integrations

- **[Google Ads](../google-ads/)** - Cross-platform comparison
- **[Google Analytics](../google-analytics/)** - Post-click behavior
- **[SensorTower](../sensortower/)** - App install campaign analysis
