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

jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-video");

const btn = document.querySelector('.btn');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
})

close.addEventListener('click', () => {
    $('.youtube-video').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
    videoContainer.classList.remove('show');
})

const btn2 = document.querySelector('#btn2');

const videoContainer2 = document.querySelector('#video-container2');

const close2 = document.querySelector('#close2');

btn2.addEventListener('click', () => {
    videoContainer2.classList.add('show');
})

close2.addEventListener('click', () => {
    $('.youtube').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
    videoContainer2.classList.remove('show');
})

const btn3 = document.querySelector('#btn3');

const videoContainer3 = document.querySelector('#video-container3');

const close3 = document.querySelector('#close3');

btn3.addEventListener('click', () => {
    videoContainer3.classList.add('show');
})

close3.addEventListener('click', () => {
    $('.youtube2').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
    videoContainer3.classList.remove('show');
})