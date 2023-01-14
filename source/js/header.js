var mobileMenu = document.querySelector('.mobile-menu')
var mobileLink = document.querySelector('.mobile-menu__link')
var mobileLinkCS = document.querySelector('.mobile-menu__link-cs')
var menu = document.querySelector('.menu-hr')
var mobileCross = document.querySelector('.menu-cross')

// ADD

menu.addEventListener('click', function() {
    mobileMenu.classList.add('mobile-menu_active')
})

menu.addEventListener('click', function() {
    mobileLink.classList.add('mobile-menu_active__link_active')
})

menu.addEventListener('click', function() {
    mobileLinkCS.classList.add('mobile-menu_active__link-cs_active')
})

menu.addEventListener('click', function() {
    mobileCross.classList.add('menu-cross_active')
})

menu.addEventListener('click', function() {
    menu.classList.add('menu-hr_inActiv')
})

// TOGGLE

mobileCross.addEventListener('click', function() {
    mobileMenu.classList.toggle('mobile-menu_active')
})

mobileCross.addEventListener('click', function() {
    mobileLink.classList.toggle('mobile-menu_active__link_active')
})

mobileCross.addEventListener('click', function() {
    mobileLinkCS.classList.toggle('mobile-menu_active__link-cs_active')
})

mobileCross.addEventListener('click', function() {
    mobileCross.classList.toggle('menu-cross_active')
})

mobileCross.addEventListener('click', function() {
    menu.classList.toggle('menu-hr_inActiv')
})