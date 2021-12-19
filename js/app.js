$(document).ready(function(){


    const screenHeight = $(window).height();
  
  
    $(window).scroll(function(){
      let currentPosition = $(this).scrollTop();
  
      if(currentPosition >= screenHeight-100){
        $('.site-nav').addClass('site-nav-scroll');
      }else{
        $('.site-nav').removeClass('site-nav-scroll');
  
      }
    })
  
  })













//for navbar custom

const navSlide = () => {
    const burger=document.querySelector(".burger");
    const nav   =document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li")
  
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    
    
    
  }
  
  navSlide();

  // for slick

  $('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
   
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
   $('.customers').slick({
      dots:true,
      
     infinite: true,
     arrows:false,
     slidesToShow: 1,
     slidesToScroll: 1,
     responsive: [
                           {
                             breakpoint: 780,
                             settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1
                             }
                           },
                           {
                             breakpoint: 767,
                             settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1
                             }
                           },
                       
  
                         ]
   });

// fro swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
// when window width is >= 320px
320: {
slidesPerView: 2,
spaceBetween: 20
},
// when window width is >= 480px
480: {
slidesPerView: 3,
spaceBetween: 30
},
// when window width is >= 640px
640: {
slidesPerView: 3,
spaceBetween: 40
}
}
});

//for waypoint

  var waypoints = $('#home').waypoint(function(direction) {

    $('.nav-link').removeClass('current-section');
    $('.nav-link[href="#home"]').addClass("current-section");

    }, {
    offset: '-1%'
    })

  var waypoints = $('#about').waypoint(function(direction) {

  $('.nav-link').removeClass('current-section');
  $('.nav-link[href="#about"]').addClass("current-section");
 
  }, {
  offset: '0%'
  })

  var waypoints = $('#blog').waypoint(function(direction) {

  $('.nav-link').removeClass('current-section');
  $('.nav-link[href="#blog"]').addClass("current-section");

  }, {
  offset: '0%'
  })

  // for wow

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  $(window).on('load', function() {
  
    new WOW().init();
  });
