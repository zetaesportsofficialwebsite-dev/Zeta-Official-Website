(function () {

  // Navbar scroll shadow
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Mobile hamburger menu
  var burger = document.querySelector('.navbar__burger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll reveal via IntersectionObserver
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseFloat(el.dataset.delay || 0) * 1000;
        setTimeout(function () { el.classList.add('visible'); }, delay);
        observer.unobserve(el);
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Active nav link
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath) link.classList.add('active');
  });

  // Contact modal
  var contactModal = document.getElementById('contact-modal');
  if (contactModal) {
    var openContactModal = function () {
      contactModal.classList.add('open');
      contactModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    var closeContactModal = function () {
      contactModal.classList.remove('open');
      contactModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.js-contact-trigger').forEach(function (btn) {
      btn.addEventListener('click', openContactModal);
    });
    contactModal.querySelectorAll('[data-contact-close]').forEach(function (el) {
      el.addEventListener('click', closeContactModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && contactModal.classList.contains('open')) closeContactModal();
    });
  }

  // Poster lightbox
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = document.getElementById('lightbox-image');
    var lightboxVideo = document.getElementById('lightbox-video');
    var openLightbox = function (src, alt) {
      lightbox.classList.remove('lightbox--video');
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    var openLightboxVideo = function (src) {
      if (!lightboxVideo) return;
      lightbox.classList.add('lightbox--video');
      lightboxVideo.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxVideo.play();
    };
    var closeLightbox = function () {
      lightbox.classList.remove('open');
      lightbox.classList.remove('lightbox--video');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      lightboxImg.src = '';
      if (lightboxVideo) { lightboxVideo.pause(); lightboxVideo.src = ''; }
    };
    document.querySelectorAll('.js-lightbox').forEach(function (img) {
      img.addEventListener('click', function () { openLightbox(img.src, img.alt); });
    });
    document.querySelectorAll('.js-lightbox-video').forEach(function (el) {
      el.addEventListener('click', function () { openLightboxVideo(el.dataset.videoSrc); });
    });
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(function (el) {
      el.addEventListener('click', closeLightbox);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }

  // Block right-click and drag on media
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') e.preventDefault();
  });

  // Highlight event card linked to from the homepage
  var hashId = window.location.hash.slice(1);
  if (hashId) {
    var targetCard = document.getElementById(hashId);
    if (targetCard && targetCard.classList.contains('event-card')) {
      targetCard.classList.add('event-card--highlight');
      setTimeout(function () { targetCard.classList.remove('event-card--highlight'); }, 2200);
    }
  }

})();
