$(".overlay").hide();

$(".menu-btn").click(function(e){
  $(".menu-btn i").toggleClass("fa-bars fa-times-circle");
  $("nav").toggle();
  e.preventDefault();
})
