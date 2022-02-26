'use strict';

// open close modal
const openModalHeader = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.modal__header-close');
const modal = document.querySelector('.modal__header');
const modalContainer = document.querySelector('.modal__header-container');

function showModalHeader() {
  modal.classList.add('open');
}

function hideModalHeader() {
  modal.classList.remove('open');
}

openModalHeader.addEventListener('click', showModalHeader);
closeBtn.addEventListener('click', hideModalHeader);
modal.addEventListener('click', hideModalHeader);
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
});


// open sub modal
const btnOpenHome = document.querySelector('.js-home');
const btnOpenServices = document.querySelector('.js-services');
const btnOpenPages = document.querySelector('.js-pages');
const btnOpenBlock = document.querySelector('.js-block');

function showSubMenuHome() {
  let menuOpen = document.getElementById('sub-home');
  if (menuOpen.style.display === 'none') {
    menuOpen.style.display = 'block';
  } else {
    menuOpen.style.display = 'none';
  }
  // subMenu.classList.add('open');
};

function showSubMenuServices() {
  let menuOpen = document.getElementById('sub-services');
  if (menuOpen.style.display === 'none') {
    menuOpen.style.display = 'block';
  } else {
    menuOpen.style.display = 'none';
  }
  // subMenu.classList.add('open');
};

function showSubMenuPages() {
  let menuOpen = document.getElementById('sub-pages');
  if (menuOpen.style.display === 'none') {
    menuOpen.style.display = 'block';
  } else {
    menuOpen.style.display = 'none';
  }
  // subMenu.classList.add('open');
};

function showSubMenuBlock() {
  let menuOpen = document.getElementById('sub-block');
  if (menuOpen.style.display === 'none') {
    menuOpen.style.display = 'block';
  } else {
    menuOpen.style.display = 'none';
  }
  // subMenu.classList.add('open');
};

btnOpenHome.addEventListener('click', showSubMenuHome);
btnOpenServices.addEventListener('click', showSubMenuServices);
btnOpenPages.addEventListener('click', showSubMenuPages);
btnOpenBlock.addEventListener('click', showSubMenuBlock);