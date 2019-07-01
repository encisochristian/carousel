const carouselSlide = document.querySelector('.carousel-item');
const carouselImages = document.querySelectorAll('.carousel-item img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const dots = document.querySelectorAll('.dots-container .dot');

let counter = 1;
const size = carouselImages[0].clientWidth;

dots[0].className += " active";
carouselSlide.style.transform = 'translate(' + (-size * counter ) + 'px';

nextBtn.addEventListener('click', function() {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";

    if (counter < dots.length) {
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[counter].className += " active";
    }

    counter++;
    carouselSlide.style.transform = 'translate(' + (-size * counter ) + 'px';
    console.log(counter);
});

prevBtn.addEventListener('click', function() {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (counter > 1){
        dots[counter - 2].className += " active";
    }
    counter--;

    carouselSlide.style.transform = 'translate(' + (-size * counter ) + 'px';
    console.log(counter);
    
});

carouselSlide.addEventListener('transitionend', function() {
    if (carouselImages[counter].id === 'lastClone') {

        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translate(' + (-size * counter ) + 'px';

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[counter - 1].className += " active";
        console.log(counter);
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translate(' + (-size * counter ) + 'px';

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[0].className += " active";

        console.log(counter);
    }
}); 

function highlightDot(n) {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translate(' + (-size * n ) + 'px';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";

    counter = n;
}