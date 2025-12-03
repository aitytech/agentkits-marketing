# Notion Integration

> Workspace for content calendar, documentation, and project tracking

## Overview

Official Notion MCP server for managing pages, databases, and content. Perfect for content calendars, campaign documentation, and editorial workflows.

## Capabilities

| Tool | Description |
|------|-------------|
| `search` | Search pages and databases |
| `get_page` | Get page content |
| `create_page` | Create new page |
| `update_page` | Update page properties |
| `query_database` | Query database with filters |
| `create_database_item` | Add item to database |

## Authentication

```bash
export NOTION_API_KEY="secret_xxx"
```

### Setup
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Create new integration
3. Copy Internal Integration Token
4. Share pages/databases with integration

## Use Cases

### 1. Content Calendar
```
Get upcoming content from calendar database
→ query_database(database_id="xxx", filter={property: "Status", equals: "Scheduled"})
```

### 2. Campaign Documentation
```
Create new campaign brief page
→ create_page(parent={database_id: "campaigns"}, properties={...})
```

### 3. Task Tracking
```
Find open marketing tasks
→ query_database(database_id="tasks", filter={property: "Assignee", contains: "marketing"})
```

## Integration with Marketing

- `/campaign:calendar` → Sync to Notion database
- `/content:blog` → Create draft in Notion
- `/ops:weekly` → Update task database

## Related
- [Asana](../asana/) - Alternative task management
- [Slack](../slack/) - Notifications from Notion
