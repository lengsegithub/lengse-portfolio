// script.js
document.addEventListener('DOMContentLoaded', () => {
  // ===== Set current year in footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Initialize particles.js =====
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4361ee" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#4361ee", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // ===== Initialize scroll indicators =====
  const scrollSections = document.querySelectorAll('.skills-grid, .design-showcase, .services-grid, .benefits-grid, .gallery-grid');

  scrollSections.forEach(section => {
    const container = section.parentElement;
    const items = Array.from(section.children);
    if (!items.length) return;

    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';

    items.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'scroll-dot';
      if (i === 0) dot.classList.add('active');
      indicator.appendChild(dot);
    });

    container.appendChild(indicator);

    // Update active dot on scroll
    section.addEventListener('scroll', () => {
      const scrollPos = section.scrollLeft;
      const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight) || items[0].offsetWidth;
      const activeIndex = Math.round(scrollPos / itemWidth);

      indicator.querySelectorAll('.scroll-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });

    // Update active dot on window resize
    window.addEventListener('resize', () => {
      section.dispatchEvent(new Event('scroll'));
    });
  });

  // ===== Animate elements on scroll =====
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.style.animation = 'fadeInUp 1s ease forwards';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on load

  // ===== Smooth scroll for navigation links =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
