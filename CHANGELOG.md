# CHANGELOG

모든 주요 변경 사항은 이 파일에 기록됩니다.
버전 형식: `MAJOR.MINOR.PATCH` — 규칙은 `.claude/rules/versioning.md` 참조.

---

## [0.6.0] — 2026-04-30
### Added
- claude-web: 나만의 세팅하기 — 4개 레이어(프로필 지침·커스텀 스타일·프로젝트 지침·메모리) 상세 확장, 레이어별 disclosure 추가
- claude-web: 핵심 기능 아코디언 — 프로젝트(파일 제한·RAG·팀 공유), 아티팩트(전 타입·버전·게시·리믹스), 메모리(전체 플랜·관리법), 지침·스타일 통합 상세화
- claude-web: 요금 테이블 — 메모리 Free 플랜 O 반영, 채팅 검색·RAG 행 추가
- 버전 관리 시스템 도입 (`version.json`, `CHANGELOG.md`, `.claude/rules/versioning.md`)
- 전체 페이지 footer 버전 텍스트 추가

---

## [0.5.0] — 2026-04-30
### Added
- claude-code: 엑셀 데이터 검증·처리 시나리오 추가 (비개발자, 중간, 데스크탑·CLI)
- claude-code: 발표 자료 자동 생성 시나리오 추가 (비개발자·하네스, 중간, 데스크탑·CLI)
- claude-desktop: `#usecases` 섹션 신규 추가 (Cowork/Code탭 Excel·PPT 자동화 3개 시나리오)
- claude-desktop: TOC 사이드바·모바일에 `#usecases` 항목 추가

---

## [0.4.3] — 2026-04-20
### Fixed
- `toc.css`: `.page-with-toc > div`에 `min-width: 0` 추가 — 모바일(≤1024px) 뷰포트 초과 레이아웃 수정

---

## [0.4.2] — 2026-04-20
### Fixed
- claude-web, claude-desktop: disclosure 트리거 SVG class `disclosure__icon` → `disclosure__trigger-icon` 수정 (체크 표시가 전체 화면에 렌더링되는 버그)

---

## [0.4.1] — 2026-04-20
### Changed
- claude-code: 소개 섹션 헤딩 "AI가 직접 실행합니다" → "클로드 코드란?", section-label "핵심 개념" → "소개"
- claude-code: 시작하기 CLI 탭 3단계 → 4단계 확장 (Git 설치, Node.js 18+ 설치 단계 추가, 공식 링크 포함)

---

## [0.4.0] — 2026-04-20
### Added
- `claude-web/index.html` 초안 완성: 시작하기, 나만의 세팅하기, 이런 걸 할 수 있어요(example-grid), 핵심 기능(아코디언 5개), 요금·한계, 다음 단계
- `claude-desktop/index.html` 초안 완성: 시작하기, 나만의 세팅하기(비교 테이블·MCP disclosure), 세 가지 탭(Chat/Code/Cowork), 핵심 기능(아코디언 4개), 다음 단계

---

## [0.3.0] — 2026-04-20
### Added
- `claude-code/index.html` 전체 초안 완성: 소개, 시작하기(5탭), 시나리오(3개 미리보기), 하네스 세팅 요약 테이블, 핵심 기능(아코디언 5개), Cursor vs Copilot 비교, 팁, 다음 단계
- `claude-code/scenarios/index.html` 서브페이지 생성 (필터 라이브러리, 15개 시나리오)
- `claude-code/harness/index.html` 서브페이지 생성 (하네스 세팅 가이드 + 체크리스트)
- `assets/js/scenario-filter.js`, `scenario-data.js`, `harness-checklist.js` 모듈 추가
- `assets/css/components/scenario.css`, `step.css`, `hero.css`, `footer.css`, `decision-card.css` 추가
- `preview-examples.html` 시각 프리뷰 추가 (실배포 아님)
### Changed
- 홈 통합 제품 카드 UI 개선: 유스케이스 박스·기능 칩·배지·CTA 통합 (구 §3~§5 병합)
- claude-code 허브 경량화: 시나리오 3개 미리보기 + "전체 보기 →" CTA로 분리

---

## [0.2.0] — 2026-04-17
### Added
- 홈(index.html): 3열 통합 제품 카드 섹션 완성 (제품·유스케이스·접근성 3렌즈 병합)
### Fixed
- 모바일 네비게이션 토글 버그 수정

---

## [0.1.0] — 2026-04-16
### Added
- `assets/css/`: tokens, reset, typography, layout + 12개 컴포넌트 CSS 완성
- `assets/js/`: nav, theme, tabs, accordion, disclosure, code-copy, term, toc, main 9개 모듈 완성
- `index.html` 홈 초안 완성
- 하위 placeholder 페이지: `claude-web/`, `claude-desktop/`, `claude-code/`, `tip/`
### Fixed
- 태블릿(≤800px) 반응형 레이아웃 개선
- 모바일 메뉴 가로 스크롤 방지
