$(document).ready(function() {
  $(".backtosite").click(function() {
    $("#header__wrapper").toggleClass("reverse");
    $("#popup").toggleClass("block");
    $("#join").toggleClass("none");
    $("#header__name").toggleClass("visibility");
    $(".backtosite").toggleClass("flex");
    $("#popup").next().toggleClass("none");
  });
  $(".header__btn").click(function() {
    $("#header__wrapper").toggleClass("reverse");
    $("#popup").toggleClass("block");
    $("#join").toggleClass("none");
    $("#header__name").toggleClass("visibility");
    $(".backtosite").toggleClass("flex");
    $("#popup").next().toggleClass("none");
  });

  $("#search").mouseout(function() {
    $(".search__field").css("visibility", "hidden");
    $("search__svg").css("visibility", "visible");
  });
  $("#search").mouseover(function() {
    $(".search__field").css("visibility", "visible");
    $(".search__svg").css("visibility", "hidden");
  });

  $("#search1").mouseout(function() {
    $(".search__field").css("visibility", "hidden");
    $(".search__magnifier").css("visibility", "visible");
  });
  $("#search1").mouseover(function() {
    $(".search__field").css("visibility", "visible");
    $(".search__magnifier").css("visibility", "hidden");
  });

  $(".list__wrapper").click(function() {
    $(".popup-photo").toggleClass("block");
    $(".header").toggleClass("fixed");
  });

  $(".popup-photo__svg").click(function() {
    $(".popup-photo").toggleClass("block");
    $(".header").toggleClass("fixed");
  });
});
