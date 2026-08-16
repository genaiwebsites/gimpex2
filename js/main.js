/* GIMPEX v3 — interaction layer. Zero dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- scroll reveals ---- */
  var rev = document.querySelectorAll('.rv, .rvg');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        if (el.classList.contains('rvg')) {
          Array.prototype.forEach.call(el.children, function (c, i) {
            c.style.transitionDelay = Math.min(i * 60, 420) + 'ms';
          });
        }
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    rev.forEach(function (el) { io.observe(el); });
  } else {
    rev.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- header state on scroll ---- */
  var hd = document.querySelector('.hd');
  if (hd && !hd.classList.contains('solid')) {
    var onScroll = function () { hd.classList.toggle('scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- counters ---- */
  function count(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suf = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target.toLocaleString() + suf; return; }
    var t0 = null, dur = 1500;
    requestAnimationFrame(function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString() + suf;
      if (p < 1) requestAnimationFrame(step);
    });
  }
  var cs = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.4 });
    cs.forEach(function (el) { cio.observe(el); });
  } else { cs.forEach(count); }

  /* ---- mobile menu ---- */
  var burger = document.querySelector('.burger'), menu = document.querySelector('.mmenu');
  if (burger && menu) {
    var close = function () { menu.classList.remove('open'); document.body.style.overflow = ''; };
    burger.addEventListener('click', function () { menu.classList.add('open'); document.body.style.overflow = 'hidden'; });
    var x = menu.querySelector('.x'); if (x) x.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---- pill tabs (content panes) ---- */
  document.querySelectorAll('[data-tabs]').forEach(function (bar) {
    var panes = document.querySelectorAll(bar.getAttribute('data-tabs') + ' > div');
    bar.querySelectorAll('.tab').forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.getAttribute('data-pane');
        bar.querySelectorAll('.tab').forEach(function (o) { o.classList.toggle('on', o === t); });
        panes.forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-pane') === key); });
      });
    });
  });

  /* ---- filter tabs (grids/lists) ---- */
  document.querySelectorAll('[data-filter]').forEach(function (bar) {
    var items = document.querySelectorAll(bar.getAttribute('data-filter'));
    bar.querySelectorAll('.tab').forEach(function (t) {
      t.addEventListener('click', function () {
        var key = t.getAttribute('data-cat');
        bar.querySelectorAll('.tab').forEach(function (o) { o.classList.toggle('on', o === t); });
        items.forEach(function (it) {
          var show = key === 'all' || (it.getAttribute('data-cats') || '').split(',').indexOf(key) !== -1;
          it.style.display = show ? '' : 'none';
        });
      });
    });
  });

  /* ---- image fallback: never show a broken frame ---- */
  document.querySelectorAll('.imgbox img, .gitem img, .bcell img, .split-fig img, .pbanner-card img, .hero-card img').forEach(function (img) {
    var box = img.parentElement;
    function fail() {
      box.classList.add('imgbox', 'missing');
      box.setAttribute('data-alt', (img.alt || 'Gimpex').toUpperCase());
      img.style.display = 'none';
    }
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail);
  });

  /* ---- contact form (front-end demo) ---- */
  var form = document.querySelector('.cform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = form.querySelector('.ok-note');
      if (n) n.classList.add('show');
      form.reset();
    });
  }

  /* ---- year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
