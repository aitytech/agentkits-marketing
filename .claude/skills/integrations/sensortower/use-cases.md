# SensorTower Use Cases

> Practical examples for app intelligence tasks

---

## Use Case 1: Competitor Deep Dive

**Goal**: Understand a competitor's app performance

### Steps

```
Step 1: Get basic info
→ get_app_metadata(os="ios", app_ids=["competitor_id"])

Step 2: Check rankings over time
→ get_app_rankings(os="ios", app_ids=["competitor_id"],
                   start_date="2024-01-01", end_date="2024-03-31")

Step 3: Analyze user sentiment
→ get_app_reviews(os="ios", app_id="competitor_id", limit=200)
```

### Insights to Extract
- App positioning (from metadata description)
- Category focus (from categories)
- User satisfaction (from ratings trend)
- Feature requests (from reviews)
- Pain points (from negative reviews)

---

## Use Case 2: Keyword Research for ASO

**Goal**: Find high-value keywords to target

### Steps

```
Step 1: Brainstorm seed keywords
→ search_keywords(os="ios", term="productivity app", limit=50)

Step 2: Check search volume & difficulty
→ get_keyword_stats(os="ios", keywords=["productivity", "task manager", ...])

Step 3: See current rankings
→ get_keyword_rankings(os="ios", app_id="your_app_id")
```

### Keyword Prioritization Matrix

| Volume | Difficulty | Action |
|--------|------------|--------|
| High | Low | Priority target |
| High | High | Long-term goal |
| Low | Low | Quick wins |
| Low | High | Skip |

---

## Use Case 3: Market Sizing

**Goal**: Understand market opportunity in a category

### Steps

```
Step 1: Get category overview
→ get_category_breakdown(os="ios", country="US", category="6007")

Step 2: Identify top players
→ get_top_apps(os="ios", category="6007", chart_type="grossing", limit=20)

Step 3: Analyze top apps
→ get_app_metadata(os="ios", app_ids=[top_app_ids])
```

### Metrics to Track
- Total category downloads
- Total category revenue
- Top app concentration (% of top 10)
- Growth rate YoY

---

## Use Case 4: Performance Monitoring

**Goal**: Track your app's daily performance

### Steps

```
Step 1: Get daily metrics
→ get_analytics_metrics(os="ios", app_ids=["your_app"],
                        start_date="2024-03-01", end_date="2024-03-31")

Step 2: Get revenue data
→ get_sales_reports(os="ios", app_ids=["your_app"],
                    start_date="2024-03-01", end_date="2024-03-31")
```

### Key Metrics Dashboard

| Metric | Source | Frequency |
|--------|--------|-----------|
| Impressions | analytics_metrics | Daily |
| Page Views | analytics_metrics | Daily |
| Downloads | analytics_metrics | Daily |
| Revenue | sales_reports | Daily |
| Sessions | analytics_metrics | Daily |
| Active Devices | analytics_metrics | Daily |

---

## Use Case 5: Competitive Keyword Gap Analysis

**Goal**: Find keywords competitors rank for that you don't

### Steps

```
Step 1: Get your keyword rankings
→ get_keyword_rankings(os="ios", app_id="your_app")

Step 2: Get competitor keyword rankings
→ get_keyword_rankings(os="ios", app_id="competitor_app")

Step 3: Compare and find gaps
→ Analyze keywords where:
   - Competitor ranks well, you don't
   - High search volume
   - Relevant to your app
```

---

## Use Case 6: Review Sentiment Analysis

**Goal**: Understand user sentiment and feature requests

### Steps

```
Step 1: Pull recent reviews
→ get_app_reviews(os="ios", app_id="app_id", limit=500)

Step 2: Categorize reviews
- Bug reports
- Feature requests
- Praise
- Complaints

Step 3: Extract insights
- Most requested features
- Common pain points
- Competitive mentions
```

### Sentiment Categories

| Rating | Category | Action |
|--------|----------|--------|
| 5 | Promoters | Testimonials, case studies |
| 4 | Satisfied | Minor improvements |
| 3 | Neutral | Feature gaps |
| 1-2 | Detractors | Bug fixes, support |

---

## Integration with Marketing Workflow

### For Campaign Planning
```
1. /competitor:deep → Use SensorTower for app competitor data
2. /research:market → Combine with web market research
3. /campaign:plan → Create campaign with insights
```

### For ASO Content
```
1. SensorTower keywords → Identify targets
2. /content:landing → Optimize app store listing
3. /seo:optimize → Apply SEO principles to ASO
```

### For Reporting
```
1. SensorTower metrics → Get app performance data
2. /analytics:report → Combine with web analytics
3. /report:weekly → Generate unified report
```
