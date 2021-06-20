var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function update(n) {
  showSlides(slideIndex += n);
}
//Dot transition
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){slideIndex = 1} //loops back to first image after last
  if (n < 1) {slideIndex = slides.length} //loops to last image before first
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}

function display(element){
  element.setAttribute("src","Images/Trailer.jpg").style.transition="10s ease";

}
function remove(element,link){
  element.setAttribute("src",link);
}
function adult(){
  var age=prompt("This is an R rated film. Please enter your age")
  if (age>=18){
    document.getElementById("rone").style.display="block";
  }
  else{
    alert("We're sorry. You are underaged for this film.")
  }
}
function play_intro(){
  document.getElementById("black").style.display="none";
  document.getElementById("click").style.display="none";
  document.getElementById("play").style.display="block";
  document.getElementById("play").play();
  setTimeout(reveal,6200);
}
function reveal(){
  document.getElementById("popcorn").style.display="block";
  document.getElementById("letter").style.display="inline-block";
}
