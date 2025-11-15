document.addEventListener("DOMContentLoaded", () => {
  // Force stable title so iPhone and in-app browsers do not pick a random heading
  document.title = "Planet OM | AUTOT";

  // scroll to AUTOT section
  const scrollButton = document.querySelector("[data-scroll-autot]");
  const autotSection = document.getElementById("autot");

  if (scrollButton && autotSection) {
    scrollButton.addEventListener("click", (e) => {
      e.preventDefault();
      autotSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // footer year
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // active nav on scroll
  const sections = document.querySelectorAll("main > section[id]");
  const navLinks = document.querySelectorAll(".main-nav a.nav-link");

  if (sections.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
              link.classList.remove("active");
            });

            const correspondingLink = document.querySelector(
              `.main-nav a[href="#${id}"]`
            );
            if (correspondingLink) {
              correspondingLink.classList.add("active");
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  // close mobile menu on link click
  const navToggle = document.getElementById("nav-toggle");
  const navMenuLinks = document.querySelectorAll(".main-nav a");

  navMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  // scroll top visibility
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });
  }
});
