# Schema Markup Implementation Guide

Based on research from [Schema.org](https://schema.org/), [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data), [Moz](https://moz.com/learn/seo/schema-structured-data).

---

## Schema Basics

### What is Schema Markup?
Structured data vocabulary that helps search engines understand content and display rich results (rich snippets) in SERPs.

### Implementation Formats
| Format | Recommended | Support |
|--------|-------------|---------|
| JSON-LD | ✓ Yes | Best |
| Microdata | - | Supported |
| RDFa | - | Supported |

**Google recommends JSON-LD** - easier to implement, maintain, and doesn't mix with HTML.

---

## Priority Schema Types

### By Business Type
| Business | Priority Schema |
|----------|----------------|
| E-commerce | Product, Review, Offer, BreadcrumbList |
| SaaS | SoftwareApplication, FAQPage, HowTo |
| Local Business | LocalBusiness, Review, OpeningHours |
| Content Site | Article, FAQPage, HowTo, Video |
| Service Business | Service, Review, FAQPage |

### By Rich Result Type
| Rich Result | Schema Required |
|-------------|-----------------|
| Review stars | Product + AggregateRating |
| FAQ accordion | FAQPage |
| How-to steps | HowTo |
| Product info | Product + Offer |
| Event listing | Event |
| Recipe card | Recipe |
| Video carousel | VideoObject |
| Breadcrumbs | BreadcrumbList |
| Sitelinks searchbox | WebSite |
| Article | Article/NewsArticle/BlogPosting |

---

## Essential Schema Templates

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/example",
    "https://www.twitter.com/example",
    "https://www.linkedin.com/company/example"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-1234",
    "contactType": "customer service"
  }
}
```

### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "telephone": "+1-512-555-1234",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$"
}
```

### Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product.jpg",
  "description": "Product description here.",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product",
    "priceCurrency": "USD",
    "price": "29.99",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Seller Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "127"
  }
}
```

### SoftwareApplication Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "App Name",
  "operatingSystem": "Web, iOS, Android",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "5000"
  }
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 30-day returns on all items."
      }
    },
    {
      "@type": "Question",
      "name": "How long does shipping take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard shipping takes 5-7 business days."
      }
    }
  ]
}
```

### HowTo Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create an Account",
  "description": "Step-by-step guide to create your account.",
  "totalTime": "PT5M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Go to signup page",
      "text": "Navigate to example.com/signup",
      "url": "https://example.com/signup"
    },
    {
      "@type": "HowToStep",
      "name": "Enter your email",
      "text": "Type your email address in the form"
    },
    {
      "@type": "HowToStep",
      "name": "Create password",
      "text": "Choose a secure password"
    }
  ]
}
```

### Article/BlogPosting Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "image": "https://example.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Publisher Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20",
  "description": "Article description here."
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://example.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Category",
      "item": "https://example.com/products/category"
    }
  ]
}
```

### Video Schema
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Video description",
  "thumbnailUrl": "https://example.com/thumbnail.jpg",
  "uploadDate": "2024-01-15",
  "duration": "PT5M30S",
  "contentUrl": "https://example.com/video.mp4",
  "embedUrl": "https://example.com/embed/video"
}
```

---

## Page-Specific Schema Strategy

### Homepage
```json
// Combine: Organization + WebSite
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      // ... organization details
    },
    {
      "@type": "WebSite",
      "url": "https://example.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://example.com/search?q={search_term}",
        "query-input": "required name=search_term"
      }
    }
  ]
}
```

### Product Page
- Product + Offer
- AggregateRating
- Review (if available)
- BreadcrumbList

### Blog Post
- Article/BlogPosting
- Author (Person)
- BreadcrumbList
- FAQPage (if Q&A present)

### Category Page
- ItemList
- BreadcrumbList

### Contact Page
- Organization + ContactPoint
- LocalBusiness (if physical)

---

## Implementation Best Practices

### Placement
```html
<head>
  <!-- Place JSON-LD schema in <head> or end of <body> -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    // ...
  }
  </script>
</head>
```

### Multiple Schema Types
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      // ...
    },
    {
      "@type": "BreadcrumbList",
      // ...
    },
    {
      "@type": "FAQPage",
      // ...
    }
  ]
}
```

### Common Errors to Avoid
| Error | Issue | Fix |
|-------|-------|-----|
| Missing required fields | Schema incomplete | Check Google requirements |
| Invalid values | Wrong data type | Use correct format (dates, URLs) |
| Mismatched data | Schema ≠ visible content | Sync schema with page |
| Multiple same types | Confusion | Use @id for relationships |
| Outdated info | Stale data | Update regularly |

---

## Validation & Testing

### Testing Tools
1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Tests eligibility for rich results

2. **Schema Markup Validator**
   - https://validator.schema.org/
   - Validates against schema.org

3. **Google Search Console**
   - Enhancements reports
   - Error notifications

### Validation Checklist
- [ ] No errors in Rich Results Test
- [ ] No warnings in Schema Validator
- [ ] Data matches visible content
- [ ] Required properties present
- [ ] URLs are absolute
- [ ] Images accessible
- [ ] Dates in ISO 8601 format

---

## Rich Result Eligibility

### Requirements by Type
| Rich Result | Key Requirements |
|-------------|------------------|
| Product | name, image, offers, reviews |
| FAQ | question, acceptedAnswer |
| HowTo | step with text |
| Article | headline, image, author, date |
| Video | name, description, thumbnail, upload date |
| LocalBusiness | name, address, aggregateRating |
| Review | itemReviewed, reviewRating |

### Not Guaranteed
Having schema doesn't guarantee rich results:
- Google decides what to show
- Content must be high quality
- Site must be trustworthy
- May take weeks to appear
- A/B tested by Google

---

## Monitoring & Maintenance

### Search Console Reports
Check regularly:
- **Enhancements** - Schema status
- **Rich result reports** - Errors/warnings
- **URL inspection** - Per-page validation

### Update Triggers
| Change | Action Required |
|--------|-----------------|
| Price change | Update Offer |
| New reviews | Update rating count |
| Content edit | Update dateModified |
| New location | Add LocalBusiness |
| New product | Add Product schema |

### Automation Tips
- Generate schema from CMS data
- Auto-update dateModified
- Pull ratings from review system
- Sync product data from catalog
- Use variables for dynamic content
