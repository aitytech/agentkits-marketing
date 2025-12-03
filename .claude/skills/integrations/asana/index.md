# Asana Integration

> Project management for marketing campaigns and tasks

## Overview

Manage marketing projects, campaign tasks, and team collaboration through Asana.

## Capabilities

| Tool | Description |
|------|-------------|
| `list_tasks` | Get tasks from project |
| `create_task` | Create new task |
| `update_task` | Update task status/details |
| `list_projects` | Get workspace projects |
| `get_task_comments` | Read task comments |

## Authentication

```bash
export ASANA_ACCESS_TOKEN="1/xxx:xxx"
export ASANA_WORKSPACE_ID="123456789"
```

Get token from: [app.asana.com/0/developer-console](https://app.asana.com/0/developer-console)

## Use Cases

### 1. Campaign Task Tracking
```
Get all tasks for Q1 campaign project
→ list_tasks(project_id="campaign_q1", opt_fields=["name", "due_on", "assignee", "completed"])
```

### 2. Create Content Task
```
Add new blog post task
→ create_task(name="Write: 10 Marketing Tips", project="content", due_on="2024-02-15")
```

### 3. Update Task Status
```
Mark task as complete
→ update_task(task_id="123", completed=true)
```

## Integration with Marketing

- `/campaign:plan` → Create campaign tasks
- `/content:blog` → Track content production
- `/ops:weekly` → Review task status

## Related
- [Notion](../notion/) - Alternative workspace
- [Slack](../slack/) - Task notifications
