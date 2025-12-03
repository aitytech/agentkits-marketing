# CF Plugin

> Create weeks of content in hours with intelligent batch processing and multi-format repurposing.

## Overview

The CF plugin transforms how marketers create content by enabling rapid, parallel generation across multiple formats while maintaining brand consistency and quality. Generate blog posts, email sequences, social media content, video scripts, and more—all from a single brief.

**Core Philosophy:** High-volume, high-quality content creation through specialized agents, smart templates, and automated quality checks.

## What This Plugin Provides

### Commands (Content Generation)

- **`/cf:generate`** - Batch content creation across multiple formats simultaneously
- **`/cf:repurpose`** - Transform one piece of content into many formats
- **`/cf:schedule`** - Create and organize content calendars with auto-population

### Specialized Agents

**Content Creation:**
- `@blog-writer` - Long-form blog content specialist
- `@email-copywriter` - Email marketing expert
- `@social-media-creator` - Platform-specific social content
- `@video-scriptwriter` - Video and multimedia scripts

**Quality Assurance:**
- Uses shared agents: `@brand-voice-guardian`, `@seo-specialist`, `@conversion-optimizer`

### Templates (Content Formats)

**Blog Content:**
- Long-form articles (1500-2500 words)
- List posts ("10 Ways to...")
- How-to guides
- Case studies
- Industry analysis

**Email Marketing:**
- Welcome emails
- Nurture sequences
- Product announcements
- Newsletter formats
- Promotional emails

**Social Media:**
- LinkedIn posts (thought leadership, company updates)
- Twitter/X threads and standalone tweets
- Instagram captions and carousel copy
- Facebook posts
- TikTok video scripts

**Video & Multimedia:**
- YouTube video scripts
- Explainer video scripts
- Podcast episode outlines
- Webinar content structures

## Installation

### From Marketplace

```bash
# Add marketplace (if not already added)
/plugin marketplace add https://github.com/agentkits/agentkits-marketing

# Install CF
/plugin install cf@marketing-tools-marketplace

# Verify installation
/help
```

### Manual Installation

```bash
git clone https://github.com/agentkits/agentkits-marketing.git
cd marketing-tools-marketplace
ln -s $(pwd)/plugins/cf ~/.claude/plugins/cf
```

## Quick Start

### Generate Batch Content

Create multiple pieces of content simultaneously:

```bash
/cf:generate "Product Launch: FocusFlow 2.0" \
  --formats "blog,email,social" \
  --quantity "3 blogs, 5 emails, 20 social posts" \
  --timeline "2 weeks"
```

**What happens:**
1. Analyzes your brief and campaign goals
2. Launches parallel content generation agents
3. Creates content across all requested formats
4. Validates brand voice and SEO
5. Organizes in structured folders
6. Generates content calendar

**Output structure:**
```
content/focusflow-2.0-launch/
├── blogs/
│   ├── 01-introducing-focusflow-2.0.md
│   ├── 02-top-features-deep-dive.md
│   └── 03-migration-guide.md
├── emails/
│   ├── 01-launch-announcement.md
│   ├── 02-feature-highlight.md
│   ├── 03-customer-stories.md
│   ├── 04-limited-offer.md
│   └── 05-final-reminder.md
├── social/
│   ├── linkedin/
│   ├── twitter/
│   └── instagram/
└── calendar.md
```

---

### Repurpose Existing Content

Transform one asset into multiple formats:

```bash
/cf:repurpose content/blog-post.md \
  --into "email,social,video-script" \
  --platforms "linkedin,twitter,instagram"
```

**What happens:**
1. Reads and analyzes source content
2. Extracts key messages and insights
3. Reformats for each target medium
4. Optimizes for platform-specific best practices
5. Maintains brand voice across all versions

**Example transformation:**

**Blog post (2000 words)** →
- **Email:** 300-word version with CTA
- **LinkedIn:** Thought leadership post (150 words)
- **Twitter:** 5-tweet thread
- **Instagram:** Caption + carousel copy
- **Video script:** 90-second explainer

---

### Create Content Calendar

Generate and organize a content calendar:

```bash
/cf:schedule \
  --period "Q1 2025" \
  --frequency "3 blogs/week, 5 social/day, 2 emails/week" \
  --themes "Product updates, Thought leadership, Customer success"
```

**What happens:**
1. Creates calendar structure for the period
2. Distributes content across timeline
3. Assigns themes to specific dates
4. Generates topic ideas for each slot
5. Can optionally pre-generate content
6. Creates tracking spreadsheet

---

## Command Reference

### `/cf:generate`

**Purpose:** Batch content creation across multiple formats

**Syntax:**
```bash
/cf:generate "<brief>" [options]
```

**Options:**
- `--formats` - Comma-separated list: blog, email, social, video, podcast
- `--quantity` - How many of each (e.g., "3 blogs, 5 emails")
- `--timeline` - When content should cover (e.g., "2 weeks", "Q1")
- `--brand-guidelines` - Path to brand guidelines file
- `--seo-keywords` - Target keywords for SEO
- `--output` - Custom output directory

**Examples:**

```bash
# Generate launch content
/cf:generate "SaaS Product Launch" \
  --formats "blog,email,social" \
  --quantity "5 blogs, 10 emails, 30 social"

# SEO content campaign
/cf:generate "SEO Content Campaign: Project Management" \
  --formats "blog" \
  --quantity "10 blogs" \
  --seo-keywords "project management software, team collaboration"

# Full campaign content
/cf:generate "Q1 Brand Awareness Campaign" \
  --formats "blog,email,social,video" \
  --quantity "8 blogs, 12 emails, 60 social, 4 video scripts"
```

---

### `/cf:repurpose`

**Purpose:** Transform existing content into multiple formats

**Syntax:**
```bash
/cf:repurpose <source-file> [options]
```

**Options:**
- `--into` - Target formats (email, social, video, infographic, etc.)
- `--platforms` - Social platforms (linkedin, twitter, instagram, etc.)
- `--length` - Target length for repurposed content
- `--preserve-tone` - Keep original tone vs. adapt for platform

**Examples:**

```bash
# Blog to social
/cf:repurpose blog/case-study.md \
  --into "social" \
  --platforms "linkedin,twitter,instagram"

# Webinar to content series
/cf:repurpose webinar-transcript.txt \
  --into "blog,email,social,video-clips"

# Research report to multi-format
/cf:repurpose research/industry-report.pdf \
  --into "blog,infographic-copy,social,email-series"
```

---

### `/cf:schedule`

**Purpose:** Create and manage content calendars

**Syntax:**
```bash
/cf:schedule [options]
```

**Options:**
- `--period` - Time period (e.g., "Q1 2025", "January", "Next 30 days")
- `--frequency` - How often to publish (e.g., "3 blogs/week")
- `--themes` - Content themes to cycle through
- `--campaigns` - Link to specific campaigns
- `--generate-content` - Auto-generate content for calendar (vs. just slots)

**Examples:**

```bash
# Create monthly calendar
/cf:schedule \
  --period "March 2025" \
  --frequency "2 blogs/week, 5 social/day"

# Campaign-specific calendar
/cf:schedule \
  --period "6 weeks" \
  --campaigns "product-launch" \
  --generate-content true
```

---

## Features

### Parallel Content Generation

CF uses specialized subagents to create content in parallel:

1. **Analyze Brief** - Understand goals, audience, messaging
2. **Launch Agents** - Spin up specialized content creators
3. **Generate Simultaneously** - All agents work in parallel
4. **Quality Check** - Brand, SEO, conversion review
5. **Organize & Deliver** - Structured, ready-to-use content

**Result:** 10x faster than sequential creation

---

### Smart Content Repurposing

Transform content intelligently, not just mechanically:

- **Context-Aware:** Understands the source material's key points
- **Platform-Optimized:** Adapts to platform best practices
- **Tone-Adjusted:** Maintains brand while fitting platform norms
- **SEO-Preserved:** Keeps keywords and search optimization
- **Visual-Conscious:** Includes image/video recommendations

---

### Brand Consistency

Every piece of content is validated:

- ✓ Brand voice and tone
- ✓ Terminology and messaging
- ✓ Style guide compliance
- ✓ Visual guidelines (suggested)
- ✓ Legal/compliance requirements

Uses `@brand-voice-guardian` agent for automatic validation.

---

### SEO Optimization

Content is automatically optimized for search:

- Keyword density analysis
- Meta description generation
- Header structure (H1, H2, H3)
- Internal linking suggestions
- Readability scoring
- Schema markup recommendations

Uses `@seo-specialist` agent for comprehensive SEO.

---

## Use Cases

### 1. Product Launch Content Blitz

**Scenario:** Launching new product, need content across all channels

```bash
/cf:generate "FocusFlow 2.0 Product Launch" \
  --formats "blog,email,social,video" \
  --quantity "5 blogs, 8 emails, 40 social, 3 video scripts"
```

**Output:** Complete content library for 4-week launch campaign

---

### 2. Content Repurposing at Scale

**Scenario:** Have 20 blog posts, want social content from each

```bash
# Process all blogs
for blog in content/blogs/*.md; do
  /cf:repurpose $blog \
    --into "social" \
    --platforms "linkedin,twitter"
done
```

**Output:** 80+ social posts from existing content

---

### 3. Monthly Content Calendar

**Scenario:** Need to plan and create month of content

```bash
/cf:schedule \
  --period "April 2025" \
  --frequency "3 blogs/week, 10 social/day, 2 emails/week" \
  --generate-content true
```

**Output:** Full month of content, scheduled and ready

---

### 4. Content Series Creation

**Scenario:** Create educational email series

```bash
/cf:generate "Email Course: Mastering Productivity" \
  --formats "email" \
  --quantity "10 emails" \
  --timeline "10 days"
```

**Output:** Complete drip email course

---

## Configuration

### Brand Guidelines

Create `brand/guidelines.md` to ensure consistency:

```markdown
# Brand Guidelines

## Voice & Tone
- Professional yet approachable
- Data-driven but not jargon-heavy
- Optimistic and empowering

## Messaging
- Core message: "Focus on what matters"
- Value prop: "2x productivity in half the time"

## Terminology
- Use: "workspace", "project", "task"
- Avoid: "folder", "job", "todo"

## Style
- Oxford comma: Yes
- Numbers: Spell out one-nine, numerals 10+
- Contractions: Acceptable
```

Reference in commands:
```bash
/cf:generate "Campaign" --brand-guidelines brand/guidelines.md
```

---

### SEO Keywords

Define target keywords for SEO optimization:

```bash
/cf:generate "Blog Campaign" \
  --seo-keywords "productivity software, time management, focus tools"
```

Or in a keywords file:
```
keywords.txt:
productivity software
project management
team collaboration
time tracking
```

---

## Integration with Other Plugins

### With CM

Use CF for the "Execute" stage:

1. Plan campaign with `/cm:plan`
2. Generate content with `/cf:generate`
3. Review with `/cm:review`

### With SEO Optimizer (Coming Soon)

Generate content, then optimize:

1. Create with `/cf:generate`
2. Optimize with `/seo:optimize`
3. Track with `/seo:audit`

---

## Performance & Limits

### Content Volume

Recommended batch sizes:
- **Small batch:** 5-10 pieces (< 2 minutes)
- **Medium batch:** 10-30 pieces (2-5 minutes)
- **Large batch:** 30-100 pieces (5-15 minutes)

### Quality vs. Speed

Control quality/speed trade-off:

```bash
# Fast generation (good quality)
/cf:generate "Campaign" --mode fast

# Thorough generation (excellent quality, slower)
/cf:generate "Campaign" --mode thorough
```

---

## Roadmap

### v0.1 (Current - MVP)
- ✅ Basic plugin structure
- ✅ `/generate` command (basic)
- ✅ Template library
- ✅ Brand voice validation

### v0.2 (Next Release)
- `/repurpose` command
- `/schedule` command
- Parallel agent processing
- Enhanced templates

### v1.0 (Goal)
- Full multi-agent generation
- Advanced repurposing AI
- Content calendar automation
- Performance analytics
- Template marketplace

---

## Support

- **Documentation:** [Getting Started Guide](../../docs/GETTING-STARTED.md)
- **Examples:** [CF Examples](../../examples/cf/)
- **Issues:** [GitHub Issues](https://github.com/agentkits/agentkits-marketing/issues)
- **Community:** [GitHub Discussions](https://github.com/agentkits/agentkits-marketing/discussions)

## License

MIT License - See [LICENSE](../../LICENSE)

## Credits

- **Created for:** Marketing Tools Marketplace
- **Maintained by:** AgentKits team
- **Inspired by:** Modern content marketing best practices and the compounding philosophy

---

**Transform your content creation.** Generate weeks of content in hours. 🚀
