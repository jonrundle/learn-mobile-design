function setCurrentNav() {
  var scrollVal = $(document).scrollTop();
  $(".js-category").each(function() {
    var offset = ($(this).position().top) - 140;
    var title = $(this).data("title");
    var id = $(this).attr("id");
    var prev = $(this).prev().attr("id");
    var next = $(this).next().attr("id");
    if(scrollVal >= offset) {
      $('.js-nav-title').html(title);
      console.log(prev);
      console.log(next);
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
});
