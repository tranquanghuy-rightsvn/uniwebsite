!(function (e) {
  function i(i) {
    if (e(i).length && e(window).width() <= 480) {
      e.when(
        (e(i).addClass("swiper-container"),
        e(i + " > .item_wrapper").addClass("swiper-wrapper"),
        void e(i + " > .item_wrapper .nav-item").each(function () {
          e(this)
            .addClass("swiper-slide")
            .removeClass("aos-init")
            .removeClass("aos-animate")
            .removeAttr("data-aos");
        }))
      ).done(function () {
        setTimeout(function () {
          new Swiper(i, {
            slidesPerView: 2.5,
            spaceBetween: 14,
            pagination: { el: i + " .swiper-pagination" },
          });
        }, 500);
      });
    }
  }
  i("#_destination"), i("#_brand");
})(jQuery);
