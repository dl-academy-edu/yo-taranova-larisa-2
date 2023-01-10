var modal = document.querySelector('.modal_window_close-ind')
var BannerButton = document.querySelector('.banner-ind__button-ind')
var modalButton = document.querySelector('.modal_button-ind')

/* ModalWindow */

BannerButton.addEventListener('click', function() {
    modal.classList.add('modal_window_open-ind')
})

modalButton.addEventListener('click', function() {
    modal.classList.toggle('modal_window_open-ind')
})