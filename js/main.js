$(document).ready(function () {
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });

  $(".close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      "-300px"
    );
  });
});
