// スムーズスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
　　 var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
// FADE-IN ANIMATION
scroll_effect();

$(window).scroll(function(){
  scroll_effect();
});

function scroll_effect(){
  $('.fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 60){
      $(this).addClass('effect-scroll');
    }
  });
}