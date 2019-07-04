let index = 0, timer;
const carouselImages = document.getElementsByClassName('image-container');
const carouselLength = carouselImages.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dots-container .dot');
const dotsLength = dots.length;
carouselImages[index].style.opacity=1;
dots[0].className += " active";

function autoSlide() {
    let n = index + 1;
    moveSlide(n);
}

window.addEventListener('load', function() {
    timer = setInterval(autoSlide, 3000);
});

function moveSlide(n) {
    clearInterval(timer);
    let i, current, next, classForCurrent, classForNext;

    if (n > index) {
        if(n >= carouselLength){n = 0;}
        classForCurrent = " move-left-current";
        classForNext = " move-left-next";
    } else if (n < index) {
        if(n < 0){n = carouselLength - 1;}
        classForCurrent = " move-right-current";
        classForNext = " move-right-prev";
    }

    if (n != index) {
        next = carouselImages[n];
        current = carouselImages[index];

        for (i = 0; i < carouselLength; i++) {
            carouselImages[i].className = "image-container";
            carouselImages[i].style.opacity = 0;
        }
        current.className += classForCurrent;
        next.className += classForNext;
        highlightDot(n);

        index = n;
        timer = setInterval(autoSlide, 3000);
    }
}

nextBtn.addEventListener('click', function() {
    let n = index + 1;
    moveSlide(n);
});

prevBtn.addEventListener('click', function() {
    let n = index + -1;
    moveSlide(n);
});

function highlightDot(n) {
    for (i = 0; i < dotsLength; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
}
