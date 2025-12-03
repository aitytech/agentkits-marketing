# Twitter/X Integration

> Post tweets, threads, search, and engage on Twitter/X

## Overview

Manage Twitter/X presence with posting, search, and media upload capabilities.

## Capabilities

| Tool | Description |
|------|-------------|
| `post_tweet` | Post a tweet with optional media |
| `post_thread` | Create tweet thread |
| `search_tweets` | Search for tweets |
| `delete_tweet` | Delete a tweet |
| `upload_media` | Upload image/video |

## Authentication

```bash
export TWITTER_API_KEY="xxx"
export TWITTER_API_SECRET="xxx"
export TWITTER_ACCESS_TOKEN="xxx"
export TWITTER_ACCESS_SECRET="xxx"
```

### Setup
1. Go to [developer.twitter.com](https://developer.twitter.com)
2. Create Project and App
3. Get API Key, Secret, and Access Tokens
4. Ensure v2 API access enabled

## Use Cases

### 1. Post Announcement
```
Share product launch
→ post_tweet(text="🚀 Excited to announce our new feature! Check it out: https://...")
```

### 2. Create Thread
```
Share insights as thread
→ post_thread(tweets=["1/ Here's what we learned...", "2/ First insight...", "3/ Second insight..."])
```

### 3. Monitor Mentions
```
Search for brand mentions
→ search_tweets(query="@yourcompany OR \"your brand\"", max_results=100)
```

## Integration with Marketing

- `/social:schedule` → Schedule tweets
- `/content:social` → Generate tweet copy
- `/social:engage` → Monitor conversations

## Related
- [Crosspost](../crosspost/) - Multi-platform posting
- [TikTok](../tiktok/) - Video content
