# Email Automation

Workflow design and automation best practices.

## Trigger Types

### Time-Based
- X days after signup
- X days after last email
- Specific date/time
- Recurring schedule

### Behavior-Based
- Form submission
- Page visit
- Link click
- Purchase
- Score threshold

### Event-Based
- Webinar registration
- Download complete
- Trial started
- Subscription change

## Workflow Components

### Entry Triggers
- Form submission
- Tag added
- Segment entry
- Manual enrollment

### Conditions
- If/then branching
- Wait steps
- Score checks
- Date checks

### Actions
- Send email
- Add/remove tag
- Update field
- Notify team
- Add to list

### Exit Conditions
- Goal achieved
- Unsubscribed
- Manual removal
- Time limit reached

## A/B Testing

### What to Test
| Element | Impact |
|---------|--------|
| Subject line | High |
| Send time | Medium |
| From name | Medium |
| Content | High |
| CTA | High |

### Best Practices
- Test one variable at a time
- Minimum 1,000 per variant
- Wait for significance
- Document learnings

## Dynamic Content

### Use Cases
- Name personalization
- Industry-specific content
- Product recommendations
- Location-based offers
- Behavior-based sections

### Implementation
```
{% if industry == 'tech' %}
  Tech-specific content
{% else %}
  General content
{% endif %}
```

## Send Time Optimization

### By Day
- B2B: Tuesday-Thursday
- B2C: Tuesday, Thursday, Sunday
- Avoid Monday mornings, Friday afternoons

### By Time
- B2B: 10am-11am, 2pm-3pm
- B2C: 8am-9am, 7pm-9pm
- Test for your audience

### Advanced
- Time zone sending
- Individual optimization
- Machine learning predictions
