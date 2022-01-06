jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");

const btn = document.querySelector('.btn');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
})

close.addEventListener('click', () => {
    $('.youtube-iframe').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
    videoContainer.classList.remove('show');
})

jQuery('iframe2[src*="https://www.youtube.com/embed/"]').addClass("youtube");

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

jQuery('iframe4[src*="https://www.youtube.com/embed/"]').addClass("youtube2");

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

jQuery('iframe4[src*="https://www.youtube.com/embed/"]').addClass("youtube3");

const btn4 = document.querySelector('#btn4');

const videoContainer4 = document.querySelector('#video-container4');

const close4 = document.querySelector('#close4');

btn4.addEventListener('click', () => {
    videoContainer4.classList.add('show');
})

close4.addEventListener('click', () => {
    $('.youtube3').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });
    videoContainer4.classList.remove('show');
})