# Crosspost Integration

> Post to multiple social platforms at once

## Overview

Single tool to post content across Twitter, Mastodon, Bluesky, LinkedIn, Discord, and more. Perfect for content distribution.

## Supported Platforms

- Twitter/X
- Mastodon
- Bluesky
- LinkedIn
- Discord (webhook)
- Telegram
- dev.to

## Capabilities

| Tool | Description |
|------|-------------|
| `post` | Post to all configured platforms |
| `post_to` | Post to specific platforms |

## Authentication

Set credentials for each platform you want to use:

```bash
# Twitter
export TWITTER_API_KEY="xxx"
export TWITTER_API_SECRET="xxx"
export TWITTER_ACCESS_TOKEN="xxx"
export TWITTER_ACCESS_SECRET="xxx"

# LinkedIn
export LINKEDIN_ACCESS_TOKEN="xxx"

# Discord
export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."

# Bluesky
export BLUESKY_IDENTIFIER="your.handle.bsky.social"
export BLUESKY_PASSWORD="xxx"
```

## Use Cases

### 1. Announce to All Platforms
```
Share product launch everywhere
→ post(text="🚀 We just launched our new feature! Check it out: https://...")
```

### 2. Platform-Specific Posting
```
Post only to Twitter and LinkedIn
→ post_to(platforms=["twitter", "linkedin"], text="Professional announcement...")
```

### 3. Content Distribution
```
Share blog post across platforms
→ post(text="New blog: 10 Marketing Tips for 2024\n\nhttps://yoursite.com/blog/...")
```

## Integration with Marketing

- `/social:schedule` → Distribute scheduled content
- `/content:social` → Post generated content
- `/campaign:plan` → Multi-channel announcements

## Related
- [Twitter](../twitter/) - Twitter-specific features
- [Slack](../slack/) - Internal notifications
