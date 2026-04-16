/**
 * Sidebar ToC (ADR-001)
 * IntersectionObserver로 현재 섹션 하이라이트 + 모바일 드롭다운 토글
 */

export function initToc() {
  initMobileDropdown();
  initActiveHighlight();
}

/* ── 모바일 드롭다운 토글 ──────────────────────────────────── */
function initMobileDropdown() {
  const btn = document.getElementById('toc-mobile-btn');
  const dropdown = document.getElementById('toc-mobile-dropdown');
  const label = document.getElementById('toc-mobile-label');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('is-open');
    dropdown.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // 드롭다운 항목 클릭 시 닫기 + 라벨 업데이트
  dropdown.querySelectorAll('.toc__item').forEach(item => {
    item.addEventListener('click', () => {
      btn.classList.remove('is-open');
      dropdown.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (label) {
        const text = item.textContent.replace(/\s+고급\s*$/, '').trim();
        label.textContent = text;
      }
    });
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      btn.classList.remove('is-open');
      dropdown.classList.remove('is-open');
    }
  });
}

/* ── 현재 섹션 하이라이트 (IntersectionObserver) ───────────── */
function initActiveHighlight() {
  const tocItems = document.querySelectorAll('.toc__list .toc__item, .toc-mobile__dropdown .toc__item');
  if (tocItems.length === 0) return;

  // ToC 링크가 가리키는 섹션들 수집
  const sectionIds = Array.from(tocItems)
    .map(item => item.getAttribute('href'))
    .filter(href => href && href.startsWith('#'))
    .map(href => href.slice(1));

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (sections.length === 0) return;

  // IntersectionObserver 미지원 환경 대응
  if (!('IntersectionObserver' in window)) return;

  const setActive = (id) => {
    tocItems.forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('href') === '#' + id);
    });

    // 모바일 라벨 업데이트
    const label = document.getElementById('toc-mobile-label');
    if (label) {
      const activeItem = Array.from(tocItems).find(
        item => item.getAttribute('href') === '#' + id
      );
      if (activeItem) {
        label.textContent = activeItem.textContent.replace(/\s+고급\s*$/, '').trim();
      }
    }
  };

  const observer = new IntersectionObserver((entries) => {
    // 뷰포트 상단 근처에 있는 섹션 중 첫 번째를 활성화
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visible.length > 0) {
      setActive(visible[0].target.id);
    }
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}
