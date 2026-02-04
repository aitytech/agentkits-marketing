<p align="center">
  <img src="https://raw.githubusercontent.com/aitytech/agentkits-marketing/main/assets/logo.svg" alt="AgentKits Logo" width="80" height="80">
</p>

<h1 align="center">AgentKits Marketing</h1>

<p align="center">
  <a href="https://github.com/aitytech/agentkits-marketing/stargazers"><img src="https://img.shields.io/github/stars/aitytech/agentkits-marketing?style=flat" alt="Stars"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Claude_Code%20|%20Cursor%20|%20Copilot-Compatible-blueviolet" alt="AI Assistants">
  <br>
  <img src="https://img.shields.io/badge/Agents-18-green" alt="Agents">
  <img src="https://img.shields.io/badge/Commands-93-orange" alt="Commands">
  <img src="https://img.shields.io/badge/Skills-28-blue" alt="Skills">
</p>

<p align="center">
  <strong>Claude Code, Cursor, GitHub Copilot 및 에이전트와 스킬을 지원하는 모든 AI 어시스턴트를 위한 엔터프라이즈급 AI 마케팅 자동화.</strong>
</p>

<p align="center">
  SaaS 창업자, 마케터, 성장 팀을 위해 구축된 프로덕션 준비 완료 마케팅 에이전트, 스킬, 커맨드 및 워크플로우. 캠페인 기획, 콘텐츠 제작, SEO, CRO, 이메일 시퀀스, 분석 - 모두 전문 AI 에이전트로 구동됩니다.
</p>

<p align="center">
  <a href="https://www.agentkits.net/marketing">웹사이트</a> •
  <a href="https://www.agentkits.net/docs">문서</a> •
  <a href="#설치">설치</a> •
  <a href="#교육">교육</a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <strong>한국어</strong> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-br.md">Português</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.ru.md">Русский</a> · <a href="README.ar.md">العربية</a>
</p>

---

## Vibe Marketing

<p>
  <img src="https://img.shields.io/badge/Vibe_Coding-Developers-blue?style=for-the-badge&logo=code&logoColor=white" alt="Vibe Coding">
  <img src="https://img.shields.io/badge/→-black?style=for-the-badge" alt="arrow">
  <img src="https://img.shields.io/badge/Vibe_Marketing-Marketers-green?style=for-the-badge&logo=target&logoColor=white" alt="Vibe Marketing">
</p>

> *개발자들의 "Vibe Coding" 운동에서 영감을 받아... 우리는 우주를 확장합니다: 모든 것이 그냥 작동하는 AI 시대를 위한 **Vibe Marketing**.*

| | |
|---|---|
| **AI와 함께** | AI 에이전트가 캠페인을 처리하는 동안 당신은 전략에 집중하세요. 그냥 편안하게 즐기면 에이전트가 힘든 일을 처리합니다. |
| **AI 없이** | 이 저장소는 마케팅 모범 사례, 프레임워크, 템플릿의 **종합 참고 라이브러리**입니다. 스킬 문서를 마케팅 플레이북으로 사용하세요. |

---

## 포함 내용

**Claude Code**, **Cursor**, **GitHub Copilot** 및 에이전트와 스킬을 지원하는 모든 AI 어시스턴트와 호환됩니다. 플러그인으로 설치하거나 컴포넌트를 수동으로 복사하세요.

```
agentkits-marketing/
|-- .claude-plugin/      # 플러그인 및 마켓플레이스 매니페스트
|   |-- plugin.json            # 플러그인 메타데이터 및 컴포넌트 경로
|   |-- marketplace.json       # /plugin marketplace add를 위한 마켓플레이스 카탈로그
|
|-- .claude/
|   |-- agents/          # 18개의 전문 마케팅 에이전트
|   |   |-- attraction-specialist.md    # 리드 생성, SEO, 랜딩 페이지
|   |   |-- lead-qualifier.md           # 리드 스코어링, 세그먼테이션
|   |   |-- email-wizard.md             # 이메일 시퀀스, 자동화
|   |   |-- sales-enabler.md            # 영업 자료, 배틀카드
|   |   |-- continuity-specialist.md    # 리텐션, 재참여
|   |   |-- upsell-maximizer.md         # 수익 확대
|   |   |-- copywriter.md               # 높은 전환율 카피
|   |   |-- conversion-optimizer.md     # CRO 전문가
|   |   |-- seo-specialist.md           # SEO 최적화
|   |   |-- brand-voice-guardian.md     # 브랜드 일관성
|   |   |-- ...그리고 더 많이
|   |
|   |-- commands/        # 카테고리별 93개 슬래시 커맨드
|   |   |-- campaign/    # /campaign:plan, /campaign:brief, /campaign:analyze
|   |   |-- content/     # /content:blog, /content:landing, /content:email
|   |   |-- seo/         # /seo:keywords, /seo:audit, /seo:programmatic
|   |   |-- cro/         # /cro:page, /cro:form, /cro:popup, /cro:signup
|   |   |-- growth/      # /growth:launch, /growth:referral, /growth:free-tool
|   |   |-- ...그리고 더 많이
|   |
|   |-- skills/          # 28개 마케팅 스킬
|   |   |-- marketing-psychology/       # 70개 이상의 멘탈 모델
|   |   |-- marketing-ideas/            # 140개 이상의 SaaS 전략
|   |   |-- page-cro/                   # 랜딩 페이지 최적화
|   |   |-- copywriting/                # 마케팅 카피
|   |   |-- programmatic-seo/           # 확장 가능한 페이지 생성
|   |   |-- pricing-strategy/           # 가격 책정 및 패키징
|   |   |-- ...그리고 더 많이
|   |
|   |-- workflows/       # 핵심 마케팅 워크플로우
|       |-- primary-workflow.md         # 캠페인 라이프사이클
|       |-- sales-workflow.md           # 리드에서 고객까지
|       |-- crm-workflow.md             # 연락처 라이프사이클
|
|-- training/            # 23 interactive lessons (English)
|-- training-zh/         # 简体中文
|-- training-ja/         # 日本語
|-- training-ko/         # 한국어
|-- training-es/         # Español
|-- training-de/         # Deutsch
|-- training-fr/         # Français
|-- training-pt-br/      # Português
|-- training-vi/         # Tiếng Việt
|-- training-ru/         # Русский
|-- training-ar/         # العربية
|-- docs/                # 문서 및 가이드
|-- marketplace.json     # 자체 호스팅 마켓플레이스 구성
```

---

## 설치

### 옵션 1: Claude Code 플러그인 마켓플레이스 (Claude Code 권장)

Claude Code의 플러그인 시스템을 통해 직접 설치 — 수동 설정 불필요:

```bash
# 마켓플레이스 추가
/plugin marketplace add aitytech/agentkits-marketing

# 전체 스위트 설치 (18개 에이전트, 28개 스킬, 93개 커맨드)
/plugin install agentkits-marketing@aitytech
```

개별 컴포넌트도 설치 가능:

```bash
/plugin install agentkits-marketing-skills@aitytech    # 스킬만
/plugin install agentkits-marketing-agents@aitytech    # 에이전트만
/plugin install agentkits-marketing-commands@aitytech  # 커맨드만
```

설치 후 Claude Code를 재시작하세요.

---

### 옵션 2: npx를 통한 설치 (모든 플랫폼)

18개 에이전트, 28개 스킬, 93개 커맨드를 설치하는 하나의 명령어:

```bash
npx @aitytech/agentkits-marketing install
```

**플랫폼별 설치:**

```bash
npx @aitytech/agentkits-marketing install --platform claude    # Claude Code
npx @aitytech/agentkits-marketing install --platform cursor    # Cursor IDE
npx @aitytech/agentkits-marketing install --platform windsurf  # Windsurf
npx @aitytech/agentkits-marketing install --platform cline     # Cline
npx @aitytech/agentkits-marketing install --platform copilot   # GitHub Copilot
npx @aitytech/agentkits-marketing install --platform all       # 모든 플랫폼
```

**기타 CLI 명령어:**

```bash
npx @aitytech/agentkits-marketing --help        # 모든 명령어 보기
npx @aitytech/agentkits-marketing list-ides     # 지원되는 IDE 목록
npx @aitytech/agentkits-marketing list-modules  # 사용 가능한 모듈 목록
npx @aitytech/agentkits-marketing update        # 기존 설치 업데이트
```

---

### 옵션 3: 클론 및 사용

저장소를 클론하고 그 안에서 작업하기:

```bash
git clone https://github.com/aitytech/agentkits-marketing.git
cd agentkits-marketing
claude
```

---

### 옵션 4: 수동 설치

개별 컴포넌트를 Claude 구성에 복사:

```bash
# 저장소 클론
git clone https://github.com/aitytech/agentkits-marketing.git

# 에이전트 복사
cp agentkits-marketing/.claude/agents/*.md ~/.claude/agents/

# 커맨드 복사
cp -r agentkits-marketing/.claude/commands/* ~/.claude/commands/

# 스킬 복사
cp -r agentkits-marketing/.claude/skills/* ~/.claude/skills/

# 워크플로우 복사
cp -r agentkits-marketing/.claude/workflows/* ~/.claude/workflows/
```

---

## 빠른 시작

### 캠페인 런칭

```bash
# 조사 및 계획
/research:market "SaaS productivity tools"
/competitor:deep "competitor.com"
/campaign:plan "Q1 Product Launch"

# 콘텐츠 생성
/content:landing "new feature" "target audience"
/content:email "product launch" "trial users"
/content:blog "feature announcement" "primary keyword"

# 최적화
/cro:page "landing page for conversion"
/seo:optimize "content.md" "target keyword"
```

### 콘텐츠 제작

```bash
/content:good "Blog post about AI marketing"
/content:editing "polish this draft"
/seo:keywords "ai marketing automation"
```

### 전환율 최적화

```bash
/cro:page "homepage conversion audit"
/cro:form "lead capture optimization"
/cro:signup "registration flow"
/test:ab-setup "headline variations"
```

### 성장 & 전략

```bash
/marketing:ideas "SaaS product"
/marketing:psychology "pricing objections"
/growth:launch "Product Hunt strategy"
/pricing:strategy "tier structure"
```

---

## 사용 가능한 스킬

| 스킬 | 설명 | 사용 시기 |
|-------|-------------|----------|
| **핵심 마케팅** |
| `marketing-psychology` | 70개 이상의 마케팅 멘탈 모델 | 설득, 가격 책정, 반박 처리 |
| `marketing-ideas` | 140개의 검증된 SaaS 전략 | 마케팅 아이디어 필요 시 |
| `marketing-fundamentals` | 퍼널, 여정, 포지셔닝 | 기초 개념 |
| **전환율 최적화** |
| `page-cro` | 랜딩 페이지, 홈페이지, 가격 페이지 | 페이지 전환 안 될 때 |
| `form-cro` | 리드 캡처, 문의 양식 | 양식 최적화 |
| `popup-cro` | 모달, 오버레이, 이탈 의도 | 팝업 생성 |
| `signup-flow-cro` | 등록, 체험판 가입 | 가입 마찰 |
| `onboarding-cro` | 가입 후 활성화 | 사용자 활성화 |
| `paywall-upgrade-cro` | 인앱 페이월, 업그레이드 화면 | 프리미엄 전환 |
| `ab-test-setup` | 실험 설계 | A/B 테스팅 |
| **콘텐츠 & 카피** |
| `copywriting` | 마케팅 페이지 카피 | 새 카피 작성 |
| `copy-editing` | 편집 및 다듬기 | 기존 카피 개선 |
| `email-sequence` | 드립 캠페인, 육성 | 이메일 자동화 |
| **SEO & 성장** |
| `seo-mastery` | 키워드, 기술적, 온페이지 | SEO 최적화 |
| `programmatic-seo` | 대규모 템플릿 페이지 | 확장형 SEO |
| `schema-markup` | 구조화된 데이터, 리치 스니펫 | 스키마 구현 |
| `competitor-alternatives` | vs 페이지, 대안 | 비교 콘텐츠 |
| `launch-strategy` | 제품 출시, 발표 | 시장 진출 |
| `pricing-strategy` | 가격 책정, 패키징, 티어 | 가격 결정 |
| `referral-program` | 추천, 제휴 | 바이럴 성장 |
| `free-tool-strategy` | 엔지니어링-as-마케팅 | 무료 도구 기획 |

---

## 마케팅 에이전트

### 핵심 에이전트
| 에이전트 | 초점 |
|-------|-------|
| `attraction-specialist` | 리드 생성, SEO, 랜딩 페이지 |
| `lead-qualifier` | 리드 스코어링, 세그먼테이션 |
| `email-wizard` | 이메일 시퀀스, 자동화 |
| `sales-enabler` | 영업 자료, 배틀카드 |
| `continuity-specialist` | 리텐션, 재참여 |
| `upsell-maximizer` | 수익 확대, 크로스셀 |

### 지원 에이전트
| 에이전트 | 초점 |
|-------|-------|
| `researcher` | 시장 조사, 경쟁 인텔리전스 |
| `brainstormer` | 캠페인 아이디어, 크리에이티브 컨셉 |
| `planner` | 캠페인 기획, 캘린더 |
| `copywriter` | 높은 전환율 카피 |
| `project-manager` | 캠페인 조정 |
| `docs-manager` | 마케팅 문서화 |

### 리뷰어 에이전트
| 에이전트 | 관점 |
|-------|-------------|
| `brand-voice-guardian` | 브랜드 일관성 |
| `conversion-optimizer` | CRO 모범 사례 |
| `seo-specialist` | SEO 최적화 |
| `solopreneur` | 프리랜서/소규모 비즈니스 |
| `startup-founder` | 초기 단계 스타트업 |

---

## 커맨드 카테고리

| 카테고리 | 커맨드 수 | 예시 |
|----------|----------|----------|
| Campaign | 4 | `/campaign:plan`, `/campaign:brief` |
| Content | 10 | `/content:blog`, `/content:landing`, `/content:editing` |
| SEO | 6 | `/seo:keywords`, `/seo:audit`, `/seo:programmatic` |
| CRO | 6 | `/cro:page`, `/cro:form`, `/cro:signup` |
| Growth | 3 | `/growth:launch`, `/growth:referral` |
| Email | 4 | `/sequence:welcome`, `/sequence:nurture` |
| Analytics | 5 | `/analytics:roi`, `/analytics:funnel` |
| Sales | 4 | `/sales:pitch`, `/sales:battlecard` |
| Research | 3 | `/research:market`, `/research:persona` |
| Marketing | 2 | `/marketing:psychology`, `/marketing:ideas` |
| Testing | 1 | `/test:ab-setup` |
| ...더 보기 | 45+ | 전체 커맨드 참조 보기 |

---

## 교육

AI 기반 마케팅을 마스터하기 위한 **22개의 대화형 레슨**. AI 어시스턴트 내에서 실제 마케팅 작업을 수행하며 학습하세요.

| | |
|---|---|
| **방법** | Claude가 가르치는 대화형 레슨 |
| **프로젝트** | 고객 AgentKits를 위한 Markit 에이전시 |
| **소요 시간** | 총 5-6시간 |
| **사전 요구사항** | Claude Code, Cursor 또는 호환 AI 어시스턴트 |
| **언어** | 영어, 베트남어 (Tiếng Việt), 일본어 (日本語) |

```bash
# Start training in your language
/training:start-0-0           # English
/training-zh:start-0-0        # 简体中文
/training-ja:start-0-0        # 日本語
/training-ko:start-0-0        # 한국어
/training-es:start-0-0        # Español
/training-de:start-0-0        # Deutsch
/training-fr:start-0-0        # Français
/training-pt-br:start-0-0     # Português
/training-vi:start-0-0        # Tiếng Việt
/training-ru:start-0-0        # Русский
/training-ar:start-0-0        # العربية
```

---

### 실습 프로젝트: Markit 에이전시

당신은 **Markit**의 마케팅 전략가입니다. Markit은 B2B SaaS 마케팅 에이전시입니다.

**고객:** AgentKits - AI 마케팅 자동화 툴킷

| | |
|---|---|
| **제품** | 엔터프라이즈급 AI 마케팅 자동화 |
| **타겟** | SaaS 창업자, 마케터, 성장 팀 |
| **가격** | 무료 & 오픈 소스 (MIT 라이선스) |
| **경쟁사** | Jasper, Copy.ai, HubSpot |

**주요 페르소나:**
- **Solo Sam** (25-35) - 솔로프레너/인디 해커, 부트스트랩 SaaS
- **Marketer Maya** (30-40) - 마케팅 매니저, 중견 SaaS 회사
- **Founder Felix** (28-40) - 기술 창업자, 초기 단계 스타트업

---

### 모듈 0: 시작하기 (30분)

기본 사항을 배우고 첫 번째 마케팅 작업을 완료하세요.

| 커맨드 | 레슨 | 소요 시간 |
|---------|--------|----------|
| `/training:start-0-0` | 코스 소개 | 10분 |
| `/training:start-0-1` | 설치 및 설정 | 15분 |
| `/training:start-0-2` | 첫 번째 마케팅 작업 | 15분 |

**배우는 내용:**
- AI 어시스턴트 인터페이스 및 기본 커맨드
- 파일 생성 및 관리
- 마케팅 작업을 위한 AI와의 상호작용

---

### 모듈 1: 핵심 개념 (90분)

Markit 에이전시 프로젝트를 통해 기본 워크플로우를 마스터하세요.

| 커맨드 | 레슨 | 소요 시간 |
|---------|--------|----------|
| `/training:start-1-1` | Markit에 오신 것을 환영합니다 | 20분 |
| `/training:start-1-2` | 마케팅 파일 작업 | 25분 |
| `/training:start-1-3` | 첫 번째 마케팅 작업 | 30분 |
| `/training:start-1-4` | 마케팅을 위한 에이전트 사용 | 35분 |
| `/training:start-1-5` | 리뷰어 에이전트 심화 학습 | 30분 |
| `/training:start-1-6` | 프로젝트 메모리 (CLAUDE.md) | 20분 |
| `/training:start-1-7` | 탐색 및 검색 | 20분 |

**배우는 내용:**
- 캠페인 브리프 작성
- 브랜드 보이스 및 페르소나 개발
- 에이전트 조정 및 위임
- 파일 조직 모범 사례
- 프로젝트 메모리 효과적 사용

**제작하는 것:**
- 완전한 캠페인 브리프
- 브랜드 가이드라인 문서
- 고객 페르소나
- 맞춤형 리뷰어 에이전트

---

### 모듈 2: 고급 응용 (120분)

실제 마케팅 시나리오에 대규모로 스킬을 적용하세요.

| 커맨드 | 레슨 | 소요 시간 |
|---------|--------|----------|
| `/training:start-2-1` | 캠페인 브리프 작성 | 45분 |
| `/training:start-2-2` | 콘텐츠 전략 개발 | 40분 |
| `/training:start-2-3` | 마케팅 카피 생성 | 35분 |
| `/training:start-2-4` | 캠페인 데이터 분석 | 35분 |
| `/training:start-2-5` | 경쟁 분석 | 30분 |
| `/training:start-2-6` | SEO 최적화 | 40분 |

**배우는 내용:**
- 전략적 캠페인 기획
- 멀티채널 콘텐츠 제작
- 데이터 분석 및 인사이트
- 경쟁 인텔리전스 수집
- SEO 모범 사례

**제작하는 것:**
- 완전한 콘텐츠 라이브러리 (블로그, 이메일, 소셜, 광고)
- 경쟁 분석 보고서
- SEO 최적화 계획
- 캠페인 분석 대시보드

---

### 모듈 3: CRO & 전환 (60분)

전문화된 CRO 스킬로 전환율 최적화를 마스터하세요.

| 커맨드 | 레슨 | 소요 시간 |
|---------|--------|----------|
| `/training:start-3-1` | CRO 기초 | 20분 |
| `/training:start-3-2` | 양식 및 가입 최적화 | 20분 |
| `/training:start-3-3` | 팝업 및 온보딩 CRO | 20분 |

**배우는 내용:**
- 전체 전환 퍼널을 위한 7가지 CRO 스킬
- 양식 최적화 (5-필드 규칙)
- 가입 플로우 모범 사례
- 팝업 디자인 및 트리거
- 온보딩 및 활성화
- 페이월 및 업그레이드 화면
- A/B 테스트 설계

**제작하는 것:**
- 랜딩 페이지 CRO 감사
- 최적화된 양식 디자인
- 온보딩 플로우
- 업그레이드 화면
- A/B 테스트 가설

**전체 CRO 퍼널 커버리지:**
```
방문자 → 페이지 CRO → 양식 CRO → 가입 CRO
     ↓
  팝업 CRO (이탈자 캡처)
     ↓
신규 사용자 → 온보딩 CRO → 활성화
     ↓
무료 사용자 → 페이월 CRO → 유료 고객
```

---

### 보너스 콘텐츠

| 커맨드 | 설명 |
|---------|-------------|
| `/training:bonus-patterns` | 헤드라인, 이메일, 소셜, 광고, CRO를 위한 패턴 라이브러리 |
| `/training:bonus-secret` | 10배 마케터 프레임워크 |
| `/training:help` | 사용 가능한 모든 교육 커맨드 보기 |

---

### 다국어 교육

교육은 3개 언어로 제공됩니다. 모든 콘텐츠는 동일합니다 - 선호하는 언어를 선택하세요:

| 언어 | 커맨드 접두사 | 예시 |
|----------|---------------|---------|
| **영어** | `/training:` | `/training:start-0-0` |
| **베트남어** (Tiếng Việt) | `/training-vi:` | `/training-vi:start-0-0` |
| **일본어** (日本語) | `/training-ja:` | `/training-ja:start-0-0` |

**사용 가능한 현지화 커맨드:**
- `start-0-0` 에서 `start-0-2` (모듈 0)
- `start-1-1` 에서 `start-1-7` (모듈 1)
- `start-2-1` 에서 `start-2-6` (모듈 2)
- `start-3-1` 에서 `start-3-3` (모듈 3)
- `help`, `bonus-patterns`, `bonus-secret`, `persona-builder`

---

### 복리 효과

각 캠페인이 다음 캠페인을 더 빠르게 만듭니다:

| 캠페인 | 시간 | 개선도 |
|----------|------|-------------|
| 첫 번째 (모듈 2) | 40시간 | 처음부터 구축 |
| 5번째 캠페인 | 15시간 | 62% 더 빠름 |
| 10번째 캠페인 | 10시간 | 75% 더 빠름 |

**축적되는 것:**
- 캠페인 브리프 템플릿
- 브랜드 보이스 가이드라인
- 콘텐츠 템플릿 (블로그, 이메일, 소셜, 광고)
- 페르소나 프레임워크
- 경쟁 분석 템플릿
- SEO 최적화 체크리스트
- 맞춤형 리뷰어 에이전트
- 워크플로우 자동화 패턴

---

## 학습 경로

### 경로 1: 빠른 시작 (30분)
경험 있는 마케터용 - 바로 프로덕션으로 이동:
```bash
/campaign:plan "Your campaign"
/content:good "Your content"
/cro:page "Your landing page"
```

### 경로 2: 전체 교육 (5-6시간)
초보자용 - 대화형 교육 완료:
```bash
/training:start-0-0  # 여기서 시작
```

### 경로 3: 스킬별 (각 15-30분)
필요에 따라 특정 스킬 학습:

| 목표 | 커맨드 |
|------|----------|
| **전환율 개선** | `/cro:page`, `/cro:form`, `/marketing:psychology` |
| **더 나은 카피 작성** | `/content:good`, `/content:editing` |
| **제품 출시** | `/growth:launch`, `/campaign:plan` |
| **가격 최적화** | `/pricing:strategy` |
| **SEO 확장** | `/seo:programmatic`, `/seo:schema` |
| **추천 설계** | `/growth:referral` |
| **A/B 테스팅** | `/test:ab-setup` |

### 경로 4: CRO 마스터리 (60분)
전환율 최적화 교육 완료:
```bash
/training:start-3-1  # 기초부터 시작
/training:start-3-2  # 양식 및 가입
/training:start-3-3  # 팝업 및 온보딩
```

---

## MCP 통합

연결된 서비스의 실제 데이터 (`data-reliability-rules.md` 참조):

| 서버 | 사용 목적 |
|--------|---------|
| `sensortower` | 앱 분석, ASO |
| `google-search-console` | 검색 성능 |
| `google-analytics` | 웹 분석 |
| `semrush` | 키워드, 백링크 |
| `dataforseo` | SERP 데이터 |
| `meta-ads` | Facebook/Instagram 광고 |
| `hubspot` | CRM, 자동화 |

---

## 기여

기여를 환영합니다! 다음이 있다면:
- 개선된 에이전트 또는 스킬
- 새로운 마케팅 커맨드
- 더 나은 워크플로우
- 버그 수정

가이드라인은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

### 기여 아이디어
- 산업별 스킬 (B2B, 전자상거래, SaaS)
- 플랫폼별 에이전트 (TikTok, YouTube, Reddit)
- 지역별 마케팅 (APAC, EMEA, LATAM)
- 분석 통합

---

## 리소스

### AgentKits
- [AgentKits 홈페이지](https://agentkits.net)
- [Marketing Kit 페이지](https://www.agentkits.net/marketing)
- [문서](https://www.agentkits.net/docs)
- [AgentKits CLI](https://github.com/aitytech/agentkits-cli)

### AI 어시스턴트
- [Claude Code 문서](https://docs.claude.com/en/docs/claude-code/overview)
- [Cursor 문서](https://docs.cursor.com)
- [GitHub Copilot 문서](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io)

### 커뮤니티
- [GitHub Issues](https://github.com/aitytech/agentkits-marketing/issues)
- [GitHub Discussions](https://github.com/aitytech/agentkits-marketing/discussions)

---

## 스타 히스토리

<a href="https://star-history.com/#aitytech/agentkits-marketing&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=aitytech/agentkits-marketing&type=Date" />
 </picture>
</a>

---

## 라이선스

MIT - 자유롭게 사용하고, 필요에 따라 수정하고, 가능하면 기여해 주세요.

---

**도움이 되었다면 이 저장소에 스타를 주세요. 오늘 AI 기반 마케팅 캠페인 구축을 시작하세요.**