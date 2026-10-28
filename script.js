// Helena Viana — Nutrição Clínica
(function () {
  'use strict';

  var root = document.documentElement;
  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Entradas suaves: [data-reveal] sobe e aparece; [data-servir] serve os ingredientes na mesa
  var alvos = document.querySelectorAll('[data-reveal], [data-servir]');
  if (reduzido || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-in');
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    alvos.forEach(function (el) { observador.observe(el); });
  }

  // Header ganha uma linha de base depois que a página rola
  var topo = document.querySelector('[data-topo]');
  if (topo) {
    var marcar = function () { topo.classList.toggle('is-rolado', window.scrollY > 8); };
    marcar();
    window.addEventListener('scroll', marcar, { passive: true });
  }

  // FAQ: botões com aria-expanded e painéis com hidden (sem JS, tudo fica aberto)
  document.querySelectorAll('[data-faq] .faq__q').forEach(function (botao) {
    var painel = document.getElementById(botao.getAttribute('aria-controls'));
    if (!painel) return;
    painel.hidden = true;
    botao.addEventListener('click', function () {
      var aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', String(!aberto));
      painel.hidden = aberto;
    });
  });

  // Ano do rodapé
  var ano = document.querySelector('[data-ano]');
  if (ano) ano.textContent = new Date().getFullYear();
})();
