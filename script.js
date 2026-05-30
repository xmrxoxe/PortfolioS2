var slideIndex = 1;
showSlides(slideIndex);

function getIndex(){
    console.log(slideIndex);
}

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

function minusSlides(n){
    slideIndex -= n;
    showSlides(slideIndex);
}

function currentSlides(n){
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide-container");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex = dots.length} // Nombre de points
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";
}