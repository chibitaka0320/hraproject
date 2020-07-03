$(function(){
  $(".logo a").click(function(){
    $("html,body").animate({"scrollTop":0},"slow");
  });

  $(".head-right a").click(function(){
    var id = $(this).attr("href")
    var pass = $(id).offset().top;
    var position = pass-70;
    $("html,body").animate({"scrollTop":position},"slow")
  });

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
});
});
