
let slideIndex = 1;
changeSlide(slideIndex);


function plusSlides(n) {
changeSlide(slideIndex += n);
}

function currentSlide(n) {
changeSlide(slideIndex = n);
}

function changeSlide(n){
    let i = 0
    const slides = console.log(document.querySelectorAll(".slide"))
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "block";
}

