var menuButton = document.querySelector('.menu-hr')
var cross = document.querySelector('.menu-cross')
var headerMenu = document.querySelector('.mobile-menu')
var link = document.querySelector('.link-hr')

/* ModalWindow */

menuButton.addEventListener('click', function() {
    cross.classList.add('menu-cross-active')
})

cross.addEventListener('click', function() {
    cross.classList.toggle('menu-cross-active')
})

cross.addEventListener('click', function() {
    menuButton.classList.toggle('menu-hr')
})

menuButton.addEventListener('click', function() {
    headerMenu.classList.add('mobile-menu-active')
})

cross.addEventListener('click', function() {
    headerMenu.classList.toggle('mobile-menu-active')
})