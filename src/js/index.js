import '../scss/style.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
window.onload =  () => {
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

const brandMenu = document.querySelector('.brand-menu__list')

const brandMenuHidden = brandMenu.querySelector('.menu--hidden')
const brandMenuButtonHidden = document.querySelector('.brand-menu__button:last-of-type')
const brandMenuButton = document.querySelector('.brand-menu__button:first-of-type')
console.log(brandMenuHidden)
console.log(brandMenuButtonHidden)
console.log(brandMenuButton)

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
const mainMenuClose = document.querySelector('.main-menu__item:first-of-type .main-menu__button')


burger.addEventListener('click', function () {
  mainMenu.classList.add('active')
  popupBlur.classList.remove('hidden')
})


mainMenuClose.addEventListener('click', function () {
  mainMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
})
popupBlur.addEventListener('click', function () {
  mainMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
})

const call = document.querySelector('.header__item:last-of-type .header__button:nth-of-type(5)')
const callMenu = document.querySelector('.call-menu__aside')
const callMenuClose = document.querySelector('.call-menu__button')


call.addEventListener('click', function () {
  callMenu.classList.add('active')
  popupBlur.classList.remove('hidden')
})
callMenuClose.addEventListener('click', function () {
  callMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
})
popupBlur.addEventListener('click', function () {
  callMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
})

const feedBack = document.querySelector('.header__item:last-of-type .header__button:nth-of-type(4)')
const feedbackMenu = document.querySelector('.feedback-menu__aside')
const feedbackMenuClose = document.querySelector('.feedback-menu__button')


feedBack.addEventListener('click', function () {
  feedbackMenu.classList.add('active')
  popupBlur.classList.remove('hidden')
})
feedbackMenuClose.addEventListener('click', function () {
  feedbackMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
})
popupBlur.addEventListener('click', function () {
  feedbackMenu.classList.remove('active')
  popupBlur.classList.add('hidden')
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



