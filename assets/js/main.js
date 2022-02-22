'use strict';

// open close modal
const openModalHeader = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.modal__header-close');
const modal = document.querySelector('.modal__header');2
const modalContainer = document.querySelector('.modal__header-container');

function showModalHeader() {
  modal.classList.add('open')
}

function hideModalHeader() {
  modal.classList.remove('open')
}

openModalHeader.addEventListener('click', showModalHeader);
closeBtn.addEventListener('click', hideModalHeader);
modal.addEventListener('click', hideModalHeader);
modalContainer.addEventListener('click', function(event) {
  event.stopPropagation()
});


