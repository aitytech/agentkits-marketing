# SEO Audit Checklist

Comprehensive SEO audit framework for systematic optimization.

## Workflow References

- `crm-workflow.md` - Organic leads feed into CRM lifecycle
- `sales-workflow.md` - SEO-generated leads for qualification

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Technical audit | `attraction-specialist` | Site health check |
| Content gaps | `researcher` | Competitor analysis |
| Keyword research | `attraction-specialist` | Content planning |
| Reporting | `planner` | Monthly review |

## SEO → Lead Generation Connection

Organic traffic quality impacts lead scoring:
- High-intent keywords (pricing, demo, comparison) → +15 points
- Brand searches → +10 points
- Informational queries → +5 points
- Organic leads typically convert 14.6% vs 1.7% outbound (HubSpot)

## Quick Health Check (15 min)

### Indexing Status
- [ ] Site indexed: `site:yourdomain.com`
- [ ] Page count matches sitemap
- [ ] No unexpected pages indexed
- [ ] Key pages appearing in results

### Critical Errors
- [ ] No manual actions in Search Console
- [ ] No security issues flagged
- [ ] Robots.txt not blocking key pages
- [ ] Sitemap accessible and valid

## Technical SEO Audit

### Crawlability (Priority: High)

| Check | Tool | Target |
|-------|------|--------|
| Crawl errors | Search Console | 0 errors |
| Blocked resources | Robots.txt test | None critical |
| Redirect chains | Screaming Frog | Max 2 hops |
| Broken links | Site audit | 0 internal 404s |

**Action Items**:
- [ ] Fix all 404 errors or redirect
- [ ] Remove unnecessary redirects
- [ ] Update robots.txt if blocking CSS/JS
- [ ] Submit updated sitemap

### Indexability (Priority: High)

| Check | Issue | Fix |
|-------|-------|-----|
| Duplicate content | Multiple URLs same content | Canonical tags |
| Thin content | <300 words, low value | Expand or noindex |
| Orphan pages | No internal links | Add to navigation |
| Noindex errors | Wrong pages noindexed | Review meta robots |

**Canonical Audit**:
- [ ] Every page has canonical tag
- [ ] Self-referencing canonicals correct
- [ ] Cross-domain canonicals valid
- [ ] No conflicting signals

### Core Web Vitals (Priority: High)

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP | <2.5s | 2.5-4s | >4s |
| FID | <100ms | 100-300ms | >300ms |
| CLS | <0.1 | 0.1-0.25 | >0.25 |

**Common Fixes**:
| Issue | Solution |
|-------|----------|
| Slow LCP | Optimize images, lazy load below fold |
| High FID | Defer non-critical JS, code splitting |
| Bad CLS | Set image dimensions, avoid dynamic content |

### Mobile-Friendliness

- [ ] Mobile-friendly test passes
- [ ] No horizontal scrolling
- [ ] Tap targets >48px
- [ ] Font size readable (>16px)
- [ ] No intrusive interstitials

### Site Architecture

- [ ] Flat structure (max 3 clicks to any page)
- [ ] Logical URL hierarchy
- [ ] Breadcrumb navigation
- [ ] Internal linking strategy
- [ ] HTML sitemap for users

## On-Page SEO Audit

### Title Tags

| Criteria | Check |
|----------|-------|
| Length | 50-60 characters |
| Keyword | Primary keyword near front |
| Unique | No duplicates across site |
| Compelling | Click-worthy, not stuffed |

**Audit**:
- [ ] Export all title tags
- [ ] Flag duplicates
- [ ] Flag too long (>60)
- [ ] Flag missing keywords
- [ ] Flag click-bait without value

### Meta Descriptions

| Criteria | Check |
|----------|-------|
| Length | 150-160 characters |
| CTA | Includes call-to-action |
| Unique | No duplicates |
| Keyword | Contains target keyword |

### Header Structure

- [ ] One H1 per page
- [ ] H1 contains primary keyword
- [ ] Logical H2-H6 hierarchy
- [ ] Headers describe content
- [ ] No skipped levels (H1 → H3)

### Content Quality

| Factor | Target |
|--------|--------|
| Word count | 1500+ for competitive terms |
| Keyword density | 1-2% natural |
| Readability | Grade 8 or below |
| Freshness | Updated within 12 months |
| Multimedia | Images, video where relevant |

### Image Optimization

- [ ] Descriptive file names (not IMG_001.jpg)
- [ ] Alt text on all images
- [ ] Compressed file sizes
- [ ] Modern formats (WebP, AVIF)
- [ ] Lazy loading implemented

## Off-Page SEO Audit

### Backlink Profile

| Metric | Healthy | Warning |
|--------|---------|---------|
| Domain diversity | 100+ referring domains | <50 |
| Toxic score | <5% | >10% |
| Follow ratio | 70-90% dofollow | <50% |
| Anchor diversity | Varied, natural | >30% exact match |

**Analysis**:
- [ ] Export backlink profile
- [ ] Identify toxic links
- [ ] Check anchor text distribution
- [ ] Compare to competitors
- [ ] Create disavow file if needed

### Link Velocity

- [ ] Consistent link growth
- [ ] No sudden spikes (unnatural)
- [ ] No sudden drops (lost links)
- [ ] Quality over quantity

## Local SEO Audit (If Applicable)

### Google Business Profile

- [ ] Claimed and verified
- [ ] NAP consistent everywhere
- [ ] Categories accurate
- [ ] Photos updated
- [ ] Posts regular
- [ ] Reviews responded to

### Local Citations

- [ ] Top directories claimed
- [ ] NAP consistent
- [ ] No duplicate listings
- [ ] Industry directories present

## Competitor Gap Analysis

### Content Gaps

| Step | Action |
|------|--------|
| 1 | Identify competitor top pages |
| 2 | Find keywords they rank for, you don't |
| 3 | Analyze content length/depth |
| 4 | Identify topic clusters missing |

### Backlink Gaps

- [ ] Export competitor backlinks
- [ ] Find linking domains you're missing
- [ ] Identify link-worthy content types
- [ ] Prioritize outreach targets

## Priority Matrix

| Priority | Issue Type | Timeline |
|----------|-----------|----------|
| Critical | Manual actions, security, major errors | Immediate |
| High | Core Web Vitals, indexing, mobile | This week |
| Medium | On-page optimization, content gaps | This month |
| Low | Minor technical, nice-to-haves | Next quarter |

## Audit Schedule

| Audit Type | Frequency | Time |
|------------|-----------|------|
| Quick health check | Weekly | 15 min |
| Technical audit | Monthly | 2-3 hrs |
| Full comprehensive | Quarterly | Full day |
| Competitor analysis | Quarterly | 2-3 hrs |

## Integration Points

### Commands
- `/checklist/seo-weekly` - Weekly maintenance
- `/audit/full` - Comprehensive audit
- `/competitor/deep` - Competitor analysis

### Workflows
- `crm-workflow.md` - Lead lifecycle from organic
- `sales-workflow.md` - Organic lead qualification

### Tools
- Google Search Console
- Screaming Frog / Sitebulb
- Ahrefs / Semrush
- PageSpeed Insights
- Mobile-Friendly Test
