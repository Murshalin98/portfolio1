$(function(){
    //Back to Top
       $('.back-btn').click(function(){
         $('html,body').animate({scrollTop:0},1500);
       });


 //Sticky Navigation
$(window).on('scroll', function (event) {
    var navbar = $(window).scrollTop();
    if (navbar > 115) {
      $(".navigation").addClass("sticky");
    } else {
      $(".navigation").removeClass("sticky");
    }
  });

});