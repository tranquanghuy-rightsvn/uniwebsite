function getval(e) {
  var i = e.value;
  jQuery('.form-search-top ul > li a[id="' + i + '"]').trigger("click");
}
function changeNav() {
  var e = jQuery("#slide-play .swiper-slide-active").attr("data-index");
  jQuery('#slide-play .col-md-4[data-index="' + e + '"]').addClass("active"),
    jQuery('#slide-play .col-md-4[data-index="' + e + '"]')
      .siblings()
      .removeClass("active");
}
!(function (e) {
  if (
    ((e("body").hasClass("context-node-8395") ||
      e("body").hasClass("context-node-8550") ||
      e("body").hasClass("context-node-8551") ||
      e("body").hasClass("context-node-8634") ||
      e("body").hasClass("lp-family-beach-resort-vi") ||
      e("body").hasClass("lp-family-beach-resort-en") ||
      e("body").hasClass("lp-family-beach-resort-ko") ||
      e("body").hasClass("lp-family-beach-resort-zh") ||
      e("body").hasClass("family-beach-resort-vi") ||
      e("body").hasClass("family-beach-resort-en") ||
      e("body").hasClass("family-beach-resort-ko") ||
      e("body").hasClass("family-beach-resort-zh") ||
      e("body").hasClass("friend-beach-resort-vi") ||
      e("body").hasClass("friend-beach-resort-en") ||
      e("body").hasClass("friend-beach-resort-ko") ||
      e("body").hasClass("friend-beach-resort-zh") ||
      e("body").hasClass("couple-retreat-vi") ||
      e("body").hasClass("couple-retreat-en") ||
      e("body").hasClass("couple-retreat-ko") ||
      e("body").hasClass("couple-retreat-zh") ||
      e("body").hasClass("stay-and-play-vi") ||
      e("body").hasClass("stay-and-play-en") ||
      e("body").hasClass("stay-and-play-ko") ||
      e("body").hasClass("stay-and-play-zh") ||
      e("body").hasClass("family-beach-resort-uat-vi") ||
      e("body").hasClass("family-beach-resort-uat-en") ||
      e("body").hasClass("family-beach-resort-uat-ko") ||
      e("body").hasClass("family-beach-resort-uat-zh") ||
      e("body").hasClass("friend-beach-resort-uat-vi") ||
      e("body").hasClass("friend-beach-resort-uat-en") ||
      e("body").hasClass("friend-beach-resort-uat-ko") ||
      e("body").hasClass("friend-beach-resort-uat-zh") ||
      e("body").hasClass("couple-retreat-uat-vi") ||
      e("body").hasClass("couple-retreat-uat-en") ||
      e("body").hasClass("couple-retreat-uat-ko") ||
      e("body").hasClass("couple-retreat-uat-zh") ||
      e("body").hasClass("stay-and-play-uat-vi") ||
      e("body").hasClass("stay-and-play-uat-en") ||
      e("body").hasClass("stay-and-play-uat-ko") ||
      e("body").hasClass("stay-and-play-uat-zh") ||
      e("body").hasClass("uat-family-beach-resort-vi") ||
      e("body").hasClass("uat-family-beach-resort-en") ||
      e("body").hasClass("uat-family-beach-resort-ko") ||
      e("body").hasClass("uat-family-beach-resort-zh") ||
      e("body").hasClass("uat-friend-beach-resort-vi") ||
      e("body").hasClass("uat-friend-beach-resort-en") ||
      e("body").hasClass("uat-friend-beach-resort-ko") ||
      e("body").hasClass("uat-friend-beach-resort-zh") ||
      e("body").hasClass("uat-couple-retreat-vi") ||
      e("body").hasClass("uat-couple-retreat-en") ||
      e("body").hasClass("uat-couple-retreat-ko") ||
      e("body").hasClass("uat-couple-retreat-zh") ||
      e("body").hasClass("uat-stay-and-play-vi") ||
      e("body").hasClass("uat-stay-and-play-en") ||
      e("body").hasClass("uat-stay-and-play-ko") ||
      e("body").hasClass("uat-stay-and-play-zh")) &&
      e("body").addClass("path-frontpage"),
    e(".p-landing").length && e("body").addClass("path-frontpage"),
    e('[data-toggle="tooltip"]').tooltip(),
    e(".slick-slider").slick({
      slidesToShow: 3,
      infinite: !0,
      slidesToScroll: 1,
      autoplay: !1,
      loop: !0,
      autoplaySpeed: 2e3,
      nextArrow:
        '<button class="slide-arrow next-arrow"><img src="/themes/porto/images/landing/arrow_next.svg"/></button>',
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    }),
    e(".slider-booking").slick({
      slidesToShow: 2,
      infinite: !0,
      loop: !0,
      autoplaySpeed: 2e3,
      nextArrow:
        '<button class="slide-arrow next-arrow"><img src="/themes/porto/images/landing/arrow_next.svg"/></button>',
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    }),
    e(".slider-opinion").slick({
      slidesToShow: 3,
      infinite: !0,
      autoplay: !1,
      loop: !0,
      autoplaySpeed: 2e3,
      nextArrow:
        '<button class="slide-arrow next-arrow"><img src="/themes/porto/images/landing/arrow_next.svg"/></button>',
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    }),
    e(".slider-endow").slick({
      slidesToShow: 3,
      infinite: !0,
      autoplay: !1,
      loop: !0,
      autoplaySpeed: 2e3,
      nextArrow:
        '<button class="slide-arrow next-arrow"><img src="/themes/porto/images/landing/arrow_next.svg"/></button>',
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    }),
    e("#place").length)
  ) {
    e(".owl-carousel").owlCarousel({
      loop: !0,
      margin: 20,
      nav: !0,
      smartSpeed: 200,
      items: 4,
      responsive: {
        0: { items: 1 },
        375: { items: 2, margin: 10 },
        768: { items: 3, margin: 10 },
        1e3: { items: 4 },
      },
    });
    var i = e(".place-header .col-md-4").height(),
      a = e(".place-header .weather").height();
    e(".place-header .info").css("height", i - a);
  }
  if (
    (e(".vp-booking-form-top").length &&
      e(".border-vp-search .input-group input")
        .blur(function () {
          e(this).parents(".border-vp-search").css("border-color", "#d5d5d5");
        })
        .focus(function () {
          e(this).parents(".border-vp-search").css("border-color", "#e29a38");
        }),
    e(".vid-am-thuc").length)
  ) {
    (window.onload = function () {
      let i = e(".vid-am-thuc").attr("tid");
      e('.cuisine-cat[data-tid="' + i + '"]')
        .parents(".views-row")
        .addClass("active"),
        e('.cuisine-cat[data-tid="' + i + '"]')
          .parents(".views-row")
          .siblings()
          .addClass("non-active"),
        e('.cuisine-cat[data-tid="' + i + '"]')
          .parents(".views-row")
          .siblings()
          .removeClass("active"),
        e('.cuisine-cat[data-tid="' + i + '"]')
          .parents(".views-row")
          .removeClass("non-active"),
        e(
          '#views-exposed-form-kieu-node-functions-page-3 .form-item-tid input[value="' +
            i +
            '"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-kieu-node-functions-page-3 input[type="submit"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-node-functions-haitran-page-2 .form-item-tid input[value="' +
            i +
            '"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-node-functions-haitran-page-2 input[type="submit"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-kieu-node-functions-page-2 .form-item-tid input[value="' +
            i +
            '"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-kieu-node-functions-page-2 input[type="submit"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-kieu-node-functions-page-4 .form-item-tid input[value="' +
            i +
            '"]'
        ).trigger("click"),
        e(
          '#views-exposed-form-kieu-node-functions-page-4 input[type="submit"]'
        ).trigger("click");
    }),
      e(".owl-carousel").owlCarousel({ loop: !0, nav: !0, items: 1 }),
      e(".cuisine-cat").click(function (e) {}),
      e(
        "#views-exposed-form-kieu-node-functions-page-2 .form-radios > .form-item-field-type-of-restaurant-value"
      ).click(function (i) {
        var a = e(this).find("input").attr("value");
        e(
          '#views-exposed-form-kieu-node-functions-page-3 .form-item-field-type-of-restaurant-value input[value="' +
            a +
            '"]'
        ).trigger("click");
      }),
      e(".cuisine-title").click(function (i) {
        var a = e(this).find(".item").attr("data-nid");
        e(this).addClass("active"),
          e(this).removeClass("non-active"),
          e(this).siblings(".cuisine-title").removeClass("active"),
          e(this).siblings(".cuisine-title").addClass("non-active"),
          e('.nha-hang[data-nid="' + a + '"]')
            .parents(".rows-cuisine")
            .addClass("active"),
          e('.nha-hang[data-nid="' + a + '"]')
            .parents(".rows-cuisine")
            .removeClass("non-active"),
          e('.nha-hang[data-nid="' + a + '"]')
            .parents(".rows-cuisine")
            .siblings()
            .addClass("non-active"),
          e('.nha-hang[data-nid="' + a + '"]')
            .parents(".rows-cuisine")
            .siblings()
            .removeClass("active");
      }),
      e(document).ajaxStop(function () {
        e(".cuisine-title").click(function (i) {
          var a = e(this).find(".item").attr("data-nid");
          e(this).addClass("active"),
            e(this).removeClass("non-active"),
            e(this).siblings(".cuisine-title").removeClass("active"),
            e(this).siblings(".cuisine-title").addClass("non-active"),
            e('.nha-hang[data-nid="' + a + '"]')
              .parents(".rows-cuisine")
              .addClass("active"),
            e('.nha-hang[data-nid="' + a + '"]')
              .parents(".rows-cuisine")
              .removeClass("non-active"),
            e('.nha-hang[data-nid="' + a + '"]')
              .parents(".rows-cuisine")
              .siblings()
              .addClass("non-active"),
            e('.nha-hang[data-nid="' + a + '"]')
              .parents(".rows-cuisine")
              .siblings()
              .removeClass("active");
        });
        let i = e(
          ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
        ).html();
        e(
          ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
        ).append(
          '<div class="tit_fake" style="position:absolute;opacity:0;z-index:0"></div>'
        ),
          e(".tit_fake").html(i);
        var a = e(".tit_fake").height();
        e(".tit_fake").remove(),
          a > 70
            ? (e(
                ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
              ).addClass("long"),
              e(".button-footer .btn-collapse").css("display", "none"),
              e(".button-footer .see-more").click(function (i) {
                e(
                  ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
                ).css("height", a),
                  e(this).css("display", "none"),
                  e(this).siblings().css("display", "block"),
                  e(
                    ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
                  ).addClass("active");
              }),
              e(".button-footer .btn-collapse").click(function (i) {
                e(
                  ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
                ).css("height", 70),
                  e(this).css("display", "none"),
                  e(this).siblings().css("display", "block"),
                  e(
                    ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
                  ).removeClass("active");
              }))
            : (e(
                ".view-id-kieu_node_functions.view-display-id-page_4 .view-content div.tit"
              ).addClass("short"),
              e(".button-footer").css("display", "none"));
      });
  }
  if (
    (e(".path-uu-dai-khuyen-mai").length &&
      (e(document).ajaxStop(function () {
        e(
          ".view-id-kieu_node_functions.view-display-id-page_1 .views-exposed-form .form-item"
        ).each(function (i, a) {
          var s = e(this).find("label").text();
          e(this).find('select option[value="All"]').text(s);
        });
      }),
      e(
        ".view-id-kieu_node_functions.view-display-id-page_1 .views-exposed-form .form-item"
      ).each(function (i, a) {
        var s = e(this).find("label").text();
        e(this).find('select option[value="All"]').text(s);
      })),
    e(".card-hotel-header").length &&
      e(".card-hotel-header li a").click(function (i) {
        e(this).parent("li").addClass("active"),
          e(this).parent("li").siblings().removeClass("active");
      }),
    e(window).width() <= 480 &&
      e(".navbar-collapse.main-menu").length &&
      e(".navbar-collapse.main-menu .menu-item .dropdown-menu").each(function (
        i,
        a
      ) {
        e(this).siblings(".nav-item-sm-border").addClass("dropdown-btn");
      }),
    e("#faq-page").length)
  ) {
    e(".faq").click(function (i) {
      var a = e(this).attr("data-nid");
      let s = e(this).closest(".views-row");
      if (s.hasClass("active")) return !1;
      e(this)
        .parents(
          ".view-id-hairan_taxonomy_functions.view-display-id-block_faq_category"
        )
        .find("> .view-content > .active");
      if (
        (s.hasClass("active"),
        s.addClass("active"),
        s.siblings().removeClass("active"),
        e(
          '#views-exposed-form-kieu-node-functions-page-5 input[name="nid"]'
        ).val(a),
        e(
          '#views-exposed-form-kieu-node-functions-page-5 input[name="field_faq_field_question"]'
        ).val(""),
        e('input[name="faq_search"]').val(""),
        e(
          "#views-exposed-form-kieu-node-functions-page-5 .form-submit"
        ).trigger("click"),
        e(window).width() <= 767)
      ) {
        let i = e(this)
          .parents(".views-row")
          .find(".views-field-nothing")
          .html();
        e(".filter_mb_wrapper .chose_filter").html(i),
          e(
            "div#faq-page.faq_page .col-md-3 .views-element-container"
          ).slideToggle(300);
      }
    });
    let i = e(
      ".sidebar-left .view-id-hairan_taxonomy_functions.view-display-id-block_faq_category > div > .views-row:first-child"
    );
    i.addClass("active"),
      i.find(".views-field-view").slideDown("300"),
      e("div#faq-page.faq_page .col-md-3 .cat").click(function (i) {
        let a = e(this).attr("tid"),
          s = e(this).parents(".views-row"),
          t =
            (s.find(".views-row"),
            e(this).parents(".views-field-nothing").next());
        if (
          (s.hasClass("active") ||
            (s.find(".views-row.active").removeClass("active"),
            s
              .siblings(".views-row.active")
              .find(".views-field-view")
              .slideUp(300),
            s
              .siblings(".views-row.active")
              .find(".views-row.active")
              .removeClass("active"),
            s.siblings(".views-row.active").removeClass("active"),
            s.addClass("active"),
            setTimeout(function () {
              t.slideDown("300"), sessionStorage.setItem("big_cat_clicked", !0);
            }, 300),
            e(
              '#views-exposed-form-kieu-node-functions-page-5 input[name="tid_raw"]'
            ).val(a),
            e(
              '#views-exposed-form-kieu-node-functions-page-5 input[name="nid"]'
            ).val(""),
            e(
              '#views-exposed-form-kieu-node-functions-page-5 input[name="field_faq_field_question"]'
            ).val(""),
            e('input[name="faq_search"]').val(""),
            e(
              "#views-exposed-form-kieu-node-functions-page-5 .form-submit"
            ).trigger("click")),
          e(window).width() <= 767)
        ) {
          let i = e(this).parents(".views-field-nothing").html();
          e(".filter_mb_wrapper .chose_filter").html(i);
        }
      });
    let a = e('input[name="faq_search"]'),
      s = e(".faq_search_box button");
    if (
      (a.keyup(function (i) {
        if (13 == i.which) return s.trigger("click"), !1;
        let a = e(
            '#views-exposed-form-kieu-node-functions-page-5 input[name="field_faq_field_question"]'
          ),
          t = e(this).val();
        nonAccentVietnamese(t);
        a.val(t);
      }),
      s.click(function (i) {
        e(".view-id-kieu_node_functions.view-display-id-page_5").hide(),
          e(
            '#views-exposed-form-kieu-node-functions-page-5 input[name="tid_raw"]'
          ).val(""),
          e(
            '#views-exposed-form-kieu-node-functions-page-5 input[name="nid"]'
          ).val(""),
          e(
            "#views-exposed-form-kieu-node-functions-page-5 .form-submit"
          ).trigger("click"),
          sessionStorage.setItem("faq_keyword", a.val());
      }),
      e(document).ajaxStop(function () {
        if (null != sessionStorage.getItem("faq_keyword")) {
          let s = sessionStorage.getItem("faq_keyword");
          sessionStorage.removeItem("faq_keyword");
          let t = e("div#faq-page.faq_page .col-md-9 .views-row h3");
          e.when(
            ((i = t),
            (a = s),
            void i.each(function (i, s) {
              let t = e(this).attr("id"),
                n = nonAccentVietnamese(e(this).text());
              if (((a = nonAccentVietnamese(a)), -1 == n.indexOf(a))) {
                let i = e('.faqfield-answer[aria-labelledby="' + t + '"]');
                e(this).remove(), i.remove();
              }
            }))
          ).done(function () {
            e(".view-id-kieu_node_functions.view-display-id-page_5").show(300);
          });
        }
        var i, a;
        null != sessionStorage.getItem("big_cat_clicked") &&
          (sessionStorage.removeItem("big_cat_clicked"),
          e(
            ".view-id-hairan_taxonomy_functions.view-display-id-block_faq_category > .view-content > .views-row.active .views-row:nth-child(1) .faq"
          ).trigger("click"));
      }),
      e(window).width() <= 767)
    ) {
      let i = e(
        ".view-id-hairan_taxonomy_functions.view-display-id-block_faq_category > div > .views-row.active .views-field-nothing"
      ).html();
      e(".filter_mb_wrapper .chose_filter").html(i),
        e("div#faq-page.faq_page .col-md-3 .filter_btn").click(function (i) {
          e(
            "div#faq-page.faq_page .col-md-3 .views-element-container"
          ).slideToggle(300);
        });
    }
  }
  function s(e) {
    return null != e && null != e
      ? (e = parseInt(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : 0;
  }
  function t(e, i) {
    switch (i) {
      case "VND":
        priceHtml = `<p>${s(Math.round(e))} đ<span>/Đêm</span></p>`;
        break;
      case "CNY":
        priceHtml = `<p>~${s(Math.round(e))} CNY<span>/晚</span></p>`;
        break;
      case "USD":
        priceHtml = `<p>~$${s(Math.round(e))}<span>/Night</span></p>`;
        break;
      case "KRW":
        priceHtml = `<p>~${s(Math.round(e))} KRW<span>/밤</span></p>`;
    }
    return priceHtml;
  }
  e(".tab-pane-ld-hotel").each(function () {
    setTimeout(() => {
      e(".slider-booking__box ~ p").remove();
    }, 2e3);
    let i = e(this).attr("id"),
      a = [];
    e(this)
      .find(".code-best-price span")
      .each(function () {
        a.push(e(this).text());
      }),
      a.length > 0 &&
        e.ajax({
          type: "post",
          url: "https://ott.vinpearl.com/data-vp-hotel-recommend/GetListBestPrice",
          data: JSON.stringify({ hotelCode: a, language: drupalSettings.lang }),
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          success: function (s) {
            e("#" + i)
              .find(".slider-booking")
              .prepend(
                (function (e, i) {
                  let a = "",
                    s = drupalSettings.lang_pri.slice(0, -1);
                  for (let n in e) {
                    let o = e[n][i[n]];
                    a += `<div class="slider-booking__box">\n                <div class="wrap">\n                    <div class="img childrent-free">\n                        <img src="https://${
                      o.images[0].url
                    }"\n                            alt="err">\n                        ${
                      o.rate_tags[s] && null != o.rate_tags[s][0].name
                        ? `<p style="background:${o.rate_tags[s][0].bgColor};">${o.rate_tags[s][0].name}</p>`
                        : ""
                    }\n                    </div>\n                    <div class="content">\n                        <h2 title="">${
                      o.name
                    }</h2>\n                        <ul>\n                            ${
                      null != o.address
                        ? `<li><img src="/themes/porto/images/landing/icn-marker.svg" alt="err"><span>${o.address}</span></li>`
                        : ""
                    }\n                        </ul>\n                        <h3>${
                      o.rate_name[0][s]
                    }</h3>\n                        <ul>\n                            ${JSON.parse(
                      o.rate_short_description[0][s]
                    )
                      .slice(0, 5)
                      .map(
                        (e) =>
                          `\n                                <li><img src="${e.Icon}"\n                                        alt="err"><span>${e.ShortDescription}</span></li>\n                            `
                      )
                      .join(
                        ""
                      )}\n\n                        </ul>\n                    </div>\n                    <div class="price">\n                        ${t(
                      o.memberRate,
                      o.currencyCode
                    )}\n                        <a href="${
                      o.url
                    }"  target="_blank" >${
                      drupalSettings.translation.book
                    }</a>\n                    </div>\n                </div>\n            </div>`;
                  }
                  return a;
                })(s.data, a)
              ),
              e(".slider-booking__box ~ p").remove(),
              e(".slider-booking").slick("unslick"),
              setTimeout(() => {
                e(".slider-booking").slick({
                  slidesToShow: 2,
                  infinite: !0,
                  loop: !0,
                  autoplaySpeed: 2e3,
                  nextArrow:
                    '<button class="slide-arrow next-arrow"><img src="/themes/porto/images/landing/arrow_next.svg"/></button>',
                  responsive: [
                    { breakpoint: 768, settings: { slidesToShow: 1 } },
                  ],
                });
              }, 2500);
          },
          error: function () {},
        });
  });
})(jQuery),
  jQuery(document).ready(function () {
    if (
      jQuery("body").hasClass("about-us-grand-world") ||
      jQuery("body").hasClass("festivals-grand-world")
    ) {
      jQuery("body").addClass("path-frontpage");
    }
    var a = jQuery(".pearlclub-promotion-block .pc-promo-body").height();
    if (a == 0) {
      jQuery(".pearlclub-promotion-block").hide();
    }
    var b = jQuery(".promo-block.promo_page .pc-promo-body").height();
    if (b == 0) {
      jQuery(".promo-block.promo_page").hide();
    }
    var c = jQuery(".promo-block.promo_page .promo-block-body").height();
    if (c == 0) {
      jQuery(".promo-block.promo_page").hide();
    }
    var d = jQuery(".show-complex-body .pc-promo-body").height();
    if (d == 0) {
      jQuery(".show-complex-body .page-info-wrapper").hide();
      jQuery(".show-complex-body .page-info-wrapper + .page-body").css(
        "padding-top",
        "15px"
      );
    }
    if (jQuery(window).width() > 768) {
      var e1 = jQuery(
        ".hot-promotions .ht_mobile_hide .swiper-container"
      ).height();
      if (e1 == 0) {
        jQuery(".hot-promotions").hide();
      }
    } else {
      var e2 = jQuery(
        ".hot-promotions .ht_mobile_show .swiper-container"
      ).height();
      if (e2 == 0) {
        jQuery(".hot-promotions").hide();
      }
    }
    var f = jQuery(".promotion-list-wrapper .promotion-list").height();
    if (f == 0) {
      jQuery(".promotion-list-wrapper").hide();
    }
    new Swiper(".rd-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: ".rd-slider-button-next",
        prevEl: ".rd-slider-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        481: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 },
      },
    });
    new Swiper("#hotel.swiper-container", {
      effect: "fade",
      pagination: { el: ".swiper-pagination", type: "fraction" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
      new Swiper("#slide-play .swiper-container", {
        effect: "fade",
        pagination: { el: ".swiper-pagination", type: "fraction" },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionEnd: function () {
            changeNav();
          },
        },
      });
    jQuery("#slide-play").length &&
      jQuery('#slide-play .col-md-4[data-index="1"]').addClass("active");
  });
