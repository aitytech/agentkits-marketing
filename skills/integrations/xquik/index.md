# Xquik Integration

> Research public X posts, profiles, conversations, and monitored accounts

## Overview

Xquik provides a remote MCP server for source-backed X research. It exposes 2 tools and discovers the current API contract at runtime.

## Capabilities

| Tool | Description |
|------|-------------|
| `explore` | Find current API endpoints without making network requests |
| `xquik` | Run a request against a discovered endpoint |

## Authentication

Create an API key in Xquik, then expose it to Claude Code:

```bash
export XQUIK_API_KEY="xq_your_key_here"
```

The included `.claude/.mcp.json.example` reads this variable. Copy that example to `.claude/.mcp.json` if your project has no MCP configuration.

## Read-only research workflow

1. Call `explore` to find current `GET` endpoints for the research task.
2. Call `xquik` only with a discovered `GET` endpoint.
3. Preserve returned source URLs, authors, timestamps, and capture times.
4. Mark missing fields as unavailable. Never infer engagement data.

Use this workflow for research commands. Do not call write endpoints from research commands.

## Use cases

- Compare competitor positioning using cited public posts.
- Research current conversations about a market or product category.
- Review public account profiles and recent activity.
- Monitor public accounts for later source-backed analysis.

## Integration with marketing

- `/competitor:deep` → Source positioning, objections, and reply themes
- `/research:market` → Source market conversations and emerging themes
- `/social:viral` → Research current posts before planning content

See the [Xquik MCP documentation](https://docs.xquik.com/mcp/overview) for setup and tool contracts.

## Related

- [Twitter/X](../twitter/) - Posting and platform-specific actions
