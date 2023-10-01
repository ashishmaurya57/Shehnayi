document.querySelector ("#menu").addEventListener ("click", function (event) {
    document.querySelector ("#mobileview").style.left = "0";
    event.preventDefault();
})

document.querySelector ("#mobileview i").addEventListener ("click", function () {
    document.querySelector ("#mobileview").style.left = "-100%";
})

const popup = document.querySelector(".pop-up");
document.querySelector (".register-popup").addEventListener ("click", function() {
    popup.style.display = "initial";
})

document.querySelector("#form-1 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-2 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-3 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-4 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-5 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-6 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-7 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-8 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#form-9 #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector("#login-form #close-popup").addEventListener ("click", function() {
    popup.style.display = "none";
})

document.querySelector(".login-pop-up #close-popup").addEventListener ("click", function() {
    document.querySelector ('.login-pop-up').style.display = "none";
})

// Form Slides

document.querySelector ("#form-1 #submit-btn").addEventListener ("click", function(event) {
    document.querySelector ("#form-1").style.display = "none";
    document.querySelector ("#form-2").style.display = "initial";  
    event.preventDefault(); 
})

document.querySelector ("#form-2-prev").addEventListener ("click", function() {
    document.querySelector ("#form-2").style.display = "none";  
    document.querySelector ("#form-1").style.display = "initial";  
})

document.querySelector ("#form-2 #next-btn").addEventListener ("click", function(event) {
    document.querySelector ("#form-2").style.display = "none";
    document.querySelector ("#form-3").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-3-prev").addEventListener ("click", function() {
    document.querySelector ("#form-3").style.display = "none";  
    document.querySelector ("#form-2").style.display = "initial";  
})

document.querySelector ("#form-3 #next-btn-2").addEventListener ("click", function(event) {
    document.querySelector ("#form-3").style.display = "none";
    document.querySelector ("#form-4").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-4-prev").addEventListener ("click", function() {
    document.querySelector ("#form-4").style.display = "none";  
    document.querySelector ("#form-3").style.display = "initial";  
})

document.querySelector ("#form-4 #next-btn-3").addEventListener ("click", function(event) {
    document.querySelector ("#form-4").style.display = "none";
    document.querySelector ("#form-5").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-5-prev").addEventListener ("click", function() {
    document.querySelector ("#form-5").style.display = "none";  
    document.querySelector ("#form-4").style.display = "initial";  
})

document.querySelector ("#form-5 #next-btn-4").addEventListener ("click", function(event) {
    document.querySelector ("#form-5").style.display = "none";
    document.querySelector ("#form-6").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-6-prev").addEventListener ("click", function() {
    document.querySelector ("#form-6").style.display = "none";  
    document.querySelector ("#form-5").style.display = "initial";  
})

document.querySelector ("#form-6 #next-btn-5").addEventListener ("click", function(event) {
    document.querySelector ("#form-6").style.display = "none";
    document.querySelector ("#form-7").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-7-prev").addEventListener ("click", function() {
    document.querySelector ("#form-7").style.display = "none";  
    document.querySelector ("#form-6").style.display = "initial";  
})

document.querySelector ("#form-7 #next-btn-6").addEventListener ("click", function(event) {
    document.querySelector ("#form-7").style.display = "none";
    document.querySelector ("#form-8").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-8-prev").addEventListener ("click", function() {
    document.querySelector ("#form-8").style.display = "none";  
    document.querySelector ("#form-7").style.display = "initial";  
})

document.querySelector ("#form-8 #next-btn-7").addEventListener ("click", function(event) {
    document.querySelector ("#form-8").style.display = "none";
    document.querySelector ("#form-9").style.display = "initial";
    event.preventDefault();
})

document.querySelector ("#form-9-prev").addEventListener ("click", function() {
    document.querySelector ("#form-9").style.display = "none";  
    document.querySelector ("#form-8").style.display = "initial";  
})


document.querySelector (" #main-register-btn").addEventListener ("click", function() {
    popup.style.display = "initial";
})

document.querySelector ("#mobileview #mobile-register").addEventListener ("click", function() {
    popup.style.display = "initial";
})

document.querySelector ("#form-1 #login").addEventListener ("click", function(event) {
    document.querySelector ("#form-1").style.display = "none";
    document.querySelector ("#login-form").style.display = "initial";
    event.preventDefault();
})


document.querySelector (".input-form #begin-btn").addEventListener ("click", function(e) {
    popup.style.display = "initial";
    e.preventDefault();
})

document.querySelector (".navbar #log").addEventListener ('click', function () {
    document.querySelector ('.login-pop-up').style.display = "initial";
})

document.querySelector (".navbar #user").addEventListener ('click', function () {
    document.querySelector ('.login-pop-up').style.display = "initial";
})