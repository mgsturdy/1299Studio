/* =========================================================
   BENO — Shared JS
   Studio 1299 × Boom Records
   ========================================================= */

// Fade-in on scroll
(function () {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  els.forEach(el => io.observe(el));
})();

// Countdown timer (targets a data-countdown attribute with ISO date)
(function () {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date(el.dataset.target);
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { el.innerHTML = '<span class="countdown-val">NOW</span>'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.querySelector('[data-d]').textContent = String(d).padStart(2, '0');
    el.querySelector('[data-h]').textContent = String(h).padStart(2, '0');
    el.querySelector('[data-m]').textContent = String(m).padStart(2, '0');
    el.querySelector('[data-s]').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
})();

// Mobile nav toggle
(function () {
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.right = '24px';
    links.style.background = 'var(--dark)';
    links.style.border = '1px solid var(--border)';
    links.style.borderRadius = 'var(--radius)';
    links.style.padding = '16px 24px';
  });
})();

// Quest: toggle task done
(function () {
  document.querySelectorAll('.quest-task-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.quest-card');
      const done = card.dataset.done === '1';
      card.dataset.done = done ? '0' : '1';
      this.textContent = done ? 'Complete Mission' : '✓ Done';
      this.classList.toggle('btn-ghost', done);
      this.classList.toggle('btn-primary', !done);
      const fill = card.querySelector('.progress-fill');
      if (fill) fill.style.width = done ? '0%' : '100%';
    });
  });
})();

// Presave: form submission simulation
(function () {
  const form = document.getElementById('presave-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.querySelector('input[type=email]').value;
    if (!email) return;
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✓ You\'re on the list!';
    btn.disabled = true;
    btn.style.background = 'var(--purple)';
    form.querySelector('input[type=email]').disabled = true;
    document.getElementById('presave-count').textContent =
      (parseInt(document.getElementById('presave-count').textContent.replace(/,/g, '')) + 1).toLocaleString();
  });
})();

// Remix: file upload simulation
(function () {
  const dropzone = document.getElementById('remix-drop');
  if (!dropzone) return;
  dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('active'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('active'));
  dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('active');
    const files = e.dataTransfer.files;
    if (files.length) {
      dropzone.innerHTML = `<div style="text-align:center;padding:40px 0"><p style="color:var(--gold);font-weight:700;font-size:1.1rem">✓ ${files[0].name} uploaded</p><p style="color:var(--gray);margin-top:8px;font-size:0.85rem">Your remix has been submitted. Good luck!</p></div>`;
    }
  });
})();
