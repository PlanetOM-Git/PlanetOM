document.addEventListener("DOMContentLoaded", () => {
  
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if(mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileBtn.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
      });
    });
  }

  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
      else entry.target.classList.remove('active');
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

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

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  const navLogo = document.querySelector('.nav-logo');
  const toggleNavLogo = () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 300) navLogo.classList.add('visible');
      else navLogo.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', toggleNavLogo);
  toggleNavLogo(); 
});