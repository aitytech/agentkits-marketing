# /training-ko:start-0-1 - 설치 및 설정

## 언어 및 품질 기준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

학생이 Claude Code 설치 및 마케팅 킷 설정을 확인할 수 있도록 안내하세요.

### 레슨 개요

다음과 같이 말하세요:

---

**모듈 0.1: 설치 및 설정**

마케팅 워크플로우를 시작하기 전에 모든 것이 올바르게 설정되어 있는지 확인해 보겠습니다.

---

### 1단계: Claude Code 확인

다음을 확인하도록 요청하세요:
- Claude Code 내에서 실행 중인지 확인 (웹 채팅이 아님)
- Claude Pro 또는 Max 구독이 있는지 확인

확실하지 않다면 설명하세요:
- Claude Code는 터미널/CLI 버전입니다
- 파일을 직접 읽고, 쓰고, 편집할 수 있습니다
- claude.ai 웹 채팅과는 다릅니다

### 2단계: 마케팅 킷 파일 확인

학생과 함께 다음 확인을 실행하세요 (실제로 실행):

```
Show me the contents of this directory
```

다음이 표시되어야 합니다:
- agents, commands, skills, workflows가 포함된 `.claude/` 폴더
- 문서가 포함된 `docs/` 폴더
- `CLAUDE.md` 파일 (프로젝트 메모리)
- `README.md` 파일

### 3단계: 시스템 구조 탐색

마케팅 킷 구조를 보여주세요:

```
List all folders in .claude/
```

각 구성 요소를 설명하세요:
- `agents/` - 18개의 전문 마케팅 에이전트
- `commands/` - 기능별로 구성된 76개의 슬래시 커맨드
- `skills/` - 마케팅 도메인 지식
- `workflows/` - 핵심 마케팅, 영업 및 CRM 워크플로우

### 4단계: 사용 가능한 커맨드 탐색

커맨드 카테고리를 보여주세요:

```
List all folders in .claude/commands/
```

주요 커맨드 그룹을 설명하세요:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### 5단계: 첫 번째 커맨드 테스트

실제 커맨드를 시도하도록 하세요:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

첫 번째 커맨드 실행을 축하하세요!

### 6단계: 문서 검토

주요 문서를 보여주세요:

```
Read docs/usage-guide.md (first 50 lines)
```

설명하세요:
- `docs/usage-guide.md` - 완전한 시스템 참조 문서
- `docs/brand-guidelines.md` - 브랜드 기준 템플릿
- `docs/content-style-guide.md` - 작성 기준
- `docs/campaign-playbooks.md` - 캠페인 템플릿
- `docs/channel-strategies.md` - 플랫폼 전략
- `docs/analytics-setup.md` - 추적 구성

### 다음 단계

다음과 같이 안내하세요:
- **다음 레슨:** `/training-ko:start-0-2` - 첫 번째 마케팅 작업
- 방금 설정을 확인하고 첫 번째 커맨드를 실행했습니다!
- 나머지 과정도 정확히 이런 방식으로 진행됩니다

## 주요 교육 포인트
- Claude Code는 파일과 직접 작업합니다
- 마케팅 킷에는 18개의 에이전트, 76개의 커맨드, 포괄적인 문서가 있습니다
- 모든 레슨에는 실습 커맨드 실행이 포함됩니다
- 실제로 작동했는지 확인하세요 (파일을 다시 읽어보기)

---

중요 출력 규칙:
- 번역된 원시 마크다운 콘텐츠만 출력하세요
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 주석을 추가하지 마세요
- 번역된 콘텐츠로 바로 시작하세요
- 출력은 .md 파일에 직접 저장됩니다