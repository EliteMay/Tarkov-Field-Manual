(() => {
  'use strict';

  const STORAGE_KEY = 'tarkov-field-manual:progress:v1';
  const checkables = [...document.querySelectorAll('[data-check-id]')];
  const search = document.getElementById('site-search');
  const sections = [...document.querySelectorAll('.searchable-section')];
  const noResults = document.getElementById('no-results');
  const progressText = document.getElementById('progress-text');
  const progressBar = document.getElementById('progress-bar');
  const resetButton = document.getElementById('reset-progress');
  const navLinks = [...document.querySelectorAll('.section-nav a')];

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      return new Set(Array.isArray(parsed.completed) ? parsed.completed : []);
    } catch {
      return new Set();
    }
  }

  const completed = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        schemaVersion: 1,
        updatedAt: new Date().toISOString(),
        completed: [...completed]
      }));
    } catch {
      // Progress persistence is optional. The site remains usable if storage is unavailable.
    }
  }

  function paintCheckable(element) {
    const id = element.dataset.checkId;
    const done = completed.has(id);
    element.classList.toggle('is-done', done);
    element.setAttribute('aria-pressed', String(done));
    if (element.classList.contains('mastery-button')) {
      const doneLabel = id === 'learn-settings' ? '設定済み' : '覚えた';
      const idleLabel = id === 'learn-settings' ? '設定した' : '覚えた';
      element.textContent = done ? doneLabel : idleLabel;
    }
  }

  function updateProgress() {
    const total = checkables.length;
    const done = checkables.filter(el => completed.has(el.dataset.checkId)).length;
    progressText.textContent = `${done} / ${total}`;
    progressBar.style.width = total ? `${Math.round((done / total) * 100)}%` : '0%';
    checkables.forEach(paintCheckable);
  }

  checkables.forEach(element => {
    element.addEventListener('click', () => {
      const id = element.dataset.checkId;
      completed.has(id) ? completed.delete(id) : completed.add(id);
      saveProgress();
      updateProgress();
    });
  });

  resetButton?.addEventListener('click', () => {
    if (!window.confirm('この端末に保存した「覚えた」進捗をすべて消しますか？')) return;
    completed.clear();
    saveProgress();
    updateProgress();
  });

  function normalize(value) {
    return value.toLowerCase().normalize('NFKC').replace(/\s+/g, ' ').trim();
  }

  function runSearch(query) {
    const q = normalize(query);
    let visible = 0;
    sections.forEach(section => {
      const haystack = normalize(`${section.dataset.title || ''} ${section.textContent || ''}`);
      const match = !q || haystack.includes(q);
      section.classList.toggle('search-hidden', !match);
      if (match) visible += 1;
    });
    noResults.hidden = visible !== 0;
  }

  search?.addEventListener('input', event => runSearch(event.target.value));

  window.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement !== search) {
      event.preventDefault();
      search?.focus();
    }
    if (event.key === 'Escape' && document.activeElement === search) {
      search.value = '';
      runSearch('');
      search.blur();
    }
  });

  if ('IntersectionObserver' in window) {
    const targetSections = navLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const observer = new IntersectionObserver(entries => {
      const active = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active.target.id}`));
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .5] });

    targetSections.forEach(section => observer.observe(section));
  }

  updateProgress();
})();
