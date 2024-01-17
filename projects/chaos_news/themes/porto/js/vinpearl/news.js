!(function (e) {
  setTimeout(() => {
    var headerHeight = e(".header-wrapper").height();
    e(".sku-hotel-block").css("top", headerHeight + 20);
  }, 20000);
  if (
    (e("body:not(.path-frontpage) .vp-top-banner > .view-content")
      .addClass("owl-carousel")
      .owlCarousel({
        items: 1,
        loop: !0,
        nav: !1,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
    e("#news-top-banner .vp-top-banner > .view-content")
      .addClass("owl-carousel")
      .owlCarousel({
        items: 1,
        loop: !0,
        nav: !1,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
    e(".vp-top-banner > .view-content > .views-row")
      .addClass("owl-carousel")
      .owlCarousel({
        items: 1,
        loop: !0,
        nav: !1,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
    e("body.page-node-type-news").length &&
      e(".news-full .main-body-wrapper").length)
  ) {
    let a = 5.6 * e(window).height();
    e(".page-node-type-news .container.detail .content").height() < a &&
      e(".main-body-wrapper .content-wrapper").removeClass("read-more"),
      e(".main-body-wrapper .content-wrapper.read-more .read_more").click(
        function () {
          e(".main-body-wrapper .content-wrapper").removeClass("read-more");
        }
      );
  }
  e(".hotel-tag").each(function () {
    console.log(e(this).html()),
      "" == e(this).text().trim() && e(this).css("display", "none");
  });
  setTimeout(function () {
    if (e(".news-full").length > 0) {
      let date = new Date().toISOString();
      let url = window.location.href;
      const retryLimit = 3;
      function retryInsiderTrack(attempt) {
        if (typeof Insider !== "undefined") {
          Insider.track("events", [
            {
              event_name: "seo_pageview",
              event_params: { custom: { seo_url: url } },
            },
          ]);
        } else if (attempt < retryLimit) {
          setTimeout(function () {
            retryInsiderTrack(attempt);
          }, 1000);
          attempt++;
        }
      }
      retryInsiderTrack(0);
    }
  }, 10000);
})(jQuery);
