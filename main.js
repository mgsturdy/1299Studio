(function () {
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');

  // Header background on scroll
  function onScroll() {
    if (window.scrollY > 60) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  function closeMenu() {
    nav?.classList.remove('open');
    menuBtn?.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  menuBtn?.addEventListener('click', function () {
    nav?.classList.toggle('open');
    menuBtn?.classList.toggle('open');
    document.body.classList.toggle('menu-open', nav?.classList.contains('open'));
  });

  nav?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Scroll-triggered reveal
  const reveal = document.querySelectorAll(
    '.section .section-title, .services-block, .work-grid, .partners-list, .contact .contact-text, .contact .contact-email'
  );
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { rootMargin: '-8% 0px -8% 0px', threshold: 0 }
  );

  reveal.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
