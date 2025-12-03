# Email Deliverability

Getting emails to the inbox.

## Authentication Setup

### SPF (Sender Policy Framework)
- Authorizes servers to send on your behalf
- DNS TXT record
- Include all sending services

### DKIM (DomainKeys Identified Mail)
- Cryptographic signature
- Verifies email wasn't altered
- Required for inbox placement

### DMARC (Domain-based Authentication)
- Policy for handling failures
- Reporting on authentication
- Start with monitoring, move to quarantine

## Sender Reputation

### Factors
- Bounce rate
- Complaint rate
- Spam trap hits
- Engagement rates
- Sending consistency

### Monitoring
- Check blacklists regularly
- Monitor postmaster tools
- Track delivery rates
- Watch for sudden drops

## IP Warm-Up

### New IP Schedule
| Week | Daily Volume |
|------|--------------|
| 1 | 50-100 |
| 2 | 200-500 |
| 3 | 500-1,000 |
| 4 | 1,000-2,000 |
| 5+ | Double weekly |

### Best Practices
- Start with engaged subscribers
- Send at consistent times
- Monitor metrics closely
- Slow down if issues arise

## List Hygiene

### Regular Cleanup
- Remove hard bounces immediately
- Sunset inactive after 90 days
- Run email validation
- Honor unsubscribes instantly

### Engagement Segments
- Active (opened in 30 days)
- Engaged (opened in 90 days)
- At-risk (no opens 90+ days)
- Inactive (no opens 180+ days)

## Spam Triggers to Avoid

### Subject Lines
- ALL CAPS
- Excessive punctuation!!!
- "FREE" and "ACT NOW"
- Misleading content

### Content
- Too many images, little text
- Large files
- Broken HTML
- URL shorteners
- Hidden text
