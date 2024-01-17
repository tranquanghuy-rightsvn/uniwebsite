!(function (e, t) {
  e(".p-micriosites__dining .owl-carousel").owlCarousel({
    loop: !1,
    nav: !0,
    pagination: !1,
    margin: 28,
    navText: [
      ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next-slider_black.svg" height="" width=""/>',
      ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next-slider_black.svg" height="" width=""/>',
    ],
    responsive: {
      0: { items: 1, margin: 16, nav: !1 },
      768: { items: 3, margin: 16 },
      1024: { items: 3 },
      1200: { items: 3, nav: !0 },
    },
  }),
    e(".p-home__room .style-xs-full-width").owlCarousel({
      loop: !0,
      nav: !0,
      pagination: !1,
      margin: 28,
      slideSpeed: 800,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next-slider_black.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next-slider_black.svg" height="" width=""/>',
      ],
      responsive: {
        0: { items: 1.1, margin: 16 },
        767: { items: 1.1, margin: 16 },
        768: { items: 2 },
      },
    }),
    e(".slide-info").owlCarousel({
      loop: !0,
      margin: 32,
      nav: !0,
      autoplay: !1,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2_metting/icn_arraw_left.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2_metting/icn_arraw_right.svg" height="" width=""/>',
      ],
      dots: !1,
      autoplayHoverPause: !1,
      responsive: {
        0: { items: 1, margin: 16 },
        767: { items: 3, margin: 16 },
        1e3: { items: 3 },
      },
    }),
    e(".slide-first").owlCarousel({
      loop: !0,
      nav: !0,
      pagination: !1,
      margin: 28,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_left_black.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_right_black.svg" height="" width=""/>',
      ],
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 2 } },
    }),
    e(".slide-second").owlCarousel({
      loop: !0,
      nav: !0,
      pagination: !1,
      margin: 25,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_left_black.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_right_black.svg" height="" width=""/>',
      ],
      responsive: {
        0: { items: 1, pagination: !1, nav: !1, margin: 16 },
        600: { items: 2, pagination: !1, nav: !1, margin: 16 },
        1e3: { items: 2.284 },
      },
    }),
    e(".block-entertainment .p-vinpearl__wrap").addClass(
      "owl-carousel owl-theme"
    ),
    e(".block-entertainment .p-vinpearl__wrap").owlCarousel({
      items: 1,
      loop: !0,
      margin: 24,
      responsiveClass: !0,
      pagination: !1,
      responsive: {
        0: { items: 1, nav: !1, pagination: !1, margin: 16 },
        768: { items: 1, margin: 16 },
        1e3: { items: 1 },
      },
    }),
    e(".customNextBtn").click(function () {
      e(".block-entertainment .p-vinpearl__wrap").trigger("next.owl.carousel");
    }),
    e(document).ready(function () {
      const t = e(".page-node-type-hotel .banner-hotel-wrapper").height();
      e(".page-node-type-hotel .wrapper .header").height(),
        e(window).scroll(function () {
          e(window).scrollTop() > 70
            ? e(".page-node-type-hotel").addClass("sticky")
            : e(".page-node-type-hotel").removeClass("sticky"),
            e(window).scrollTop() > t
              ? (e(".page-node-type-hotel .new-header-wrapper").addClass(
                  "sticky"
                ),
                e(".page-node-type-hotel").removeClass("sticky"))
              : e(".page-node-type-hotel .new-header-wrapper").removeClass(
                  "sticky"
                );
        }),
        e(".c-btn-read-more").click(function (t) {
          t.preventDefault(),
            e(this).toggleClass("show"),
            e(
              ".p-detail-about__desc, .short-description, #p-dining .short-description-excerpt, .js-toggle-ellipsis"
            ).toggleClass("ellipsis");
        }),
        e(".header-wrapper .panel-body>ul>li.menu-item--expanded>a").click(
          function (e) {}
        ),
        e(".gsb-icon").click(function () {
          e("html").addClass("gsb-popup-show, h-100");
        }),
        e(".gbs-modal-bg").click(function () {
          e("html").removeClass("gsb-popup-show, h-100");
        });
    }),
    e(".booking-btn, #hide-scrollbar__popup-room").click(function () {
      e("html").addClass("gsb-popup-show");
    }),
    e(
      ".booking-slideout.cus__booking__rooms, .panel-close-btn, .popup-view-room-detail, .popup-view-room-detail, .popup-close-button, .panel-upper-right, .information-header__close__btn"
    ).click(function () {
      e("html").removeClass("gsb-popup-show");
    }),
    e(".custom__css__offer .wrap-image-cpn-text").css({
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
    });
  var i = e(".custom__css__offer .wrap-image-cpn-text");
  for (let t = 1; t <= i.length; t++) {
    var o = e(`.custom__css__offer .wrap-image-cpn-text--${t}`).text().trim();
    e(`.custom__css__offer .wrap-image-cpn-text--${t}`).text(o);
  }
  let s = e(".p-micriosites__dining__head h3").text();
  s.length > 30
    ? e(".p-micriosites__dining__head h3").text(s.slice(0, 30) + "...")
    : e(".p-micriosites__dining__head h3").text(s),
    e("#p-dining").length && e(".vp-container").addClass("hide-height"),
    e(".slider__meeting__sp .slider__meeting__sp-item").owlCarousel({
      loop: !0,
      margin: 24,
      nav: !1,
      dots: !1,
      responsive: { 0: { items: 1 } },
    }),
    e(".slide-retreats-wellness").owlCarousel({
      loop: !0,
      nav: !0,
      pagination: !1,
      margin: 24,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_left_black.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_right_black.svg" height="" width=""/>',
      ],
      responsive: {
        0: { items: 1, pagination: !1, nav: !1, margin: 16 },
        767: { margin: 16, items: 1, pagination: !1, nav: !1 },
        1e3: { items: 2 },
      },
    }),
    e(".slide__treatments").owlCarousel({
      loop: !0,
      nav: !0,
      pagination: !1,
      margin: 28,
      navText: [
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_left_black.svg" height="" width=""/>',
        ' <img src="/themes/porto/images/microsite_hotel_v2/icn_next_right_black.svg" height="" width=""/>',
      ],
      responsive: {
        0: { margin: 16, items: 1, pagination: !1, nav: !1 },
        767: { margin: 16, items: 1, pagination: !1, nav: !1 },
        1e3: { items: 2 },
      },
    }),
    e(".vinpearl-gallery-container").length > 0 &&
      e(".vinpearl-gallery-container").each(function () {
        var t = e(this);
        setTimeout(() => {
          t.parent().css("position", "relative"),
            t
              .css("width", "100%")
              .elasticColumns({
                columns: e(window).width() > 1200 ? 3 : 2,
                innerMargin: e(window).width() > 1200 ? 18 : 7,
                outerMargin: 0,
              });
          var i = t.attr("data-filter-id");
          null != i &&
            "undefined" != i &&
            "" != i &&
            e("#" + i).length > 0 &&
            e("#" + i + " li a")
              .off("click")
              .on("click", function () {
                var i = e(this).attr("data-tags");
                e(this)
                  .parent()
                  .addClass("active")
                  .siblings()
                  .removeClass("active"),
                  t.find("div").addClass("elastic-columns-ignore").hide(),
                  t
                    .find('div[data-tags="' + i + '"]')
                    .removeClass("elastic-columns-ignore")
                    .fadeIn(500),
                  t.elasticColumns({
                    columns: e(window).width() > 1200 ? 3 : 2,
                    innerMargin: e(window).width() > 1200 ? 18 : 7,
                    outerMargin: 0,
                  });
              });
        }, 3e3);
      }),
    e(".p-gallery__detail .vinpearl-gallery-container").length,
    e(".p-gallery__detail .vinpearl-gallery-container").each(function () {
      var t = e(this);
      setTimeout(() => {
        t.parent().css("position", "relative"),
          t
            .css("width", "100%")
            .elasticColumns({
              columns: e(window).width() > 1200 ? 3 : 2,
              innerMargin: e(window).width() > 1200 ? 18 : 7,
              outerMargin: 0,
            });
        var i = t.attr("data-filter-id");
        null != i &&
          "undefined" != i &&
          "" != i &&
          e("#" + i).length > 0 &&
          e("#" + i + " li a")
            .off("click")
            .on("click", function () {
              var i = e(this).attr("data-tags");
              e(this)
                .parent()
                .addClass("active")
                .siblings()
                .removeClass("active"),
                t.find("div").addClass("elastic-columns-ignore").hide(),
                t
                  .find('div[data-tags="' + i + '"]')
                  .removeClass("elastic-columns-ignore")
                  .fadeIn(500),
                t.elasticColumns({
                  columns: e(window).width() > 1200 ? 3 : 2,
                  innerMargin: e(window).width() > 1200 ? 18 : 7,
                  outerMargin: 0,
                });
            });
      }, 3e3);
    }),
    e(".c-popup-extrao__item select").each(function () {
      var t = e(this),
        i = e(this).children("option").length;
      t.addClass("hide-select"),
        t.wrap('<div class="select"></div>'),
        t.after('<div class="custom-select"></div>');
      var o = t.next("div.custom-select");
      o.text(t.children("option").eq(0).text());
      for (
        var s = e("<ul />", { class: "select-options" }).insertAfter(o), n = 0;
        n < i;
        n++
      )
        e("<li />", {
          text: t.children("option").eq(n).text(),
          rel: t.children("option").eq(n).val(),
        }).appendTo(s);
      var a = s.children("li");
      o.click(function (t) {
        t.stopPropagation(),
          e("div.custom-select.active")
            .not(this)
            .each(function () {
              e(this).removeClass("active").next("ul.select-options").hide();
            }),
          e(this).toggleClass("active").next("ul.select-options").slideToggle();
      }),
        a.click(function (i) {
          i.stopPropagation(),
            o.text(e(this).text()).removeClass("active"),
            t.val(e(this).attr("rel")),
            s.hide();
        }),
        e(document).click(function () {
          o.removeClass("active"), s.hide();
        });
    }),
    e(".js-show-all").click(function () {
      e(
        "#p-hotel-offer .wrap-image, .custom__css__room .default-show"
      ).toggleClass("default-show"),
        e(this).hide();
    }),
    e(".p-page-room__box").length < 6
      ? e(".js-show-al").hide()
      : e(".js-show-al").show(),
    e(function () {
      e(".c-popup-extrao__item--date #edit-date").daterangepicker({
        autoUpdateInput: !0,
        autoApply: !0,
        locale: { cancelLabel: "Clear" },
        singleDatePicker: !0,
        showDropdowns: !0,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"), 10),
      });
    }),
    e(".c-popup-extrao").length && e("body").addClass("c-custom__date-picker"),
    e(document).on("change", ".form-input input", function (t) {
      let i = !0;
      e(".form-input input").each(function () {
        let t = e(this).val();
        if (!t || "" == t.trim()) return (i = !0), !1;
        i = !1;
      }),
        e(".c-popup-extrao .webform-button--submit").prop("disabled", i);
    }),
    e(document).on("change", ".form-input-meeting input", function (t) {
      let i = !0;
      e(".form-input-meeting input").each(function () {
        let t = e(this).val();
        if (!t || "" == t.trim()) return (i = !0), !1;
        i = !1;
      }),
        e(".c-popup-extrao .webform-button--submit").prop("disabled", i);
    }),
    e("a.nav-link.user-name.pro").click(function (t) {
      let i = window.location.href;
      var o = location.hostname;
      let s = e(this)
        .attr("href")
        .replace(
          /callback=[^&]+/,
          "callback=" + o + "/auth0/sso?redirectUrl=" + i
        );
      e(this).attr("href", s);
    }),
    new Swiper(".swiper-hotel-home", {
      speed: 1e3,
      effect: "fade",
      autoplay: { delay: 1e4 },
      loop: !0,
    });
})(jQuery, Drupal);
(function ($, Drupal) {
  $(".new-header-wrapper").addClass("transparent");
  $(window).scroll(function (event) {
    var position = $(window).scrollTop();
    if (position >= 200 && position < 1200) {
      $(".new-header-wrapper").addClass("hidden");
    } else {
      $(".new-header-wrapper").removeClass("hidden");
    }
    if (position >= 1200) {
      $(".new-header-wrapper").removeClass("transparent");
      $(".new-header-wrapper").addClass("navbar-white");
    } else {
      $(".new-header-wrapper").removeClass("navbar-white");
      $(".new-header-wrapper").addClass("transparent");
    }
  });
  $(".page-node-type-hotel .banner-hotel-wrapper video").each(function () {
    var sourceFile = $(this).attr("data-src");
    setTimeout(() => {
      $(this).attr("src", sourceFile);
    }, 2000);
  });
})(jQuery, Drupal);
