const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.btn--open-modal');
const footerColumn = document.querySelectorAll('.footer-column');

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