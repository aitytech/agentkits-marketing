# /training-ko:start-1-6 - 프로젝트 메모리 (CLAUDE.md)

## 언어 및 품질 표준

**중요**: 사용자가 사용하는 언어와 동일한 언어로 응답하세요. 베트남어면 베트남어로 응답하고, 스페인어면 스페인어로 응답하세요.

---

## Claude를 위한 지침

학생들에게 CLAUDE.md와 지속적인 프로젝트 컨텍스트를 유지하는 방법을 가르치세요.

### 레슨 개요

---

**모듈 1.6: 프로젝트 메모리**

CLAUDE.md는 Claude에게 지속적인 브리핑 문서를 제공하는 것과 같습니다. 이 프로젝트에서 작업할 때마다 Claude는 이 파일을 먼저 읽고 해당 지침을 적용합니다.

**소요 시간:** ~20분

---

### 1단계: 현재 CLAUDE.md 보여주기

프로젝트의 CLAUDE.md를 읽으세요:

```
Read the CLAUDE.md file in this project
```

각 섹션을 살펴보세요:
- 역할 및 책임
- 워크플로우 (마케팅, 영업, CRM)
- 마케팅 에이전트
- 스킬 카탈로그
- 명령어 카테고리
- 문서 관리

### 2단계: 작동 방식 설명하기

CLAUDE.md가 존재하면 Claude는 자동으로:
- 사용 가능한 에이전트를 파악합니다
- 워크플로우 구조를 이해합니다
- 적절한 명령어를 참조합니다
- 마케팅 규칙을 따릅니다
- 올바른 스킬을 사용합니다

매번 Claude에게 상기시킬 필요가 없습니다 - 자동으로 작동합니다!

### 3단계: 주요 CLAUDE.md 섹션

중요한 섹션을 설명하세요:

**워크플로우:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**에이전트 매핑:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**명령어 카테고리:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### 4단계: 컨텍스트 인식 테스트하기

브랜드 가이드라인을 언급하지 않고 물어보세요:

```
Write a short LinkedIn post about remote team productivity
```

출력이 자동으로 다음과 일치하는 방법을 지적하세요:
- 가이드라인의 브랜드 보이스
- 타겟 페르소나 언어
- 핵심 메시징 프레임워크

### 5단계: 워크플로우 참조 이해하기

워크플로우가 참조되는 방식을 보여주세요:

```
Read .claude/workflows/primary-workflow.md
```

설명하세요:
- 마케팅 파이프라인 단계
- 각 단계의 에이전트 책임
- 품질 게이트 및 체크포인트

### 6단계: 마케팅 규칙

마케팅 규칙을 보여주세요:

```
Read .claude/workflows/marketing-rules.md
```

주요 규칙을 설명하세요:
- 토큰 효율성
- 다국어 지원
- 품질 표준
- 스킬 활성화

### 7단계: 프로젝트 컨텍스트의 이점

이점을 요약하세요:
- 자동으로 일관된 브랜드 보이스
- 올바른 에이전트 선택
- 적절한 명령어 사용
- 워크플로우 준수
- 품질 표준 적용

### 8단계: 유지보수 팁

지속적인 유지보수를 설명하세요:
- 새 캠페인 시작 시 업데이트
- 성공한 콘텐츠에서 얻은 학습 내용 추가
- 새로운 문서 참조
- 에이전트 목록을 최신 상태로 유지

### 다음 단계

학생들에게 알려주세요:
- CLAUDE.md는 반복 없이 일관성을 보장합니다
- **모듈 1이 거의 완료되었습니다!**
- **다음:** `/training-ko:start-1-7` - 탐색 및 검색
- 고급 응용 프로그램 전 최종 스킬

## 주요 교육 포인트
- CLAUDE.md는 Claude에게 지속적인 컨텍스트를 제공합니다
- 워크플로우, 에이전트, 명령어, 규칙을 포함합니다
- Claude는 모든 작업에 자동으로 적용합니다
- 워크플로우는 마케팅 프로세스를 정의합니다
- 마케팅 규칙은 품질 표준을 보장합니다

---

중요 출력 규칙:
- 번역된 원시 마크다운 콘텐츠만 출력하세요
- ```markdown 코드 펜스로 출력을 감싸지 마세요
- 서문, 설명 또는 주석을 추가하지 마세요
- 번역된 콘텐츠로 바로 시작하세요
- 출력은 .md 파일에 직접 저장됩니다