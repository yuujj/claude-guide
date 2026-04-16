# 개발 계획

## Phase 1 (현재) -- 디자인 시스템 + 홈

- `assets/css/` 전체 (tokens -> reset -> typography -> layout -> components -> main)
- `assets/js/` 전체 모듈
- `index.html` 홈 완성
- 하위 페이지는 nav + 제목 + placeholder 섹션만

## Phase 2 -- 제품 페이지 + TIP (하이브리드, ADR-002)

TIP 페이지는 용어 + 프롬프트 팁 + FAQ를 통합 (Phase 3의 /tips/ 흡수).

제품 기준 URL + 페이지 내부 작업 기준 구조 (상세: @.claude/rules/content-plan.md):
```
[1] Hero (제품 한 줄 정의 + CTA)
[2] 시작하기 (해당 제품 설치/접속)
[3] 이런 걸 할 수 있어요 (작업 기준 서브섹션)
[4] 핵심 기능 (아코디언, [고급] 배지)
[5] 활용 예시 + 팁
[6] 요금·한계 or 비교
[7] 다음 단계
```

- `claude-code/index.html` 우선 (가장 설명이 필요)
- `claude-web/index.html`
- `claude-desktop/index.html`
- `tip/index.html` (TIP — ADR-001)

## Phase 3 -- TIP 페이지 확장 + 활용법

- TIP 페이지에 용어 외 콘텐츠 추가 (프롬프트 팁, FAQ, 트러블슈팅)
- 필터 탭으로 구분: 전체 | 용어 | 프롬프트 팁 | FAQ
- 커뮤니티 기여 구조 고려

---

## 현재 상태

> **2026-04-15 기준**

| 파일 | 상태 |
|------|------|
| `assets/css/tokens.css` | 완성 |
| `assets/css/reset.css` | 완성 |
| `assets/css/typography.css` | 완성 |
| `assets/css/layout.css` | 완성 |
| `assets/css/components/nav.css` | 완성 |
| `assets/css/components/buttons.css` | 완성 |
| `assets/css/components/badges.css` | 완성 |
| `assets/css/components/cards.css` | 완성 |
| `assets/css/components/tabs.css` | 완성 |
| `assets/css/components/accordion.css` | 미작성 |
| `assets/css/components/code-block.css` | 미작성 |
| `assets/css/components/disclosure.css` | 미작성 |
| `assets/css/components/pricing.css` | 미작성 |
| `assets/css/components/placeholder.css` | 미작성 |
| `assets/css/components/term.css` | 미작성 (ADR-001) |
| `assets/css/components/toc.css` | 미작성 (ADR-001) |
| `assets/css/main.css` | 미작성 |
| `assets/js/main.js` | 미작성 |
| `assets/js/nav.js` | 미작성 |
| `assets/js/theme.js` | 미작성 |
| `assets/js/tabs.js` | 미작성 |
| `assets/js/accordion.js` | 미작성 |
| `assets/js/disclosure.js` | 미작성 |
| `assets/js/code-copy.js` | 미작성 |
| `assets/js/term.js` | 미작성 (ADR-001) |
| `assets/js/toc.js` | 미작성 (ADR-001) |
| `index.html` | 미작성 |
| `claude-web/index.html` | 미작성 |
| `claude-desktop/index.html` | 미작성 |
| `claude-code/index.html` | 미작성 |
| `tip/index.html` | 미작성 (ADR-001, Phase 3 /tips/ 흡수) |

**다음 작업 시작점**: `accordion.css` 부터 이어서 진행.

---

## 검증 체크리스트

- [ ] 다크모드 토글 -> 리프레시 후 유지 (localStorage)
- [ ] 탭/아코디언 키보드 접근 (Tab, Enter, Arrow)
- [ ] 모바일 뷰 (375px) -- 햄버거 메뉴 동작
- [ ] 사이드바 ToC -- 스크롤 시 현재 섹션 하이라이트
- [ ] 사이드바 ToC -- 모바일에서 드롭다운 전환
- [ ] 용어 툴팁 -- 클릭/호버 시 팝오버 표시 + TIP 링크
- [ ] 용어 툴팁 -- 모바일 탭 토글 동작
- [ ] TIP 페이지 -- 필터/검색 동작
- [ ] GitHub Pages 배포 후 실제 URL 접속
