/**
 * Term Tooltip (ADR-001)
 * 용어 툴팁: 클릭 시 정의 팝오버 + TIP 페이지 링크
 *
 * HTML:
 *   <span class="term" data-def="정의 텍스트" data-tip="mcp">MCP</span>
 */

export function initTerm() {
  let activePopover = null;

  const closePopover = () => {
    if (activePopover) {
      activePopover.classList.remove('is-visible');
      activePopover = null;
    }
  };

  document.addEventListener('click', (e) => {
    const term = e.target.closest?.('.term');

    // 용어 외부 클릭 → 열린 팝오버 닫기
    if (!term) {
      closePopover();
      return;
    }

    // 팝오버 내부 클릭 (링크 등)은 통과
    if (e.target.closest('.term-popover')) return;

    e.preventDefault();

    // 다른 용어의 팝오버가 열려 있으면 닫기
    if (activePopover && activePopover.parentElement !== term) {
      closePopover();
    }

    // 팝오버가 없으면 동적 생성
    let popover = term.querySelector('.term-popover');
    if (!popover) {
      const def = term.dataset.def || '';
      const tipId = term.dataset.tip || '';
      // 현재 페이지 깊이에 따라 상대경로 결정
      const depth = (location.pathname.match(/\//g) || []).length;
      const prefix = depth > 2 ? '../' : '';
      const linkHref = tipId ? `${prefix}tip/#${tipId}` : `${prefix}tip/`;

      popover = document.createElement('div');
      popover.className = 'term-popover';
      popover.setAttribute('role', 'tooltip');
      popover.innerHTML = `
        <div class="term-popover__def">${escapeHtml(def)}</div>
        <a class="term-popover__link" href="${linkHref}">TIP에서 자세히 →</a>
      `;
      term.appendChild(popover);
    }

    // 토글
    const wasVisible = popover.classList.contains('is-visible');
    popover.classList.toggle('is-visible', !wasVisible);
    activePopover = wasVisible ? null : popover;
  });

  // ESC 키로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activePopover) {
      closePopover();
    }
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
