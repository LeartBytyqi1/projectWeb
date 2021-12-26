/*JS for the Menu*/
    var navList=document.getElementById("nav-list");
    function showM(){
        navList.style.right="0";
    }
    function hideM(){
        navList.style.right="-200px";
    }
    var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  const btn = document.getElementById('menu-btn')
  const nav = document.getElementById('menu')

  function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
  }

  btn.addEventListener('click', navToggle)

function validate(){
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPass=document.getElementById('confirmPass').value;

    const regexName = /^[A-Z]{1}[a-zA-Z]/;
    const regexUsername = /^.{8,15}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /(^[A-Z])([0-9]{3}$)/;

    if(!regexName.test(name)){
        alert("Write another name!");
        return false;
    }
    else if(!regexUsername.test(username)){
        alert("Write another username!");
        return false;
    }
    else if(!regexEmail.test(email)){
        alert("Write another email!");
        return false;
    }
    else if(!regexPassword.test(password)){
        alert("Write another password!");
        return false;
    }
    else if(password!==confirmPass){
        alert("Password does not match!");
        return false;
    }
    else{
        alert("Login successfully!");
        return true;
    }
}