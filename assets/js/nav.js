/**
 * Nav
 * 스크롤 시 하단 보더 표시 + 모바일 햄버거 메뉴
 */

export function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // 스크롤 상태 트래킹
  if (nav) {
    let ticking = false;
    const updateScrollState = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 10);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }, { passive: true });

    // 초기 상태 설정
    updateScrollState();
  }

  // 햄버거 메뉴 토글
  if (hamburger && mobileMenu) {
    const setOpen = (open) => {
      hamburger.classList.toggle('is-open', open);
      mobileMenu.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-menu-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    };

    hamburger.addEventListener('click', () => {
      setOpen(!hamburger.classList.contains('is-open'));
    });

    // 모바일 링크 클릭 시 메뉴 닫기
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });

    // ESC 로 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
        setOpen(false);
      }
    });
  }
}
