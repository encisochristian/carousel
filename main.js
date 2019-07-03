const carouselSlide = document.querySelector('.carousel-item');
const carouselImages = document.querySelectorAll('.carousel-item img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const dots = document.querySelectorAll('.dots-container .dot');
const dotsLength = dots.length;

let timer;

let counter = 1;
const size = carouselImages[0].clientWidth;//816

dots[0].className += " active";
carouselSlide.style.transform = 'translate(' + ( -size * counter ) + 'px';

function slideImage(num, trans) {
    carouselSlide.style.transition = trans;
    carouselSlide.style.transform = 'translate(' + (-size * num ) + 'px';
}

function highlightDot(n) {
    for (i = 0; i < dotsLength; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
}

function slideByDot(n) {
    clearInterval(timer);
    slideImage(n, "transform 0.4s ease-in-out");
    highlightDot(n - 1);
    counter = n;
    timer = setInterval(autoSlide, 3000);
}

function autoSlide() {
    if(counter >= carouselImages.length - 1) return;
    if (counter < dotsLength) {
        highlightDot(counter);
    }
    counter++;
    slideImage(counter, "transform 0.4s ease-in-out");
}

window.addEventListener('load', function() {
    timer = setInterval(autoSlide, 3000);
});

nextBtn.addEventListener('click', function() {
    clearInterval(timer);
    if(counter >= carouselImages.length - 1) return;
    if (counter < dotsLength) {
        highlightDot(counter);
    }
    counter++;
    slideImage(counter, "transform 0.4s ease-in-out");
    timer = setInterval(autoSlide, 3000);
});

prevBtn.addEventListener('click', function() {
    clearInterval(timer);
    if(counter <= 0) return;
    if (counter > 1){
        highlightDot(counter - 2);
    }
    counter--;
    slideImage(counter, "transform 0.4s ease-in-out");
    timer = setInterval(autoSlide, 3000);
});

carouselSlide.addEventListener('transitionend', function() {
    if (carouselImages[counter].id === 'lastClone') {
        counter = carouselImages.length - 2;
        slideImage(counter, "none");
        highlightDot(counter - 1);
    }

    if (carouselImages[counter].id === 'firstClone') {
        counter = carouselImages.length - counter;
        slideImage(counter, "none");
        highlightDot(0);
    }
});
