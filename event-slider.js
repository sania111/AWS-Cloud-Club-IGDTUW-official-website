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
