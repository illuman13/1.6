import '../scss/style.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
document.addEventListener("DOMContentLoaded",   () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 32,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      init: true
    })
  }
}
)


document.addEventListener("DOMContentLoaded", () => {
  const brandMenu = document.querySelector('.brand-menu__list')

const brandMenuHidden = brandMenu.querySelector('.menu--hidden')
const brandMenuButtonHidden = document.querySelector('.brand-menu__button:last-of-type')
const brandMenuButton = document.querySelector('.brand-menu__button:first-of-type')


brandMenuButton.addEventListener('click', function (){
  brandMenuHidden.classList.add('menu-visible')
  brandMenuButtonHidden.classList.remove('button-hidden')
  brandMenuButton.classList.remove('brand-menu__button')
})
brandMenuButtonHidden.addEventListener('click', function (){
  brandMenuHidden.classList.remove('menu-visible')
  brandMenuButtonHidden.classList.add('button-hidden')
  brandMenuButton.classList.add('brand-menu__button')
})
const servicesMenu = document.querySelector('.services-menu')
const servicesMenuHidden = servicesMenu.querySelector('.menu--hidden')
const servicesMenuButtonHidden = document.querySelector('.services-menu__button:last-of-type')
const servicesMenuButton = document.querySelector('.services-menu__button:first-of-type')


servicesMenuButton.addEventListener('click', function (){
  servicesMenuHidden.classList.add('menu-visible')
  servicesMenuButtonHidden.classList.remove('button-hidden')
  servicesMenuButton.classList.remove('services-menu__button')
})
servicesMenuButtonHidden.addEventListener('click', function (){
  servicesMenuHidden.classList.remove('menu-visible')
  servicesMenuButtonHidden.classList.add('button-hidden')
  servicesMenuButton.classList.add('services-menu__button')
})


const burger = document.querySelector('.header__item:first-of-type .header__button')
const mainMenu = document.querySelector('.main-menu__aside')
const popupBlur = document.querySelector('.overlay')
const closeModal = document.querySelectorAll('.close__modal')


  popupBlur.addEventListener('click', function () {
    mainMenu.classList.remove('active')
    callMenu.classList.remove('active')
    feedbackMenu.classList.remove('active')
    popupBlur.classList.toggle('hidden')
  })

  for(let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function() {
      feedbackMenu.classList.remove('active')
      callMenu.classList.remove('active')
      mainMenu.classList.remove('active')
      popupBlur.classList.toggle('hidden')
    })
  }


  burger.addEventListener('click', function () {
  mainMenu.classList.toggle('active')
  popupBlur.classList.toggle('hidden')
})


const call = document.querySelector('.header__item:last-of-type .header__button:nth-of-type(5)')
const callMenu = document.querySelector('.call-menu__aside')
const inputFocus = document.querySelector('.call-menu__input')
  call.addEventListener('click', function () {
  callMenu.classList.toggle('active')
  popupBlur.classList.toggle('hidden')
})

const feedBack = document.querySelector('.header__item:last-of-type .header__button:nth-of-type(4)')
const feedbackMenu = document.querySelector('.feedback-menu__aside')

feedBack.addEventListener('click', function () {
  feedbackMenu.classList.toggle('active')
  popupBlur.classList.toggle('hidden')
})

const mainMenuCall = document.querySelector('.footer__item:first-of-type .footer__button')
const mainMenuFeedback = document.querySelector('.footer__item:nth-of-type(2) .footer__button')

mainMenuCall.addEventListener('click', function () {
  callMenu.classList.add('active')
  mainMenu.classList.remove('active')
  feedbackMenu.classList.remove('active')
  popupBlur.classList.remove('hidden')
})
mainMenuFeedback.addEventListener('click', function () {
  feedbackMenu.classList.add('active')
  callMenu.classList.remove('active')
  mainMenu.classList.remove('active')
  popupBlur.classList.remove('hidden')
})

});
