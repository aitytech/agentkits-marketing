# /training-ko:start-2-1 - 캠페인 브리프 작성하기

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어인 경우 베트남어로 응답하고, 스페인어인 경우 스페인어로 응답하세요.

---

## Claude를 위한 지침

모듈 2 - 고급 응용을 시작합니다. 이 레슨은 캠페인 명령어를 사용하여 포괄적인 캠페인 브리프를 작성하는 방법을 가르칩니다.

### 레슨 개요

---

**모듈 2.1: 캠페인 브리프 작성하기**

모듈 2에 오신 것을 환영합니다! 이제 배운 모든 것을 실제 마케팅 워크플로우에 적용합니다. 캠페인 브리프는 성공적인 실행의 기초입니다.

**소요 시간:** ~45분

---

### 1단계: 협업 접근 방식 설명

> Claude는 여러분의 마케팅 전문성을 대체하는 것이 아니라 전략적 파트너입니다. 여러분은 인사이트, 시장 지식, 전략적 사고를 제공합니다. Claude는 이러한 아이디어를 명확하게 표현하고 구조화하는 데 도움을 줍니다.

### 2단계: 전략적 의견 수집

학습자에게 전략적 사고를 물어보세요:

```
AgentKits의 2분기 성장 캠페인을 위한 포괄적인 캠페인 브리프를 작성해 봅시다.

먼저, 당신의 전략적 사고를 알려주세요:
- 주요 목표는 무엇인가요? (예: 2000개의 체험판 가입)
- 예산은 얼마인가요?
- 기간은 어떻게 되나요?
- 집중할 특정 채널이 있나요?
- 이번 분기의 핵심 메시지는 무엇인가요?
```

입력을 기다린 후 진행하세요.

### 3단계: 캠페인 계획 명령어 사용

캠페인 계획 명령어를 사용하세요:

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

`planner` 에이전트가 생성한 포괄적인 캠페인 계획을 검토하세요.

### 4단계: 크리에이티브 브리프 생성

이제 크리에이티브 브리프 명령어를 사용하세요:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

크리에이티브 브리프에 포함된 내용을 설명하세요:
- 단일 핵심 제안
- 타겟 오디언스 인사이트
- 톤 앤 매너
- 결과물 목록
- 크리에이티브 필수 요소

### 5단계: 다각도 피드백 받기

리뷰어 에이전트를 사용하세요:

```
세 가지 관점에서 2분기 캠페인 계획을 검토하세요:

1. `manager-maria` (마케팅 매니저) - 마케팅 팀이 실행 가능한가요?
2. `conversion-optimizer` - 이 캠페인 구조가 전환을 유도할까요?
3. `brand-voice-guardian` - 메시지가 브랜드에 부합하나요?

구체적인 피드백과 권장 사항을 제공하세요.
```

### 6단계: 콘텐츠 캘린더 생성

캘린더 명령어를 사용하세요:

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### 7단계: 지원 문서 생성

추가 캠페인 자산을 생성하세요:

**리드 스코어링 모델:**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**웰컴 시퀀스:**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**너처 시퀀스:**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### 8단계: 경쟁사 대응 준비

경쟁사 자료를 준비하세요:

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### 9단계: 측정 계획 수립

분석을 설정하세요:

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### 10단계: 템플릿으로 저장

이 워크플로우를 모든 캠페인에 반복 사용할 수 있음을 설명하세요:

```
캠페인 브리프 워크플로우:
1. /campaign:plan - 전략 계획
2. /campaign:brief - 크리에이티브 브리프
3. /campaign:calendar - 콘텐츠 캘린더
4. /leads:score - 리드 자격 평가
5. /sequence:welcome - 신규 리드 육성
6. /sequence:nurture - 지속적 육성
7. /sales:battlecard - 경쟁사 대응 준비
8. /analytics:funnel - 측정 설정
```

### 다음 단계

학습자에게 알려주세요:
- 1시간 이내에 전문적인 캠페인 브리프를 작성했습니다
- 일반적으로 이 작업은 여러 번의 회의를 거쳐 며칠이 걸립니다
- **다음:** `/training-ko:start-2-2` - 콘텐츠 전략 개발
- 포괄적인 콘텐츠 계획을 수립합니다

## 주요 교육 포인트
- 캠페인 브리프는 협업적입니다
- 전략 계획에는 `/campaign:plan`을 사용하세요
- 크리에이티브 방향에는 `/campaign:brief`를 사용하세요
- 콘텐츠 스케줄링에는 `/campaign:calendar`를 사용하세요
- 피드백을 위해 리뷰어 에이전트를 사용하세요
- 지원 자산을 생성하세요 (리드 스코어링, 시퀀스, 배틀카드)

---

중요 출력 규칙:
- 번역된 마크다운 콘텐츠만 출력하세요
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 논평을 추가하지 마세요
- 번역된 콘텐츠로 바로 시작하세요
- 출력은 .md 파일에 직접 저장됩니다