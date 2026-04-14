# 개발 계획

## Phase 1 (현재) -- 디자인 시스템 + 홈

- `assets/css/` 전체 (tokens -> reset -> typography -> layout -> components -> main)
- `assets/js/` 전체 모듈
- `index.html` 홈 완성
- 하위 3개 페이지는 nav + 제목 + placeholder 섹션만

## Phase 2 -- 작업(task) 기준 하위 페이지 3개

작업 기준 구조 (상세: @.claude/rules/content-plan.md):
```
[1] Hero (작업 한 줄 정의 + CTA)
[2] 왜/언제 필요한가 (이전 단계와 비교)
[3] 이런 걸 할 수 있어요 (작업 카드 그리드)
[4] 핵심 기능 (아코디언)
[5] 활용 예시 + 팁
[6] 시작하기 (난이도별 탭)
[7] 다음 단계
```

- `automate/index.html` 우선 (가장 설명이 필요한 "맡기기")
- `chat/index.html` (대화하기)
- `connect/index.html` (연결하기)

## Phase 3 -- 팁/활용법

- `/tips/` 허브 페이지 + 주제별 팁 페이지
- 커뮤니티 기여 구조 고려

---

## 현재 상태

> **2026-04-13 기준**

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
| `assets/css/main.css` | 미작성 |
| `assets/js/` 전체 | 미작성 |
| `index.html` | 미작성 |
| `chat/index.html` | 미작성 |
| `connect/index.html` | 미작성 |
| `automate/index.html` | 미작성 |

**다음 작업 시작점**: `accordion.css` 부터 이어서 진행.

---

## 검증 체크리스트

- [ ] 다크모드 토글 -> 리프레시 후 유지 (localStorage)
- [ ] 청중 선택 -> 리프레시 후 기본 탭 반영
- [ ] 탭/아코디언 키보드 접근 (Tab, Enter, Arrow)
- [ ] 모바일 뷰 (375px) -- 햄버거 메뉴 동작
- [ ] GitHub Pages 배포 후 실제 URL 접속
