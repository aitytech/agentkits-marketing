# Marketing Documentation Management

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

---

## Documentation Structure

```
./docs/
├── project-overview-pdr.md      # Project overview and requirements
├── project-roadmap.md           # Development milestones
├── brand-guidelines.md          # Brand voice, visual, messaging
├── content-style-guide.md       # Writing standards and conventions
├── campaign-playbooks.md        # Campaign type templates
├── channel-strategies.md        # Channel-specific tactics
├── analytics-setup.md           # Tracking and measurement
└── usage-guide.md               # System usage instructions
```

## Documentation Types

### Strategic Documents
| Document | Purpose | Update Frequency |
|----------|---------|------------------|
| `brand-guidelines.md` | Brand standards and voice | Quarterly or brand refresh |
| `content-style-guide.md` | Writing conventions | As needed |
| `channel-strategies.md` | Platform tactics | Quarterly |

### Operational Documents
| Document | Purpose | Update Frequency |
|----------|---------|------------------|
| `campaign-playbooks.md` | Campaign templates | After each campaign type |
| `analytics-setup.md` | Tracking configuration | When tracking changes |
| `usage-guide.md` | System instructions | With system updates |

### Project Documents
| Document | Purpose | Update Frequency |
|----------|---------|------------------|
| `project-overview-pdr.md` | Project requirements | Project changes |
| `project-roadmap.md` | Development progress | Weekly |

## Automatic Updates Required

### After Campaign Completion
- Update `campaign-playbooks.md` with learnings
- Document successful patterns in channel strategies
- Update analytics benchmarks

### After Brand Changes
- Update `brand-guidelines.md` immediately
- Cascade changes to `content-style-guide.md`
- Notify relevant agents of voice changes

### After System Changes
- Update `usage-guide.md` with new features
- Document new commands or agents
- Update workflow references

## Documentation Triggers

The `docs-manager` agent MUST update documentation when:
- Campaign type completed (update playbooks)
- Brand refresh or voice update (update guidelines)
- New channel added (update channel strategies)
- Tracking implementation changes (update analytics setup)
- System capabilities change (update usage guide)

## Update Protocol

### Before Updates
1. Read current document status
2. Identify sections requiring update
3. Gather supporting data/examples

### During Updates
1. Maintain consistent formatting
2. Update version/date information
3. Add examples from recent work
4. Ensure cross-references are valid

### After Updates
1. Verify all links work
2. Check date accuracy
3. Update table of contents if applicable
4. Notify stakeholders of changes

## Agent Responsibilities

| Agent | Documentation Duties |
|-------|---------------------|
| `docs-manager` | All documentation updates, organization |
| `copywriter` | Content style guide updates |
| `planner` | Campaign playbook templates |
| `researcher` | Channel strategy insights |
| `project-manager` | Roadmap and project docs |

## Quality Checklist

### Content Quality
- [ ] Information is current and accurate
- [ ] Examples are from recent work
- [ ] Best practices are documented
- [ ] Anti-patterns are called out

### Format Quality
- [ ] Consistent heading structure
- [ ] Tables used for comparisons
- [ ] Code blocks for templates
- [ ] Clear section organization

### Accessibility
- [ ] Document is scannable
- [ ] Key info in first paragraph
- [ ] TOC for long documents
- [ ] Cross-links to related docs
