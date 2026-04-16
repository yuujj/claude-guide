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
| 배지 | 일반(민트 `#e8f4f0`), 개발자(인디고 `#eef2ff`), 플랫폼(크림) |
| 용어 툴팁 | 점선 밑줄 `1.5px dotted var(--color-accent)`, cursor help. 팝오버: card 배경 + shadow-md + radius-sm. 모바일 탭 토글 |
| 사이드바 ToC | sticky, IntersectionObserver 현재 섹션 하이라이트. `[고급]` 배지(인디고) 표시. 모바일: sticky 드롭다운 전환 |

## 인터랙션

```
--transition-fast:   100ms ease
--transition-normal: 200ms ease
--transition-slow:   300ms ease
```

- `prefers-reduced-motion` 대응 필수
- focus-visible: 2px coral outline, offset 3px
