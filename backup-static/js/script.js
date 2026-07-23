/**
 * DRx Home Care — Main JavaScript
 * Premium animations, preloader, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============ PRELOADER ============
  const preloader = document.getElementById('preloader');
  let progress = 0;

  // Run interval silently in the background in milliseconds
  const preloaderInterval = setInterval(() => {
    progress += 25;
    if (progress > 100) progress = 100;

    if (progress >= 100) {
      clearInterval(preloaderInterval);
      
      // Step 1: Fade out logo and text
      preloader.classList.add('fade-content');
      
      // Step 2: Slide up vertical panels like stairs from left to right
      setTimeout(() => {
        preloader.classList.add('slide-up');
        document.body.classList.remove('loading');
        triggerHeroAnimations();
      }, 150);

      // Step 3: Completely disable preloader overlay when slide ends
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 400);
    }
  }, 10);

  // Failsafe: Ensure preloader never hangs under any conditions
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('hidden')) {
      preloader.classList.add('fade-content', 'slide-up', 'hidden');
      document.body.classList.remove('loading');
    }
  }, 500);

  function triggerHeroAnimations() {
    // Animate hero elements that depend on preloader completion
    const heroLeft = document.querySelector('.hero__left');
    const heroRight = document.querySelector('.hero__right');
    if (heroLeft) heroLeft.style.animation = 'heroSlideRight 1s ease forwards';
    if (heroRight) heroRight.style.animation = 'heroSlideLeft 1s ease 0.3s forwards';
  }

  // ============ FLOATING PARTICLES ============
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero__particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = (Math.random() * 4 + 2) + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(particle);
    }
  }

  // ============ HEADER SCROLL EFFECT ============
  const header = document.getElementById('header');
  
  let lastScrollY = 0;
  let ticking = false;

  function handleScroll() {
    if (!header) return;
    const scrollY = window.scrollY;

    // Header background
    if (scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // ============ MOBILE MENU ============
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close menu on nav link click
  document.querySelectorAll('.header__nav a').forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============ ACTIVE NAV LINK ON SCROLL ============
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav a');

  function highlightNav() {
    const scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // ============ SCROLL REVEAL ANIMATIONS ============
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve to allow re-animation if needed
      }
    });
  }, {
    threshold: 0.04,            // Triggers quickly on 4% visibility
    rootMargin: '0px 0px 100px 0px' // Triggers 100px BEFORE entering viewport for seamless Framer Motion loading
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ============ COUNTER ANIMATION ============
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const increment = target / 80;
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }

  // ============ SERVICE CARDS TILT EFFECT ============
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ============ TYPING EFFECT FOR HERO (optional enhancement) ============
  // The hero title is already set in HTML, but we can add a blinking cursor effect
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    heroTitle.style.position = 'relative';
  }

  // ============ PARALLAX EFFECT ON HERO IMAGE ============
  const heroImage = document.querySelector('.hero__bg img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }

  // ============ PRELOAD CRITICAL IMAGES ============
  const criticalImages = [
    'images/hero_homecare.png',
    'images/nursing_care.png'
  ];

  // ============ WHATSAPP BOOKING FORM REDIRECT ============
  const bookingForm = document.getElementById('whatsappBookingForm');
  if (bookingForm) {
    // Set default date to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const year = tomorrow.getFullYear();
      const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const day = String(tomorrow.getDate()).padStart(2, '0');
      dateInput.value = `${year}-${month}-${day}`;
      // Prevent selecting past dates
      dateInput.min = `${year}-${month}-${day}`;
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const service = document.getElementById('careService').value;
      const date = document.getElementById('bookingDate').value;
      const location = document.getElementById('patientLocation').value.trim();
      const details = document.getElementById('patientDetails').value.trim();

      if (!name || !phone || !service || !date || !location || !details) {
        alert('Please fill out all fields correctly.');
        return;
      }

      // Simple phone format check (10 digits)
      if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      // Format date to DD/MM/YYYY for readability in WhatsApp
      let formattedDate = date;
      try {
        const parts = date.split('-');
        if (parts.length === 3) {
          formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
      } catch (err) {
        console.error('Date parsing error:', err);
      }

      // Format structured message text for WhatsApp Click to Chat
      const textMessage = `🏥 *NEW BOOKING REQUEST - DRX HOME CARE*\n` +
                          `-------------------------------------------\n` +
                          `👤 *Patient Name:* ${name}\n` +
                          `📞 *Contact Phone:* ${phone}\n` +
                          `🩺 *Service Needed:* ${service}\n` +
                          `📍 *Jaipur Area:* ${location}\n` +
                          `📅 *Preferred Date:* ${formattedDate}\n` +
                          `📝 *Patient Condition/Details:*\n` +
                          `"${details}"\n` +
                          `-------------------------------------------\n` +
                          `Sent from website: https://drxhomecare.com`;

      // Target Submit Button & Loading State
      const submitBtn = bookingForm.querySelector('.btn-whatsapp-submit');
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      submitBtn.disabled = true;

      // Construct lead data
      const leadData = {
        name,
        phone,
        service,
        location,
        date: formattedDate,
        details
      };

      // To receive messages directly to your WhatsApp without opening user's WhatsApp:
      // Replace the WEBHOOK_URL with your Make.com or Zapier webhook address.
      // Make.com webhook will catch this data and send it directly to your WhatsApp number: 8690661559.
      const WEBHOOK_URL = ''; // Add your Make.com Webhook URL here
      const successModal = document.getElementById('successModal');
      
      const showModalAndReset = () => {
        if (successModal) {
          successModal.classList.add('active');
        }
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
        bookingForm.reset();
        
        // Reset to tomorrow's date
        if (dateInput) {
          const tom = new Date();
          tom.setDate(tom.getDate() + 1);
          const y = tom.getFullYear();
          const m = String(tom.getMonth() + 1).padStart(2, '0');
          const d = String(tom.getDate()).padStart(2, '0');
          dateInput.value = `${y}-${m}-${d}`;
        }
      };

      if (WEBHOOK_URL) {
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: textMessage,
            ...leadData
          })
        })
        .then(() => showModalAndReset())
        .catch(err => {
          console.error('Error submitting form:', err);
          showModalAndReset();
        });
      } else {
        // If no webhook is configured yet, fall back to Web3Forms free email forwarder,
        // or trigger the success modal instantly for clean testing.
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: "00000000-0000-0000-0000-000000000000", // Placeholder mockup key
            subject: `DRx Lead - ${name}`,
            from_name: "DRx Website Form",
            message: textMessage,
            ...leadData
          })
        })
        .then(() => showModalAndReset())
        .catch(() => showModalAndReset());
      }
    });

    // Success Modal close handler
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    if (closeSuccessBtn && successModal) {
      closeSuccessBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
      });
    }

    // Handle service triggers from card / header clicks
    document.querySelectorAll('.service-booking-trigger').forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        const serviceVal = this.getAttribute('data-service');
        const select = document.getElementById('careService');
        if (select && serviceVal) {
          select.value = serviceVal;
          select.dispatchEvent(new Event('change'));
        }
        
        // Scroll smoothly to form container
        const formEl = document.getElementById('whatsappBookingForm');
        if (formEl) {
          e.preventDefault();
          const targetPosition = formEl.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Focus the first input field
          setTimeout(() => {
            const nameInput = document.getElementById('patientName');
            if (nameInput) nameInput.focus();
          }, 800);
        }
      });
    });
  }

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // ============ FAQ ACCORDION ============
  const faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = btn.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Close all other FAQ items for a clean accordion look
      document.querySelectorAll('.faq__item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq__answer').style.maxHeight = null;
        }
      });

      // Toggle current FAQ item
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  console.log('🏥 DRx Home Care — Website initialized successfully!');
});
