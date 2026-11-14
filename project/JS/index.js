const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.btn--open-modal');
const footerColumn = document.querySelectorAll('.footer-column');
const handlerSection = document.querySelector('.handlers--section');
const handlers = document.querySelectorAll('.handler');
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('section');

const openModal = function() {
    modal.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

footerColumn.forEach(col => {
  col.addEventListener('click', function(){
    col.classList.toggle('active');
  });
});


header.addEventListener('mouseover', function(e) {
  const handleHover = e.target.closest('.nav__link');
  console.log(handleHover);

  if(!handleHover) return;

  const targetHandler = handlerSection.querySelector(`.${handleHover.dataset.target}`);
  // remove active class
  handlerSection.querySelectorAll('.handler-active').forEach(handler => {
    handler.classList.remove('handler-active');

  });

  // add active class
  targetHandler.classList.add('handler-active');
  console.log('classes', targetHandler.className);
  // allSection.forEach(sec => sec.classList.add('blur'));

  const hcoord = header.getBoundingClientRect().height;
  console.log(hcoord);
});

header.addEventListener('mouseout', function(e) {
  const handleHover = e.target.closest('.nav__link');
  console.log(handleHover);

  if(!handleHover) return;

  const targetHandler = handlerSection.querySelector(`.${handleHover.dataset.target}`);
  // remove active class
  handlerSection.querySelectorAll('.handler-active').forEach(handler => {
    handler.classList.remove('handler-active');

  });

  // add active class
  targetHandler.classList.remove('handler-active');
  console.log('classes', targetHandler.className);
  // allSection.forEach(sec => sec.classList.add('blur'));

  const hcoord = header.getBoundingClientRect().height;
  console.log(hcoord);
});
