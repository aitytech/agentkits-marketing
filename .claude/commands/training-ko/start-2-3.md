# /training-ko:start-2-3 - 마케팅 카피 생성

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

품질을 유지하면서 여러 채널에 걸쳐 대량의 카피를 생성하는 방법을 가르칩니다.

### 레슨 개요

---

**모듈 2.3: 마케팅 카피 생성**

규모에 맞게 전문적인 마케팅 카피를 작성하는 방법을 배웁니다: 이메일, 광고, 소셜, 랜딩 페이지. 품질 + 속도.

**소요 시간:** ~35분

---

### 1단계: 이메일 웰컴 시퀀스

시퀀스 명령어 사용:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

생성된 시퀀스 검토:
- 이메일 1 (0일차): 환영 + 빠른 시작
- 이메일 2 (2일차): 기능 하이라이트
- 이메일 3 (5일차): 사회적 증거 + 팁
- 이메일 4 (9일차): 가치 강화
- 이메일 5 (13일차): 평가판 종료 + 업그레이드

각 이메일은 다음을 포함:
- A/B 테스트를 위한 제목 변형
- 미리보기 텍스트
- 본문 카피
- 명확한 CTA

### 2단계: 소셜 미디어 콘텐츠

소셜을 위한 콘텐츠 명령어 사용:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### 3단계: 블로그 콘텐츠

SEO 중심의 블로그 명령어 사용:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

그런 다음 최적화:
```
/seo:optimize "the blog post" "remote team focus time"
```

### 4단계: 유료 광고 카피

광고 카피 명령어 사용:

**Google Ads:**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads:**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### 5단계: 랜딩 페이지 카피

랜딩 페이지 명령어 사용:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

이것은 다음을 생성합니다:
- 히어로 섹션 (헤드라인, 서브헤드, CTA)
- 문제 섹션
- 솔루션 섹션
- 혜택이 포함된 기능
- 사회적 증거 섹션
- 가격 개요
- FAQ 섹션
- 최종 CTA

### 6단계: 빠른 콘텐츠 vs 좋은 콘텐츠

두 가지 콘텐츠 모드 설명:

**빠른 콘텐츠 (`/content:fast`):**
- 빠른 처리
- 아이디어 발상에 적합
- 초안
- 대량 필요

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**좋은 콘텐츠 (`/content:good`):**
- 철저한 조사
- 다양한 변형
- 출판 준비 완료
- 전략적 콘텐츠

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### 7단계: 콘텐츠 향상

향상 명령어 사용:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### 8단계: A/B 테스트 변형

테스트 변형 생성:

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### 9단계: 페르소나별 개인화

페르소나별 변형 생성:

**Solo Sam용:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Startup Sam용:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### 10단계: 품질 검토

전문가와 함께 모든 콘텐츠 검토:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### 다음 단계

다음과 같이 안내하세요:
- 한 세션에서 완전한 카피 라이브러리를 생성했습니다
- 일반적으로 몇 주간의 작업
- **다음:** `/training-ko:start-2-4` - 캠페인 데이터 분석
- 데이터를 실행 가능한 인사이트로 전환

## 주요 교육 포인트
- `/content:*` 명령어는 모든 콘텐츠 유형을 처리
- `/sequence:*`는 이메일 자동화를 생성
- 초안은 빠른 모드, 최종본은 좋은 모드 사용
- `/content:cro`는 전환을 위해 최적화
- 더 높은 관련성을 위해 페르소나별 개인화
- 항상 전문가 에이전트와 함께 검토

---

중요 출력 규칙:
- 번역된 마크다운 콘텐츠만 출력
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 어떠한 서문, 설명 또는 주석도 추가하지 마세요
- 번역된 콘텐츠로 직접 시작
- 출력은 .md 파일에 직접 저장됩니다