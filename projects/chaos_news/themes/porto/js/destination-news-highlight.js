(function ($, Drupal) {
  Drupal.behaviors.destinationNewsHighlight = {
    attach: function (context, settings) {
      Drupal.destinationNewsHighlight.run(context, settings);
    },
  };
  Drupal.destinationNewsHighlight = Drupal.destinationNewsHighlight || {};
  Drupal.destinationNewsHighlight.run = function (context, settings) {
    $(document, context)
      .once("destinationNewsHighlight")
      .each(function () {
        Drupal.destinationNewsHighlight.slider();
      });
  };
  Drupal.destinationNewsHighlight.slider = function () {
    var cat_swiper = new Swiper(".highlight-content .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".highlight-content .swiper-pagination",
        type: "bullets",
      },
    });
    var cat_swiper_mb = new Swiper(".highlight-content-mb .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 7,
    });
  };
})(jQuery, Drupal);
