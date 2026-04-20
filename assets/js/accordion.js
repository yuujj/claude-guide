/**
 * Accordion
 * 확장/축소 가능한 항목 — aria-expanded + max-height 애니메이션
 */

export function initAccordion() {
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const contentId = trigger.getAttribute('aria-controls');
      const content = contentId
        ? document.getElementById(contentId)
        : trigger.closest('.accordion__item')?.querySelector('.accordion__content');

      trigger.setAttribute('aria-expanded', String(!expanded));
      if (content) {
        content.classList.toggle('is-open', !expanded);
      }
    });
  });
}
