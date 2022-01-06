jQuery('document').ready(function ($) {
    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');
    menuBtn.click(function () {
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    })
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll('ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}

const $form = document.querySelector('#form')
if ($form) {
    $form.addEventListener('submit', hadleSubmit)
}
$buttonmailto = document.querySelector('#trucazo')

function hadleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonmailto.setAttribute('href', `mailto:santiherrera@icloud.com?subject=${form.get('name')}//${form.get('mail')}//${form.get('phone')}&body=${form.get('mensaje')}`)
    $buttonmailto.click()
}