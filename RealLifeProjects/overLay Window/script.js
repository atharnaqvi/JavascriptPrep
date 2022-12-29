'use strict';
const showModel = document.querySelectorAll('.showModel');
const HideModel = document.querySelector('.btnHide');
const model = document.querySelector('.hidden');
const overLay = document.querySelector('.overLay');

const openModel = function () {
  model.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
const closeModel = function () {
  model.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', openModel);
}

HideModel.addEventListener('click', closeModel);
overLay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  // Use the keyboard key Esc to close the model only if the .hidden class is set
  if (e.code === 'Escape' && !model.classList.contains('.hidden')) {
    console.log('.hidden class is present');
    closeModel();
  }
});
