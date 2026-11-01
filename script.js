// Yushan Media Pvt. Ltd — JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link inside is clicked
    const mobileLinks = mobileNavDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Highlight Active Nav Link On Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--primary)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // 4. Smooth scroll to top when clicking brand logo & strip hash
  const brandLinks = document.querySelectorAll('.brand-link');
  brandLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    });
  });
});

