(() => {
  const toc = document.querySelector('[data-page-toc]');
  const content = document.querySelector('.content-panel');
  if (toc && content) {
    const headings = Array.from(content.querySelectorAll('section > h2'));
    if (!headings.length) {
      toc.closest('.page-sidebar')?.remove();
    } else {
      const used = new Set();
      headings.forEach((heading, index) => {
        if (!heading.id) {
          let id = heading.textContent.trim().replace(/\s+/g, '-').slice(0, 48) || `section-${index + 1}`;
          let unique = id;
          let count = 2;
          while (used.has(unique)) unique = `${id}-${count++}`;
          used.add(unique);
          heading.id = unique;
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent.trim();
        li.appendChild(a);
        toc.appendChild(li);
      });
      const links = Array.from(toc.querySelectorAll('a'));
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
          });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.01 });
        headings.forEach((heading) => observer.observe(heading));
      }
    }
  }
  document.querySelectorAll('table').forEach((table) => {
    table.setAttribute('tabindex', '0');
  });
})();
