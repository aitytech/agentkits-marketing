# /training-ko:start-1-1 - Markit에 오신 것을 환영합니다

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

모듈 1 - 핵심 개념을 시작합니다. 이 레슨에서는 Markit 에이전시 프로젝트와 마케팅 키트의 핵심 워크플로를 소개합니다.

### 레슨 개요

---

**모듈 1.1: Markit에 오신 것을 환영합니다**

모듈 1에 오신 것을 환영합니다! 이제 실습을 통해 마케팅 키트의 핵심 개념을 마스터하겠습니다. 이 모듈이 끝나면 실제 마케팅 작업을 자신감 있게 처리할 수 있게 됩니다.

**소요 시간:** ~20분

---

### 1단계: 상황 설정

역할을 설명하세요:

> 여러분은 **Markit** 에이전시의 **마케팅 전략가**입니다. 고객사는 **AgentKits**입니다. 미션은 다음과 같습니다:
> 1. 제품을 시장에 출시
> 2. 인지도 및 가입자 생성
> 3. 원격 팀에 공감을 얻는 콘텐츠 제작
> 4. 지속 가능한 콘텐츠 마케팅 엔진 구축

### 2단계: 핵심 워크플로 이해

`.claude/workflows/`에 있는 세 가지 주요 워크플로를 설명하세요:

**마케팅 파이프라인 (`primary-workflow.md`):**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**영업 파이프라인 (`sales-workflow.md`):**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**CRM 라이프사이클 (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### 3단계: 에이전트 역할 이해

에이전트가 마케팅 기능에 어떻게 매핑되는지 설명하세요:

**TOFU (퍼널 상단):**
- `attraction-specialist` - 리드 생성, SEO, 랜딩 페이지

**MOFU (퍼널 중간):**
- `lead-qualifier` - 의도 감지, 리드 스코어링
- `email-wizard` - 너처 시퀀스

**BOFU (퍼널 하단):**
- `sales-enabler` - 피치, 케이스 스터디, 배틀카드

**유지(Retention):**
- `continuity-specialist` - 이탈 감지, 재참여
- `upsell-maximizer` - 수익 확장

### 4단계: 첫 번째 캠페인 브리프 생성

이제 `/campaign:plan`을 사용하여 실제 작업을 시작합니다:

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

생성된 종합 캠페인 계획을 검토하세요.

### 5단계: 브리프 검토

플래너 에이전트가 어떻게 작동하는지 보여주세요:
- 구조화된 목표 및 KPI 생성
- 타겟 오디언스 세그먼트 정의
- 채널별 예산 배분
- 측정 프레임워크 설정

### 6단계: 반복의 힘

후속 질문을 사용한 개선을 보여주세요:

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

설명: 반복이 핵심입니다. 첫 번째 초안은 시작점입니다.

### 7단계: 컨텍스트 인식 데모

컨텍스트의 힘을 시연하세요:

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Claude가 캠페인 컨텍스트에서 자동으로 정보를 가져오는 방법을 보여주세요.

### 다음 단계

다음 내용을 알려주세요:
- `/campaign:plan`을 사용하여 전문적인 캠페인 브리프를 생성했습니다
- Claude는 브랜드 가이드라인과 페르소나의 컨텍스트를 활용했습니다
- **다음:** `/training-ko:start-1-2` - 마케팅 파일 작업하기
- 마케팅 자산을 효율적으로 구성, 검색 및 관리하는 방법을 배우게 됩니다

## 주요 교육 포인트
- Markit 에이전시는 실습 프로젝트입니다
- 세 가지 핵심 워크플로: 마케팅, 영업, CRM
- 에이전트는 퍼널 단계에 매핑됩니다 (TOFU, MOFU, BOFU, Retention)
- `/campaign:plan`은 종합 캠페인 브리프를 생성합니다
- 반복을 통해 출력 품질이 향상됩니다

---

중요 출력 규칙:
- 번역된 원시 마크다운 콘텐츠만 출력하세요
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 주석을 추가하지 마세요
- 번역된 콘텐츠로 바로 시작하세요
- 출력은 .md 파일에 직접 저장됩니다