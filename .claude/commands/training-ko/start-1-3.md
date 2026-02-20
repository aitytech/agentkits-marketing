# /training-ko:start-1-3 - 첫 번째 마케팅 작업

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

실제 시스템 명령어를 사용하여 학생들에게 실제 마케팅 작업을 안내하세요: 멀티 채널 카피, 경쟁사 분석, 콘텐츠 기획.

### 수업 개요

---

**모듈 1.3: 첫 번째 마케팅 작업**

이제 실제 마케팅 작업을 해봅시다. 모든 마케터가 정기적으로 수행하는 세 가지 일반적인 작업을 완료할 것입니다.

**소요 시간:** ~30분

---

### 작업 1: 멀티 채널 카피 생성

콘텐츠 명령어를 사용하여 여러 채널용 카피를 생성하세요:

**LinkedIn 게시물:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**블로그 게시물:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**이메일:**
```
/content:email "product announcement" "existing subscribers"
```

함께 결과물을 검토하세요. 반복 개선을 보여주세요:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### 작업 2: 경쟁사 분석

경쟁사 분석 명령어를 사용하세요:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

`researcher` 에이전트가 분석하는 내용을 설명하세요:
- 타겟 오디언스
- 주요 기능 및 포지셔닝
- 가격 모델
- 강점과 약점
- 시장 기회

후속 질문하기:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### 작업 3: 콘텐츠 캘린더

캠페인 캘린더 명령어를 사용하세요:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

생성된 캘린더를 검토하세요:
- SEO 키워드가 포함된 블로그 게시물 주제
- 플랫폼별 소셜 미디어 테마
- 이메일 뉴스레터 일정
- 각 콘텐츠의 목표

### 단계 4: 콘텐츠 하나 확장하기

주제를 선택하여 콘텐츠 명령어로 확장하세요:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### 단계 5: SEO 최적화

SEO 명령어를 사용하여 최적화하세요:

```
/seo:keywords "remote team productivity"
```

그런 다음:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### 단계 6: 전문가와 함께 검토

검토자 에이전트를 사용하세요 (이는 나중에 자세히 다룰 예정임을 설명하세요):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### 축하합니다

방금 달성한 것들을 강조하세요:
- `/content:*` 명령어를 사용한 멀티 채널 카피 생성
- `/competitor:deep`을 사용한 경쟁사 분석
- `/campaign:calendar`를 사용한 콘텐츠 캘린더 작성
- `/seo:keywords`를 사용한 SEO 키워드 리서치
- SEO 최적화가 포함된 완전한 블로그 게시물

### 다음 단계

학생들에게 알려주세요:
- **다음:** `/training-ko:start-1-4` - 마케팅을 위한 에이전트 사용하기
- 18개의 전문 에이전트와 이를 활용하는 방법에 대해 배우게 됩니다

## 주요 교육 포인트
- 실제 명령어로 실제 마케팅 작업을 처리합니다
- `/content:*` 명령어는 플랫폼별 콘텐츠를 생성합니다
- `/competitor:deep`은 경쟁 인텔리전스를 제공합니다
- `/campaign:calendar`는 콘텐츠 캘린더를 생성합니다
- `/seo:*` 명령어는 검색 최적화를 처리합니다
- 항상 맥락(브랜드, 오디언스, 목표)을 제공하세요