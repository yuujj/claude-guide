# 아키텍처

## 폴더 구조

```
claude-guide/               <- 프로젝트 루트 (= GitHub 레포 루트)
├── index.html              <- 홈 (허브): 클로드 소개 + 작업 분기
├── chat/
│   └── index.html          <- 대화하기
├── connect/
│   └── index.html          <- 연결하기
├── automate/
│   └── index.html          <- 맡기기
├── assets/
│   ├── css/
│   │   ├── tokens.css          <- 디자인 토큰 전체 (CSS Custom Properties)
│   │   ├── reset.css           <- modern-normalize 기반 리셋
│   │   ├── typography.css      <- 타입 유틸리티 클래스
│   │   ├── layout.css          <- container, grid, section 유틸
│   │   ├── main.css            <- @import 진입점 (로드 순서 제어)
│   │   └── components/
│   │       ├── nav.css
│   │       ├── buttons.css
│   │       ├── cards.css
│   │       ├── badges.css
│   │       ├── tabs.css
│   │       ├── accordion.css
│   │       ├── code-block.css
│   │       ├── disclosure.css  <- "더 알아보기" 점층적 공개
│   │       ├── pricing.css
│   │       └── placeholder.css <- 준비 중 섹션 (사선 패턴)
│   └── js/
│       ├── main.js             <- DOMContentLoaded에서 모든 모듈 초기화
│       ├── nav.js              <- sticky + 모바일 햄버거
│       ├── theme.js            <- 다크/라이트 토글 (localStorage)
│       ├── tabs.js
│       ├── accordion.js
│       ├── disclosure.js
│       ├── code-copy.js        <- 코드 블록 복사 버튼
│       └── audience.js         <- 청중 선택 + localStorage
└── CLAUDE.md
```

## 홈 페이지 구조 (index.html)

```
[스킵 링크]
[NAV] 로고 | 홈 대화하기 연결하기 맡기기 | 다크토글
[Hero]
  헤드라인: "클로드, 제대로 알고 쓰기"
  서브: "대화부터 자동화까지, 한국어로 탐험하세요"
  CTA: [뭘 할 수 있나요?] [클로드란?]
[클로드란?] 3문장 + disclosure(더 알아보기) -> 모델 패밀리, Constitutional AI
[뭘 하고 싶으세요?] 작업 카드 3열: 대화하기 / 연결하기 / 맡기기
[어떤 도구를 쓸까?] 상황별 추천 도구 테이블
[요금제 비교] Free / Pro / Max / Team 4열 + disclosure 상세
[바로 시작하기] 탭: 가장 쉬운 방법 | 데스크탑 앱 | 터미널
[Footer] 비공식 가이드 면책, GitHub, claude.ai
```

## 빌드 순서 (Phase 1)

```
1. assets/css/tokens.css
2. assets/css/reset.css
3. assets/css/typography.css
4. assets/css/layout.css
5. assets/css/components/*.css    <- 10개 컴포넌트
6. assets/css/main.css            <- @import 순서대로 통합
7. assets/js/main.js              <- 모듈 진입점
8. assets/js/nav.js, theme.js, tabs.js, accordion.js,
   disclosure.js, code-copy.js, audience.js
9. index.html                     <- 홈 전체
10. chat/, connect/, automate/    <- 하위 3개 페이지
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
```
