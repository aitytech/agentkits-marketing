# /training-ko:start-1-2 - 마케팅 파일 작업하기

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

마케팅 프로젝트를 위한 파일 구성, 명령어 사용법 및 문서 참조 방법을 가르칩니다.

### 레슨 개요

---

**모듈 1.2: 마케팅 파일 작업하기**

마케터로서 여러분은 캠페인 브리프, 콘텐츠 초안, 리서치 문서, 분석 보고서 등 다양한 유형의 자산을 다룹니다. 이를 효율적으로 구성하고 관리하는 방법을 마스터해봅시다.

**소요 시간:** ~25분

---

### 1단계: 문서 구조 검토

docs 폴더를 보여주세요:

```
List all files in docs/
```

각 문서 파일을 설명하세요:
- `brand-guidelines.md` - 브랜드 표준 템플릿
- `content-style-guide.md` - 작성 표준, CTA, 서식
- `campaign-playbooks.md` - 검증된 캠페인 템플릿
- `channel-strategies.md` - 플랫폼별 전략
- `analytics-setup.md` - 추적 및 어트리뷰션
- `usage-guide.md` - 완전한 시스템 참조 자료

### 2단계: 캠페인 플레이북 탐색

캠페인 플레이북을 읽어보세요:

```
Read docs/campaign-playbooks.md
```

플레이북 유형을 설명하세요:
- 제품 출시 플레이북
- 리드 생성 플레이북
- 브랜드 인지도 플레이북
- 유지 플레이북
- 이벤트 프로모션 플레이북

### 3단계: 콘텐츠 명령어 연습

콘텐츠 생성 명령어를 안내하세요:

**블로그 포스트:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**소셜 콘텐츠:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**이메일 카피:**
```
/content:email "welcome" "trial users for AgentKits"
```

### 4단계: 검색 명령어 연습

grep/find를 사용하거나 Claude에게 질문하는 검색 기법을 가르치세요:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### 5단계: 일괄 콘텐츠 생성

한 번에 여러 자산을 생성하는 방법을 시연하세요:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### 6단계: 스타일 가이드와 상호 참조

콘텐츠 스타일 가이드 사용 방법을 보여주세요:

```
Read docs/content-style-guide.md
```

다음 사항을 지적하세요:
- 헤드라인 공식 (4-U 프레임워크)
- CTA 패턴
- 가독성 표준
- SEO 작성 가이드라인

### 7단계: 빠른 참조 명령어

필수 명령어 패턴을 공유하세요:

**캠페인 명령어:**
- `/campaign:plan` - 캠페인 계획 생성
- `/campaign:brief` - 크리에이티브 브리프 생성
- `/campaign:analyze` - 성과 분석
- `/campaign:calendar` - 콘텐츠 캘린더

**콘텐츠 명령어:**
- `/content:blog` - SEO 블로그 포스트
- `/content:social` - 플랫폼별 소셜 콘텐츠
- `/content:email` - 이메일 카피
- `/content:landing` - 랜딩 페이지 카피
- `/content:ads` - 광고 카피

### 다음 단계

다음과 같이 안내하세요:
- 이제 마케팅 킷 문서를 탐색하는 방법을 알게 되었습니다
- 명령어는 마케팅 기능별로 구성되어 있습니다
- **다음:** `/training-ko:start-1-3` - 첫 번째 마케팅 작업 (콘텐츠 생성, 분석)

## 주요 교육 포인트
- 좋은 문서 구성은 모든 것을 더 빠르게 만듭니다
- 6개의 핵심 문서가 브랜드, 콘텐츠, 캠페인, 채널, 분석, 사용법을 다룹니다
- 명령어는 기능별로 구성되어 있습니다 (campaign, content, seo 등)
- 일관성을 위해 문서를 상호 참조하세요
- 일괄 작업은 엄청난 시간을 절약합니다