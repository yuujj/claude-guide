---
paths:
  - "assets/css/**/*.css"
  - "assets/js/**/*.js"
  - "**/*.html"
---

# 디자인 시스템

## 색상 (CSS Custom Properties)

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

## 타이포그래피

- **한국어 본문**: `Pretendard Variable` (CDN: jsdelivr.net/gh/orioncactus/pretendard)
- **코드**: `Fira Code` (Google Fonts)
- `word-break: keep-all` 필수 (한국어 행 단위 유지)
- `line-height` 본문: 1.6~1.75 (영문보다 넓게)
- 타입 스케일: `--text-display` (clamp 2.25→4rem) ~ `--text-label` (0.8125rem)

## 컴포넌트 규칙

| 컴포넌트 | 핵심 스펙 |
|---------|----------|
| 제품 카드 | 코랄 3px top accent (hover 시 표시), hover → translateY(-4px) + shadow |
| 버튼 Primary | bg `#da7756`, hover bg `#bd5d3a` + coral shadow |
| 탭 | underline 스타일, aria-selected, 키보드(Arrow) 지원 |
| disclosure | max-height 애니메이션, `aria-expanded` |
| 코드 블록 | bg `#1e1e24`, 복사 버튼 우상단, 언어 헤더 |
| placeholder | 점선 보더 + 사선 gradient 배경 |
| 배지 | 일반/비개발자(민트 `#e8f4f0`), 개발자/고급/하네스(인디고 `#eef2ff`), 신규(앰버), 플랫폼(크림) |
| 난이도 점 | 기초 🟢 `#10b981` / 중간 🟡 `#f59e0b` / 고급 🔵 `#3730a3` — `scenario` 레일에서 사용. `[고급]` 배지 인디고와 통일된 톤 |
| 용어 툴팁 | 점선 밑줄 `1.5px dotted var(--color-accent)`, cursor help. 팝오버: card 배경 + shadow-md + radius-sm. 모바일 탭 토글 |
| 사이드바 ToC | sticky, IntersectionObserver 현재 섹션 하이라이트. `[고급]` 배지(인디고) 표시. 모바일: sticky 드롭다운 전환 |
| 시작 포인터 카드 | 홈 `#get-started` 3열 그리드. `label` + `title(→)` + `hint` 3줄 구성. hover → translateY(-2px) + 코랄 보더. 모바일 1열 |
| example-card (웹) | 아이콘 + 제목 + 설명 + **코랄 좌측 보더(3px)의 이탤릭 프롬프트 인용**. auto-fit min 280px. 자연어 프롬프트는 따옴표 인용으로 시각적 구분 |
| scenario (코드) | 좌측 난이도 레일(🟢🟡🔵 점 + 기초/중간/고급 라벨) + 제목 옆 배지(`비개발자`/`개발자`/`하네스`) + **터미널 풍 코드블록 프롬프트**. 모바일에서 레일 → 상단 수평 전환 |

## 인터랙션

```
--transition-fast:   100ms ease
--transition-normal: 200ms ease
--transition-slow:   300ms ease
```

- `prefers-reduced-motion` 대응 필수
- focus-visible: 2px coral outline, offset 3px
