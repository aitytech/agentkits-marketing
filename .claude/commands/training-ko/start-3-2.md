---
description: /training-ko:start-3-2 - 폼 및 가입 최적화
argument-hint:
---

# 모듈 3, 레슨 2: 폼 및 가입 최적화

## 폼과 등록 CRO 마스터하기

폼은 전환의 관문입니다. 불필요한 필드 하나하나가 리드 손실을 초래합니다. 이 레슨에서는 리드 캡처 폼과 가입 플로우를 최적화하는 방법을 배웁니다.

## 학습 목표

이 레슨을 마치면 다음을 할 수 있습니다:
1. 5개 필드 최대 원칙 적용
2. 전환을 위한 가입 플로우 최적화
3. 폼 마찰 체계적으로 감소
4. 다단계 점진적 폼 디자인

---

## 폼 CRO 원칙

### 5개 필드 규칙

5개를 초과하는 모든 필드는 전환율을 약 10%씩 감소시킵니다.

**필수 필드만:**
1. 이메일 (항상 필수)
2. 이름 (때때로)
3. 회사 (B2B만)
4. 비밀번호 (가입 시에만)
5. 필요한 경우 한 가지 한정자

**나머지는 모두** 가입 후로 연기하세요.

### 제거해야 할 마찰 포인트

| 마찰 | 해결 방법 |
|----------|-----|
| 너무 많은 필드 | 제거 또는 연기 |
| 비밀번호 요구사항 | 오류 후가 아닌 인라인으로 표시 |
| 필수 전화번호 | 선택사항으로 만들거나 제거 |
| CAPTCHA | 보이지 않는 대안 사용 |
| 소셜 로그인 없음 | Google/SSO 옵션 추가 |

---

## 폼 CRO 커맨드

리드 캡처 폼에는 `/cro:form`을 사용하세요:

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### 예상 권장사항

1. **제거:** Message (후속 조치에서 질문)
2. **제거:** Phone (나중에 캡처 가능)
3. **선택사항으로 만들기:** Title
4. **유지:** Name, Email, Company, Team Size

7개 → 4개 필드로 감소 = 약 +30% 전환율 증가 예상

---

## 가입 플로우 최적화

계정 등록의 경우 `/cro:signup`을 사용하세요:

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### 가입 플로우 패턴

| 패턴 | 최적 사용처 | 전환율 |
|---------|----------|------------|
| 이메일 전용 시작 | 최고 전환율 | 이메일로 시작, 점진적 프로파일링 |
| 소셜 우선 | 소비자 앱 | Google/SSO 강조 |
| 단일 페이지 최소화 | B2C, 단순 제품 | 모든 필드 표시 |
| 진행 표시가 있는 다단계 | B2B, 복잡함 | 가이드형, 진행 상황 표시 |

---

## 연습 1: 폼 감사

AgentKits의 현재 데모 요청 폼을 감사하세요:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

권장사항을 다음에 작성하세요:
```
training/exercises/markit/cro/form-audit.md
```

### 출력물에 포함되어야 할 내용

1. 제거할 필드
2. 선택사항으로 만들 필드
3. 점진적 프로파일링 전략
4. 카피 개선사항 (버튼 텍스트, 레이블)

---

## 연습 2: 가입 플로우 재설계

AgentKits를 위한 최적화된 가입 플로우를 설계하세요:

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

고려사항:
- 이메일 전용 초기 캡처
- OAuth 옵션 (B2B용 Google Workspace)
- 회사 정보 수집 시점
- 온보딩과 가입 분리

---

## 연습 3: 다단계 폼 디자인

복잡한 B2B 가입의 경우 다단계 접근 방식을 설계하세요:

**1단계:** 이메일만
**2단계:** 회사 + 팀 규모 (진행 표시줄 포함)
**3단계:** 선택적 사용 사례 선택

form-cro 스킬을 사용하여 검증하세요:

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## 실습 과제

다음 작업을 완료하세요:

1. **현재 폼 감사:**
   `training/exercises/markit/cro/current-form-audit.md`에 저장

2. **최적화된 폼 디자인:**
   `training/exercises/markit/cro/optimized-form.md`에 저장

3. **A/B 테스트 생성:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   `training/exercises/markit/cro/form-ab-test.md`에 저장

---

## 체크포인트

다음 단계로 넘어가기 전에 다음을 할 수 있는지 확인하세요:
- [ ] 5개 필드 최대 원칙 적용
- [ ] 가입 플로우의 마찰 식별
- [ ] 점진적 프로파일링 전략 설계
- [ ] 폼 A/B 테스트 가설 생성

---

## 다음 레슨

모듈 3, 레슨 3: 팝업 및 온보딩 CRO로 계속하세요

```bash
/training-ko:start-3-3