
$(document).ready(function(){
   $("#menu-close").click(function(){
      $("body").addClass("toggle");
   });
});

$(document).ready(function(){
   $("#sidebar-close").click(function(){
      $("body").removeClass("toggle");
   });
});


$('.responsive').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
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

 $(document).ready(function(){
   $('.center-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     centerMode: true,
     arrows: true,
     dots: false,
     speed: 300,
     centerPadding: '20px',
     infinite: true,
     autoplaySpeed: 5000,
     autoplay: true
   });
 });

 $('#gallery').slick({
   slidesToShow: 8,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 1000,
   pauseOnHover: false,
   arrows: false,
   cssEase: 'linear'
 });


 $(document).ready(function(){
   $("#tabs-nav li").hover(function(){
      $(this).toggleClass("hover-active");
   });
 });

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').mouseenter(function(){
  $('#tabs-nav li').removeClass('active');
 // $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});