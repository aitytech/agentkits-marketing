# Popup & Modal Optimization Guide

Based on research from [OptinMonster](https://optinmonster.com/popup-statistics/), [Sumo](https://sumo.com/stories/pop-up-statistics), [Wisepops](https://wisepops.com/blog/popup-statistics/).

---

## Popup Performance Benchmarks

### By Popup Type
| Type | Average CR | Good CR | Excellent CR |
|------|------------|---------|--------------|
| Exit Intent | 4-7% | 7-12% | >15% |
| Timed (30-60s) | 2-4% | 4-8% | >10% |
| Scroll-triggered | 3-5% | 5-10% | >12% |
| Click-triggered | 8-15% | 15-25% | >30% |
| Welcome Mat | 1-3% | 3-6% | >8% |
| Slide-in | 1-3% | 3-5% | >7% |
| Floating Bar | 0.5-2% | 2-4% | >5% |

### Industry Averages
- **Top 10% of popups:** 9.28% conversion rate
- **Average popup:** 3.09% conversion rate
- **Poor popups:** <1% conversion rate

---

## Popup Types & Use Cases

### Exit Intent Popup
**Trigger:** Mouse moves toward browser close/back
**Best for:** Cart abandonment, lead recovery
**Timing:** Last chance before leaving

```
Headline: "Wait! Don't leave empty-handed"
Offer: Discount, free shipping, lead magnet
CTA: "Claim My [X]% Off"
```

### Time-Delayed Popup
**Trigger:** 30-90 seconds on page
**Best for:** Content upgrades, newsletters
**Timing:** After initial engagement

| Delay | Engagement Level | Recommended Use |
|-------|-----------------|-----------------|
| 5-15s | Low | High-intent pages only |
| 30-45s | Medium | Product/service pages |
| 60-90s | High | Blog/content pages |
| 90s+ | Very High | Long-form content |

### Scroll-Triggered Popup
**Trigger:** User scrolls X% of page
**Best for:** Content engagement, blog CTAs
**Timing:** After showing interest

| Scroll % | Intent Signal | Recommended Use |
|----------|--------------|-----------------|
| 25% | Low | Awareness offers |
| 50% | Medium | Content upgrades |
| 75% | High | Stronger CTAs |
| 90% | Very High | Bottom-of-funnel offers |

### Click-Triggered Popup
**Trigger:** User clicks link/button
**Best for:** Lead magnets, product details
**Timing:** User-initiated (highest intent)

---

## Popup Design Best Practices

### Visual Hierarchy
1. **Headline** - Largest, benefit-focused
2. **Subheadline** - Supporting value prop
3. **Visual** - Product image or illustration
4. **Form** - Minimal fields
5. **CTA** - High contrast, action-oriented
6. **Close option** - Clear but not prominent

### Size Guidelines
| Device | Popup Size | Coverage |
|--------|-----------|----------|
| Desktop | 500-600px wide | 30-40% of viewport |
| Mobile | Full width | 70-80% of viewport |
| Slide-in | 300-400px | Corner positioning |
| Bar | Full width | 60-80px height |

### Color & Contrast
- CTA button: Highest contrast color
- Background: Should stand out from page
- Text: High readability (dark on light)
- Close button: Visible but secondary

---

## Popup Copy Formulas

### Headline Patterns
| Pattern | Example |
|---------|---------|
| Wait + Benefit | "Wait! Get 20% off before you go" |
| Exclusive + Offer | "Exclusive: Your free guide awaits" |
| Question + Pain | "Still struggling with [problem]?" |
| Number + Benefit | "Join 50,000+ subscribers" |
| FOMO + Time | "Only 3 hours left!" |

### Value Proposition Examples
**Lead Magnet:**
```
Headline: "Get the Ultimate [Topic] Guide"
Subhead: "Learn [benefit 1], [benefit 2], and [benefit 3]"
CTA: "Download Free Guide"
```

**Discount Offer:**
```
Headline: "Unlock 15% Off Your First Order"
Subhead: "Plus free shipping on orders over $50"
CTA: "Get My Discount"
```

**Newsletter:**
```
Headline: "Join 25,000+ Marketers"
Subhead: "Weekly tips to grow your business"
CTA: "Subscribe Free"
```

---

## Trigger Optimization

### Time-Based Triggers
| Trigger | Pros | Cons |
|---------|------|------|
| Immediate (0s) | Maximum visibility | Highest annoyance |
| 5-15s | Quick capture | May be too soon |
| 30-60s | Balanced | Standard approach |
| 90s+ | High-quality leads | Lower volume |

### Behavior-Based Triggers
| Trigger | Best Use Case |
|---------|---------------|
| Exit intent | Cart abandonment, last-chance offers |
| Scroll depth | Content engagement confirmation |
| Page views (2+) | Returning visitor recognition |
| Time on site | Engagement threshold |
| Inactivity | Re-engagement |
| Click | User-initiated interest |

### Smart Targeting Rules
```
Show popup IF:
- New visitor AND time on page > 30s
- OR returning visitor AND pages viewed > 2
- OR exit intent detected

Don't show IF:
- Already subscribed
- Dismissed within last 7 days
- Currently in checkout
- Mobile device (use slide-in instead)
```

---

## Mobile Popup Guidelines

### Google's Interstitial Penalty
**Avoid on mobile:**
- Popups that cover main content
- Standalone interstitials before content
- Above-fold layouts requiring dismissal

**Safe alternatives:**
- Banners using small screen percentage
- Inline CTAs within content
- Bottom slide-ins
- Delayed triggers (30s+)

### Mobile-Friendly Formats
| Format | Safe? | Notes |
|--------|-------|-------|
| Full-screen overlay | ⚠️ | Only after significant engagement |
| Bottom slide-in | ✅ | Recommended for mobile |
| Top bar | ✅ | Minimal intrusion |
| Inline form | ✅ | Best for mobile |
| Exit intent | ✅ | Works on back button |

### Mobile UX Specifications
- Touch targets: 48x48px minimum
- Close button: Top-right, clearly visible
- Font size: 16px minimum
- Input fields: Full width
- CTA: Full width, bottom position

---

## Frequency & Display Rules

### Frequency Capping
| Visitor Type | Recommended Frequency |
|--------------|----------------------|
| New visitor | 1 popup per session |
| Returning visitor | 1 popup per 7 days |
| Dismissed popup | 30 days before retry |
| Converted visitor | Don't show same offer |

### Page-Level Rules
| Page Type | Popup Strategy |
|-----------|---------------|
| Homepage | Generic offer, delayed |
| Product page | Exit intent, product-specific |
| Blog post | Content upgrade, scroll-triggered |
| Pricing page | Chat/demo offer |
| Checkout | NO popups (except exit) |
| Thank you | Cross-sell, referral |

---

## A/B Testing Framework

### High-Impact Tests
| Element | Test Variation | Expected Impact |
|---------|---------------|-----------------|
| Trigger timing | 30s vs 60s | ±20% conversion |
| Headline | Question vs statement | ±15% conversion |
| Offer | Discount vs content | ±30% conversion |
| CTA copy | Generic vs specific | ±25% conversion |
| Form fields | 1 vs 2 | ±15% conversion |
| Design | Image vs no image | ±10% conversion |

### Testing Priority Order
1. **Offer/Incentive** - Biggest impact
2. **Trigger timing** - Balance conversion vs annoyance
3. **Headline** - First thing users see
4. **CTA copy** - Direct conversion impact
5. **Design elements** - Visual appeal
6. **Form length** - Friction reduction

---

## Popup Templates

### Exit Intent - Lead Magnet
```
[X close]

📚 FREE EBOOK

"The Complete Guide to [Topic]"

Get our 47-page guide packed with actionable strategies
to [achieve benefit].

[Email Address]

[Yes, Send Me the Guide →]

No thanks, I don't want to improve my [topic].
```

### Discount Popup
```
[X close]

🎉 SPECIAL OFFER

Get 15% Off Your First Order

Plus, you'll get:
✓ Free shipping on orders $50+
✓ Early access to new products
✓ Exclusive member discounts

[Email Address]

[Unlock My Discount →]

"Join 50,000+ happy customers"
```

### Newsletter Slide-In
```
━━━━━━━━━━━━━━━━━━━━━
Weekly Marketing Tips
━━━━━━━━━━━━━━━━━━━━━
Join 10,000+ subscribers

[Email] [Subscribe →]
━━━━━━━━━━━━━━━━━━━━━
```

---

## Metrics & Optimization

### Key Performance Indicators
| Metric | Formula | Target |
|--------|---------|--------|
| Display Rate | Displays / Page Views | Track trend |
| Conversion Rate | Conversions / Displays | >5% |
| Engagement Rate | Interactions / Displays | >10% |
| Dismiss Rate | Closes / Displays | <70% |
| Bounce Impact | Bounce rate change | <5% increase |

### Warning Signs
- Dismiss rate >80%: Offer not compelling
- Conversion <1%: Review targeting
- Bounce increase >10%: Too aggressive
- High impressions, low conversion: Wrong audience
