$(document).ready(function() {
  $(window).scroll(function() {
    let st = $(this).scrollTop(); /* количетсво прокрученных пикселей */
    let h = $('.city').outerHeight(); /* высота секции city */
    let p = st/h*100 /* процент прокрутки секции city*/      
    let lastScrollTop = 0;
    $("header").css("transform", "translateY(" + st / 2 + "px)");
    $(".background").css("transform", "translateY(" + st / 1.5 + "px)");
    $(".moscow").css("transform", "translateY(" + st / 1.7 + "px)");
    $(".house_2").css("transform", "translateY(" + st / 1.7 + "px)");
    $(".house_3").css("transform", "translateY(" + st / 1 + "px)");
    $(".house_1").css("transform", " translateY(" + st / 2 + "px)");
    $(".bridge").css("transform", "translateY(" + st / 2 + "px)");
    $(".lighters").css("transform", "translateY(" + st / 2 + "px)");
    $(".hero").css("transform", "translateY(" + st / 3 + "px)");
  });
});
