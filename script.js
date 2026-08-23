const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.site-sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function setSidebarOpen(isOpen) {
  sidebar.classList.toggle('open', isOpen);
  sidebarToggle.setAttribute('aria-expanded', String(isOpen));
}

sidebarToggle.addEventListener('click', () => {
  setSidebarOpen(!sidebar.classList.contains('open'));
});

sidebarClose.addEventListener('click', () => setSidebarOpen(false));

sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setSidebarOpen(false));
});

document.querySelectorAll('.filter').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    filterButton.classList.add('active');
    const filter = filterButton.dataset.filter;
    document.querySelectorAll('.event-row').forEach((event) => {
      event.classList.toggle('is-hidden', filter !== 'all' && event.dataset.category !== filter);
    });
  });
});
