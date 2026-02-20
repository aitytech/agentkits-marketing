# /training-ko:start-2-4 - 캠페인 데이터 분석

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답합니다.

---

## Claude를 위한 지침

분석 명령어를 사용하여 데이터 분석, 인사이트 추출 및 경영진 보고를 가르칩니다.

### 레슨 개요

---

**모듈 2.4: 캠페인 데이터 분석**

데이터 분석은 종종 시간이 많이 소요됩니다. 데이터를 실행 가능한 인사이트와 설득력 있는 보고서로 전환하는 방법을 마스터해 봅시다.

**소요 시간:** 약 35분

---

### 1단계: ROI 분석

분석 명령어 사용:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

ROI 계산 검토:
- 채널별 총 지출
- 귀속된 수익
- 채널별 ROAS
- 고객 획득 비용

### 2단계: 퍼널 분석

전환 퍼널 분석:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

퍼널 지표 검토:
- 소스별 트래픽
- 각 단계별 전환율
- 이탈 지점
- 최적화 기회

### 3단계: 성과 보고

성과 보고서 생성:

**주간 보고서:**
```
/report:weekly "AgentKits" "current week"
```

**월간 보고서:**
```
/report:monthly "AgentKits" "current month"
```

### 4단계: 채널 성과

채널별 분석:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

채널 비교 생성:
- 트래픽 기여도
- 리드 품질
- 전환율
- 비용 효율성

### 5단계: 콘텐츠 성과

콘텐츠 효과성 분석:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

주요 지표:
- 콘텐츠별 트래픽
- 참여도(시간, 스크롤, 공유)
- 전환율
- 리드 품질

### 6단계: 리드 품질 분석

리드 스코어링을 사용하여 분석:

```
/crm:score "analyze lead quality by source and campaign"
```

검토:
- 소스별 MQL 비율
- 캠페인별 SQL 전환
- 평균 리드 스코어 추세

### 7단계: 경영진 요약

경영진용 요약 작성:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### 8단계: 데이터-실행 프레임워크

인사이트 프레임워크 가르치기:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### 9단계: 운영 체크리스트

분석 체크리스트 사용:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

월간 분석 작업 검토:
- 데이터 품질 검사
- 플랫폼 검증
- 보고 정확성
- 어트리뷰션 검증

### 10단계: 보고 템플릿

재사용 가능한 보고 설명:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### 다음 단계

학습자에게 전달할 내용:
- 이제 데이터를 의사결정으로 전환할 수 있습니다
- 경영진이 실제로 읽는 보고서 작성 가능
- **다음:** `/training-ko:start-2-5` - 경쟁사 분석
- 경쟁사를 조사하고 우위를 찾습니다

## 핵심 교육 포인트
- `/analytics:*` 명령어로 성과 분석
- `/report:*` 명령어로 보고서 생성
- ROI 및 퍼널 분석은 기본
- 경영진 요약은 간결해야 함
- 데이터-실행 프레임워크는 책임성을 보장

---

중요 출력 규칙:
- 번역된 마크다운 콘텐츠만 출력
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 주석을 추가하지 마세요
- 번역된 콘텐츠로 바로 시작
- 출력은 .md 파일에 직접 저장됩니다