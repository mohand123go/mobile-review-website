$(function(){
  'use strict'
  
  var windowHeight =  $(window).height();
  var  navH = $('.navbar').innerHeight() ; 
$('.slider  , .carousel-item').height(windowHeight - navH);  
$(".about-us").height(windowHeight);    
  
 
  })
var owl = $('.gallery .owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});

var owl = $('footer .owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});

  

  
  
