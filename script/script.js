document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Set Year
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 2. Star Background Parallax
  // We move the background slower than the scroll speed to create depth
  const starLayer = document.querySelector('.star-layer');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (starLayer) {
      // Translate Y by 30% of scroll speed
      starLayer.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // 3. Scroll Reveal Animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    // Set initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
    observer.observe(el);
  });

  // 4. Smooth Scroll for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});