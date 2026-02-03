---
description: /training-ko:start-3-1 - CRO 기초
argument-hint:
---

# 모듈 3, 레슨 1: CRO 기초

## 전환율 최적화에 오신 것을 환영합니다

이 모듈에서는 AgentKits Marketing에 추가된 새로운 CRO(전환율 최적화) 스킬을 마스터하게 됩니다. 이러한 스킬은 모든 마케팅 자산에서 전환율을 체계적으로 개선하는 데 도움이 됩니다.

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:
1. 6가지 CRO 스킬 카테고리 이해하기
2. 각 CRO 명령어를 언제 사용해야 하는지 알기
3. 전환에 심리학적 원리 적용하기
4. 첫 번째 CRO 감사 생성하기

---

## CRO 스킬 모음

AgentKits Marketing은 7가지 전문화된 CRO 스킬을 포함합니다:

| 스킬 | 용도 | 명령어 |
|-------|---------|---------|
| `page-cro` | 랜딩 페이지, 홈페이지, 가격 페이지 | `/cro:page` |
| `form-cro` | 리드 캡처, 문의, 데모 폼 | `/cro:form` |
| `popup-cro` | 모달, 오버레이, 이탈 의도 | `/cro:popup` |
| `signup-flow-cro` | 등록, 체험판 가입 | `/cro:signup` |
| `onboarding-cro` | 가입 후 활성화 | `/cro:onboarding` |
| `paywall-upgrade-cro` | 인앱 페이월, 업그레이드 | `/cro:paywall` |
| `ab-test-setup` | 실험 설계 | `/test:ab-setup` |

---

## CRO 프레임워크

모든 CRO 분석은 다음 계층 구조를 따릅니다:

### 1. 가치 제안 (가장 높은 영향)
- 방문자가 5초 안에 제공하는 것을 이해할 수 있는가?
- 단순히 기능이 아닌 이점이 명확한가?

### 2. 헤드라인 효과성
- 핵심 가치를 전달하는가?
- 구체적이고 신뢰할 수 있는가?

### 3. CTA 최적화
- 하나의 명확한 주요 액션이 있는가?
- 스크롤 위에 있고, 눈에 띄며, 설득력이 있는가?

### 4. 신뢰 신호
- 의사결정 근처에 사회적 증거가 있는가?
- 보안 배지가 보이는가?

### 5. 마찰 감소
- 최소한의 폼 필드인가?
- 다음 단계가 명확한가?

---

## 연습 1: AgentKits 랜딩 페이지 감사하기

AgentKits 랜딩 페이지에 CRO 원칙을 적용해 봅시다.

### 현재 상태 (가상)

**헤드라인:** "Team Productivity Software"
**CTA:** "Learn More"
**폼:** 7개 필드

### 과제

`/cro:page` 명령어를 사용하여 CRO 감사를 생성하세요:

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### 예상 결과

감사는 다음을 식별해야 합니다:
- 일반적인 헤드라인 (구체적이지 않거나 이점 중심이 아님)
- 약한 CTA ("Learn More"는 행동 지향적이지 않음)
- 높은 마찰 (7개 필드는 너무 많음)

---

## 연습 2: 심리학 적용하기

`marketing-psychology` 스킬은 70개 이상의 멘탈 모델을 포함합니다. 시도해 보세요:

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### CRO를 위한 주요 모델

| 모델 | 적용 |
|-------|-------------|
| Loss Aversion | "놓치지 마세요" 프레이밍 |
| Social Proof | "10,000개 이상의 팀이 함께합니다" |
| Anchoring | 비싼 플랜을 먼저 보여주기 |
| Scarcity | 제한된 자리 또는 시간 |
| Reciprocity | 요청하기 전에 무료 가치 제공 |

---

## 실습 과제

완전한 CRO 개선 계획을 생성하세요:

1. **페이지 감사 실행:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **폼 최적화:**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **A/B 테스트 설계:**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

작업을 다음 위치에 저장하세요:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## 체크포인트

다음으로 넘어가기 전에 다음을 할 수 있는지 확인하세요:
- [ ] 6가지 CRO 스킬 카테고리 식별하기
- [ ] `/cro:page` 감사 실행하기
- [ ] 심리학 원리를 CRO에 적용하기
- [ ] A/B 테스트 가설 생성하기

---

## 다음 레슨

모듈 3, 레슨 2: 폼 및 가입 최적화로 계속 진행하세요

```bash
/training-ko:start-3-2