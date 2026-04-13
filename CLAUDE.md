# Claude Guide — 프로젝트 컨텍스트

## 프로젝트 목표

비전공자부터 전공자까지, 클로드(Claude Web / Claude Desktop / Claude Code)를 한국어로 탐색할 수 있는 **정적 가이드 웹사이트**를 만든다.

- **탐색형** (발표형 X): 관심 기반 딥다이브, Hub-and-Spoke 네비게이션
- **점층적 콘텐츠**: 기본 설명 → "더 알아보기" 버튼 → 상세 내용 확장
- **GitHub Pages 배포**: 레포명 `claude-guide`, 순수 HTML/CSS/JS (빌드 도구 없음)
- **청중 이중화**: 일반 사용자 / 개발자 — 별도 페이지 없이 같은 페이지에서 탭·배지로 분기

---

## 기술 스택

- **HTML5 / CSS3 (Custom Properties) / Vanilla JS (ES Modules)**
- 프레임워크 없음 → `<script type="module">` 브라우저 직접 처리
- GitHub Pages: Settings > Pages > branch `main` / `/ (root)` (Actions 불필요)

---

## 폴더 구조

```
claude-guide/               ← 프로젝트 루트 (= GitHub 레포 루트)
├── index.html              ← 홈 (허브)
├── claude-web/
│   └── index.html
├── claude-desktop/
│   └── index.html
├── claude-code/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── tokens.css          ← 디자인 토큰 전체 (CSS Custom Properties)
│   │   ├── reset.css           ← modern-normalize 기반 리셋
│   │   ├── typography.css      ← 타입 유틸리티 클래스
│   │   ├── layout.css          ← container, grid, section 유틸
│   │   ├── main.css            ← @import 진입점 (로드 순서 제어)
│   │   └── components/
│   │       ├── nav.css
│   │       ├── buttons.css
│   │       ├── cards.css
│   │       ├── badges.css
│   │       ├── tabs.css
│   │       ├── accordion.css
│   │       ├── code-block.css
│   │       ├── disclosure.css  ← "더 알아보기" 점층적 공개
│   │       ├── pricing.css
│   │       └── placeholder.css ← 준비 중 섹션 (사선 패턴)
│   └── js/
│       ├── main.js             ← DOMContentLoaded에서 모든 모듈 초기화
│       ├── nav.js              ← sticky + 모바일 햄버거
│       ├── theme.js            ← 다크/라이트 토글 (localStorage)
│       ├── tabs.js
│       ├── accordion.js
│       ├── disclosure.js
│       ├── code-copy.js        ← 코드 블록 복사 버튼
│       └── audience.js         ← 청중 선택 + localStorage
└── CLAUDE.md                   ← 이 파일
```

---

## 디자인 시스템

### 색상 (CSS Custom Properties)

```css
/* 브랜드 */
--color-brand-coral:       #da7756   /* Claude 로고 공식 컬러 */
--color-brand-coral-dark:  #bd5d3a   /* hover / active */
--color-brand-coral-light: #f0a88a
--color-brand-coral-faint: #fdf0eb   /* 섹션 bg tint */

/* 배경 */
--color-cream-100: #fafaf7   /* 페이지 배경 */
--color-cream-200: #f5f3ec   /* 카드 배경 */
--color-cream-300: #eeece2   /* alt 섹션 (claude.ai 공식) */
--color-cream-400: #e0ddd3   /* 보더 */

/* 텍스트 */
--color-dark-900: #131314    /* Anthropic 공식 다크 */
--color-dark-600: #3d3929    /* 본문 */
--color-dark-400: #6b6860    /* 보조 */
--color-dark-200: #9e9b95    /* muted */

/* 다크모드 [data-theme="dark"] 오버라이드 */
배경 #1e1e1f / 카드 #2a2a2c / 텍스트 #e8e6e0 / 보더 #3a3a3d
```

### 타이포그래피

- **한국어 본문**: `Pretendard Variable` (CDN: jsdelivr.net/gh/orioncactus/pretendard)
- **코드**: `Fira Code` (Google Fonts)
- `word-break: keep-all` 필수 (한국어 행 단위 유지)
- `line-height` 본문: 1.6~1.75 (영문보다 넓게)
- 타입 스케일: `--text-display` (clamp 2.25→4rem) ~ `--text-label` (0.8125rem)

### 컴포넌트 규칙

| 컴포넌트 | 핵심 스펙 |
|---------|----------|
| 제품 카드 | 코랄 3px top accent (hover 시 표시), hover → translateY(-4px) + shadow |
| 버튼 Primary | bg `#da7756`, hover bg `#bd5d3a` + coral shadow |
| 탭 | underline 스타일, aria-selected, 키보드(Arrow) 지원 |
| disclosure | max-height 애니메이션, `aria-expanded` |
| 코드 블록 | bg `#1e1e24`, 복사 버튼 우상단, 언어 헤더 |
| placeholder | 점선 보더 + 사선 gradient 배경 |
| 배지 | 일반(민트 `#e8f4f0`), 개발자(인디고 `#eef2ff`), 플랫폼(크림) |

### 인터랙션

```
--transition-fast:   100ms ease
--transition-normal: 200ms ease
--transition-slow:   300ms ease
```

- `prefers-reduced-motion` 대응 필수
- focus-visible: 2px coral outline, offset 3px

---

## 홈 페이지 구조 (index.html)

```
[스킵 링크]
[NAV] 로고 | 홈 웹 데스크탑 코드 | 다크토글
[Hero]
  헤드라인: "클로드, 제대로 알고 쓰기"
  서브: "Anthropic이 만든 AI 클로드를 한국어로 탐험하세요"
  CTA: [지금 시작하기] [클로드란?]
  청중 선택 카드 2개 (첫 방문자 — localStorage 저장)
    → 🙂 일반 사용자 / 👨‍💻 개발자·기술자
[클로드란?] 3문장 + disclosure(더 알아보기) → 모델 패밀리, Constitutional AI
[제품 허브] 카드 3열: 클로드 웹 / 데스크탑 / 코드
[요금제 비교] Free / Pro / Max / Team 4열 + disclosure 상세
[빠른 시작] 탭: 일반 사용자 | 개발자 (각 3단계)
[Footer] GitHub 링크, 면책 문구
```

---

## Phase 계획

### Phase 1 (현재) — 디자인 시스템 + 홈

- `assets/css/` 전체 (tokens → reset → typography → layout → components → main)
- `assets/js/` 전체 모듈
- `index.html` 홈 완성
- 하위 3개 페이지는 nav + 제목 + placeholder 섹션만

### Phase 2 — 제품 페이지 3개

각 페이지 공통 구조:
```
히어로(제품 한 줄 설명) → 기능 그리드 → 설치/시작 가이드(탭) → 활용 예시
```

- `claude-code/index.html` 우선 (설명 가장 많이 필요)
- `claude-web/index.html`
- `claude-desktop/index.html`

### Phase 3 — 팁/활용법

- `/tips/` 허브 페이지 + 주제별 팁 페이지
- 커뮤니티 기여 구조 고려

---

## 빌드 순서 (Phase 1 기준)

```
1. assets/css/tokens.css          ← 모든 CSS 변수 정의
2. assets/css/reset.css
3. assets/css/typography.css
4. assets/css/layout.css
5. assets/css/components/*.css    ← 10개 컴포넌트
6. assets/css/main.css            ← @import 순서대로 통합
7. assets/js/main.js              ← 모듈 진입점
8. assets/js/nav.js, theme.js, tabs.js, accordion.js,
   disclosure.js, code-copy.js, audience.js
9. index.html                     ← 홈 전체
10. claude-*/index.html           ← placeholder 3개
```

`main.css` @import 순서:
```css
@import "tokens.css";
@import "reset.css";
@import "typography.css";
@import "layout.css";
@import "components/badges.css";
@import "components/buttons.css";
@import "components/cards.css";
@import "components/nav.css";
@import "components/tabs.css";
@import "components/accordion.css";
@import "components/code-block.css";
@import "components/disclosure.css";
@import "components/pricing.css";
@import "components/placeholder.css";
```

---

## 현재 상태

> **2026-04-13 기준**

| 파일 | 상태 |
|------|------|
| `assets/css/tokens.css` | ✅ 완성 |
| `assets/css/reset.css` | ✅ 완성 |
| `assets/css/typography.css` | ✅ 완성 |
| `assets/css/layout.css` | ✅ 완성 |
| `assets/css/components/nav.css` | ✅ 완성 |
| `assets/css/components/buttons.css` | ✅ 완성 |
| `assets/css/components/badges.css` | ✅ 완성 |
| `assets/css/components/cards.css` | ✅ 완성 |
| `assets/css/components/tabs.css` | ✅ 완성 |
| `assets/css/components/accordion.css` | ⬜ 미작성 |
| `assets/css/components/code-block.css` | ⬜ 미작성 |
| `assets/css/components/disclosure.css` | ⬜ 미작성 |
| `assets/css/components/pricing.css` | ⬜ 미작성 |
| `assets/css/components/placeholder.css` | ⬜ 미작성 |
| `assets/css/main.css` | ⬜ 미작성 |
| `assets/js/` 전체 | ⬜ 미작성 |
| `index.html` | ⬜ 미작성 |
| `claude-*/index.html` | ⬜ 미작성 |

**다음 작업 시작점**: `accordion.css` 부터 이어서 진행.

---

## 검증 방법

```bash
# 로컬 서버 실행
python3 -m http.server 8080
# → http://localhost:8080 에서 확인
```

체크리스트:
- [ ] 다크모드 토글 → 리프레시 후 유지 (localStorage)
- [ ] 청중 선택 → 리프레시 후 기본 탭 반영
- [ ] 탭/아코디언 키보드 접근 (Tab, Enter, Arrow)
- [ ] 모바일 뷰 (375px) — 햄버거 메뉴 동작
- [ ] GitHub Pages 배포 후 실제 URL 접속
