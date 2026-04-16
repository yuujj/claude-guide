/**
 * Disclosure
 * "더 알아보기" 점층적 공개 — aria-expanded + max-height 애니메이션
 */

export function initDisclosure() {
  document.querySelectorAll('.disclosure__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const content = trigger.nextElementSibling;

      trigger.setAttribute('aria-expanded', String(!expanded));
      if (content) {
        content.classList.toggle('is-open', !expanded);
      }
    });
  });
}
