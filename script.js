// Hexnex: revelado de la conversación de ejemplo y borde de la barra al hacer scroll.
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

  function updateOnScroll() {
    if (bar) bar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll();
})();
