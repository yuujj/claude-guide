/**
 * Tabs
 * 탭 전환 + 키보드 네비게이션 (Arrow Left/Right, Home/End)
 */

export function initTabs() {
  document.querySelectorAll('.tab-list').forEach(list => {
    const tabs = Array.from(list.querySelectorAll('.tab-btn'));
    if (tabs.length === 0) return;

    const wrapper = list.closest('.tabs-wrapper');
    if (!wrapper) return;

    const panels = wrapper.querySelectorAll('.tab-panel');

    const activateTab = (tab) => {
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');

      const panelId = tab.getAttribute('aria-controls');
      panels.forEach(p => {
        p.hidden = p.id !== panelId;
      });
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activateTab(tab));

      tab.addEventListener('keydown', (e) => {
        let next;
        switch (e.key) {
          case 'ArrowRight':
            next = tabs[(idx + 1) % tabs.length];
            break;
          case 'ArrowLeft':
            next = tabs[(idx - 1 + tabs.length) % tabs.length];
            break;
          case 'Home':
            next = tabs[0];
            break;
          case 'End':
            next = tabs[tabs.length - 1];
            break;
          default:
            return;
        }
        e.preventDefault();
        next.focus();
        activateTab(next);
      });
    });
  });
}
