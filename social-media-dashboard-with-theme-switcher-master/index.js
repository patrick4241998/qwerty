$("input").click(function(){
    $("body").toggleClass("light-mode");
    $(".dark-h").toggleClass("light-h");
    $(".dark-p").toggleClass("light-p");
    $(".dark-mode-title").toggleClass("light-mode-title");
    $(".profile-card").toggleClass("profile-card-light");
    $(".overview-card").toggleClass("profile-card-light");
  });