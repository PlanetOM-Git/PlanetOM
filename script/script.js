document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 2. Navbar Scroll Effect (Glassmorphism toggle)
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Scroll Reveal Animation (The "Smart" Part)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Trigger when 15% of element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-up");
  fadeElements.forEach(el => observer.observe(el));

  // 4. Active Link Highlighter
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => navObserver.observe(section));

  // 5. Mobile Menu Auto-Close
  const navToggle = document.getElementById("nav-toggle");
  const menuLinks = document.querySelectorAll(".main-nav a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if(navToggle) navToggle.checked = false;
    });
  });
});