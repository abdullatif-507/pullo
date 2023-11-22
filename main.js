  //  short bar menu slider for mobile screen

  var a;
  let value = document.querySelector(".links");
  let icons = document.querySelector(".h-icons")
  function show_hide(){
    if(a==1){
      value.style.display= "block";
      icons.style.left= "-119px";
      return a=0;
    }else{
      value.style.display= "none";
      icons.style.left= "64px";
      return a=1;
    }
  }


// scroll back btn code

let btn = document.querySelector(".upbtn");

window.onscroll = function(){
  if(window.scrollY >= 600){
    btn.style.display = 'block'
  }else{
    btn.style.display = 'none'
  }
}

btn.onclick = function(){
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}

// owlCarousel code

$('.owl-carousel').owlCarousel({
  margin: 10,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTime: 2000,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive: {
      0: {
          items: 0
      },
      100: {
          items: 1
      }
    }
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });