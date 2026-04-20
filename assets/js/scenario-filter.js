/* ============================================================
   SCENARIO FILTER — 시나리오 필터 + 렌더러
   scenario-data.js 와 함께 사용
   ============================================================ */

import { scenarios } from './scenario-data.js';

const LEVEL_LABEL = { basic: '기초', mid: '중간', adv: '고급' };
const ENV_LABEL   = { desktop: '데스크탑', web: '웹', cli: 'CLI' };
const AUD_LABEL   = { general: '비개발자', dev: '개발자', harness: '하네스' };

export function initScenarioFilter(containerId = 'scenario-list') {
  const list = document.getElementById(containerId);
  if (!list) return;

  const filterEl  = document.getElementById('scenario-filter');
  const emptyEl   = document.getElementById('scenario-empty');
  const countEl   = document.getElementById('scenario-count');
  const resetBtn  = document.getElementById('scenario-reset-filter');

  const state = { audience: 'all', level: 'all', env: 'all' };

  renderScenarios(scenarios, list);
  updateCount(scenarios.length, countEl);

  if (filterEl) {
    filterEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.scenario-filter__btn');
      if (!btn) return;

      const type  = btn.dataset.filterType;
      const value = btn.dataset.filterValue;
      if (!type || !value) return;

      filterEl.querySelectorAll(`.scenario-filter__btn[data-filter-type="${type}"]`)
        .forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      state[type] = value;
      applyFilter(list, emptyEl, countEl, state);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.audience = 'all';
      state.level    = 'all';
      state.env      = 'all';
      if (filterEl) {
        filterEl.querySelectorAll('.scenario-filter__btn').forEach(b => {
          b.classList.toggle('is-active', b.dataset.filterValue === 'all');
        });
      }
      applyFilter(list, emptyEl, countEl, state);
    });
  }
}

/* ── 필터 적용 ─────────────────────────────────────────────── */
function applyFilter(list, emptyEl, countEl, state) {
  const items = list.querySelectorAll('.scenario-item');
  let visible = 0;

  items.forEach(item => {
    const matchAud = state.audience === 'all' ||
      item.dataset.audience.split(' ').includes(state.audience);
    const matchLvl = state.level === 'all' || item.dataset.level === state.level;
    const matchEnv = state.env === 'all' ||
      item.dataset.env.split(' ').includes(state.env);

    const show = matchAud && matchLvl && matchEnv;
    item.hidden = !show;
    if (show) visible++;
  });

  updateCount(visible, countEl);

  if (emptyEl) emptyEl.hidden = visible > 0;
}

function updateCount(n, countEl) {
  if (countEl) countEl.textContent = `${n}개 시나리오`;
}

/* ── 렌더러 ────────────────────────────────────────────────── */
function renderScenarios(data, list) {
  list.innerHTML = data.map(s => {
    const audStr = s.audience.join(' ');
    const envStr = s.env.join(' ');

    const audBadges = s.audience.map(a =>
      `<span class="badge badge--${a === 'general' ? 'general' : a === 'dev' ? 'dev' : 'coral'}">${AUD_LABEL[a] ?? a}</span>`
    ).join('');

    const envBadges = s.env.map(e =>
      `<span class="badge badge--platform">${ENV_LABEL[e] ?? e}</span>`
    ).join('');

    const promptLines = s.prompt.replace(/\n/g, '<br>');

    return `
<div class="scenario-item"
     role="listitem"
     data-level="${s.level}"
     data-audience="${audStr}"
     data-env="${envStr}">
  <div class="scenario__rail">
    <span class="scenario__dot scenario__dot--${s.level}"></span>
    <span class="scenario__level">${LEVEL_LABEL[s.level] ?? s.level}</span>
  </div>
  <div class="scenario__body">
    <div class="scenario__header">
      <h3 class="scenario__title">${s.title}</h3>
      <div class="scenario__badges">${audBadges}</div>
    </div>
    <p class="scenario__situation">${s.situation}</p>
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__lang">${s.promptLang}</span>
        <button class="code-block__copy" type="button" aria-label="복사">복사</button>
      </div>
      <pre class="code-block__pre"><code>${promptLines}</code></pre>
    </div>
    <div class="scenario__env-badges">${envBadges}</div>
  </div>
</div>`;
  }).join('');

  /* 복사 버튼 이벤트 위임 */
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.code-block__copy');
    if (!btn) return;
    const code = btn.closest('.code-block')?.querySelector('code');
    if (!code) return;
    navigator.clipboard.writeText(code.innerText).then(() => {
      const orig = btn.textContent;
      btn.textContent = '복사됨';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    });
  });
}
