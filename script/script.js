document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Set Year
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if(mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
      });
    });
  }

  // 3. Repeatable Scroll Reveal
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  // 4. Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 5. Custom Cursor Logic
  const cursor = document.getElementById('cursor');
  const cursorBlur = document.getElementById('cursor-blur');

  if(cursor && cursorBlur) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorBlur.style.left = e.clientX + 'px';
        cursorBlur.style.top = e.clientY + 'px';
      }, 50);
    });
  }

  // 6. Preloader Logic
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // 7. AUTO-HIDE NAV LOGO
  const navLogo = document.querySelector('.nav-logo');
  
  const toggleNavLogo = () => {
    if (window.scrollY > 300) {
      navLogo.classList.add('visible');
    } else {
      navLogo.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleNavLogo);
  toggleNavLogo(); 

});