function setCurrentNav() {
  var scrollVal = $(document).scrollTop();
  $(".js-category").each(function() {
    var offset = ($(this).position().top) - 140;
    var title = $(this).data("title");
    var prev = $(this).prev().attr("id");
    var next = $(this).next().attr("id");
    if(scrollVal >= offset) {
      $('.js-nav-title').html(title);
    }
  });
}

$(".js-nav-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
  setCurrentNav();
});

var navOpen = false;

$(".js-footer").click(function(e) {
  if(navOpen) {
    $('.floating-nav').addClass('max-h-0 opacity-0 bottom-10');
    $('.floating-nav').removeClass('opacity-100 bottom-28 max-h-full');
    $('.js-nav-arrow ').removeClass('rotate-180');
    navOpen = false;
  } else {
    $('.floating-nav').removeClass('max-h-0 opacity-0 bottom-10');
    $('.floating-nav').addClass('opacity-100 bottom-28 max-h-full');
    $('.js-nav-arrow ').addClass('rotate-180');
    navOpen = true;
  }
});

$(document).scroll(function() {
  setCurrentNav();
  var docScroll = $(document).scrollTop();
  if(docScroll > 80) {
    $('.js-footer').removeClass('opacity-0 -bottom-10');
    $('.js-footer').addClass('opacity-100 bottom-8');
  } else {
    $('.js-footer').addClass('opacity-0 -bottom-10');
    $('.js-footer').removeClass('opacity-100 bottom-8');
    $('.floating-nav').addClass('max-h-0 opacity-0 bottom-10');
    $('.floating-nav').removeClass('opacity-100 bottom-28 max-h-full');
    $('.js-nav-arrow ').removeClass('rotate-180');
    navOpen = false;
  }
});
