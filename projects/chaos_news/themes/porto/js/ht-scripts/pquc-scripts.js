!(function (e, s, i) {
  (s.behaviors.node_pquc_js = {
    attach: function (i, t) {
      e(document, i)
        .once("node_pquc_js")
        .each(function () {
          s.node_pquc_js.swiper();
        });
    },
  }),
    (s.node_pquc_js = s.node_pquc_js || {}),
    (s.node_pquc_js.swiper = function () {
      if (e(".related-festival-swiper").length) {
        if (e("body.path-phu-quoc").length) var s = 3;
        else s = 4;
        new Swiper(".related-festival-swiper", {
          spaceBetween: 20,
          slidesPerView: s,
          centeredSlides: !0,
          centeredSlidesBounds: !0,
          breakpoints: {
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            478: { slidesPerView: 3, spaceBetween: 8 },
            640: { slidesPerView: s },
          },
        });
      }
      if (e(".res_gallery .swiper-container").length) {
        var i = !1;
        e(".res_gallery .swiper-container").length > 3 && (i = !0);
        new Swiper(".res_gallery .swiper-container", {
          spaceBetween: 20,
          slidesPerView: 4.7,
          loop: i,
          slidesPerView: "auto",
          breakpoints: {
            0: { slidesPerView: 1.37, spaceBetween: 12 },
            376: { slidesPerView: 2, spaceBetween: 20 },
            480: { spaceBetween: 20 },
            1900: { slidesPerView: 5.7, spaceBetween: 20 },
          },
          on: {
            init: function () {
              let s = e(window).width();
              s > 1920 && (s = 1920);
              let i = (s - (290 * parseInt(s / 290) - 20)) / 2;
              e(".res_gallery .swiper-wrapper").addClass("cal_w"),
                e("style.cal_w").length
                  ? e("style.cal_w").html(".cal_w{margin-left:" + i + "px}")
                  : e("head").append(
                      '<style class="cal_w">.cal_w{margin-left:' +
                        i +
                        "px}</style>"
                    ),
                e(".res_gallery").append(
                  '<div class="left-blur" style="width:' +
                    i +
                    'px"></div><div class="right-blur" style="width:' +
                    i +
                    'px"></div>'
                );
            },
            sliderMove: function () {
              e(".left-blur").hide(), e(".right-blur").hide();
            },
            slideChangeTransitionEnd: function () {
              e(".left-blur").fadeIn(300), e(".right-blur").fadeIn(300);
            },
          },
        });
      }
      e(".tags_wrapper_hotel .item-list").length > 0 &&
        e(".tags_wrapper_hotel .item-list").each(function (s) {
          let i = ".swiper-item-" + s;
          e(this).addClass("swiper-container swiper-item-" + s),
            e(this).find("ul").addClass("swiper-wrapper"),
            e(this).find("li").addClass("swiper-slide"),
            new Swiper(i, {
              spaceBetween: 8,
              slidesPerView: "auto",
              freeMode: !0,
            });
        });
    });
})(jQuery, Drupal, drupalSettings);
