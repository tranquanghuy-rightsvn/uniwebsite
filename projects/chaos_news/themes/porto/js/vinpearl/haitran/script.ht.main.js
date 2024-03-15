!(function (e, t) {
  e(".hotel_n_flight_desktop").click(function () {
    e(".header-right-block, .header-right-panel").addClass("open"),
      e(".tab-nav").removeClass("show"),
      e('.tab-nav[data-target="#bs-bundle"]').addClass("show"),
      e(".tabs-content-wrapper > .tab-content-wrapper").removeClass("show"),
      e("#bs-bundle").addClass("show");
  }),
    e(".tour_n_exp_desktop").click(function () {
      e(".header-right-block, .header-right-panel").addClass("open"),
        e(".tab-nav").removeClass("show"),
        e('.tab-nav[data-target="#bs-tour"]').addClass("show"),
        e(".tabs-content-wrapper > .tab-content-wrapper").removeClass("show"),
        e("#bs-tour").addClass("show");
    }),
    e(".nt-complex-content.favorite .button-1").click(function (t) {
      let a = window.location.href;
      var i = location.hostname;
      let o = e(this)
        .attr("href")
        .replace(
          /callback=[^&]+/,
          "callback=" + i + "/auth0/sso?redirectUrl=" + a
        );
      e(this).attr("href", o);
    }),
    e(".convert-price-wrapper .price").length &&
      e(".convert-price-wrapper .price").each(function () {
        var t = parseInt(e(this).attr("convert-value"));
        isNaN(t) ||
          fetch("https://api.exchangerate-api.com/v4/latest/usd")
            .then((e) => e.json())
            .then((a) => {
              const i = a.rates.VND,
                o = parseInt(t / i).toFixed(3);
              e(this).text(`~${o} $`);
            });
      }),
    (t.behaviors.haitran_mainjs2 = {
      attach: function (a, i) {
        if (e("body:not('.haitran_mainjs2')").length) {
          if (
            (e("body").addClass("haitran_mainjs2"),
            e(".scroll-to-top").click(function () {
              e("html, body").animate({ scrollTop: 0 }, 1e3);
            }),
            e("#popup_limit_age").length &&
              null ==
                sessionStorage.getItem(e("#popup_limit_age").attr("storage")) &&
              (e("#popup_limit_age").removeClass("access"),
              e("html").css("overflow-y", "hidden"),
              e("#popup_limit_age .access").click(function (t) {
                e("html").css("overflow-y", "auto"),
                  e("#popup_limit_age").addClass("access"),
                  sessionStorage.setItem(
                    e("#popup_limit_age").attr("storage"),
                    1
                  );
              })),
            e("body").addClass("loaded"),
            null != getParamsUrl("email_verified_error"))
          ) {
            let t = getParamsUrl("email_verified_error");
            e(".email_verified_error_block").find("b").text(t),
              e(".email_verified_error_block").show();
          }
          (window.htRedirectUrl = drupalSettings.hms_booking_domain),
            (window.captchaSiteKey = jQuery("html").attr("site_k")),
            ht_handle_interface(),
            ht_language_controler(),
            ht_fix_popper_js(),
            ht_handle_click_action_on_news_submenu(),
            ht_show_img_caption(),
            ht_subcribe_site(),
            e(window).width() <= 480 && ht_mobile_main_menu(),
            e(".vw_child").length && ht_custom_vw_child_page(),
            e(".place_block.golf.owl-carousel").length &&
              ht_owl_carousel_golf_page(),
            e(".page-node-type-page.context-tin-tuc-du-lich").length &&
              ht_handle_news_page(),
            (e("#request_form").length ||
              e("#microsite_hotel_request_form").length) &&
              ht_handle_request_form(),
            e(".cuisine_all_m").length && ht_cuisine_handler(),
            e(".node-full.node-hotel").length && ht_navtab_click(),
            e(".pearl_club_page").length && ht_pearl_club(),
            e("body.path-frontpage").length && ht_front_page(),
            e(".tags_page").length && ht_tag_page(),
            e(".contact_info_page").length && ht_contact_form_vp(),
            e("a.spa-tab").length > 0 &&
              e("a.spa-tab").each(function () {
                e(this).removeAttr("data-toggle");
              });
        }
        t.ht_main_js.run(a);
      },
    }),
    (t.ht_main_js = t.ht_main_js || {}),
    (t.ht_main_js.run = function (a) {
      e(document, a)
        .once("haitran_mainjs2")
        .each(function () {
          t.ht_main_js.fixArea(),
            t.ht_main_js.toc(),
            t.ht_main_js.footerTop(),
            t.ht_main_js.lazyLoadFunc(),
            t.ht_main_js.view_more_golf(),
            t.ht_main_js.slide_lazy_fix(),
            t.ht_main_js.newsPage(),
            t.ht_main_js.total_related_news();
        });
    }),
    (t.ht_main_js.fixArea = function () {
      e("body.fix").length ||
        (e("body").addClass("fix"),
        e('html[lang="en"]').length &&
          (e(".context-hoi-hop-va-su-kien").length ||
            e("#detail-about").length) &&
          (e(".context-hoi-hop-va-su-kien").length &&
            e(".event-fes-cate-pane > .tab-pane > .row").each(function (t, a) {
              e(this).find(".box-more-event").addClass("un-height"),
                e(this).find("a.view-more-arrow").remove(),
                e(this).append(
                  '<a class="view-more-arrow-2" style="position: relative;padding-left: 10px;" item="50" title="View more" href="javascript:;">View more</a>'
                );
            }),
          e("#detail-about").length &&
            (e("#detail-about").find(".box-more-event").addClass("un-height"),
            e("#detail-about").find("a.view-more-arrow").remove(),
            e("#detail-about")
              .find(".box-more-event")
              .parent()
              .append(
                '<a class="view-more-arrow-2" style="position: relative;padding-left: 10px;" item="50" title="View more" href="javascript:;">View more</a>'
              )),
          e(document).on("click", "a.view-more-arrow-2", function (t) {
            if (e(".context-hoi-hop-va-su-kien").length) {
              let t = e(this).siblings(".col-12").find(".box-more-event");
              t.hasClass("un-height")
                ? (e(this).text("Hide"),
                  e(this).addClass("view-more-arrow-fix"))
                : (e(this).text("View more"),
                  e(this).removeClass("view-more-arrow-fix")),
                t.toggleClass("un-height");
            } else if (e("#detail-about").length) {
              let t = e(this).parent().find(".box-more-event");
              t.hasClass("un-height")
                ? (e(this).text("Hide"),
                  e(this).addClass("view-more-arrow-fix"),
                  e(".wonder_utility.box-more-event-1").css("height", "auto"),
                  t.find("p").css("height", "auto"))
                : (e(this).text("View more"),
                  e(this).removeClass("view-more-arrow-fix"),
                  e(".wonder_utility.box-more-event-1").css("height", "0"),
                  t.find("p").css("height", "0")),
                t.toggleClass("un-height");
            }
          })));
    }),
    (t.ht_main_js.toc = function () {
      e(".widget-toc").length &&
        (e(".widget-toc .toc_title_inside").text(drupalSettings.toc_title),
        e(".widget-toc .toc-title, .widget-toc a").on("click", function () {
          e(".main-body-wrapper .read_more").hide(),
            e(".content-wrapper").removeClass("read-more"),
            e(".widget-toc.open").length
              ? (e(".widget-toc").removeClass("open"),
                e(".widget-toc > ol").slideUp(300))
              : (e(".widget-toc").addClass("open"),
                e(".widget-toc > ol").slideDown(300));
        }),
        e(window).scroll(function () {
          window.pageYOffset > e(".widget-toc").parent().offset().top
            ? (e(".widget-toc").hasClass("sticky") ||
                (e(".widget-toc > ol").css("display", "none"),
                e(".widget-toc").removeClass("open")),
              e(".widget-toc").addClass("sticky"))
            : e(".widget-toc").removeClass("sticky");
        }));
    }),
    (t.ht_main_js.footerTop = function () {
      e(".top_footer_menu_wrapper>ul>li>a").each(function () {
        e("<div class='down-chevon'></div>").insertBefore(e(this));
      }),
        e(document).on(
          "click",
          ".top_footer_menu_wrapper>ul>li>.down-chevon",
          function (t) {
            t.preventDefault(), e(this).siblings("ul").slideToggle();
          }
        );
    }),
    (t.ht_main_js.lazyLoadFunc = function () {
      let e = document.querySelectorAll(".lazyload");
      new LazyLoad(e, { root: null, rootMargin: "0px", threshold: 0 });
    }),
    (t.ht_main_js.view_more_golf = function () {
      e("a.view_more_arrow").on("click", function () {
        let t = e(this).attr("_open"),
          a = e(this).attr("_close");
        e(".vingolf-wrapper .tab-pane>.body").toggleClass("open"),
          e(".vingolf-wrapper .tab-pane>.body").hasClass("open")
            ? e(this).text(a)
            : e(this).text(t);
      });
    }),
    (t.ht_main_js.slide_lazy_fix = function () {
      e(".owl-item img").each(function () {
        if (e(this).hasClass("lazyload")) {
          let t = e(this).attr("data-src");
          e(this).attr("src", t);
        }
      }),
        e(".swiper-slide img").each(function () {
          if (e(this).hasClass("lazyload")) {
            let t = e(this).attr("data-src");
            e(this).attr("src", t);
          }
        });
    }),
    (t.ht_main_js.total_related_news = function () {
      if (
        e(".view-id-node_functions_haitran.view-display-id-tag_related_news")
          .length
      ) {
        let t = e(
          ".view-id-node_functions_haitran.view-display-id-tag_related_news .view-header"
        )
          .text()
          .trim();
        e("span.total_news").text(t);
      }
    }),
    (t.ht_main_js.newsPage = function () {
      if (
        (e(
          ".vp-footer.vin3s-footer>div._container>div:last-child .custom_new_menu li.menu-item>a"
        ).click(function (t) {
          t.preventDefault();
          let a = e(this).attr("href").split("#")[1];
          null != a && sessionStorage.setItem("news_hash", "#" + a),
            (window.location.href = e(this).attr("href"));
        }),
        e(".news-page").length)
      ) {
        let t = sessionStorage.getItem("news_hash"),
          a = window.location.hash;
        "" != a && (sessionStorage.setItem("news_hash", a), (t = a)),
          null != t && e('#myTab>li>a[href="' + t + '"]').trigger("click"),
          e("#myTab>li>a").click(function () {
            sessionStorage.setItem("news_hash", e(this).attr("href"));
          });
      }
    });
})(jQuery, Drupal);
