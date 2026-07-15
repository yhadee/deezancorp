/**
 * Main JavaScript File - Deezan Corp
 * Contains core interactive scripts, animations, form handlings, and custom page features.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initStatsCounter();
  initPortfolioFilter();
  initContactForm();
  initScrollAnimations();
});

/**
 * Navigation Bar Scroll Effect & Hamburger Menu Toggle
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  
  if (navbar) {
    // Add scrolled class when window is scrolled
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load in case of refresh at scrolled position
  }

  // Auto-close bootstrap mobile menu after clicking a link (for single-page smooth scrolling anchors)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.click();
      }
    });
  });
}

/**
 * Back to Top Button Behavior
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Animated Statistic Counters
 */
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  if (stats.length === 0) return;

  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds animation
    const stepTime = Math.max(Math.floor(duration / target), 15);
    let current = 0;
    
    const timer = setInterval(() => {
      current += Math.ceil(target / (duration / stepTime));
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = current + suffix;
      }
    }, stepTime);
  };

  // Run when counters are visible on screen
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

/**
 * Portfolio Grid Category Filter
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
  
  if (filterBtns.length === 0 || portfolioItems.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        // Setup simple fade animations on transition
        const element = item.parentElement; // Column div
        
        if (filterValue === 'all' || itemCategory === filterValue) {
          element.style.display = 'block';
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
          }, 50);
        } else {
          element.style.opacity = '0';
          element.style.transform = 'scale(0.8)';
          setTimeout(() => {
            element.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * Client-side Contact Form Handler with Custom Toast Notification
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic input validation check (HTML5 handles most of it, but we can do extra checks)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !subject || !message) {
        showToast('Please fill out all fields correctly.', 'warning');
        return;
      }
      
      // Simulating successful message submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
      
      setTimeout(() => {
        // Reset Form
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        // Show custom success toast
        showToast('Thank you! Your message has been sent successfully. We will get back to you shortly.', 'success');
      }, 1500);
    });
  }
}

/**
 * Display a Custom Toast Notification
 */
function showToast(message, type = 'success') {
  // Check if toast element already exists, if not, create it
  let toast = document.getElementById('customToast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'customToast';
    toast.className = 'toast-custom';
    document.body.appendChild(toast);
  }

  // Choose icon based on type
  let icon = '<i class="bi bi-check-circle-fill text-success"></i>';
  if (type === 'warning') {
    icon = '<i class="bi bi-exclamation-triangle-fill text-warning"></i>';
  } else if (type === 'danger') {
    icon = '<i class="bi bi-x-circle-fill text-danger"></i>';
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  toast.classList.add('show');

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/**
 * Intersection Observer for scroll-triggered animations
 */
function initScrollAnimations() {
  const animElements = document.querySelectorAll('.animate-on-scroll');
  if (animElements.length === 0) return;

  // Add initial animation styles via JS to avoid flashing if JS is disabled
  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = el.classList.contains('slide-up') ? 'translateY(30px)' : 'translateY(15px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  const animObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  animElements.forEach(el => animObserver.observe(el));
}
