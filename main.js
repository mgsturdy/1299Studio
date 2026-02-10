(function () {
  'use strict';

  /* ─── Header scroll state ─── */
  var header = document.querySelector('.header');

  function checkScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  /* ─── Mobile nav ─── */
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* ─── Scroll reveal ─── */
  var targets = document.querySelectorAll(
    '.section-intro, .section-sub, .services-card, .services-note, .work-item, .partner-card, .contact-heading, .contact-sub, .contact-email'
  );

  targets.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { rootMargin: '-6% 0px -6% 0px', threshold: 0.05 }
  );

  targets.forEach(function (el) { observer.observe(el); });

  /* ─── Stagger partner cards ─── */
  document.querySelectorAll('.partner-card').forEach(function (card, i) {
    card.classList.add('reveal-delay-' + (i + 1));
  });

  /* ─── Stagger work items ─── */
  document.querySelectorAll('.work-item').forEach(function (item, i) {
    item.style.transitionDelay = (i * 0.06) + 's';
  });

})();
