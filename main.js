
//Smooth scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});


// click on hamburger menu

const hamburger = document.getElementById('header');
const navUl = document.getElementById('header-wrapper');

hamburger.addEventListener('click',() =>{
    navUl.classList.toggle('active');
})


// Background auto change
// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function(e) {

  var stage = document.getElementById("main-images");
  var fadeComplete = function(e) { stage.appendChild(arr[0]); };
  var arr = stage.getElementsByTagName("a");
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

}, false);





// Gallery 

var sledeci ;
var prethodni ;
var array;

// This function will show the image in the lightbox
let zoomImg = function () {
  // Create evil image clone
  let clone = this.cloneNode();

  // ovo sam ja dodao
  array = new Array();
  let i = 0 ;
  array[0]=clone;
  i++;
  let nextBtn = this.nextElementSibling;
  let prevBtn = this.previousElementSibling;
  
  sledeci = nextBtn;
  prethodni = prevBtn;

  while(nextBtn !== null){
    array[i]=nextBtn;
    i++;
    nextBtn = nextBtn.nextElementSibling;
  }
  while(prevBtn !== null){
    array[i]=prevBtn;
    i++;
    prevBtn = prevBtn.previousElementSibling;
  }

  if(sledeci == null || sledeci == undefined){
    sledeci = array[i-1];
  }
  if(prethodni == undefined || prethodni == null){
    prethodni = array[i-1];
  }

  clone.classList.remove("zoomD");

  // Put evil clone into lightbox
  let lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);

  // Show lightbox
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  // Attach on click events to all .zoomD images
  let images = document.getElementsByClassName("zoomD");
  if (images.length>0) {
    for (let img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // Click event to hide the lightbox
  let e = document.getElementById("lb-back");
  document.getElementById("toggle").addEventListener("click", function(){
    e.classList.remove("show");
    array.splice(0,array.length);
  });
});



// Show previous image
function slideLeft(){

  if(sledeci == null || sledeci == undefined){
    sledeci = array[0];
  }
  if(prethodni == undefined || prethodni == null){
    prethodni = array[array.length-1];
  }
  let lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  let i=array.length-1;

  while(prethodni !== array[i]){
    i--;
  }

  let pom = prethodni.cloneNode();
  lb.appendChild(pom);

  sledeci = array[i+1];
  prethodni = array[i-1];

  lb = document.getElementById("lb-back");
  lb.classList.add("show");
}


// Show next image
function slideRigth(){

  if(sledeci == null || sledeci == undefined){
    sledeci = array[0];
  }
  if(prethodni == undefined || prethodni == null){
    prethodni = array[array.length-1];
  }

  let lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  let i=0;

  while(sledeci !== array[i]){
    i++;
  }

  let pom = sledeci.cloneNode();
  lb.appendChild(pom);

  sledeci = array[i+1];
  prethodni = array[i-1];
    
  // Show lightbox
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
}


// Keypress arrows left and right , and also escape
document.addEventListener('keydown',function(event){
  if(event.key==='ArrowLeft'){
    slideLeft();
  }else if(event.key==='ArrowRight'){
    slideRigth();
  }else if(event.key==='Escape'){
    console.log(event.key);
    document.getElementById("lb-back").classList.remove("show");
  }
});

prevBtn.addEventListener('click',function(){
slideLeft();
})
nextBtn.addEventListener('click',function(){
slideRigth();
})

