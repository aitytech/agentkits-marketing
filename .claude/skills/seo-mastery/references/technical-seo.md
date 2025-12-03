# Technical SEO

Technical requirements for search engine optimization.

## Core Web Vitals

### LCP (Largest Contentful Paint)
**Target:** <2.5 seconds
**Measures:** Loading performance

**Improvements:**
- Optimize images
- Use CDN
- Preload critical resources
- Minimize render-blocking

### FID (First Input Delay)
**Target:** <100 milliseconds
**Measures:** Interactivity

**Improvements:**
- Minimize JavaScript
- Break up long tasks
- Use web workers
- Optimize third-party scripts

### CLS (Cumulative Layout Shift)
**Target:** <0.1
**Measures:** Visual stability

**Improvements:**
- Set image dimensions
- Reserve ad space
- Avoid inserting content above
- Use transform animations

## Site Architecture

### URL Structure
- Short and descriptive
- Include target keyword
- Use hyphens as separators
- Avoid parameters when possible
- Maintain consistent structure

### Site Hierarchy
- Homepage → Category → Subcategory → Page
- Maximum 3-4 clicks to any page
- Clear navigation
- Breadcrumb implementation

## Crawlability

### XML Sitemap
- Include all important pages
- Exclude noindex pages
- Update automatically
- Submit to Search Console

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml
```

## Indexability

### Canonical Tags
- Specify preferred URL version
- Use absolute URLs
- Self-reference on unique pages

### Noindex Usage
- Duplicate content
- Thank you pages
- Admin pages
- Pagination (sometimes)

## Mobile Optimization

- Responsive design
- Touch-friendly elements
- Fast mobile loading
- No intrusive interstitials
