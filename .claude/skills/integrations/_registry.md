# MCP Integrations Registry

> Central catalog of all MCP server integrations for marketing automation

## Quick Reference

| Service | Category | Type | Status |
|---------|----------|------|--------|
| [SensorTower](./sensortower/) | App Intelligence | Custom | ✅ Active |
| [Google Search Console](./google-search-console/) | SEO | npm | ✅ Active |
| [Google Analytics](./google-analytics/) | Analytics | npm | ✅ Active |
| [Semrush](./semrush/) | SEO | Remote | ✅ Active |
| [DataForSEO](./dataforseo/) | SEO | npm | ✅ Active |
| [Meta Ads](./meta-ads/) | Advertising | npm | ✅ Active |
| [HubSpot](./hubspot/) | CRM | Remote | ✅ Active |
| [Slack](./slack/) | Communication | npm | ✅ Active |
| [Notion](./notion/) | Project Mgmt | npm | ✅ Active |
| [Asana](./asana/) | Project Mgmt | npm | ✅ Active |
| [Twitter/X](./twitter/) | Social | npm | ✅ Active |
| [TikTok](./tiktok/) | Social | npm | ✅ Active |
| [Crosspost](./crosspost/) | Social | npm | ✅ Active |
| [LINE](./line/) | Messaging (JP) | npm | ✅ Active |
| [Zalo](./zalo/) | Messaging (VN) | Custom | ⚠️ Planned |

---

## By Category

### App Intelligence
- **[SensorTower](./sensortower/)** - iOS/Android app analytics, ASO
  - Tools: 29 | Type: Custom | Auth: `SENSOR_TOWER_API_TOKEN`

### SEO & Search
- **[Google Search Console](./google-search-console/)** - Search performance, indexing
  - Tools: 6 | Package: `mcp-server-gsc` | Auth: Service Account

- **[Semrush](./semrush/)** - Keywords, backlinks, domain analytics
  - Tools: 20 | Type: Remote SSE | Auth: `SEMRUSH_API_KEY`

- **[DataForSEO](./dataforseo/)** - SERP, keywords, backlinks (pay-per-use)
  - Tools: 50+ | Package: `@dataforseo/mcp-server` | Auth: Login/Password

### Analytics
- **[Google Analytics](./google-analytics/)** - GA4 web analytics
  - Tools: 6 | Package: `mcp-server-google-analytics` | Auth: Service Account

### Advertising
- **[Meta Ads](./meta-ads/)** - Facebook/Instagram ads
  - Tools: 25 | Package: `meta-ads-mcp` | Auth: `META_ACCESS_TOKEN`

### CRM
- **[HubSpot](./hubspot/)** - CRM, contacts, deals, marketing
  - Tools: 15 | Type: Remote | Auth: `HUBSPOT_ACCESS_TOKEN`

### Communication
- **[Slack](./slack/)** - Team messaging, notifications
  - Tools: 10 | Package: `slack-mcp-server` | Auth: Bot Token

### Project Management
- **[Notion](./notion/)** - Pages, databases, content
  - Tools: 15 | Package: `@notionhq/notion-mcp-server` | Auth: Integration Token

- **[Asana](./asana/)** - Tasks, projects
  - Tools: 12 | Package: `@roychri/mcp-server-asana` | Auth: Access Token

### Social Media
- **[Twitter/X](./twitter/)** - Tweets, search, threads
  - Tools: 8 | Package: `x-mcp-server` | Auth: OAuth 1.0a

- **[TikTok](./tiktok/)** - Video discovery, trends
  - Tools: 5 | Package: `tiktok-mcp` | Auth: TikNeuron API

- **[Crosspost](./crosspost/)** - Multi-platform posting
  - Tools: 3 | Package: `@humanwhocodes/crosspost` | Auth: Per-platform

### Regional Messaging
- **[LINE](./line/)** - Japan/Asia messaging (97M users)
  - Tools: 5 | Package: `line-bot-mcp-server` | Auth: Channel Token

- **[Zalo](./zalo/)** ⚠️ - Vietnam messaging (74M users)
  - Status: **Needs Custom MCP** | API: [developers.zalo.me](https://developers.zalo.me)

---

## By Market

### 🇺🇸 US Market
| Platform | Integration | Priority |
|----------|-------------|----------|
| Google Analytics | ✅ Ready | High |
| Google Search Console | ✅ Ready | High |
| Meta Ads | ✅ Ready | High |
| HubSpot | ✅ Ready | High |
| Semrush | ✅ Ready | High |
| Twitter/X | ✅ Ready | Medium |
| Slack | ✅ Ready | Medium |

### 🇻🇳 Vietnam Market
| Platform | Integration | Priority |
|----------|-------------|----------|
| Zalo | ⚠️ Need Custom | Critical |
| Facebook (Meta Ads) | ✅ Ready | High |
| TikTok | ✅ Ready | High |
| Google | ✅ Ready | High |

### 🇯🇵 Japan Market
| Platform | Integration | Priority |
|----------|-------------|----------|
| LINE | ✅ Ready | Critical |
| Twitter/X | ✅ Ready | High |
| TikTok | ✅ Ready | Medium |

---

## Environment Variables

```bash
# App Intelligence
export SENSOR_TOWER_API_TOKEN="xxx"

# SEO
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
export SEMRUSH_API_KEY="xxx"
export DATAFORSEO_LOGIN="xxx"
export DATAFORSEO_PASSWORD="xxx"

# Analytics
export GA4_PROPERTY_ID="properties/xxx"

# Advertising
export META_ACCESS_TOKEN="xxx"

# CRM
export HUBSPOT_ACCESS_TOKEN="pat-xxx"

# Communication
export SLACK_BOT_TOKEN="xoxb-xxx"

# Project Management
export NOTION_API_KEY="secret_xxx"
export ASANA_ACCESS_TOKEN="xxx"

# Social Media
export TWITTER_API_KEY="xxx"
export TWITTER_API_SECRET="xxx"
export TWITTER_ACCESS_TOKEN="xxx"
export TWITTER_ACCESS_SECRET="xxx"

# Regional
export LINE_CHANNEL_ACCESS_TOKEN="xxx"
export ZALO_OA_ACCESS_TOKEN="xxx"
```

---

## Adding New Integration

1. Create folder: `integrations/[service-name]/`
2. Add `index.md` - docs, use cases, examples
3. Add `config.json` - MCP server config
4. Update this `_registry.md`
5. Add to `.mcp.json`

### config.json Template

```json
{
  "name": "service-name",
  "description": "Service description",
  "type": "npm|custom|remote",
  "command": "npx",
  "args": ["-y", "package-name"],
  "env": {
    "API_KEY": "${SERVICE_API_KEY}"
  },
  "capabilities": {
    "tools": 10,
    "categories": ["category1", "category2"]
  },
  "source": {
    "npm": "https://npmjs.com/package/xxx",
    "github": "https://github.com/xxx"
  }
}
```
