/* ============================================================
   SOCHFOOL — Shared JavaScript (script.js)
   Include at bottom of every page's <body>
   ============================================================ */

(function () {
  'use strict';

  // ── Dark Mode Toggle ──────────────────────────────────────
  const toggle  = document.getElementById('darkModeToggle');
  const body    = document.body;
  const navbar  = document.getElementById('sfNavbar');

  function applyDarkMode(enabled) {
    if (enabled) {
      body.classList.add('dark-mode');
      if (navbar) {
        navbar.classList.remove('navbar-light', 'bg-white');
        navbar.classList.add('navbar-dark');
      }
      if (toggle) toggle.checked = true;
    } else {
      body.classList.remove('dark-mode');
      if (navbar) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light', 'bg-white');
      }
      if (toggle) toggle.checked = false;
    }
  }

  // Load saved preference on every page
  const saved = localStorage.getItem('sfDarkMode') === 'enabled';
  applyDarkMode(saved);

  // Listen for toggle changes
  if (toggle) {
    toggle.addEventListener('change', function () {
      const isOn = this.checked;
      applyDarkMode(isOn);
      localStorage.setItem('sfDarkMode', isOn ? 'enabled' : 'disabled');
    });
  }

  // ── Active nav link highlight ─────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sf-navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && currentPage.startsWith(href.split('#')[0])) {
      link.classList.add('active');
    }
  });

})();
