/**
 * Main Entry Point
 * 모든 JS 모듈을 DOMContentLoaded에서 초기화
 *
 * 사용: <script type="module" src="/assets/js/main.js"></script>
 */

import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initTabs } from './tabs.js';
import { initAccordion } from './accordion.js';
import { initDisclosure } from './disclosure.js';
import { initCodeCopy } from './code-copy.js';
import { initTerm } from './term.js';
import { initToc } from './toc.js';
import { initScenarioFilter } from './scenario-filter.js';
import { initHarnessChecklist } from './harness-checklist.js';

const init = () => {
  initTheme();
  initNav();
  initTabs();
  initAccordion();
  initDisclosure();
  initCodeCopy();
  initTerm();
  initToc();
  initScenarioFilter();
  initHarnessChecklist();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
