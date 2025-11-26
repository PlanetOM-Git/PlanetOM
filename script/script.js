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
      mobileBtn.classList.toggle('active'); // for hamburger animation
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

  // 5. Scroll Reveal Observer
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
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
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
});