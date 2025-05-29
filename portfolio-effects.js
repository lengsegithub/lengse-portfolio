// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize particles.js
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
        }
      }
    });
    
   // Initialize scroll indicators
document.addEventListener('DOMContentLoaded', function() {
  const scrollSections = document.querySelectorAll('.skills-grid, .design-showcase, .services-grid, .benefits-grid, .gallery-grid');
  
  scrollSections.forEach(section => {
    const container = section.parentElement;
    const items = section.children;
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    
    // Create dots for each item
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'scroll-dot';
      if (i === 0) dot.classList.add('active');
      indicator.appendChild(dot);
    }
    
    container.appendChild(indicator);
    
    // Update dots on scroll
    section.addEventListener('scroll', function() {
      const scrollPos = section.scrollLeft;
      const itemWidth = items[0].offsetWidth;
      const activeIndex = Math.round(scrollPos / itemWidth);
      
      const dots = indicator.querySelectorAll('.scroll-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });
  });
});
    // Add animation class when elements come into view
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.animation = 'fadeInUp 1s ease forwards';
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
  });
