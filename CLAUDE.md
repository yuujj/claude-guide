# Claude Guide

비전공자부터 전공자까지, 클로드(Claude Web / Desktop / Code)를 한국어로 탐색하는 **정적 가이드 웹사이트**.

## 핵심 사항

- **순수 HTML/CSS/JS** (빌드 도구 없음, ES Modules)
- **GitHub Pages 배포**: branch `main` / root `/` (Actions 불필요)
- **청중 이중화**: 일반 사용자 / 개발자 — 같은 페이지에서 탭+배지로 분기
- **탐색형 구조**: Hub-and-Spoke 네비게이션, 점층적 공개(disclosure)

## 로컬 확인

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## 상세 규칙

- 디자인 시스템 (색상, 타이포, 컴포넌트, 인터랙션): @.claude/rules/design-system.md
- 아키텍처 (폴더 구조, 페이지 와이어프레임, 빌드 순서): @.claude/rules/architecture.md
- 콘텐츠 기획 (제품 정의, 페이지별 섹션 상세, 청중 분기): @.claude/rules/content-plan.md
- 개발 계획 (Phase 로드맵, 현재 상태, 검증 체크리스트): @.claude/rules/phase-plan.md
