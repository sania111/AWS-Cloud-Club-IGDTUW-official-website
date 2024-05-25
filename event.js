let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function slideNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function slidePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}
// Automatically switch slides every 5 seconds
setInterval(slideNext, 3000);


var imgs = document.querySelectorAll('.imgslider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(index) {
    imgs[currentImg].style.zIndex = 0;
    imgs[currentImg].style.opacity = 0;
    dots[currentImg].classList.remove('active');
    currentImg = index;
    imgs[currentImg].style.zIndex = 1;
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].classList.add('active');
}
