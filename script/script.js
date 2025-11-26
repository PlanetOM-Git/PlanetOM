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

  // 3. Toggle Preview Player (AUTOT Section)
  const playerBtn = document.getElementById('toggle-spotify');
  const playerWrapper = document.getElementById('spotify-wrapper');
  const btnText = playerBtn ? playerBtn.querySelector('.btn-text') : null;

  if (playerBtn && playerWrapper) {
    playerBtn.addEventListener('click', () => {
      playerWrapper.classList.toggle('open');
      
      if (playerWrapper.classList.contains('open')) {
        if(btnText) btnText.textContent = "Close Player";
      } else {
        if(btnText) btnText.textContent = "Preview Album";
      }
    });
  }

  // 4. Toggle Huge Playlist Accordion
  const playlistBtn = document.getElementById('toggle-playlist');
  const playlistContent = document.getElementById('playlist-wrapper');

  if (playlistBtn && playlistContent) {
    playlistBtn.addEventListener('click', () => {
      playlistBtn.classList.toggle('active');
      playlistContent.classList.toggle('open');
    });
  }

  // 5. Repeatable Scroll Reveal
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

  // 6. Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 7. Custom Cursor Logic
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

  // 8. Preloader Logic
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // 9. AUTO-HIDE NAV LOGO (NEW)
  const navLogo = document.querySelector('.nav-logo');
  
  const toggleNavLogo = () => {
    if (window.scrollY > 300) {
      navLogo.classList.add('visible');
    } else {
      navLogo.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleNavLogo);
  toggleNavLogo(); // Run on init in case of refresh

});