/* Mejora progresiva sobre las animaciones y controles originales. */
(() => {
  document.documentElement.classList.add('js');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 768px)');
  const hero = document.getElementById('hero');
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMobile');
  const topButton = document.getElementById('backToTop');
  const typing = document.getElementById('typingText');
  let heroVisible = true;
  let typingTimer;
  let particleFrame;
  let particleController;
  let revealObserver;
  let counterObserver;
  const counterFrames = new Set();

  // Fondos CSS independientes del hero: activos solo dentro del área visible.
  const backgroundSections = [document.getElementById('experiencia'), document.getElementById('contacto')].filter(Boolean);
  const visibleBackgroundSections = new Set();
  let backgroundsPrinting = false;
  const syncBackgroundMotion = () => {
    const allowed = !reducedMotion.matches && !document.hidden && !backgroundsPrinting;
    backgroundSections.forEach(section => {
      let visible = visibleBackgroundSections.has(section);
      if (!('IntersectionObserver' in window)) {
        const bounds = section.getBoundingClientRect();
        visible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      }
      section.classList.toggle('background-motion-active', allowed && visible);
    });
  };
  if ('IntersectionObserver' in window) {
    const backgroundObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleBackgroundSections.add(entry.target);
        else visibleBackgroundSections.delete(entry.target);
      });
      syncBackgroundMotion();
    });
    backgroundSections.forEach(section => backgroundObserver.observe(section));
  }
  document.addEventListener('visibilitychange', syncBackgroundMotion);
  reducedMotion.addEventListener('change', syncBackgroundMotion);

  // Menú accesible: estado, Escape y restablecimiento al cambiar de tamaño.
  const setMenu = (open, returnFocus = false) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    if (returnFocus) toggle.focus();
  };
  toggle.hidden = false;
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (mobile.matches && !event.target.closest('.navbar')) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));

  // Navegación y volver arriba, agrupados en un solo frame por desplazamiento.
  const links = [...document.querySelectorAll('.navbar__links a, .navbar__mobile a')];
  const sections = [...document.querySelectorAll('section[id], header[id], footer[id]')];
  const updateNavigation = () => {
    if (!('IntersectionObserver' in window)) syncBackgroundMotion();
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    navbar.style.setProperty('--reading-progress', progress);
    topButton.hidden = window.scrollY <= 450;
    topButton.classList.toggle('visible', !topButton.hidden);
    let current = '';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 110) current = section.id;
    });
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let navigationFrame;
  const scheduleNavigation = () => {
    if (navigationFrame) return;
    navigationFrame = requestAnimationFrame(() => {
      navigationFrame = undefined;
      updateNavigation();
    });
  };
  window.addEventListener('scroll', scheduleNavigation, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));
  updateNavigation();

  // Control de lectura: no altera el funcionamiento individual de details.
  const experienceCards = [...document.querySelectorAll('.timeline__card')];
  const experienceToggle = document.getElementById('experienceToggle');
  const experienceLabel = experienceToggle.querySelector('.experience__control-label');
  const syncExperienceControl = () => {
    const allOpen = experienceCards.every(card => card.open);
    experienceToggle.setAttribute('aria-expanded', String(allOpen));
    experienceLabel.textContent = allOpen ? 'Contraer detalles' : 'Mostrar toda la experiencia';
  };
  experienceToggle.hidden = false;
  syncExperienceControl();
  experienceToggle.addEventListener('click', () => {
    const expand = !experienceCards.every(card => card.open);
    experienceCards.forEach(card => { card.open = expand; });
    syncExperienceControl();
    scheduleNavigation();
  });
  experienceCards.forEach(card => {
    card.addEventListener('toggle', () => {
      syncExperienceControl();
      scheduleNavigation();
    });
  });

  // Copia opcional: confirmar éxito solo si Clipboard API lo resuelve.
  const copyEmail = document.getElementById('copyEmail');
  const copyLabel = copyEmail.querySelector('span');
  const copyStatus = document.getElementById('copyEmailStatus');
  copyEmail.hidden = false;
  copyEmail.addEventListener('click', async () => {
    copyEmail.disabled = true;
    copyLabel.textContent = 'Copiando…';
    copyStatus.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API no disponible');
      await navigator.clipboard.writeText('a20176035@pucp.edu.pe');
      copyStatus.textContent = 'Correo copiado.';
    } catch {
      copyStatus.textContent = 'No se pudo copiar. Usa el correo visible o el enlace Escríbeme.';
    } finally {
      copyEmail.disabled = false;
      copyLabel.textContent = 'Copiar correo';
      scheduleNavigation();
    }
  });

  // Tipografía animada con roles que figuran en el CV.
  const roles = ['Economista', 'Ciencia de Datos', 'Machine Learning e IA', 'Investigación Económica'];
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;
  const motionAllowed = () => !reducedMotion.matches && !document.hidden && heroVisible;
  const typeNext = () => {
    clearTimeout(typingTimer);
    if (!motionAllowed()) return;
    const role = roles[roleIndex];
    characterIndex += deleting ? -1 : 1;
    typing.textContent = role.slice(0, Math.max(0, characterIndex));
    let delay = deleting ? 45 : 85;
    if (!deleting && characterIndex === role.length) {
      deleting = true;
      delay = 1900;
    } else if (deleting && characterIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 250;
    }
    typingTimer = setTimeout(typeNext, delay);
  };

  // Partículas originales: cantidad acotada, sin trabajo en pestañas ocultas.
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width = 0;
  let height = 0;
  const resizeParticles = () => {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(55, Math.max(15, Math.floor(width * height / 18000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + .5,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      alpha: Math.random() * .5 + .1
    }));
  };
  const drawParticles = () => {
    particleFrame = undefined;
    if (!ctx || !motionAllowed()) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, index) => {
      for (let j = index + 1; j < particles.length; j++) {
        const other = particles[j];
        const distance = Math.hypot(p.x - other.x, p.y - other.y);
        if (distance >= 120) continue;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(0,168,232,${.08 * (1 - distance / 120)})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,168,232,${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
    particleFrame = requestAnimationFrame(drawParticles);
  };
  particleController = () => {
    clearTimeout(typingTimer);
    cancelAnimationFrame(particleFrame);
    particleFrame = undefined;
    if (!motionAllowed()) return;
    typingTimer = setTimeout(typeNext, 1000);
    particleFrame = requestAnimationFrame(drawParticles);
  };
  window.addEventListener('resize', () => {
    if (!reducedMotion.matches) resizeParticles();
    scheduleNavigation();
  }, { passive: true });
  document.addEventListener('visibilitychange', particleController);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      particleController();
    }, { threshold: 0 }).observe(hero);
  }

  // Contadores y entrada suave: únicamente cuando el elemento se hace visible.
  const animateCounter = element => {
    const target = Number(element.dataset.target);
    const start = performance.now();
    const frame = now => {
      if (reducedMotion.matches || document.hidden) {
        element.textContent = target;
        return;
      }
      const progress = Math.min((now - start) / 1300, 1);
      element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) counterFrames.add(requestAnimationFrame(frame));
    };
    counterFrames.add(requestAnimationFrame(frame));
  };
  const setMotion = () => {
    revealObserver?.disconnect();
    counterObserver?.disconnect();
    counterFrames.forEach(cancelAnimationFrame);
    counterFrames.clear();
    document.documentElement.classList.toggle('motion-enabled', !reducedMotion.matches);
    if (reducedMotion.matches) {
      typing.textContent = roles[0];
      document.querySelectorAll('[data-target]').forEach(element => { element.textContent = element.dataset.target; });
      document.querySelectorAll('.fade-in, .skill__fill').forEach(element => element.classList.add('visible'));
      clearTimeout(typingTimer);
      cancelAnimationFrame(particleFrame);
      particleFrame = undefined;
      if (ctx) ctx.clearRect(0, 0, width, height);
      return;
    }
    resizeParticles();
    particleController();
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in, .skill__fill').forEach(element => element.classList.add('visible'));
      return;
    }
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill__fill').forEach(element => element.classList.add('visible'));
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08 });
    document.querySelectorAll('.fade-in').forEach(element => revealObserver.observe(element));
    counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: .4 });
    counterObserver.observe(document.querySelector('.hero__stats'));
  };
  reducedMotion.addEventListener('change', setMotion);
  setMotion();

  // Imprimir toda la trayectoria sin cambiar el estado elegido al volver.
  let printState = [];
  window.addEventListener('beforeprint', () => {
    if (printState.length) return;
    backgroundsPrinting = true;
    syncBackgroundMotion();
    printState = experienceCards.map(item => ({ item, open: item.open }));
    printState.forEach(({ item }) => { item.open = true; });
    syncExperienceControl();
    scheduleNavigation();
  });
  window.addEventListener('afterprint', () => {
    printState.forEach(({ item, open }) => { item.open = open; });
    printState = [];
    backgroundsPrinting = false;
    syncBackgroundMotion();
    syncExperienceControl();
    scheduleNavigation();
  });
})();
