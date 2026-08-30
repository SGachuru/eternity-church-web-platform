const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.site-sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

if (menuToggle && mainNav) {
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
}

function setSidebarOpen(isOpen) {
  if (!sidebar || !sidebarToggle) return;
  sidebar.classList.toggle('open', isOpen);
  sidebarToggle.setAttribute('aria-expanded', String(isOpen));
}

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    setSidebarOpen(!sidebar.classList.contains('open'));
  });
}

if (sidebarClose) {
  sidebarClose.addEventListener('click', () => setSidebarOpen(false));
}

if (sidebar) {
  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setSidebarOpen(false));
  });
}

document.querySelectorAll('.filter').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const activeButton = document.querySelector('.filter.active');
    if (activeButton) activeButton.classList.remove('active');
    filterButton.classList.add('active');
    const filter = filterButton.dataset.filter;
    document.querySelectorAll('.event-row').forEach((event) => {
      event.classList.toggle('is-hidden', filter !== 'all' && event.dataset.category !== filter);
    });
  });
});

const prayerForm = document.querySelector('[data-prayer-form]');
if (prayerForm) {
  prayerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = prayerForm.querySelector('input[name="name"]');
    const button = prayerForm.querySelector('button[type="submit"]');

    if (button) {
      button.disabled = true;
      button.textContent = 'Request sent';
    }

    if (name) {
      name.value = '';
    }

    const email = prayerForm.querySelector('input[name="email"]');
    const message = prayerForm.querySelector('textarea[name="message"]');
    if (email) email.value = '';
    if (message) message.value = '';

    const thankYou = document.createElement('p');
    thankYou.textContent = 'Thank you. Your prayer request has been received and our team will respond with care.';
    thankYou.className = 'form-success';
    prayerForm.insertAdjacentElement('afterend', thankYou);
  });
}
