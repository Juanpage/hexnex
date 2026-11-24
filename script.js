// Hexnex: revelado de la conversación de ejemplo, borde de la barra y botón flotante.
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // La conversación es visible por defecto; solo se anima si el visitante no pidió menos movimiento.
  const thread = document.querySelector('[data-thread]');
  if (thread && !reduceMotion && 'IntersectionObserver' in window) {
    const messages = Array.from(thread.children);
    thread.classList.add('is-armed');
    const observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      messages.forEach(function (msg, i) {
        setTimeout(function () { msg.classList.add('is-shown'); }, 250 + i * 650);
      });
    }, { threshold: 0.35 });
    observer.observe(thread);
  }

  const bar = document.querySelector('.bar');
  const floatBtn = document.querySelector('.wa-float');
  const contact = document.getElementById('contacto');
  const heroCta = document.querySelector('.opening .btn-ink');

  function updateOnScroll() {
    if (bar) bar.classList.toggle('is-scrolled', window.scrollY > 8);
    if (floatBtn && contact) {
      const top = contact.getBoundingClientRect().top;
      const heroVisible = heroCta ? heroCta.getBoundingClientRect().bottom > 0 : false;
      floatBtn.classList.toggle('is-hidden', heroVisible || top < window.innerHeight * 0.8);
    }
  }
  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll();
})();
