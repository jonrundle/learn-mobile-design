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

function showForm() {
  $('.js-form-wrapper').addClass('flex');
  $('.js-form-wrapper').removeClass('flex-none dn');
  var fadeBG = anime({
    targets: '.js-form-bg',
    opacity: [0, 1],
    duration: 300,
    easing: 'linear'
  });
  var showForm = anime({
    targets: '.js-form-box',
    opacity: [0, 1],
    translateY: [80, 0],
    scale: [0.9, 1],
    duration: 400,
    easing: [0.175, 0.885, 0.32, 1.6]
  });
}

function hideForm() {
  var showForm = anime({
    targets: '.js-form-box',
    opacity: [1, 0],
    translateY: [0, 80],
    scale: [1, 0.9],
    duration: 400,
    easing: [0.175, 0.885, 0.32, 1.6]
  });
  var fadeBG = anime({
    targets: '.js-form-bg',
    opacity: [1, 0],
    duration: 300,
    easing: 'linear'
  });
  setTimeout(function(){
    $('.js-form-wrapper').addClass('flex-none dn');
    $('.js-form-wrapper').removeClass('flex');
  }, 200);
}

$(".js-submit-link").click(function(e) {
  e.preventDefault();
  showForm();
});

$(".js-close-form").click(function(e) {
  e.preventDefault();
  hideForm();
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
                    hideForm();
                    $('.js-submit-form')[0].reset();
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});
