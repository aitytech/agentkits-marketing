# TikTok Integration

> TikTok video discovery, analysis, and trend research

## Overview

Analyze TikTok videos, search content, and research viral trends for content strategy.

## Capabilities

| Tool | Description |
|------|-------------|
| `get_video_metadata` | Get video details, engagement |
| `get_video_subtitles` | Extract video transcript |
| `search_videos` | Search TikTok content |
| `analyze_virality` | Analyze viral factors |

## Authentication

```bash
export TIKNEURON_API_KEY="xxx"
```

Note: Uses TikNeuron service for data access.

## Use Cases

### 1. Competitor Analysis
```
Analyze competitor's viral video
→ get_video_metadata(url="https://tiktok.com/@competitor/video/xxx")
```

### 2. Trend Research
```
Find trending content in niche
→ search_videos(query="#marketingtips", limit=50)
```

### 3. Content Ideas
```
Get transcript from successful video
→ get_video_subtitles(url="https://tiktok.com/...")
```

## Integration with Marketing

- `/social:viral` → Research viral TikTok content
- `/content:social` → TikTok-optimized content
- `/competitor:deep` → Competitor TikTok analysis

## Related
- [Twitter](../twitter/) - Short-form text content
- [Crosspost](../crosspost/) - Multi-platform posting
