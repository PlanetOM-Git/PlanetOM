document.addEventListener("DOMContentLoaded", () => {
  // --- Your existing smooth scroll ---
  const scrollButton = document.querySelector("[data-scroll-autot]");
  const autotSection = document.getElementById("autot");

  if (scrollButton && autotSection) {
    scrollButton.addEventListener("click", (e) => {
      e.preventDefault();
      autotSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // --- Your existing footer year ---
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- ADDED: Active Nav on Scroll ---
  const sections = document.querySelectorAll("main > section[id]");
  const navLinks = document.querySelectorAll(".main-nav a.nav-link");

  if (sections.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Remove active class from all links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });

          // Add active class to the matching link
          // Note: The "Releases" section has id="music"
          const correspondingLink = document.querySelector(`.main-nav a[href="#${id}"]`);
          if (correspondingLink) {
            correspondingLink.classList.add('active');
          }
        }
      });
    }, { 
      rootMargin: "-30% 0px -70% 0px", // Triggers when section is in the middle 30% of the screen
      threshold: 0 
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // --- ADDED: Close mobile menu on link click ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenuLinks = document.querySelectorAll('.main-nav a');

  navMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle.checked) {
        navToggle.checked = false; // Uncheck the checkbox to close the menu
      }
    });
  });

});