---
description: /training-ko:start-3-3 - 팝업 및 온보딩 CRO
argument-hint:
---

# 모듈 3, 레슨 3: 팝업 및 온보딩 CRO

## 방문자 전환 및 사용자 활성화

이 레슨에서는 두 가지 중요한 전환 포인트를 다룹니다: 팝업으로 방문자 포착하기와 온보딩을 통한 신규 가입자 활성화입니다.

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:
1. 사용자를 짜증나게 하지 않으면서 높은 전환율을 달성하는 팝업 디자인하기
2. 가입 후 온보딩 플로우 최적화하기
3. "아하 모먼트" 식별 및 가속화하기
4. 페이월 및 업그레이드 화면 만들기

---

## 팝업 CRO

### 팝업이 효과적인 경우

| 유형 | 트리거 | 최적 용도 |
|------|---------|----------|
| 이탈 의도 | 마우스가 뷰포트를 벗어남 | 리드 캡처, 이탈자 방지 |
| 시간 지연 | 페이지 체류 30-60초 | 참여도 높은 방문자 |
| 스크롤 트리거 | 스크롤 깊이 50-70% | 콘텐츠 참여 |
| 클릭 트리거 | 사용자 액션 | 특정 CTA |

### 팝업이 실패하는 경우

- 페이지 로드 즉시 표시
- 명확한 가치 제안 부재
- 닫기 어려움
- 매 방문마다 동일한 팝업

---

## 팝업 디자인 실습

`/cro:popup`을 사용하여 효과적인 팝업을 디자인하세요:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### 좋은 팝업 요소

1. **명확한 가치:** 사용자가 얻는 것
2. **최소한의 필드:** 이메일만
3. **쉬운 닫기:** 보이는 X 버튼
4. **모바일 친화적:** 엄지손가락으로 닿을 수 있는 CTA
5. **빈도 제한:** 세션당 한 번

---

## 온보딩 CRO

### 활성화 방정식

**아하 모먼트** = 사용자가 핵심 가치를 처음 경험하는 순간

AgentKits의 경우: "팀원이 팀의 집중 스케줄을 보고 방해 없는 시간을 블록하는 순간"

### 온보딩 패턴

| 패턴 | 최적 용도 |
|---------|----------|
| 설정 마법사 | 구성이 필요한 복잡한 제품 |
| 체크리스트 | 기능이 풍부한 앱 |
| 인터랙티브 투어 | UI 중심 제품 |
| 템플릿 갤러리 | 크리에이티브 도구 |
| 샘플 프로젝트 | 프로젝트 기반 도구 |

---

## 온보딩 실습

`/cro:onboarding`을 사용하여 AgentKits의 활성화를 최적화하세요:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### 핵심 질문

1. 가치를 제공하기 위한 최소 설정은 무엇인가?
2. 설정 전에 가치를 보여줄 수 있는가?
3. 전환을 예측하는 가장 중요한 액션은 무엇인가?
4. 사용자가 아하 모먼트에 얼마나 빨리 도달할 수 있는가?

---

## 페이월 및 업그레이드 CRO

프리미엄과 체험판 제품의 경우, 업그레이드 화면이 매우 중요합니다.

### 페이월 트리거

| 트리거 | 상황 |
|---------|---------|
| 기능 게이트 | 사용자가 프리미엄 기능 시도 |
| 사용 한도 | 무료 티어 한도 도달 |
| 체험판 만료 | 시간 기반 체험판 종료 |
| 업그레이드 프롬프트 | 가치 경험 후 |

### 페이월 실습

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## 실습 과제

AgentKits를 위해 다음 실습을 완료하세요:

### 1. 이탈 의도 팝업
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
저장 위치: `training/exercises/markit/cro/exit-popup.md`

### 2. 온보딩 플로우
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
저장 위치: `training/exercises/markit/cro/onboarding-flow.md`

### 3. 업그레이드 화면
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
저장 위치: `training/exercises/markit/cro/upgrade-screen.md`

---

## 전체 CRO 퍼널

이제 완전한 전환 퍼널을 최적화할 수 있습니다:

```
방문자 → 페이지 CRO → 폼 CRO → 가입 CRO
     ↓
  팝업 CRO (이탈자 포착)
     ↓
신규 사용자 → 온보딩 CRO → 활성화
     ↓
무료 사용자 → 페이월 CRO → 유료 고객
```

각 스킬은 특정 단계를 처리합니다.

---

## 체크포인트

모듈 3을 완료하기 전에 다음을 확인하세요:
- [ ] 적절한 트리거로 효과적인 팝업 디자인하기
- [ ] 아하 모먼트를 가속화하는 온보딩 플로우 만들기
- [ ] 프리미엄 전환을 위한 업그레이드 화면 구축하기
- [ ] 전체 CRO 퍼널 매핑하기

---

## 모듈 3 완료!

CRO 스킬을 마스터했습니다. 결과물:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## 다음: 고급 스킬

모듈 4로 계속: 성장 및 런칭 전략

```bash
/training-ko:start-4-1
```

또는 다른 새로운 스킬 탐색:
- `/marketing:psychology` - 70개 이상의 멘탈 모델
- `/marketing:ideas` - 140가지 마케팅 아이디어
- `/growth:launch` - 런칭 전략
- `/pricing:strategy` - 가격 설계