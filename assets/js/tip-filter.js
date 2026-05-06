export function initTipFilter() {
  const searchInput = document.getElementById('tip-search');
  if (!searchInput) return;

  const cards    = document.querySelectorAll('.tip-card');
  const btnList  = document.querySelectorAll('.tip-filter__btn');
  const totalEl  = document.getElementById('tip-total');
  const emptyEl  = document.getElementById('tip-empty');

  let activeCategory = 'all';
  let query = '';

  // Anchor highlight on load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target?.classList.contains('tip-card')) {
      target.classList.add('is-highlighted');
      setTimeout(() => target.classList.remove('is-highlighted'), 2500);
    }
  }

  function applyFilter() {
    let visible = 0;
    cards.forEach(card => {
      const catMatch  = activeCategory === 'all' || card.dataset.category === activeCategory;
      const termText  = (card.querySelector('.tip-card__term')?.textContent  || '').toLowerCase();
      const defText   = (card.querySelector('.tip-card__def')?.textContent   || '').toLowerCase();
      const enText    = (card.querySelector('.tip-card__en')?.textContent    || '').toLowerCase();
      const queryMatch = !query || termText.includes(query) || defText.includes(query) || enText.includes(query);

      const show = catMatch && queryMatch;
      card.hidden = !show;
      if (show) visible++;
    });

    if (totalEl) totalEl.textContent = `${visible}개 용어`;
    if (emptyEl) emptyEl.hidden = visible > 0;
  }

  searchInput.addEventListener('input', e => {
    query = e.target.value.toLowerCase().trim();
    applyFilter();
  });

  btnList.forEach(btn => {
    btn.addEventListener('click', () => {
      btnList.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeCategory = btn.dataset.category;
      applyFilter();
    });
  });

  // 빈 상태 초기화 버튼
  const resetBtn = document.getElementById('tip-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      query = '';
      activeCategory = 'all';
      btnList.forEach((b, i) => b.classList.toggle('is-active', i === 0));
      applyFilter();
    });
  }
}
