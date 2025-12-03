# HubSpot Integration

> CRM, marketing automation, and sales platform

## Overview

Official HubSpot MCP server provides access to contacts, companies, deals, and marketing data. Enables AI-powered CRM interactions.

## Capabilities

| Tool | Description |
|------|-------------|
| `search_contacts` | Search CRM contacts |
| `get_contact` | Get contact details |
| `create_contact` | Create new contact |
| `search_companies` | Search companies |
| `search_deals` | Search deals pipeline |
| `get_engagements` | Get contact activities |

## Authentication

```bash
export HUBSPOT_ACCESS_TOKEN="pat-xxx-xxxxxxxx"
```

### Getting Token
1. Go to HubSpot → Settings → Integrations → Private Apps
2. Create new Private App
3. Add required scopes
4. Copy access token

## Use Cases

### 1. Lead Lookup
```
Find contact by email
→ search_contacts(query="email:john@company.com")
```

### 2. Deal Pipeline
```
Get open deals this quarter
→ search_deals(filters=[{property: "dealstage", operator: "IN", values: ["qualifiedtobuy"]}])
```

### 3. Company Research
```
Find company and related contacts
→ search_companies(query="Acme Corp")
→ get_company_contacts(company_id="123")
```

## Integration with Marketing

- `/crm:segment` → Use HubSpot contact data
- `/leads:score` → Access engagement data
- `/sequence:nurture` → Sync with HubSpot sequences
- `/sales:qualify` → Access deal data

## Related
- [Slack](../slack/) - Notifications for deals
- [Meta Ads](../meta-ads/) - Sync audiences
