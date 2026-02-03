# /training-ko:start-1-4 - 마케팅을 위한 에이전트 활용

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

에이전트 개념을 가르치세요 - 다양한 마케팅 기능을 처리하는 전문화된 AI 팀 구성원입니다.

### 레슨 개요

---

**모듈 1.4: 마케팅을 위한 에이전트 활용**

마케팅 키트에는 18개의 전문화된 에이전트가 있습니다. 전문 지식을 가지고 특정 마케팅 작업을 수행할 수 있는 AI 팀 구성원으로 생각하세요.

**소요 시간:** ~35분

---

### 1단계: 에이전트 시스템 설명

마케팅 키트에는 기능별로 구성된 에이전트가 있습니다:

**핵심 마케팅 에이전트 (6개):**
| 에이전트 | 집중 영역 | 사용 사례 |
|-------|-------|-----------|
| `attraction-specialist` | TOFU, 리드 생성 | SEO, 랜딩 페이지, 경쟁사 정보 |
| `lead-qualifier` | 의도 감지 | 리드 스코어링, 행동 분석 |
| `email-wizard` | 이메일 마케팅 | 시퀀스, 자동화, 최적화 |
| `sales-enabler` | 영업 지원 | 피치, 사례 연구, 배틀카드 |
| `continuity-specialist` | 고객 유지 | 이탈 감지, 재참여 |
| `upsell-maximizer` | 수익 확장 | 교차 판매, 업셀, 기능 채택 |

**지원 에이전트 (6개):**
| 에이전트 | 집중 영역 | 사용 사례 |
|-------|-------|-----------|
| `researcher` | 시장 인텔리전스 | 리서치, 경쟁 분석 |
| `brainstormer` | 창의적 아이디어 창출 | 캠페인 컨셉, 메시징 앵글 |
| `planner` | 전략 기획 | 캠페인 계획, 콘텐츠 캘린더 |
| `project-manager` | 조정 | 상태 추적, 캠페인 관리 |
| `copywriter` | 콘텐츠 제작 | 카피, 메시징, 크리에이티브 |
| `docs-manager` | 문서화 | 브랜드 가이드라인, 스타일 가이드 |

**리뷰어 에이전트 (6개):**
| 에이전트 | 관점 | 리뷰 대상 |
|-------|-------------|-------------|
| `brand-voice-guardian` | 브랜드 일관성 | 보이스, 톤, 메시징 |
| `conversion-optimizer` | CRO 전문가 | 전환, 설득 |
| `seo-specialist` | 검색 최적화 | 키워드, 기술 SEO |
| `manager-maria` | 마케팅 매니저 (38세, B2B) | 전략, 팀 적합성 |
| `solo-steve` | 1인 사업가 (32세) | 시간, 예산, DIY |
| `startup-sam` | 스타트업 창업자 (28세) | 성장, 바이럴, 속도 |

### 2단계: 에이전트 실습 - 다각적 관점 리뷰

콘텐츠를 생성하고 여러 관점에서 리뷰하세요:

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

방금 무슨 일이 일어났는지 설명하세요 - 하나의 명령으로 세 가지 전문화된 리뷰를 받았습니다.

### 3단계: 리드 자격 심사 활용

명령을 통해 lead-qualifier 에이전트를 시연하세요:

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

lead-qualifier가 어떻게 생성하는지 보여주세요:
- 인구통계학적 스코어링 기준
- 행동 스코어링 신호
- MQL/SQL 임계값

### 4단계: Email Wizard 활용

email-wizard 에이전트를 시연하세요:

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### 5단계: Sales Enabler 활용

sales-enabler 에이전트를 시연하세요:

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### 6단계: 실제 시나리오 - 빠른 대응

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### 7단계: 에이전트 모범 사례

다음 팁을 공유하세요:
- 작업 목표를 구체적으로 명시하기
- 브랜드 가이드라인과 페르소나 참조하기
- 출력물을 명확하게 정의하기 (형식, 길이)
- 전문화된 작업에는 전문화된 에이전트 사용하기
- 복잡한 프로젝트에는 에이전트 결합하기

### 다음 단계

다음과 같이 알려주세요:
- 이제 18개 에이전트 시스템을 이해했습니다
- **다음:** `/training-ko:start-1-5` - 맞춤형 마케팅 서브 에이전트
- 페르소나 리뷰어와 타겟팅된 피드백을 받는 방법을 배우게 됩니다

## 주요 교육 포인트
- 18개 에이전트 구성: 핵심(6개), 지원(6개), 리뷰어(6개)
- 핵심 에이전트는 퍼널 단계에 매핑됨
- 리뷰어 에이전트는 다각적 관점의 피드백 제공
- 명령어는 특정 에이전트 기능을 호출함
- 복잡한 프로젝트에는 에이전트를 결합하여 사용

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file