# 아키텍처

## 폴더 구조

```
claude-guide/                   <- 프로젝트 루트 (= GitHub 레포 루트)
├── index.html                  <- 홈 (허브): 클로드 소개 + 제품 3개 + 의사결정 가이드
├── claude-web/
│   └── index.html              <- 클로드 웹 (claude.ai)
├── claude-desktop/
│   └── index.html              <- 클로드 데스크탑 (Chat/Code/Cowork 3탭)
├── claude-code/
│   └── index.html              <- 클로드 코드 (CLI/IDE/Desktop/Web)
├── tip/
│   └── index.html              <- TIP (ADR-001)
├── assets/
│   ├── css/
│   │   ├── tokens.css              <- 디자인 토큰 전체 (CSS Custom Properties)
│   │   ├── reset.css               <- modern-normalize 기반 리셋
│   │   ├── typography.css          <- 타입 유틸리티 클래스
│   │   ├── layout.css              <- container, grid, section 유틸
│   │   ├── main.css                <- @import 진입점 (로드 순서 제어)
│   │   └── components/
│   │       ├── nav.css
│   │       ├── buttons.css
│   │       ├── cards.css
│   │       ├── badges.css
│   │       ├── tabs.css
│   │       ├── accordion.css
│   │       ├── code-block.css
│   │       ├── disclosure.css      <- "더 알아보기" 점층적 공개
│   │       ├── pricing.css
│   │       ├── placeholder.css     <- 준비 중 섹션 (사선 패턴)
│   │       ├── term.css            <- 용어 툴팁 (ADR-001)
│   │       └── toc.css             <- 사이드바 목차 (ADR-001)
│   └── js/
│       ├── main.js                 <- DOMContentLoaded에서 모든 모듈 초기화
│       ├── nav.js                  <- sticky + 모바일 햄버거
│       ├── theme.js                <- 다크/라이트 토글 (localStorage)
│       ├── tabs.js
│       ├── accordion.js
│       ├── disclosure.js
│       ├── code-copy.js            <- 코드 블록 복사 버튼
│       ├── term.js                 <- 용어 툴팁 팝오버 (ADR-001)
│       └── toc.js                  <- 사이드바 IntersectionObserver (ADR-001)
└── CLAUDE.md
```

## 홈 페이지 구조 (index.html)

```
[스킵 링크]
[NAV] 로고 | 홈 클로드 웹 데스크탑 코드 TIP | 다크토글
[Hero]
  헤드라인: "클로드, 제대로 알고 쓰기"
  서브: "대화부터 자동화까지, 한국어로 탐험하세요"
  CTA: [뭘 할 수 있나요?] [클로드란?]
[클로드란?] 3문장 + disclosure(더 알아보기) -> 모델 패밀리, Constitutional AI
[클로드를 쓰는 세 가지 방법] 제품 카드 3열: 클로드 웹 / 데스크탑 / 코드
[뭘 하고 싶은지 모르겠다면] 시각적 의사결정 가이드 3행 (이모지 + 목적 + 추천 버튼)
[가입하고 시작하기] 탭: 웹에서 바로 | 데스크탑 앱 | 터미널 CLI
[Footer] 비공식 가이드 면책, GitHub, claude.ai, TIP
```

## 제품 페이지 공통 레이아웃 (claude-*/index.html)

```
[NAV] (상단 고정)
┌──────────┬──────────────────────────────┐
│ 사이드바   │                              │
│ ToC       │    페이지 콘텐츠               │
│ (sticky)  │                              │
│ · 섹션1   │                              │
│ · 섹션2   │                              │
│ · 섹션3 🟣│    🟣 = [고급] 배지            │
│ · ...     │                              │
└──────────┴──────────────────────────────┘
[Footer]

모바일 (768px 이하): 사이드바 -> sticky 드롭다운
```

페이지 내부 섹션 순서 (상세: @.claude/rules/content-plan.md):
```
[1] Hero (제품 한 줄 정의 + CTA)
[2] 시작하기 (해당 제품 설치/접속)
[3] 이런 걸 할 수 있어요 (작업 기준 서브섹션)
[4] 핵심 기능 (아코디언)
[5] 활용 예시 (시나리오)
[6] 요금·한계 or 비교 (제품마다 다름)
[7] 팁
[8] 다음 단계 -> 다른 제품 링크
```

## 빌드 순서 (Phase 1)

```
1. assets/css/tokens.css
2. assets/css/reset.css
3. assets/css/typography.css
4. assets/css/layout.css
5. assets/css/components/*.css    <- 12개 컴포넌트
6. assets/css/main.css            <- @import 순서대로 통합
7. assets/js/main.js              <- 모듈 진입점
8. assets/js/nav.js, theme.js, tabs.js, accordion.js,
   disclosure.js, code-copy.js, term.js, toc.js
9. index.html                     <- 홈 전체
10. claude-web/, claude-desktop/, claude-code/    <- 제품 페이지 3개
11. tip/                     <- TIP 페이지
```

## main.css @import 순서

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
@import "components/term.css";
@import "components/toc.css";
```
