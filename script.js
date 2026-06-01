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

"use strict";
var titre = document.getElementsByClassName("titre_section");
titre.addEventListener("click", function(e){
  e.preventDefault;
  titre.classList.remove("run-animation");
    void titre.offsetWidth;
    titre.classList.add("run-animation");
});

let deroule = document.getElementsByClassName("deroule");
let desc_parcours = document.getElementById("description-parcours");
let desc_projets = document.getElementById("description-projets");
let desc_portfolio = document.getElementById("description-portfolio");
let desc_contact = document.getElementById("description-a-propos");
let show_desc = document.getElementsByClassName("show-desc");

deroule.onclick = function(){
    desc_parcours.classList.toggle('open');
    desc_projets.classList.toggle('open');
    desc_portfolio.classList.toggle('open');
    desc_contact.classList.toggle('open');
}
