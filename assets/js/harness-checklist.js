/* ============================================================
   HARNESS CHECKLIST — 세팅 진행 상태 (localStorage)
   claude-code/index.html #harness 섹션에서 사용
   ============================================================ */

const STORAGE_KEY = 'claude-code-harness';
const ITEMS = ['claudemd', 'commands', 'hooks', 'permissions', 'subagent', 'mcp'];

export function initHarnessChecklist() {
  const progressBar  = document.getElementById('harness-progress-bar');
  if (!progressBar) return;

  const doneCount = document.getElementById('harness-done-count');
  const resetBtn  = document.getElementById('harness-reset');

  let done = getSaved();
  applyState(done, progressBar, doneCount);

  document.querySelectorAll('.harness-check').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.harnessCheck;
      if (!key) return;

      if (done.includes(key)) {
        done = done.filter(k => k !== key);
      } else {
        done = [...done, key];
      }
      save(done);
      applyState(done, progressBar, doneCount);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (!window.confirm('세팅 진행 상태를 초기화할까요?')) return;
      done = [];
      save(done);
      applyState(done, progressBar, doneCount);
    });
  }
}

function applyState(done, progressBar, doneCount) {
  ITEMS.forEach(key => {
    const checkBtn = document.querySelector(`.harness-check[data-harness-check="${key}"]`);
    const accordionItem = checkBtn?.closest('.accordion__item');
    const isDone = done.includes(key);

    checkBtn?.classList.toggle('is-done', isDone);
    accordionItem?.classList.toggle('is-done', isDone);
  });

  const pct = (done.length / ITEMS.length) * 100;
  if (progressBar) progressBar.style.width = pct + '%';
  if (doneCount) doneCount.textContent = done.length;
}

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function save(done) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
}
