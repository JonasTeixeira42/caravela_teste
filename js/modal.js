const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

const modalBox = document.querySelector('.modal__box');

modalClose.addEventListener('click', close);

function fadeIn() {
  document.getElementById('menu-hamburguer').checked = false;
  document.querySelector('.sidebar').style.left = '-100%';
  document.querySelector('.sidebar').style.width = 'min(450px, 45vw);';

  TweenMax.to(modal, 0.5, { autoAlpha: 1 });
  TweenMax.from(modalBox, 0.5, { autoAlpha: 0, top: 300 });
}

function close() {
  TweenMax.set([modal, modalBox], { clearProps: 'all' });
  TweenMax.to(modal, 0.5, { autoAlpha: 0 });
}
