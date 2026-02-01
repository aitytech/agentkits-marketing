# A/B Testing Statistical Guide

Based on research from [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html), [CXL](https://cxl.com/ab-test-calculator/), [Optimizely](https://www.optimizely.com/sample-size-calculator/).

---

## Statistical Foundations

### Key Concepts

**Statistical Significance (Confidence Level)**
- Probability that result is not due to chance
- Standard: 95% (alpha = 0.05)
- Conservative: 99% (alpha = 0.01)
- Aggressive: 90% (alpha = 0.10)

**Statistical Power**
- Probability of detecting a real effect
- Standard: 80% (beta = 0.20)
- Conservative: 90% (beta = 0.10)
- Minimum: 70% (beta = 0.30)

**Minimum Detectable Effect (MDE)**
- Smallest improvement you want to detect
- Lower MDE = larger sample needed
- Realistic MDE = 10-20% for most tests

---

## Sample Size Quick Reference

### Sample Size per Variant (95% confidence, 80% power)

| Baseline Rate | 5% MDE | 10% MDE | 15% MDE | 20% MDE | 30% MDE |
|---------------|--------|---------|---------|---------|---------|
| 1% | 630K | 157K | 70K | 39K | 17K |
| 2% | 315K | 78K | 35K | 19K | 8.7K |
| 3% | 207K | 52K | 23K | 13K | 5.8K |
| 5% | 125K | 31K | 14K | 7.8K | 3.5K |
| 10% | 62K | 15K | 6.9K | 3.9K | 1.7K |
| 15% | 41K | 10K | 4.6K | 2.6K | 1.1K |
| 20% | 31K | 7.8K | 3.5K | 1.9K | 860 |
| 30% | 20K | 5.1K | 2.3K | 1.3K | 570 |

**Formula:** n = 2 * ((z_α + z_β)² * p * (1-p)) / MDE²

---

## Test Duration Guidelines

### Minimum Duration Rules
1. **Absolute minimum:** 7 days (capture weekly patterns)
2. **Recommended minimum:** 14 days
3. **Maximum:** 6-8 weeks (data decay)

### Duration Formula
```
Days = (Sample Size per Variant × Number of Variants) / Daily Traffic to Test
```

### Quick Duration Estimates
| Daily Visitors | Sample Needed | Duration |
|----------------|---------------|----------|
| 1,000 | 10,000 | 10-14 days |
| 5,000 | 10,000 | 3-4 days* |
| 10,000 | 10,000 | 2-3 days* |
| 1,000 | 50,000 | 50-70 days |
| 5,000 | 50,000 | 10-14 days |
| 10,000 | 50,000 | 5-7 days* |

*Still run minimum 7 days for business cycle validity

---

## Test Types

### A/B Test (Split Test)
- 2 variants (Control + Test)
- 50/50 traffic split
- Simplest to analyze
- Best for clear hypotheses

### A/B/n Test
- 3+ variants
- Traffic split evenly
- Requires more sample
- Good for comparing multiple ideas

### Multivariate Test (MVT)
- Multiple elements changed simultaneously
- Tests element combinations
- Requires MUCH larger sample
- Only for high-traffic sites

### Sample Size for Multiple Variants
```
Sample per variant = Base sample / (Number of comparisons correction)
Bonferroni correction: α / number of comparisons
```

---

## Hypothesis Framework

### PICO Format
**P** - Population (who are you testing?)
**I** - Intervention (what are you changing?)
**C** - Comparison (what's the control?)
**O** - Outcome (what's the primary metric?)

### Good Hypothesis Template
"If we [change], then [metric] will [improve/decrease] by [amount], because [rationale]."

**Example:**
"If we change the CTA from 'Submit' to 'Get My Free Report', then form submissions will increase by 15%, because benefit-focused CTAs reduce friction and increase motivation."

### Hypothesis Prioritization (ICE)
| Factor | Score 1-10 |
|--------|------------|
| **I**mpact | Expected lift × audience size |
| **C**onfidence | Evidence supporting hypothesis |
| **E**ase | Implementation effort |

Priority = (I + C + E) / 3

---

## Common Pitfalls

### Peeking Problem
**Issue:** Checking results early and stopping when significant
**Impact:** 30%+ false positive rate
**Solution:**
- Pre-commit to sample size
- Use sequential testing if must peek
- Set decision rules upfront

### Multiple Comparison Problem
**Issue:** Testing many variants/metrics
**Impact:** Inflated false positive rate
**Solution:**
- Bonferroni correction (α / n tests)
- Designate ONE primary metric
- Pre-register secondary metrics

### Novelty/Primacy Effect
**Issue:** New = initial spike, then decay
**Impact:** False positives from early results
**Solution:**
- Run full duration
- Segment new vs returning users
- Monitor for trend changes

### Simpson's Paradox
**Issue:** Aggregate result hides segment differences
**Impact:** Wrong winner for key segments
**Solution:**
- Segment analysis
- Check for interaction effects
- Consider stratified randomization

---

## Analysis Framework

### Step 1: Check Validity
- [ ] Sample size reached?
- [ ] Ran minimum 7 days?
- [ ] Sample Ratio Mismatch (SRM) check?
- [ ] Any technical issues during test?

### Step 2: Primary Metric
- Conversion rate for each variant
- Lift (% change vs control)
- Confidence interval
- Statistical significance (p-value)

### Step 3: Secondary Metrics
- Check for guardrail metric degradation
- Look for trade-offs
- Consider per-segment impact

### Step 4: Segment Analysis
| Segment | Control | Variant | Lift | Significant? |
|---------|---------|---------|------|--------------|
| All Users | 5.0% | 5.5% | +10% | Yes (95%) |
| New Users | 4.0% | 4.8% | +20% | Yes (95%) |
| Returning | 7.0% | 6.5% | -7% | No (75%) |
| Mobile | 4.5% | 5.2% | +16% | Yes (92%) |
| Desktop | 5.5% | 5.8% | +5% | No (70%) |

### Step 5: Decision
| Result | Action |
|--------|--------|
| Winner (≥95% confidence) | Ship variant |
| Loser (≤5% chance variant wins) | Keep control |
| Inconclusive | Increase sample or accept uncertainty |
| Mixed (segment differences) | Consider personalization |

---

## Test Velocity Optimization

### Increasing Test Speed
1. **Raise MDE** - Accept detecting only larger effects
2. **Lower confidence** - Accept more risk (90% vs 95%)
3. **Test high-traffic areas** - Faster sample accumulation
4. **Prioritize ruthlessly** - Fewer, higher-impact tests

### Testing Cadence
| Traffic Level | Suggested Cadence |
|---------------|-------------------|
| <10K monthly | 1-2 tests/quarter |
| 10K-100K monthly | 1-2 tests/month |
| 100K-1M monthly | 2-4 tests/month |
| >1M monthly | Continuous testing |

---

## Sample Size Calculators

### Recommended Tools
1. **Evan Miller** - evanmiller.org/ab-testing/sample-size.html
2. **Optimizely** - optimizely.com/sample-size-calculator
3. **Statsig** - statsig.com/calculator
4. **VWO** - vwo.com/tools/duration-calculator
5. **CXL** - cxl.com/ab-test-calculator

### Calculator Inputs
| Input | What to Enter |
|-------|---------------|
| Baseline rate | Current conversion rate |
| MDE | Minimum improvement worth detecting |
| Significance | 95% (standard) |
| Power | 80% (standard) |
| Test type | One-tailed (variant better) or two-tailed |
| Traffic split | Usually 50/50 |

---

## Documentation Template

### Test Brief
```markdown
## Test: [Name]
**Hypothesis:** If we [change], then [metric] will [outcome] because [reason].

**Primary Metric:** [Metric name]
**Secondary Metrics:** [List]
**Guardrail Metrics:** [List]

**Audience:** [Who]
**Traffic Allocation:** [X%] Control / [Y%] Variant
**Duration:** [Start] to [End]
**Sample Size Target:** [Number per variant]

**Implementation Notes:** [Technical details]
```

### Test Results
```markdown
## Results: [Test Name]
**Duration:** [Start] to [End]
**Sample Size:** [Control: X, Variant: Y]

### Primary Metric: [Name]
| Variant | Rate | Lift | Confidence |
|---------|------|------|------------|
| Control | X% | - | - |
| Variant | Y% | +Z% | W% |

**Decision:** [Ship / Kill / Iterate / Inconclusive]
**Learnings:** [What we learned]
**Next Steps:** [Follow-up tests or actions]
```
