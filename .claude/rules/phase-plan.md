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

> **2026-04-17 기준**

| 영역 | 상태 |
|------|------|
| `assets/css/*` 파운데이션 (tokens/reset/typography/layout) | 완성 |
| `assets/css/components/*` 12개 컴포넌트 | 완성 |
| `assets/css/components/hero, footer, step, decision-card` (계획 외 추가분) | 완성 |
| `assets/css/main.css` @import 진입점 | 완성 |
| `assets/js/*` 9개 모듈 (main/nav/theme/tabs/accordion/disclosure/code-copy/term/toc) | 완성 |
| `index.html` 홈 | 초안 완성 (340줄) — `#get-started` 리워크 예정 |
| `claude-web/index.html` | placeholder (96줄) |
| `claude-desktop/index.html` | placeholder (96줄) |
| `claude-code/index.html` | placeholder (96줄) |
| `tip/index.html` | 확인 필요 |
| `preview-examples.html` | 2026-04-17 추가 — 예시 섹션 시각 프리뷰 (실배포 아님) |

**다음 작업 시작점**:
1. 홈 `#get-started` 섹션을 3탭(웹/데스크탑/CLI) → 경량 포인터 3카드로 리워크 (option 2, content-plan §5)
2. `claude-code/index.html` 전체 초안 (가장 설명 밀도 높고 `하네스 엔지니어링` 섹션 포함)
3. `claude-web/index.html` 전체 초안
4. `claude-desktop/index.html` 전체 초안
5. `tip/index.html` 초안 — 용어 카드에 `하네스` 추가

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
