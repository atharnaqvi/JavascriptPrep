'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Open modal Function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open modal with overlay
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  console.log(btnsOpenModal[i].textContent);
}

//Close modal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Use Keyboard Escape key to close the modal
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (
    (e.key === 'Escape' || e.key === 'Enter') &&
    !document.querySelector('.hidden')
  ) {
    closeModal();
  }
});
