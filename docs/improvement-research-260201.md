# AgentKits Marketing: Enterprise Improvement Research Report

**Date:** 2026-02-01
**Objective:** Deep research for enterprise-grade skill system improvements
**Sources:** awesome-claude-skills repository, current agentkits-marketing, enterprise AI best practices

---

## Executive Summary

This report synthesizes research from three sources to provide actionable improvements for elevating agentkits-marketing to enterprise-grade quality:

1. **awesome-claude-skills repository** - 32 community skills with proven patterns
2. **Current agentkits-marketing** - 28 skills, 18 agents, 99+ commands
3. **Enterprise AI systems** - Industry best practices for 2026

**Key Finding:** AgentKits Marketing is already production-ready but can be elevated to enterprise-grade through: (1) centralized skill registry, (2) semantic skill selector, (3) dependency graph, (4) reference data standardization, and (5) accuracy improvements via RAG patterns.

---

## Part 1: Learnings from awesome-claude-skills

### What We Can Copy Directly

| Pattern | Source | Recommendation |
|---------|--------|----------------|
| `marketplace.json` schema | `.claude-plugin/marketplace.json` | Adopt for skill discovery |
| Progressive disclosure | skill-creator/SKILL.md | Already partially implemented |
| Composable utilities | slack-gif-creator/templates/ | Create marketing primitives |
| Decision tree workflows | document-skills/docx/SKILL.md | Add to complex skills |
| Theme/data files | theme-factory/themes/*.md | Create marketing template library |

### Structural Patterns to Adopt

**1. Central Registry Pattern**
```json
// awesome-claude-skills uses marketplace.json
{
  "$schema": "https://anthropic.com/claude-code/marketplace.schema.json",
  "plugins": [
    {
      "name": "skill-name",
      "description": "Activation trigger description",
      "source": "./skill-directory",
      "category": "business-marketing"
    }
  ]
}
```

**Recommendation:** Create `skills-registry.json` for agentkits-marketing with:
- Semantic search metadata
- Category tags
- Prerequisite skills
- Difficulty level
- MCP integrations required

**2. Reference Organization**
awesome-claude-skills separates:
- `references/` - Deep documentation (20-30KB files)
- `scripts/` - Executable helpers
- `templates/` - Reusable patterns
- `assets/` - Static resources
- `core/` - Shared utilities

**Current agentkits-marketing:** Only 9 of 32 skills have `references/` subdirectories.

**Recommendation:** Extract references from dense SKILL.md files (copywriting, email-sequence, etc.)

**3. Composable Primitives (from slack-gif-creator)**
Instead of monolithic workflows, provide building blocks:
```
templates/
├── bounce.py      # Composable animation
├── shake.py       # Composable animation
├── fade.py        # Composable animation
```

**Marketing equivalent:**
```
templates/
├── headline-formulas.md     # Copy building blocks
├── cta-patterns.md          # CRO building blocks
├── email-subject-lines.md   # Email building blocks
├── objection-handlers.md    # Sales building blocks
```

### Skills to Consider Adding from awesome-claude-skills

| Skill | Purpose | Marketing Application |
|-------|---------|----------------------|
| lead-research-assistant | Identify/qualify leads | Enhance lead-qualifier agent |
| competitive-ads-extractor | Analyze competitor ads | Feed attraction-specialist |
| twitter-algorithm-optimizer | Optimize tweets | Enhance social-media skill |
| content-research-writer | Research + citations | Enhance copywriter agent |
| domain-name-brainstormer | Domain ideation | Add to launch-strategy |
| changelog-generator | Release notes | Customer communication |

---

## Part 2: Current AgentKits Marketing Analysis

### Current Strengths

| Aspect | Score | Evidence |
|--------|-------|----------|
| Organization | 9/10 | 5 categories, clear structure |
| Documentation | 9/10 | 925+ lines average per skill |
| Agent integration | 8/10 | Explicit skill mappings |
| Activation triggers | 9/10 | Comprehensive frontmatter |
| MCP integrations | 8/10 | 14 servers configured |

### Identified Gaps

| Gap | Impact | Priority |
|-----|--------|----------|
| No programmatic skill selector | Can't query skills semantically | HIGH |
| No skill dependency graph | Implicit relationships only | HIGH |
| No version tracking | Can't manage skill evolution | MEDIUM |
| 19 skills without reference subdirs | Dense SKILL.md files | MEDIUM |
| No difficulty indicators | All skills appear equal | LOW |
| No success metrics section | No "how to measure" guidance | LOW |

### Current vs Target Architecture

```
CURRENT STATE                      TARGET STATE
─────────────────                  ──────────────────────
Skills scattered in /skills/   →   Central skills-registry.json
Implicit dependencies          →   Explicit prerequisite graph
Text-based activation          →   Semantic matching + RAG
Agent-level MCP mapping        →   Skill-to-MCP matrix
Manual skill selection         →   Intelligent skill selector
```

---

## Part 3: Enterprise Best Practices (2026)

### Layered Agent Architecture

Per [Salesforce Agentic Enterprise Architecture](https://architect.salesforce.com/fundamentals/agentic-enterprise-it-architecture):

```
┌─────────────────────────────────────┐
│        EXPERIENCE LAYER             │  ← User interfaces
├─────────────────────────────────────┤
│         CONTROL LAYER               │  ← Orchestration, routing
├─────────────────────────────────────┤
│        EXECUTION LAYER              │  ← Skills, tools, MCP
└─────────────────────────────────────┘
```

**Implementation for AgentKits:**
- Experience: Commands (`/campaign:plan`, `/cro:page`)
- Control: Agents + orchestration-protocol.md
- Execution: Skills + MCP integrations

### Composable Capability Catalog

Per [MuleSoft Agentic Enterprise](https://blogs.mulesoft.com/automation/architecting-the-agentic-enterprise/):

Required components:
1. **Agent Registry** - Catalog all agents with metadata
2. **Skill Catalog** - All skills with semantic annotations
3. **Capability Marketplace** - APIs, tools, datasets
4. **Governance Layer** - Security, permissions, audit

**Create: `capability-catalog.json`**
```json
{
  "agents": [...],
  "skills": [...],
  "integrations": [...],
  "workflows": [...]
}
```

### Semantic Skill Selection (RAG Pattern)

Per [Elastic Context Engineering](https://www.elastic.co/search-labs/blog/context-engineering-relevance-ai-agents-elasticsearch):

Problem: Too many skills causes "context rot" and decision fatigue.

Solution: Pre-filter skills via semantic matching:
1. Index skill descriptions as embeddings
2. Query matches user intent semantically
3. Return top 3-5 relevant skills only
4. Agent focuses on curated subset

**Implementation:**
```yaml
# skill-embeddings.yaml
skills:
  - name: page-cro
    embedding_keywords: [conversion, landing page, CRO, optimize, bounce rate]
    category: cro
    prerequisite_skills: []

  - name: form-cro
    embedding_keywords: [form, lead capture, field, completion rate]
    category: cro
    prerequisite_skills: [page-cro]
```

### Agent Skills Specification Standard

Per [Agent Skills Spec](https://agentskills.io/specification):

The open standard adopted by Anthropic, OpenAI, and others:
- SKILL.md with YAML frontmatter
- Progressive disclosure (metadata → instructions → references)
- Priority: Enterprise > Personal > Project > Plugin

**AgentKits already follows this.** Enhance with:
- `version` field in frontmatter
- `prerequisites` array
- `difficulty` level (beginner/intermediate/advanced)
- `mcp_integrations` array

### Data Infrastructure as First-Class Component

Per [Informatica Enterprise AI](https://www.informatica.com/resources/articles/enterprise-ai-agent-engineering.html):

> "91% of AI models experience quality degradation over time due to stale, incomplete or fragmented data"

**Requirement:** Unified data access with governance, quality checks, observability.

**Current state:** MCP integrations exist but aren't skill-level mapped.

**Target:** Every skill declares its data sources:
```yaml
---
name: page-cro
data_sources:
  required: [google-analytics]
  optional: [semrush, dataforseo]
  fallback: "Manual data input or estimation"
---
```

---

## Part 4: Concrete Improvement Recommendations

### Priority 1: Skill Registry & Selector (HIGH IMPACT)

**Create: `.claude/skills/skills-registry.json`**

```json
{
  "$schema": "./schemas/skills-registry.schema.json",
  "version": "1.0.0",
  "skills": [
    {
      "id": "page-cro",
      "name": "Page CRO",
      "category": "cro",
      "subcategory": "conversion-optimization",
      "version": "1.0.0",
      "difficulty": "intermediate",
      "description": "Optimize marketing pages for conversions",
      "triggers": ["CRO", "conversion rate", "landing page", "optimize page", "bounce rate"],
      "prerequisites": [],
      "related_skills": ["form-cro", "popup-cro", "ab-test-setup"],
      "agents": ["conversion-optimizer", "attraction-specialist"],
      "mcp_required": [],
      "mcp_optional": ["google-analytics", "semrush"],
      "references": ["references/cro-framework.md"],
      "output_schema": "cro-analysis",
      "success_metrics": ["conversion_rate_improvement", "bounce_rate_reduction"]
    }
  ],
  "categories": {
    "core": { "skills": [...], "description": "..." },
    "cro": { "skills": [...], "description": "..." },
    "content": { "skills": [...], "description": "..." },
    "seo-growth": { "skills": [...], "description": "..." }
  },
  "dependency_graph": {
    "form-cro": ["page-cro"],
    "onboarding-cro": ["signup-flow-cro"],
    "ab-test-setup": ["page-cro", "form-cro"]
  }
}
```

### Priority 2: Skill Selector Command

**Create: `.claude/commands/skills/select.md`**

```yaml
---
description: Intelligently select optimal skills for a task
allowed-tools: [Read, Grep]
---

# Skill Selector

When user describes a marketing task:
1. Parse task intent and keywords
2. Search skills-registry.json for matching triggers
3. Check prerequisites and load dependency chain
4. Return ranked skill recommendations with rationale
5. Activate top skills automatically

Example:
User: "Improve our pricing page conversions"
→ Matches: page-cro (0.95), pricing-strategy (0.8), ab-test-setup (0.7)
→ Activates: page-cro + ab-test-setup
```

### Priority 3: Reference Data Library

**Create standardized reference data files:**

```
.claude/skills/common/
├── data/
│   ├── benchmark-metrics.yaml      # Industry benchmarks
│   ├── conversion-formulas.yaml    # CRO calculations
│   ├── email-timing.yaml           # Send time optimization
│   ├── seo-ranking-factors.yaml    # Current ranking factors
│   └── pricing-psychology.yaml     # Price anchoring data
├── templates/
│   ├── headline-formulas.md        # 50+ headline patterns
│   ├── cta-library.md              # CTA patterns by goal
│   ├── email-subject-lines.md      # High-performing subjects
│   ├── objection-handlers.md       # Sales objection scripts
│   └── social-hooks.md             # Platform-specific hooks
└── schemas/
    ├── campaign-brief.schema.json
    ├── content-plan.schema.json
    ├── cro-analysis.schema.json
    └── skill-output.schema.json
```

**Example: `benchmark-metrics.yaml`**
```yaml
email:
  open_rate:
    excellent: ">25%"
    good: "20-25%"
    average: "15-20%"
    poor: "<15%"
  click_rate:
    excellent: ">5%"
    good: "3-5%"
    average: "1-3%"
    poor: "<1%

landing_page:
  conversion_rate:
    excellent: ">10%"
    good: "5-10%"
    average: "2-5%"
    poor: "<2%
```

### Priority 4: Enhanced SKILL.md Frontmatter

**Update all SKILL.md files with extended metadata:**

```yaml
---
name: page-cro
version: "1.0.0"
description: "..."
difficulty: intermediate
category: cro

# New fields
prerequisites: []
related_skills: [form-cro, popup-cro]
mcp_integrations:
  required: []
  optional: [google-analytics, semrush]
data_sources:
  - type: analytics
    provider: google-analytics
    fallback: "Request manual data"

success_metrics:
  - metric: conversion_rate
    improvement: "10-30%"
  - metric: bounce_rate
    reduction: "5-15%"

output_schema: cro-analysis
---
```

### Priority 5: Dependency Graph Visualization

**Create: `.claude/skills/dependency-graph.md`**

```markdown
# Skill Dependency Graph

## CRO Track
```
page-cro (foundation)
├── form-cro
│   └── signup-flow-cro
│       └── onboarding-cro
├── popup-cro
└── ab-test-setup
    └── paywall-upgrade-cro
```

## Content Track
```
copywriting (foundation)
├── copy-editing
├── email-sequence
└── content-strategy
```

## SEO Track
```
seo-mastery (foundation)
├── programmatic-seo
├── schema-markup
└── competitor-alternatives
```
```

### Priority 6: Accuracy Improvements via Context Engineering

**Implement contextual retrieval pattern:**

1. **Skill Embedding Index**
   - Generate embeddings for all skill descriptions
   - Store in `skill-embeddings.json`
   - Enable semantic search at runtime

2. **Relevance Scoring**
   - Score: semantic_match * category_weight * recency_factor
   - Return top 3-5 skills only
   - Avoid context rot from too many skills

3. **Progressive Loading**
   - Level 1: Name + description (always)
   - Level 2: Full SKILL.md (on activation)
   - Level 3: References (on demand)

**Implementation in orchestration-protocol.md:**
```markdown
## Skill Selection Protocol

1. Extract keywords from user request
2. Semantic match against skill-embeddings
3. Apply category weights based on context
4. Load top 3-5 skills only
5. Check prerequisites and load chain
6. Execute with focused context
```

---

## Part 5: Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Create `skills-registry.json` with all 32 skills
- [ ] Add extended frontmatter to all SKILL.md files
- [ ] Create dependency graph documentation
- [ ] Build `/skills:select` command

### Phase 2: Reference Library (Week 3-4)
- [ ] Extract references from 19 dense SKILL.md files
- [ ] Create `common/data/` YAML files
- [ ] Create `common/templates/` library
- [ ] Create output schemas

### Phase 3: Accuracy Improvements (Week 5-6)
- [ ] Implement semantic skill matching
- [ ] Add skill-to-MCP mapping matrix
- [ ] Create success metrics tracking
- [ ] Update orchestration protocol

### Phase 4: Enterprise Features (Week 7-8)
- [ ] Add version tracking
- [ ] Create skill changelog mechanism
- [ ] Build capability catalog
- [ ] Add skill usage analytics hooks

---

## Part 6: Files to Create/Modify

### New Files
| File | Purpose |
|------|---------|
| `.claude/skills/skills-registry.json` | Central skill catalog |
| `.claude/skills/schemas/skills-registry.schema.json` | JSON schema |
| `.claude/skills/common/data/benchmark-metrics.yaml` | Industry benchmarks |
| `.claude/skills/common/data/conversion-formulas.yaml` | CRO calculations |
| `.claude/skills/common/templates/headline-formulas.md` | Copy templates |
| `.claude/skills/common/templates/cta-library.md` | CTA patterns |
| `.claude/skills/dependency-graph.md` | Visual skill dependencies |
| `.claude/commands/skills/select.md` | Skill selector command |

### Files to Modify
| File | Changes |
|------|---------|
| All 32 SKILL.md files | Add extended frontmatter |
| `.claude/workflows/orchestration-protocol.md` | Add skill selection protocol |
| `CLAUDE.md` | Reference new registry and selector |
| `.claude-plugin/plugin.json` | Add new components |

### Reference Extraction Needed
| Skill | Current Lines | Extract to References |
|-------|---------------|----------------------|
| copywriting | ~450 | headline-formulas, cta-patterns |
| email-sequence | ~925 | sequence-templates, timing-guide |
| page-cro | ~520 | cro-framework, optimization-checklist |
| form-cro | ~480 | form-patterns, field-optimization |
| marketing-psychology | ~440 | mental-models-library |
| marketing-ideas | ~550 | ideas-by-category |

---

## Appendix: Research Sources

### Primary Sources
- [awesome-claude-skills GitHub](https://github.com/ComposioHQ/awesome-claude-skills)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Claude Code Plugin Marketplace Docs](https://code.claude.com/docs/en/plugin-marketplaces)

### Enterprise AI Architecture
- [Salesforce Agentic Enterprise Architecture](https://architect.salesforce.com/fundamentals/agentic-enterprise-it-architecture)
- [MuleSoft Agentic Enterprise](https://blogs.mulesoft.com/automation/architecting-the-agentic-enterprise/)
- [Informatica Enterprise AI Engineering](https://www.informatica.com/resources/articles/enterprise-ai-agent-engineering.html)
- [OneReach Best Practices 2026](https://onereach.ai/blog/best-practices-for-ai-agent-implementations/)

### Skill Systems
- [Spring AI Agent Skills](https://spring.io/blog/2026/01/13/spring-ai-generic-agent-skills/)
- [TrueFoundry AI Agent Registry](https://www.truefoundry.com/blog/ai-agent-registry)
- [Subramanya Agent Skills Enterprise](https://subramanya.ai/2025/12/18/agent-skills-the-missing-piece-of-the-enterprise-ai-puzzle/)
- [Skills Marketplace](https://skillsmp.com/)

### RAG & Accuracy
- [Azure Agentic Retrieval](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
- [RAGFlow RAG Review 2025](https://ragflow.io/blog/rag-review-2025-from-rag-to-context)
- [Elastic Context Engineering](https://www.elastic.co/search-labs/blog/context-engineering-relevance-ai-agents-elasticsearch)

### Governance & Orchestration
- [Writer Agentic AI Governance](https://writer.com/guides/agentic-ai-governance/)
- [McKinsey Agentic Organization](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era)
- [IBM AI Agents Guide 2026](https://www.ibm.com/think/ai-agents)

---

## Questions to Resolve

1. **Embedding Storage:** Use JSON file or integrate with vector DB MCP?
2. **Skill Versioning:** Semantic versioning or date-based?
3. **Registry Format:** Single JSON or split YAML files?
4. **Backward Compatibility:** How to handle existing skill references?
5. **Performance:** Lazy load registry or preload at startup?
