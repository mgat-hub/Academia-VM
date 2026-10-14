/* ==========================================================================
   MGAT DESIGN SYSTEM - Main JavaScript
   Interactions: Sidebar, Form submission, Smooth scroll, Scroll animations
   ========================================================================== */

(function() {
  'use strict';

  /* ==========================================================================
     Sidebar / Hamburger Menu
     ========================================================================== */

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  function toggleSidebar() {
    const isOpen = sidebar.classList.toggle('open');
    sidebarOverlay?.classList.toggle('visible');
    document.body.classList.toggle('sidebar-open');
    hamburger?.setAttribute('aria-expanded', isOpen);
    hamburger?.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  hamburger?.addEventListener('click', toggleSidebar);
  sidebarOverlay?.addEventListener('click', toggleSidebar);

  // Close sidebar when clicking a nav link (mobile)
  sidebar?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleSidebar();
    });
  });

  // Close sidebar on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar?.classList.remove('open');
      sidebarOverlay?.classList.remove('visible');
      document.body.classList.remove('sidebar-open');
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.setAttribute('aria-label', 'Abrir menu');
    }
  });

  /* ==========================================================================
     Form Submission (WhatsApp)
     ========================================================================== */

  const reservaForm = document.querySelector('#reserva-form');
  const reservaMensagem = document.querySelector('#reserva-mensagem');

  if (reservaForm && reservaMensagem) {
    reservaForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Required fields
      const requiredFields = {
        nome_encarregado: 'Nome do encarregado',
        telefone: 'Telefone',
        nome_crianca: 'Nome da criança',
        idade: 'Idade da criança',
        ano: 'Ano escolar',
        horario: 'Horário preferido',
        conhecimento: 'Como conheceu o MGAT'
      };

      // Validate required fields
      for (const [name, label] of Object.entries(requiredFields)) {
        const value = reservaForm[name]?.value?.trim();
        if (!value) {
          reservaMensagem.textContent = `Preencha o campo: ${label}`;
          reservaMensagem.style.color = '#ff5f57';
          reservaForm[name]?.focus();
          return;
        }
      }

      // Collect selected disciplines
      const disciplinasSelecionadas = [];
      const checkboxes = reservaForm['disciplinas'];
      if (checkboxes) {
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) disciplinasSelecionadas.push(checkbox.value);
        });
      }
      const disciplinasTexto = disciplinasSelecionadas.length > 0
        ? disciplinasSelecionadas.join(', ')
        : 'Não especificado';

      const dificuldades = reservaForm['dificuldades']?.value?.trim() || 'Não especificado';

      // Build WhatsApp message
      const mensagem = `Olá! Quero reservar uma vaga no MGAT Explicações.

Nome do encarregado: ${reservaForm['nome_encarregado'].value.trim()}
Telefone: ${reservaForm['telefone'].value.trim()}
Nome da criança: ${reservaForm['nome_crianca'].value.trim()}
Idade: ${reservaForm['idade'].value.trim()}
Ano: ${reservaForm['ano'].value.trim()}
Disciplinas com dificuldade: ${disciplinasTexto}
Dificuldades: ${dificuldades}
Horário preferido: ${reservaForm['horario'].value.trim()}
Como conheceu: ${reservaForm['conhecimento'].value.trim()}`;

      // WhatsApp number (configure as needed)
      const numeroWhatsApp = '244936758420';

      // Open WhatsApp
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      reservaMensagem.textContent = 'A abrir o WhatsApp...';
      reservaMensagem.style.color = '#fff';
      window.open(url, '_blank');
    });
  }

  /* ==========================================================================
     Smooth Scroll for Anchor Links
     ========================================================================== */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = window.innerWidth <= 768 ? 80 : 0;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================================================
     Scroll Animations (Intersection Observer)
     ========================================================================== */

  const animatedElements = document.querySelectorAll('[data-animate]');

  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     Active Nav Link on Scroll
     ========================================================================== */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar nav a, .header-nav a');

  function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ==========================================================================
     Parallax Hero (Optional - requires hero element)
     ========================================================================== */

  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');

  if (hero && heroBg && window.innerWidth > 768) {
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      if (scrollY < heroHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     Utility Functions (Exposed globally for reuse)
     ========================================================================== */

  window.MGAT = {
    // Show toast notification
    toast: (message, type = 'info', duration = 3000) => {
      const toast = document.createElement('div');
      toast.className = `mgat-toast mgat-toast-${type}`;
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        background: var(--glass-bg);
        backdrop-filter: var(--glass-blur);
        border: var(--glass-border);
        box-shadow: var(--glass-shadow);
        z-index: var(--z-toast);
        animation: slideIn 0.3s ease;
        color: var(--color-white);
      `;

      if (type === 'success') toast.style.borderColor = 'var(--color-green)';
      if (type === 'error') toast.style.borderColor = '#ff5f57';

      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, duration);
    },

    // Validate email
    isValidEmail: (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // Validate phone (basic)
    isValidPhone: (phone) => {
      return /^[\d\s\-\+\(\)]{9,}$/.test(phone);
    },

    // Format phone for WhatsApp
    formatPhoneForWhatsApp: (phone) => {
      return phone.replace(/\D/g, '');
    },

    // Debounce
    debounce: (fn, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(null, args), delay);
      };
    },

    // Throttle
    throttle: (fn, limit) => {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          fn.apply(null, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };

  /* ==========================================================================
     CSS Animations (injected via JS for toast)
     ========================================================================== */

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100px); }
    }
    .animate-in { animation: fadeInUp 0.6s ease forwards; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .sidebar nav a.active { color: var(--color-gold); }
    .sidebar nav a.active::before { content: ''; position: absolute; left: -1rem; top: 50%; transform: translateY(-50%); width: 6px; height: 6px; background: var(--color-gold); border-radius: 50%; }
  `;
  document.head.appendChild(style);

})();