function setCurrentNav() {
  var scrollVal = $(document).scrollTop();
  $(".js-category").each(function() {
    var offset = ($(this).position().top) - 140;
    var title = $(this).data("title");
    var prev = $(this).prev().attr("id");
    var next = $(this).next().attr("id");
    if(scrollVal >= offset) {
      $('.js-nav-title').html(title);
      $('.js-nav-prev').attr('href', '#' + prev);
      $('.js-nav-next').attr('href', '#' + next);
    }
  });
}

$(".js-nav-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
  setCurrentNav();
});

$(document).scroll(function() {
  setCurrentNav();
  var docScroll = $(document).scrollTop();
  if(docScroll > 300) {
    $('.js-footer').removeClass('opacity-0 -bottom-10');
    $('.js-footer').addClass('opacity-100 bottom-4');
  } else {
    $('.js-footer').addClass('opacity-0 -bottom-10');
    $('.js-footer').removeClass('opacity-100 bottom-4');
  }
});
