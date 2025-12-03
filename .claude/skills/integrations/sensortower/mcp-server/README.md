# SensorTower MCP Server

MCP server for SensorTower app intelligence API.

## Setup

### 1. Install Dependencies

```bash
cd .claude/skills/SensorTower/mcp-server
npm install
```

### 2. Set API Token

```bash
export SENSOR_TOWER_API_TOKEN="your-api-token"
```

### 3. Build

```bash
npm run build
```

### 4. Run

```bash
npm start
```

## Claude Desktop Configuration

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "sensortower": {
      "command": "node",
      "args": ["/path/to/mcp-server/dist/index.js"],
      "env": {
        "SENSOR_TOWER_API_TOKEN": "your-api-token"
      }
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|-------------|
| `get_app_metadata` | Get app info (name, publisher, ratings) |
| `get_app_rankings` | Historical chart rankings |
| `get_app_reviews` | User reviews for sentiment analysis |
| `get_keyword_rankings` | ASO keyword positions |
| `search_keywords` | Keyword research suggestions |
| `get_keyword_stats` | Search volume & difficulty |
| `get_top_apps` | Category top charts |
| `get_category_breakdown` | Market sizing data |
| `get_analytics_metrics` | Your app's analytics |
| `get_sales_reports` | Your app's revenue data |

## App ID Formats

- **iOS**: Numeric ID (e.g., `284882215`)
- **Android**: Package name (e.g., `com.facebook.katana`)

## Example Usage

```
// Get competitor app info
get_app_metadata(os="ios", app_ids=["284882215"])

// Research keywords
search_keywords(os="ios", term="productivity app", limit=50)

// Get top apps in category
get_top_apps(os="ios", country="US", category="6007", chart_type="free")
```

## API Documentation

See [SensorTower API Docs](https://sensortower.com/product/connect)
