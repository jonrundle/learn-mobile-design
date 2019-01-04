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
    $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
    setCurrentNav();
});

$(document).scroll(function() {
  setCurrentNav();
});

$(function(){
    $(".js-submit-form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("We received your submission, thank you!");
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});
