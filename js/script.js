$(document).ready(function () {
  $("#custCarousel").on("slide.bs.carousel", function () {
    $holder = $("ol li.active");
    $holder.removeClass("active");
    var idx = $("div.active").index("div.item");
    $('ol.carousel-indicators li[data-slide-to="' + idx + '"]').addClass(
      "active"
    );
  });

  $("ol.carousel-indicators  li").on("click", function () {
    $("ol.carousel-indicators li.active").removeClass("active");
    $(this).addClass("active");
  });
});
