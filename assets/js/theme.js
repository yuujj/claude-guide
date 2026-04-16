/**
 * Theme Toggle
 * 다크/라이트 모드 전환, localStorage 저장
 *
 * FOUC 방지: 초기 테마 적용은 <head> 인라인 스크립트에서 처리하고,
 * 이 모듈은 토글 버튼 바인딩만 담당.
 */

export function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // localStorage unavailable (private mode 등)
    }
  });
}
