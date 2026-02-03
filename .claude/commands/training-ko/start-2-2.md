# /training-ko:start-2-2 - 콘텐츠 전략 개발

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

포괄적인 콘텐츠 전략 개발을 교육합니다: 리서치, 기획, 캘린더, 측정.

### 레슨 개요

---

**모듈 2.2: 콘텐츠 전략 개발**

콘텐츠 전략은 무작위 콘텐츠 제작을 체계적인 성장 엔진으로 전환합니다. AgentKits를 위한 전략을 구축해봅시다.

**소요 시간:** ~40분

---

### 1단계: 리서치 기반 구축

시장 및 오디언스 리서치로 시작합니다:

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### 2단계: SEO 키워드 리서치

SEO 명령어를 사용하여 키워드 기반을 구축합니다:

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

키워드를 주제 클러스터로 그룹화합니다:
- 클러스터 1: 원격 팀 생산성
- 클러스터 2: 팀 집중 시간
- 클러스터 3: 회의 없는 협업

### 3단계: 경쟁사 콘텐츠 분석

경쟁사 콘텐츠를 분석합니다:

```
/seo:competitor "rescuetime.com"
```

확인 사항:
- 다루는 주제
- 우리가 채울 수 있는 콘텐츠 공백
- 순위를 차지하고 있는 키워드

### 4단계: 콘텐츠 캘린더 생성

캠페인 캘린더를 사용하여 콘텐츠를 기획합니다:

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### 5단계: 콘텐츠 유형 정의

퍼널 단계별로 콘텐츠를 계획합니다:

**TOFU (인지 단계):**
- 블로그 포스트 (SEO 중심)
- 소셜 미디어 콘텐츠
- 사고 리더십 콘텐츠

**MOFU (고려 단계):**
- 비교 가이드
- 하우투 콘텐츠
- 사례 연구

**BOFU (결정 단계):**
- 제품 데모
- ROI 계산기
- 고객 추천사

### 6단계: 핵심 콘텐츠 전략 수립

핵심 페이지 전략을 계획합니다:

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

클러스터 콘텐츠 (핵심 페이지에 링크):
1. 팀 집중 시간 일정 관리 방법
2. 정렬을 잃지 않으면서 회의 줄이기
3. 비동기 커뮤니케이션 모범 사례
4. 원격 팀의 딥 워크
5. 팀을 위한 생산성 추적

### 7단계: 콘텐츠 제작 워크플로우

각 콘텐츠에 대해 콘텐츠 명령어를 사용합니다:

**블로그 포스트 제작:**
```
1. /seo:keywords "topic" - 키워드 리서치
2. /content:blog "title" "keyword" - 포스트 작성
3. /seo:optimize "post" "keyword" - 최적화
4. seo-specialist 에이전트로 검토
5. brand-voice-guardian 에이전트로 검토
```

**소셜 콘텐츠 제작:**
```
1. /content:social "topic" "linkedin" - LinkedIn 포스트
2. /content:social "topic" "twitter" - Twitter 스레드
3. conversion-optimizer 에이전트로 검토
```

### 8단계: 이메일 통합

콘텐츠 소비자를 육성하기 위한 이메일 시퀀스를 생성합니다:

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### 9단계: 콘텐츠 배포 계획

배포를 위해 소셜 명령어를 사용합니다:

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### 10단계: 측정 프레임워크

콘텐츠 분석을 설정합니다:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

추적할 주요 지표:
- 콘텐츠별 오가닉 트래픽
- 페이지 체류 시간
- 콘텐츠별 전환율
- 콘텐츠로부터의 리드 품질

### 다음 단계

전달 내용:
- 완전한 콘텐츠 전략을 갖추게 되었습니다
- 무작위 게시에서 체계적인 성장으로
- **다음:** `/training-ko:start-2-3` - 마케팅 카피 생성
- 품질을 유지하면서 카피 제작 확대

## 핵심 교육 포인트
- 전략은 콘텐츠를 무작위에서 체계적으로 전환합니다
- `/research:*` 명령어로 기반을 구축합니다
- `/seo:keywords`로 기회를 식별합니다
- 핵심 페이지 + 클러스터 = SEO 강자
- 콘텐츠 제작은 반복 가능한 워크플로우를 따릅니다
- 측정은 책임성을 보장합니다

---

중요 출력 규칙:
- 번역된 마크다운 콘텐츠만 출력하세요
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 논평을 추가하지 마세요
- 번역된 콘텐츠로 직접 시작하세요
- 출력은 .md 파일에 직접 저장됩니다