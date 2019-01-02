function setCurrentNav() {
  var scrollVal = $(document).scrollTop();
  $(".js-category").each(function() {
    var offset = ($(this).position().top) - 100;
    var id = $(this).attr("id");
    if(scrollVal >= offset) {
      $('.js-nav-link').removeClass('js-current');
      $("a[href='#" + id + "']").addClass('js-current');
    }
  });
}

$(".js-nav-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    setCurrentNav();
});

$(document).scroll(function() {
  setCurrentNav();
})
