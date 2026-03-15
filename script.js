// =========================================
// Partículas en el canvas del Hero
// =========================================
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', () => { resize(); buildParticles(); });
  resize();

  function buildParticles() {
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1
      });
    }
  }
  buildParticles();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Líneas entre partículas cercanas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,168,232,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Puntos
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,168,232,${p.alpha})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// =========================================
// Efecto de escritura en el Hero
// =========================================
(function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const frases = [
    'Data Scientist',
    'Economist',
    'Python Developer',
    'ML Engineer',
    'Financial Analyst'
  ];

  let fi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 80, SPEED_DELETE = 40, PAUSE = 1800;

  function tick() {
    const frase = frases[fi];
    if (!deleting) {
      el.textContent = frase.slice(0, ++ci);
      if (ci === frase.length) { deleting = true; setTimeout(tick, PAUSE); return; }
    } else {
      el.textContent = frase.slice(0, --ci);
      if (ci === 0) { deleting = false; fi = (fi + 1) % frases.length; }
    }
    setTimeout(tick, deleting ? SPEED_DELETE : SPEED_TYPE);
  }
  tick();
})();

// =========================================
// Contadores animados en el Hero
// =========================================
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero__stats');
if (statsEl) counterObserver.observe(statsEl);

// =========================================
// Navbar: scroll spy + sombra + back-to-top
// =========================================
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar__links a');
const sections = document.querySelectorAll('section[id], header[id]');
const btnTop   = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Sombra
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Scroll spy
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });

  // Botón volver arriba
  btnTop.classList.toggle('visible', window.scrollY > 450);
});

// =========================================
// Scroll suave
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    document.getElementById('navMobile').classList.remove('open');
  });
});

// =========================================
// Menú hamburguesa
// =========================================
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});

// =========================================
// Botón volver arriba
// =========================================
btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =========================================
// Animaciones fade-in con IntersectionObserver
// =========================================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// =========================================
// Barras de habilidades animadas
// =========================================
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill__fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.getAttribute('data-width') + '%'; }, i * 120);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills__group').forEach(g => skillObserver.observe(g));

// =========================================
// Tarjetas de experiencia expandibles
// =========================================
document.querySelectorAll('.timeline__card[data-expandable]').forEach(card => {
  card.querySelector('.timeline__header').addEventListener('click', () => {
    card.classList.toggle('open');
  });
});
