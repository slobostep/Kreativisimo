
//Smooth scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});

// // Header shrink on scroll
// const header = document.querySelector('header-wrapper');
// window.onscroll = function(){
//     var top = window.scrollY;
//     if(top>=100){
//       header.classList.add('shrink');
//     }else{
//         header.classList.remove('shrink');
//     }
// }
// // Header background change on scroll
// const header = document.querySelector('.header');
// window.onscroll = function(){
//     var top = window.scrollY;
//     if(top>=0){
//         header.classList.add('paint');
//     }else{
//         header.classList.remove('paint');
//     }
// }

// click on hamburger menu

const hamburger = document.getElementById('header');
const navUl = document.getElementById('header-wrapper');

hamburger.addEventListener('click',() =>{
    navUl.classList.toggle('active');
})



// Auto change background 
// Testiranje  smooth transition za pozadinu

// startImageTransition(); 
  
//   function startImageTransition() { 
//     var images = document.getElementsByClassName("main-background"); 

//     for (var i = 0; i < images.length; ++i) { 
//       images[i].style.opacity = 1; 
//     } 

//     var top = 1; 

//     var cur = images.length - 1; 

//     setInterval(changeImage, 4000); 

//      async function changeImage() { 
//     // async function changeImage() { 
//       var nextImage = (1 + cur) % images.length; 
//       images[cur].style.zIndex = top + 1; 
//       images[nextImage].style.zIndex = top; 

//       await transition(); 
//       // await transition(); 
//       images[cur].style.zIndex = top; 

//       images[nextImage].style.zIndex = top + 1; 

//       top = top + 1; 

//       images[cur].style.opacity = 1; 
      
//       cur = nextImage; 
//     }  
  
//   function transition() { 
//     return new Promise(function(resolve, reject) { 
//       var del = 0.01; 

//       var id = setInterval(changeOpacity, 10); 

//       function changeOpacity() { 
//         images[cur].style.opacity -= del; 
//         if (images[cur].style.opacity <= 0) { 
//           clearInterval(id); 
//           resolve(); 
//         } 
//       } 
//     }) 
//   } 
// }




// // Pakovanje gallery

// function imageGallery() {
//   const highlight = document.querySelector(".gallery-hightlight");
//   const previews = document.querySelectorAll(".package-preview img");

//   previews.forEach(preview => {
//     preview.addEventListener("click", function() {
//       const smallSrc = this.src;
//       const bigSrc = smallSrc.replace("small", "big");
//       previews.forEach(preview => preview.classList.remove("package-active"));
//       highlight.src = bigSrc;
//       preview.classList.add("package-active");
//     });
//   });
// }
// imageGallery();



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

  // console.log(sledeci);
  // console.log(prethodni);

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
    // sledeci = array[3];
  }
  if(prethodni == undefined || prethodni == null){
    prethodni = array[i-1];
    // prethodni = array[3];
  }

  console.log(array);
  console.log(array.length);
  console.log(prethodni);
  console.log(clone);
  console.log(sledeci);
  

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

prevBtn.addEventListener('click',function(){
slideLeft();
})


nextBtn.addEventListener('click',function(){
slideRigth();
})

// prevBtn.addEventListener('keydown', function(event) {
//   const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
//   switch (event.key) {
//     case "ArrowLeft":
//       slideLeft();
//         break;
//     case "ArrowDown":
//       slideLeft();
//         break;
//   }
// });

// nextBtn.addEventListener('keydown', function(event) {
//   const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
//   switch (event) {
    
//     case "ArrowRight":
//       slideRigth();
//         break;
//     case "ArrowUp":
//       slideRigth();
//         break;

//   }
// });

