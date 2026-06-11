# 문서 인덱스

> 새 세션 시작 시 이 파일을 먼저 읽어 **필요한 문서만** 참조하세요.
> 기능별로 하위 디렉토리가 분리되어 있습니다 (예: `{feature}`, 향후 `{feature2}` 등).
>
> ── 유지 규칙 ──
> 문서를 추가/이동/보관할 때 이 인덱스를 같은 변경에 함께 갱신할 것.

---

## 제품/의사결정 (product/)

| 파일 | 설명 |
|------|------|
| `product/{feature}/prd.md` | PRD — 배경, 문제, 요구사항(FR/NFR), 대상 사용자, 비범위 |
| `product/{feature}/feature-spec.md` | 기능 정의서 — 파이프라인/플로우, API 스펙, 상태, 엣지 케이스 |
| `product/{feature}/adr.md` | ADR — 주요 기술 결정 누적 기록 |

---

## 기술 설계 (design/)

| 파일 | 설명 |
|------|------|
| `design/{feature}/architecture.md` | 디렉토리 구조, 컴포넌트 다이어그램, 데이터 모델, 시퀀스 |
| `design/{feature}/reliability_design.md` | 핵심 품질 속성(신뢰성/성능 등) 상세 설계 + 실패 모드 표 + **변경 금지 상수(SSOT)** |

---

## 보고서/분석 (reports/)

| 파일 | 설명 |
|------|------|
| `reports/{topic}_analysis_report_{YYYYMMDD}.md` | {분석 주제 — 예: 부하/장애 분석} |

---

## 태스크 (tasks/) — 순수 실행 계획만

| 파일 | 설명 |
|------|------|
| `tasks/{task}_plan.md` | {실행 계획 주제 — Phase별 체크리스트} |

---

## 항상 참조 (매 세션)

| 파일 | 설명 |
|------|------|
| `reference/execution_guide.md` | 환경 세팅, 로컬 실행, 테스트 방법 |
| `reference/history.md` | 변경 이력 (코드 수정 시 반드시 한 줄 기록) |

---

## 가이드 (guide/)

| 파일 | 설명 |
|------|------|
| `guide/report_style_guide.md` | 보고서 작성 양식 — 헤더, 파일명 규칙, 유형별 섹션 구조 |
| `guide/report-design-system.html` | 공유용 보고서 디자인 시스템 (HTML/CSS 토큰, 도메인 중립) |

---

## archive/ (읽지 않아도 됨)

완료되었거나 다른 문서에 내용이 포함된 파일. 이력 보존 목적.

| 파일 | 보관 사유 |
|------|----------|
| `archive/design/{superseded_doc}.md` | {보관 사유 — 예: ADR-00N으로 대체됨. 현행은 `design/{feature}/architecture.md` 참조} |
