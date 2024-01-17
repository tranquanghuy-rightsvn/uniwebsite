function ht_language_controler() {
  (window.lang = jQuery("html").attr("lang")),
    jQuery("a.show_lang_" + lang).removeClass("d-none"),
    jQuery("a.show_lang_" + lang)
      .siblings("a")
      .addClass("d-none");
}
function ht_custom_vw_child_page() {
  jQuery(".reason_block_wrapper .owl-carousel").owlCarousel({
    center: !0,
    items: 3,
    loop: !0,
    margin: 10,
    nav: !0,
    dots: !0,
    responsive: { 0: { items: 1 }, 991: { items: 3 } },
  }),
    jQuery(".area_block_wrapper .owl-carousel").owlCarousel({
      margin: 104,
      nav: !0,
      dots: !0,
      items: 5,
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        1023: { items: 4 },
        1200: { items: 5 },
      },
    }),
    jQuery(
      ".view-id-node_functions_haitran.view-display-id-page_1 .owl-carousel"
    ).owlCarousel({
      items: 3,
      margin: 16,
      nav: !0,
      dots: !0,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1023: { items: 3 },
        1440: { items: 3 },
      },
    }),
    jQuery(document).ajaxStop(function () {
      jQuery(
        ".view-id-node_functions_haitran.view-display-id-page_1 .owl-carousel"
      ).owlCarousel({
        items: 3,
        margin: 16,
        nav: !0,
        dots: !0,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1023: { items: 3 },
          1440: { items: 3 },
        },
      });
    }),
    jQuery(document).on(
      "click touchstart",
      ".area_block_wrapper .owl-item",
      function (e) {
        if (!jQuery(this).hasClass("hover")) {
          jQuery(this).addClass("hover"),
            jQuery(this).siblings(".owl-item").removeClass("hover");
          var t = jQuery(this).find(".item").attr("tid"),
            r = jQuery(
              ".view-id-node_functions_haitran.view-display-id-page_1 select[name=field_vw_related_area_target_id]"
            ),
            a = jQuery(
              ".view-id-node_functions_haitran.view-display-id-page_1 .form-actions input"
            );
          r.val(t), r.trigger("change"), a.trigger("click");
        }
      }
    ),
    setTimeout(function () {
      jQuery(".area_block_wrapper .owl-item:first-child").trigger("click");
    }, 1e3),
    ht_change_hot_show_mobile(),
    jQuery(window).resize(function (e) {
      ht_change_hot_show_mobile();
    }),
    jQuery(".vw_cuisine_block.owl-carousel").owlCarousel({
      margin: 104,
      nav: !0,
      dots: !0,
      items: 3,
      responsive: { 0: { items: 1 }, 360: { items: 2 }, 768: { items: 3 } },
    });
}
function ht_change_hot_show_mobile() {
  jQuery(window).width() > 768
    ? jQuery(".hot_show_wrapper:not(.mobile) .owl-carousel").owlCarousel({
        items: 1,
        margin: 16,
        nav: !0,
        dots: !0,
        onInitialized: function () {
          jQuery(".hot_show_wrapper:not(.mobile) .owl-item").length > 4 &&
            jQuery(".hot_show_wrapper:not(.mobile)").addClass("big");
        },
      })
    : (jQuery("img.pending").each(function (e, t) {
        jQuery(this).attr("src", jQuery(this).attr("pending-src"));
      }),
      jQuery(".hot_show_wrapper.mobile .owl-carousel").owlCarousel({
        items: 2,
        margin: 16,
        nav: !0,
        responsive: { 0: { items: 1 }, 768: { items: 2 } },
      }));
}
function ht_other_games_clicked(e) {
  var t = jQuery(e).attr("tid");
  jQuery(e).parents(".ht_custom_modal").modal("hide"),
    setTimeout(function () {
      jQuery("#game_modal_" + t).modal("show");
    }, 600);
}
function ht_handle_click_action_on_news_submenu() {
  if (jQuery(".col-lg-3.custom_new_menu").length) {
    if (null != sessionStorage.getItem("target")) {
      let e = sessionStorage.getItem("target");
      sessionStorage.removeItem("target"),
        jQuery('a[href="' + e + '"]').length &&
          jQuery('a[href="' + e + '"]').trigger("click");
    }
    if (
      (jQuery(".col-lg-3.custom_new_menu a").click(function (e) {
        var t = "#" + jQuery(this).attr("href").split("#")[1];
        sessionStorage.setItem("target", t),
          jQuery('a[href="#market"]').length &&
            (e.preventDefault(),
            jQuery('a[href="' + t + '"]').length &&
              jQuery('a[href="' + t + '"]').trigger("click"),
            jQuery("html, body").animate(
              { scrollTop: jQuery("#myTab").offset().top - 150 },
              500
            ));
      }),
      "" != window.location.hash)
    ) {
      let e = window.location.hash;
      jQuery('a[href="' + e + '"]').length &&
        jQuery('a[href="' + e + '"]').trigger("click"),
        jQuery("html, body").animate(
          {
            scrollTop: jQuery("#myTab")
              ? jQuery("#myTab").offset().top - 150
              : 0,
          },
          500
        );
    }
  }
}
function ht_handle_interface() {
  if (
    (ht_handle_gcs_img(),
    jQuery(".tour_exp").length &&
      (jQuery(".vp-booking-form-top ul.nav.nav-tabs li:nth-child(4) a").trigger(
        "click"
      ),
      jQuery("#vp-booking-form .form-search-top.mobile-formsearch select").val(
        "exp"
      ),
      jQuery(
        "#vp-booking-form .form-search-top.mobile-formsearch select"
      ).trigger("change")),
    jQuery(document).on("click", '.big-tab a[href^="#"]', function (e) {
      e.preventDefault(),
        jQuery(jQuery.attr(this, "href")).length &&
          jQuery("html, body").animate(
            { scrollTop: jQuery(jQuery.attr(this, "href")).offset().top - 150 },
            500
          );
    }),
    jQuery("#faqfield_field_thong_tin_chi_tiet_lien_he_block_content_28")
      .length &&
      jQuery(
        "#faqfield_field_thong_tin_chi_tiet_lien_he_block_content_28"
      ).accordion({ heightStyle: "content" }),
    jQuery(window).width() <= 480 &&
      (jQuery(".vp-top-banner__item.pc").removeClass("active"),
      jQuery(".vp-top-banner__item.mobile").addClass("active")),
    jQuery("body.path-frontpage").length)
  ) {
    if (jQuery(window).width() <= 480)
      var e = jQuery(".special-promotion").attr("mobile");
    else e = jQuery(".special-promotion").attr("pc");
    jQuery(".special-promotion").css("background", "url('" + e + "')");
    let t = 0,
      r = setInterval(function () {
        let e = jQuery("#news-top-banner .ins-preview-wrapper");
        if (e.length) {
          clearInterval(r),
            e.addClass("new_ins"),
            e.find("> div").addClass("container");
          let t = e[0].outerHTML.replace(/\!important/g, "");
          jQuery(
            ".elementor-widget.elementor-widget-vp_home_text_icon.bg-white"
          ).before(t),
            e.remove();
        } else 9e3 == t && clearInterval(r);
        t += 1e3;
      }, 1e3);
  }
  jQuery(document).ajaxComplete(function (e, t, r) {
    r &&
      r.url &&
      (-1 !== r.url.indexOf("/flag/unflag/favourite") ||
        -1 !== r.url.indexOf("/flag/flag/favourite")) &&
      jQuery
        .ajax({
          type: "GET",
          url: drupalSettings.path.baseUrl + "api/favorite",
          context: document.body,
          data: { url: window.location.href },
          dataType: "json",
        })
        .done(function (e) {
          jQuery("small.number-of-favorite").each(function (t, r) {
            jQuery(this).html(e.data.total);
          });
        });
  }),
    jQuery("small.number-of-favorite").length > 0 &&
      jQuery("body.user-logged-in").length &&
      jQuery
        .ajax({
          type: "GET",
          url: drupalSettings.path.baseUrl + "api/favorite",
          context: document.body,
          data: { url: window.location.href },
          dataType: "json",
        })
        .done(function (e) {
          jQuery("small.number-of-favorite").each(function (t, r) {
            jQuery(this).html(e.data.total);
          }),
            0 !== jQuery("#favorite-count-number").length &&
              jQuery("#favorite-count-number").html(
                e.data.total + " MỤC YÊU THÍCH"
              );
        });
  let t = jQuery("#header-bottom ul.nav.main-menu li");
  var r = 0;
  t.each(function (e, t) {
    let a = jQuery(this)
      .find("a")
      .attr("href")
      .replace("/" + drupalSettings.path.currentLanguage, "");
    -1 !==
      window.location.href
        .replace("/" + drupalSettings.path.currentLanguage, "")
        .indexOf(a) && (r++, jQuery(this).find("a").addClass("is-active"));
  }),
    r > 1 && t.find("a").removeClass("is-active");
}
function ht_handle_gcs_img() {
  jQuery(".detail.news-full").length
    ? jQuery(".detail.news-full .main-body-wrapper img:not(.lazy-load)").each(
        function (e, t) {
          if (!jQuery(this).parents(".sku-item").length) {
            let e = jQuery(this)[0].src;
            if (-1 == e.indexOf("statics.vinpearl.com")) {
              let t = e.split("/"),
                r = drupalSettings.gcs_prefix + t[t.length - 1];
              jQuery(this)[0].src = r;
            }
          }
        }
      )
    : jQuery(".promotion-full .content-wrapper .content").length &&
      jQuery(
        ".promotion-full .content-wrapper .content img:not(.lazy-load)"
      ).each(function (e, t) {
        let r = jQuery(this)[0].src;
        if (
          -1 == r.indexOf("statics.vinpearl.com") &&
          0 == jQuery(this).parents(".sku-item").length
        ) {
          let e = r.split("/"),
            t = drupalSettings.gcs_prefix + e[e.length - 1];
          jQuery(this)[0].src = t;
        }
      });
}
function ht_handle_news_page() {
  var e = sessionStorage.getItem("target");
  null != e &&
    null != e &&
    jQuery('a[href="' + e + '"]').length &&
    jQuery('a[href="' + e + '"]').trigger("click");
}
function ht_show_img_caption() {
  jQuery("img").each(function (e, t) {
    var r = jQuery(this);
    if (null != r.attr("data-caption") && null != r.attr("data-caption")) {
      var a = r.attr("data-caption");
      r.after('<i class="img_caption">' + a + "</i>");
    }
  });
}
function ht_handle_request_form() {
  var e = jQuery("#request_form").find(".form-item-cac-yeu-cau-dich-vu input"),
    t = jQuery("#request_form").find(".form-item-gala-dinner input"),
    r = jQuery("#request_form").find(".form-item-khac input"),
    a = jQuery("input#phong_o"),
    n = jQuery("input#gala_dinner"),
    i = jQuery('input[name="other_service"]'),
    o = jQuery(".translation_form .text1").text(),
    l = jQuery(".translation_form .text2").text(),
    s = jQuery(".translation_form .text3").text(),
    u = "";
  if (
    ((u += '<div class="form-item">'),
    (u += "<label>" + o + "</label>"),
    (u += '<div class="value_place">'),
    (u +=
      '<label for="phong_o">' +
      l +
      '</label><input id="phong_o" type="checkbox" name="phong_o" value="0" placeholder="">'),
    (u +=
      '<label for="gala_dinner">' +
      jQuery(".translation_form .text4").text() +
      '</label><input id="gala_dinner" type="checkbox" name="gala_dinner" value="0" placeholder="">'),
    (u +=
      '<div class="other_service"><label>' +
      s +
      '</label><input type="text" name="other_service"></div>'),
    (u += "</div>"),
    (u += "</div>"),
    jQuery("#request_form").find(".form-item-so-dien-thoai").after(u),
    a.click(function (t) {
      e.val(jQuery(this).val()), e.trigger("click");
    }),
    n.click(function (e) {
      t.val(jQuery(this).val()), t.trigger("click");
    }),
    i.keyup(function (e) {
      r.val(jQuery(this).val());
    }),
    "" != jQuery('[data-target="#microsite_hotel_request_form"]').attr("email"))
  ) {
    let e = jQuery('[data-target="#microsite_hotel_request_form"]').attr(
      "email"
    );
    jQuery(".form-item-email-khach-san input").val(e);
  }
}
function ht_owl_carousel_golf_page() {
  jQuery(".place_block.golf.owl-carousel").owlCarousel({
    center: !1,
    items: 3,
    loop: !0,
    margin: 10,
    nav: !0,
    dots: !0,
    responsive: { 0: { items: 1 }, 480: { items: 2 }, 991: { items: 3 } },
  });
}
function book_form_click(e) {
  var t = jQuery('a[href="#' + jQuery(e).attr("_target") + '"');
  if (t.length) {
    var r = t.offset().top - 200;
    r > 0 && window.scrollTo({ top: r, behavior: "smooth" }),
      t.trigger("click"),
      jQuery(window).width() <= 991 &&
        jQuery('[target="#' + jQuery(e).attr("_target") + '"]').trigger(
          "click"
        );
  }
  if (jQuery(window).width() <= 991 || jQuery(".form-search-html-2").length) {
    jQuery(window).width() > 991 &&
      jQuery("#vp-booking-form").addClass("pc_no_booking_search"),
      jQuery("#vp-booking-form").addClass("is-active"),
      jQuery("body").addClass("booking-search-opening"),
      jQuery("#vp-booking-form.is-active").length ||
        jQuery(".vp-booking-form-top .form-control.bg-white").trigger("click");
    var a = jQuery(e).attr("_target2");
    jQuery("#vp-booking-form .mobile-formsearch select").val(a),
      jQuery("#vp-booking-form .mobile-formsearch select").trigger("change"),
      setTimeout(function () {
        jQuery(
          '#navbarSupportedContent button[data-target="#navbarSupportedContent"]'
        ).trigger("click");
      }, 100);
  }
}
function ht_mobile_main_menu() {
  jQuery("li.control").on("click", function (e) {
    jQuery(this).hasClass("_active")
      ? (jQuery(this).removeClass("_active"),
        jQuery(this).find(".dropdown-menu").hide())
      : (jQuery(this).addClass("_active"),
        jQuery(this).find(".dropdown-menu").show(),
        jQuery(this)
          .siblings(".control")
          .find(".dropdown-menu")
          .removeClass("show"));
  });
}
function ht_handle_search_form(e) {
  hotel_search(e),
    plain_search(e),
    combo_search(e),
    jQuery(document).on(
      "click",
      'a[href="#_experience"]:not(.active)',
      function () {
        vou_ser(e);
      }
    ),
    jQuery(document).on("change", ".mobile-formsearch select", function () {
      "exp" == jQuery(this).val() && vou_ser(e);
    }),
    jQuery('a[href="#_experience"]').hasClass("active") && vou_ser(e);
}
function choose_this(e, t) {
  var r = jQuery(t);
  r.val(jQuery(e).text()),
    r.trigger("change"),
    r.attr("_value", jQuery(e).attr("value")),
    jQuery(e).parent().addClass("d-none");
}
function ht_switch_btn(e, t, r) {
  var a = jQuery(t).val(),
    n = jQuery(r).val(),
    i = jQuery(t).attr("_value"),
    o = jQuery(r).attr("_value");
  jQuery(r).val(a),
    jQuery(t).val(n),
    jQuery(t).attr("_value", o),
    jQuery(r).attr("_value", i);
}
function hotel_search(e) {
  var t = null;
  jQuery(e + " input.hotel_list").keyup(function (r) {
    jQuery(e + " input.hotel_list").attr("_value", "");
    var a = jQuery(this);
    clearTimeout(t),
      (t = setTimeout(function () {
        grecaptcha
          .execute(captchaSiteKey, { action: "submit" })
          .then(function (t) {
            ht_call_ajax(
              drupalSettings.path.baseUrl + "search/autocomplete/",
              { request_data: { name: "hotel", keyw: a.val(), captcha: t } },
              function (t) {
                if (t.is_error) return alert(t.m), !1;
                var r =
                  "vi" == lang
                    ? "Không tìm thấy dữ liệu phù hợp."
                    : "No result found.";
                if (t.length > 0) {
                  r = "";
                  for (let a in t)
                    r +=
                      '<div class="' +
                      t[a].type +
                      '" value="?locationId=' +
                      t[a].locationid +
                      "&hotelId=" +
                      t[a].hotelid +
                      '" onclick="choose_this(this, \'' +
                      e +
                      " input.hotel_list');\">" +
                      t[a].name +
                      "</div>";
                }
                a.next().html(r), a.next().removeClass("d-none");
              }
            );
          });
      }, 500));
  }),
    jQuery(document).mouseup(function (t) {
      var r = jQuery("#_book_hotel .border-vp-search > .input-group"),
        a = jQuery("#book_hotel .border-vp-search > .input-group");
      r.is(t.target) ||
        0 !== r.has(t.target).length ||
        a.is(t.target) ||
        0 !== a.has(t.target).length ||
        jQuery(e + " input.hotel_list")
          .next()
          .addClass("d-none");
    }),
    jQuery(e + " button.hotel-submit").click(function (t) {
      t.preventDefault();
      var r = jQuery(e + " input.hotel_list").attr("_value"),
        a = jQuery(e + ' input[name="promotionCode"]').val(),
        n = drupalSettings.user.uid ? "true" : "false",
        i = jQuery(e + ' input[name="hotel_date"]').val();
      if ("" != i)
        var o = i.split(" - ")[0].split("/"),
          l = new Date(o[2], o[1] - 1, o[0]),
          s = i.split(" - ")[1].split("/"),
          u = new Date(s[2], s[1] - 1, s[0]),
          c = o[2] + "/" + o[1] + "/" + o[0],
          p = (u.getTime() - l.getTime()) / 864e5;
      var h;
      if (
        ((roomOccupancy_arr = []),
        jQuery(e + " .book_hotel .room-detail-item:not(.d-none)").each(
          function (e, t) {
            var r = jQuery(this).find("input.num-adult").val(),
              a = jQuery(this).find("input.num-children").val(),
              n = jQuery(this).find("input.num-infant").val();
            roomOccupancy_arr.push(r + "_" + a + "_" + n);
          }
        ),
        (h = roomOccupancy_arr.join(",")),
        "" == r || null == r || null == c || null == p || "" == h)
      )
        return (
          alert(
            "vi" == lang
              ? "Xin bạn vui lòng nhập đầy đủ thông tin."
              : "Please enter essential infomation."
          ),
          !1
        );
      _etmc.push([
        "trackPageView",
        { search: jQuery(e + " input.hotel_list").val() },
      ]),
        window.open(
          htRedirectUrl +
            "/hotel/search" +
            r +
            "&promotionCode=" +
            a +
            "&arrivalDate=" +
            c +
            "&lengthOfStay=" +
            p +
            "&roomOccupancy=" +
            h +
            "&isLogged=" +
            n
        );
    });
}
function plain_search(e) {
  var t = null;
  jQuery(e + " input.flight.departure_from").keyup(function (e) {
    var r = jQuery(this);
    clearTimeout(t),
      (t = setTimeout(function () {
        grecaptcha
          .execute(captchaSiteKey, { action: "submit" })
          .then(function (e) {
            ht_call_ajax(
              drupalSettings.path.baseUrl + "search/autocomplete/",
              {
                request_data: {
                  name: "city_airport",
                  keyw: r.val(),
                  captcha: e,
                },
              },
              function (e) {
                if (e.is_error) return alert(e.m), !1;
                var t =
                  "vi" == lang
                    ? "Không tìm thấy dữ liệu phù hợp."
                    : "No result found.";
                if (e.length > 0) {
                  t = "";
                  for (let r in e) {
                    let a = e[r].name.replace(
                      "," + e[r].city + "," + e[r].country,
                      ""
                    );
                    t +=
                      '<div value="' +
                      e[r].code +
                      '" onclick="choose_this(this, \'input.flight.departure_from\');"><p><b>' +
                      e[r].city +
                      ", " +
                      e[r].country +
                      '</b></p><p><span class="code">' +
                      e[r].code +
                      "</span> - " +
                      a +
                      "</p></div>";
                  }
                }
                r.next().html(t), r.next().removeClass("d-none");
              }
            );
          });
      }, 1e3));
  }),
    jQuery(e + " input.flight.going_to").keyup(function (e) {
      var r = jQuery(this);
      clearTimeout(t),
        (t = setTimeout(function () {
          grecaptcha
            .execute(captchaSiteKey, { action: "submit" })
            .then(function (e) {
              ht_call_ajax(
                drupalSettings.path.baseUrl + "search/autocomplete/",
                {
                  request_data: {
                    name: "city_airport",
                    keyw: r.val(),
                    captcha: e,
                  },
                },
                function (e) {
                  if (e.is_error) return alert(e.m), !1;
                  var t =
                    "vi" == lang
                      ? "Không tìm thấy dữ liệu phù hợp."
                      : "No result found.";
                  if (e.length > 0) {
                    t = "";
                    for (let r in e)
                      t +=
                        '<div value="' +
                        e[r].code +
                        '" onclick="choose_this(this, \'input.flight.going_to\');"><p><b>' +
                        e[r].city +
                        ", " +
                        e[r].country +
                        '</b></p><p><span class="code">' +
                        e[r].code +
                        "</span> - " +
                        e[r].name +
                        "</p></div>";
                  }
                  r.next().html(t), r.next().removeClass("d-none");
                }
              );
            });
        }, 1e3));
    }),
    jQuery(document).mouseup(function (t) {
      var r = jQuery("#_book_plane .border-vp-search > .departure_from"),
        a = jQuery("#_book_plane .border-vp-search > .going_to"),
        n = jQuery("#book_plane .border-vp-search > .departure_from"),
        i = jQuery("#book_plane .border-vp-search > .going_to");
      r.is(t.target) ||
        0 !== r.has(t.target).length ||
        n.is(t.target) ||
        0 !== n.has(t.target).length ||
        jQuery(e + " input.flight.departure_from")
          .next()
          .addClass("d-none"),
        ((!a.is(t.target) && 0 === a.has(t.target).length) ||
          (!i.is(t.target) && 0 === i.has(t.target).length)) &&
          jQuery(e + " input.flight.going_to")
            .next()
            .addClass("d-none");
    }),
    jQuery(e + ' input[name="oneway_date"]')
      .on("change", function () {
        if ("" != jQuery(this).val()) {
          var e = jQuery(this).val().split("-");
          (e = e[2] + "/" + e[1] + "/" + e[0]),
            jQuery(this).attr("data-date", e);
        } else jQuery(this).attr("data-date", "dd/mm/yyyy");
      })
      .trigger("change"),
    jQuery(
      e + ' .vp-booking-form__inner > .col-md-12 > .row input[type="radio"]'
    ).change(function (t) {
      1 == jQuery(this).prop("checked") &&
        (jQuery(this).hasClass("oneway")
          ? (jQuery(e + ' input[name="oneway_date"]').removeClass("d-none"),
            jQuery(e + ' input[name="plain_date"]').addClass("d-none"),
            jQuery(this)
              .parents(".vp-booking-form__inner")
              .find(".reportrange")
              .addClass("d-none"))
          : (jQuery(e + ' input[name="oneway_date"]').addClass("d-none"),
            jQuery(e + ' input[name="plain_date"]').removeClass("d-none"),
            jQuery(this)
              .parents(".vp-booking-form__inner")
              .find(".reportrange")
              .removeClass("d-none")));
    }),
    jQuery(e + " button.airport-submit").click(function (t) {
      t.preventDefault();
      var r = jQuery(e + " input.pos_1").attr("_value"),
        a = jQuery(e + " input.pos_2").attr("_value"),
        n = jQuery(e + ' input[name="plain_date"]').val(),
        i = jQuery(e + ' input[name="oneway_date"]').val();
      if ("" != n) {
        var o = n.split(" - ")[0].split("/"),
          l = n.split(" - ")[1].split("/"),
          s = o[2] + "/" + o[1] + "/" + o[0];
        if ("on" == jQuery(e + " input#c2").val())
          var u = l[2] + "/" + l[1] + "/" + l[0];
        else u = "";
      }
      if ("" != i) {
        var c = i.split("-");
        c = c.join("/");
      }
      var p = 0;
      jQuery(
        e + ' .book_plane .room-detail-item:not(.d-none) input[name="adults"]'
      ).each(function (e, t) {
        p += parseInt(jQuery(this).val());
      });
      var h = 0;
      jQuery(
        e + ' .book_plane .room-detail-item:not(.d-none) input[name="children"]'
      ).each(function (e, t) {
        h += parseInt(jQuery(this).val());
      });
      var d = 0;
      jQuery(
        e + ' .book_plane .room-detail-item:not(.d-none) input[name="infant"]'
      ).each(function (e, t) {
        d += parseInt(jQuery(this).val());
      });
      var m = "false";
      if (
        (jQuery(e + " input.c3:checked").length && (m = "true"),
        "" == r ||
          "" == a ||
          null == r ||
          null == a ||
          ("" == n && jQuery(e + " input.roundtrip").prop("checked")) ||
          ("" == i && jQuery(e + " input.oneway").prop("checked")) ||
          (0 == p && 0 == h && 0 == d))
      )
        return (
          alert(
            "vi" == lang
              ? "Xin bạn vui lòng nhập đầy đủ thông tin."
              : "Please enter essential infomation."
          ),
          !1
        );
      if (r == a)
        return (
          alert(
            "vi" == lang
              ? "Điểm khởi hành và điểm đến không được trùng nhau."
              : "The departure cannot be the same as the destination."
          ),
          !1
        );
      if ("" != n && jQuery(e + " input.roundtrip").prop("checked"))
        var _ = "&departureDate=" + s + "&returnDate=" + u;
      if ("" != i && jQuery(e + " input.oneway").prop("checked"))
        _ = "&departureDate=" + c;
      _etmc.push([
        "trackPageView",
        { search: jQuery(e + " input.flight.going_to").val() },
      ]),
        window.open(
          htRedirectUrl +
            "/flight?startPoint=" +
            r +
            "&endPoint=" +
            a +
            _ +
            "&adult=" +
            p +
            "&children=" +
            h +
            "&infant=" +
            d +
            "&searchMonth=" +
            m
        );
    });
}
function combo_search(e) {
  var t = null;
  jQuery(e + " input.cbl.departure_from").keyup(function (e) {
    var r = jQuery(this);
    clearTimeout(t),
      (t = setTimeout(function () {
        grecaptcha
          .execute(captchaSiteKey, { action: "submit" })
          .then(function (e) {
            ht_call_ajax(
              drupalSettings.path.baseUrl + "search/autocomplete/",
              {
                request_data: {
                  name: "airport_location",
                  keyw: r.val(),
                  captcha: e,
                },
              },
              function (e) {
                if (e.is_error) return alert(e.m), !1;
                var t =
                  "vi" == lang
                    ? "Không tìm thấy dữ liệu phù hợp."
                    : "No result found.";
                if (e.length > 0) {
                  t = "";
                  for (let r in e)
                    t +=
                      '<div onclick="choose_this(this, \'input.cbl.departure_from\');" value="' +
                      e[r].locationid +
                      '">' +
                      e[r].name +
                      "</div>";
                }
                r.next().html(t), r.next().removeClass("d-none");
              }
            );
          });
      }, 500));
  }),
    jQuery(e + " input.cbl.going_to").keyup(function (e) {
      var r = jQuery(this);
      clearTimeout(t),
        (t = setTimeout(function () {
          grecaptcha
            .execute(captchaSiteKey, { action: "submit" })
            .then(function (e) {
              ht_call_ajax(
                drupalSettings.path.baseUrl + "search/autocomplete/",
                {
                  request_data: {
                    name: "airport_location",
                    keyw: r.val(),
                    captcha: e,
                  },
                },
                function (e) {
                  if (e.is_error) return alert(e.m), !1;
                  var t =
                    "vi" == lang
                      ? "Không tìm thấy dữ liệu phù hợp."
                      : "No result found.";
                  if (e.length > 0) {
                    t = "";
                    for (let r in e)
                      t +=
                        '<div onclick="choose_this(this, \'input.cbl.going_to\');" value="' +
                        e[r].locationid +
                        '">' +
                        e[r].name +
                        "</div>";
                  }
                  r.next().html(t), r.next().removeClass("d-none");
                }
              );
            });
        }, 500));
    }),
    jQuery(document).mouseup(function (t) {
      var r = jQuery("#_t_hotel .border-vp-search > .departure_from"),
        a = jQuery("#_t_hotel .border-vp-search > .going_to");
      r.is(t.target) ||
        0 !== r.has(t.target).length ||
        jQuery(e + " input.cbl.departure_from")
          .next()
          .addClass("d-none"),
        a.is(t.target) ||
          0 !== a.has(t.target).length ||
          jQuery(e + " input.cbl.going_to")
            .next()
            .addClass("d-none");
    }),
    jQuery(e + " button.combo_search_list").click(function (t) {
      t.preventDefault();
      var r = jQuery(e + " input.cbl_1").attr("_value"),
        a = jQuery(e + " input.cbl_2").attr("_value"),
        n = jQuery(e + ' input[name="combo_date"]').val();
      if ("" != n)
        var i = n.split(" - ")[0].split("/"),
          o = n.split(" - ")[1].split("/"),
          l = i[2] + "/" + i[1] + "/" + i[0],
          s = o[2] + "/" + o[1] + "/" + o[0];
      var u = 0;
      jQuery(
        e + ' .t_hotel .room-detail-item:not(.d-none) input[name="adults"]'
      ).each(function (e, t) {
        u += parseInt(jQuery(this).val());
      });
      var c = 0;
      jQuery(
        e + ' .t_hotel .room-detail-item:not(.d-none) input[name="children"]'
      ).each(function (e, t) {
        c += parseInt(jQuery(this).val());
      });
      var p = 0;
      jQuery(
        e + ' .t_hotel .room-detail-item:not(.d-none) input[name="infant"]'
      ).each(function (e, t) {
        p += parseInt(jQuery(this).val());
      });
      var h;
      return (
        (roomOccupancy_arr = []),
        jQuery(e + " .t_hotel .room-detail-item:not(.d-none)").each(function (
          e,
          t
        ) {
          var r = jQuery(this).find("input.num-adult").val(),
            a = jQuery(this).find("input.num-children").val(),
            n = jQuery(this).find("input.num-infant").val();
          roomOccupancy_arr.push(r + "_" + a + "_" + n);
        }),
        (h = roomOccupancy_arr.join(",")),
        "" == r || "" == a || null == r || null == a || "" == h || "" == n
          ? (alert(
              "vi" == lang
                ? "Xin bạn vui lòng nhập đầy đủ thông tin."
                : "Please enter essential infomation."
            ),
            !1)
          : r == a
          ? (alert(
              "vi" == lang
                ? "Điểm khởi hành và điểm đến không được trùng nhau."
                : '"Departure from" and "Going to" must be not the same.'
            ),
            !1)
          : (_etmc.push([
              "trackPageView",
              { search: jQuery(e + " input.cbl.going_to").val() },
            ]),
            void window.open(
              htRedirectUrl +
                "/combo/search?startPointId=" +
                r +
                "&endPointId=" +
                a +
                "&departureDate=" +
                l +
                "&returnDate=" +
                s +
                "&adult=" +
                u +
                "&child=" +
                c +
                "&infant=" +
                p +
                "&roomOccupancy=" +
                h
            ))
      );
    });
}
function vou_ser(e) {
  ht_call_ajax(
    drupalSettings.path.baseUrl + "search/autocomplete/",
    { request_data: { name: "airport_location_2", keyw: "" } },
    function (t) {
      var r =
        "vi" == lang
          ? '<option value="default">Chọn địa điểm</option>'
          : '<option value="default">Places</option>';
      for (let e in t)
        r +=
          '<option class="ht_transition" value="' +
          t[e].locationid +
          '">' +
          t[e].name +
          "</option>";
      jQuery(e + " select.desti_ser").html(r);
    }
  ),
    jQuery(e + " button.vou_ser").click(function (t) {
      var r = jQuery(e + ' input[name="activity_ser"]').val(),
        a = jQuery(e + ' select[name="desti_ser"]').val();
      "default" == a && (a = ""),
        window.open(
          htRedirectUrl +
            "/tours-and-experiences/search?keyword=" +
            r +
            "&location=" +
            a
        );
    });
}
function ht_subcribe_site() {
  var e = jQuery('.email_register input[type="email"]');
  jQuery('input[name="subcribe"]').keyup(function (t) {
    var r = jQuery(this).val();
    e.val(r);
  }),
    jQuery("button.email_register_submit").click(function (e) {
      jQuery("#edit-subscribe").trigger("click");
    });
}
function ht_fix_popper_js() {
  -1 ==
    jQuery("html").html().indexOf("/vendor/popperjs/popper.min.js?v=1.16.0") &&
    (jQuery(document).on(
      "click",
      ".bookingFormQuantity_1 .input-group",
      function (e) {
        e.preventDefault(),
          jQuery(this)
            .find(".vp-room-choose.dropdown-menu")
            .toggleClass("show");
      }
    ),
    jQuery(document).on(
      "click",
      ".bookingFormQuantity_2 .input-group",
      function (e) {
        e.preventDefault(),
          jQuery(this)
            .find(".vp-room-choose.dropdown-menu")
            .toggleClass("show");
      }
    ),
    jQuery(document).on(
      "click",
      ".bookingFormQuantity_3 .input-group",
      function (e) {
        e.preventDefault(),
          jQuery(this)
            .find(".vp-room-choose.dropdown-menu")
            .toggleClass("show");
      }
    ));
}
function ht_trans(e) {
  var t,
    r,
    a = jQuery(e).attr("_target");
  if (jQuery("." + a).hasClass("d-none")) {
    jQuery("." + a)
      .siblings(".nav-link")
      .addClass("d-none"),
      jQuery("." + a).removeClass("d-none");
    var n = jQuery(e).attr("_id");
    (t = n),
      (r = function () {
        window.location.href = jQuery('a[hreflang="' + n + '"]').attr("href");
      }),
      (document.cookie = "_vpLangCustom=" + t + ";path=/"),
      "function" == typeof r && r();
  }
}
function ht_cuisine_handler() {
  jQuery(".cuisine_all_m").trigger("destroy.owl.carousel");
  jQuery(".cuisine_all_m .owl-carousel").owlCarousel({
    items: 3,
    margin: 40,
    nav: !0,
    dots: !0,
    responsive: { 0: { items: 1 }, 991: { items: 3 } },
    onInitialized: function (e) {},
  });
}
function ht_navtab_click() {
  jQuery(".node-full.node-hotel ul.nav.nav-tabs.just-betwen > li").on(
    "click",
    function (e) {
      jQuery(this).hasClass("active") ||
        (jQuery(this).addClass("active"),
        jQuery(this).siblings("li").removeClass("active"));
    }
  );
}
function ht_pearl_club() {
  if (jQuery(".pearl_club_page .pcl_slide").length)
    new Swiper(".pcl_slide .swiper-container", {
      spaceBetween: 30,
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
    });
  jQuery(
    ".pearl_club_page .pcl_booking_search .form-search-top ul > li a"
  ).each(function (e, t) {
    var r,
      a = "",
      n = drupalSettings.path.baseUrl + "themes/porto/img/vinpearl/pearl_club/";
    switch (e) {
      case 0:
        (a = n + "hotel_act.svg"),
          (src_img2 = n + "hotel.svg"),
          jQuery(this).attr({ _target: "_book_hotel", _target2: "hotel" });
        break;
      case 1:
        (a = n + "flight_act.svg"),
          (src_img2 = n + "flight.svg"),
          jQuery(this).attr({ _target: "_book_plane", _target2: "plan" });
        break;
      case 2:
        (a = n + "hotel_flight_act.svg"),
          (src_img2 = n + "hotel_flight.svg"),
          jQuery(this).attr({ _target: "_t_hotel", _target2: "ticket" });
        break;
      case 3:
        (a = n + "exp_act.svg"),
          (src_img2 = n + "exp.svg"),
          jQuery(this).attr({ _target: "_experience", _target2: "exp" });
    }
    (r =
      '<img class="act" src="' +
      a +
      '" /><img class="not_act" src="' +
      src_img2 +
      '" />'),
      jQuery(this).prepend(r),
      jQuery(window).width() <= 480 &&
        (jQuery(
          ".pearl_club_page .pcl_booking_search .form-search-top ul > li a"
        ).removeAttr("data-toggle"),
        jQuery(
          ".pearl_club_page .pcl_booking_search .form-search-top ul > li a"
        ).click(function (e) {
          var t = jQuery(this).attr("_target2");
          jQuery("#vp-booking-form .mobile-formsearch select").val(t),
            jQuery("#vp-booking-form .mobile-formsearch select").trigger(
              "change"
            ),
            jQuery("#vp-booking-form").addClass("is-active");
        }));
  });
  new Swiper(".promo_item_wrapper .swiper-container", {
    breakpoints: {
      0: { slidesPerView: 1.2, spaceBetween: 27 },
      480: { slidesPerView: 2.2, spaceBetween: 27 },
      992: {
        allowSlidePrev: !1,
        allowSlideNext: !1,
        slidesPerView: 3,
        spaceBetween: 27,
      },
    },
  }),
    new Swiper(".pcl_ranking_card .swiper-container", {
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            el: ".pcl_ranking_card .swiper-pagination",
            clickable: !0,
          },
        },
        481: { slidesPerView: 2, freeMode: !0 },
        992: {
          allowSlidePrev: !1,
          allowSlideNext: !1,
          slidesPerView: 3,
          spaceBetween: 18,
        },
      },
    });
  if (jQuery(".merchant_list").length) {
    jQuery(document).on("click", ".fake_merchant_exposed a", function (e) {
      jQuery(this).closest("ul").removeClass("open"),
        jQuery(this).parent().addClass("active"),
        jQuery(this).parent().siblings("li").removeClass("active"),
        jQuery('.merchant_list .views-exposed-form input[name="tid_raw"]').val(
          ""
        ),
        jQuery('.merchant_list .views-exposed-form input[name="title"]').val(
          ""
        ),
        jQuery(
          '.merchant_list .views-exposed-form input[name="field_address_value"]'
        ).val(""),
        jQuery('input[name="merchant_ser"]').val("");
      let t = jQuery(this).attr("data-tid"),
        r = jQuery('.merchant_list .views-exposed-form input[name="tid_raw"]'),
        a = jQuery(
          '.merchant_list .views-exposed-form .form-actions input[type="submit"]'
        );
      r.val(t), a.trigger("click");
    });
    let e = jQuery('.merchant_list .views-exposed-form input[name="tid_raw"]')
        .val()
        .trim(),
      t = jQuery('.merchant_list .views-exposed-form input[name="title"]')
        .val()
        .trim();
    "" != e &&
      (jQuery('a[data-tid="' + e + '"]')
        .parent()
        .addClass("active")
        .end()
        .parent()
        .siblings("li")
        .removeClass("active"),
      setTimeout(function () {
        jQuery('select[name="merchant_cat"]').val(e).change();
      }, 500)),
      "" != t
        ? jQuery(".search_box_wrapper input").val(t)
        : (sessionStorage.removeItem("keyword_ser"),
          jQuery(".empty_wrapper .no_result_text").show());
    let r = jQuery(".search_box_wrapper input"),
      a = jQuery(".search_box_wrapper select"),
      n = jQuery(".search_box_wrapper button");
    if (
      (a.change(function (e) {
        jQuery(".search_box_wrapper .select_option").text(
          jQuery(this).find("option:selected").text()
        );
      }),
      r.keyup(function (e) {
        if (13 == e.which) return n.trigger("click"), !1;
      }),
      n.click(function (e) {
        let t = r.val().replace(/\"/g, "'");
        "" != t && sessionStorage.setItem("keyword_ser", t),
          jQuery(
            '.merchant_list .views-exposed-form input[name="tid_raw"]'
          ).val(a.val()),
          jQuery('.merchant_list .views-exposed-form input[name="title"]').val(
            t
          ),
          jQuery(
            '.merchant_list .views-exposed-form input[name="field_address_value"]'
          ).val(t),
          jQuery('a[data-tid="' + a.val() + '"]')
            .parent()
            .addClass("active")
            .end()
            .parent()
            .siblings("li")
            .removeClass("active"),
          jQuery(
            ".merchant_list .views-exposed-form .form-actions input"
          ).trigger("click");
      }),
      jQuery(".merchant_list_header .fake_merchant_exposed ul > img").on(
        "click",
        function (e) {
          jQuery(this).parent().toggleClass("open");
        }
      ),
      null != sessionStorage.getItem("keyword_ser"))
    ) {
      let e = sessionStorage.getItem("keyword_ser");
      jQuery(".empty_wrapper").length &&
        (jQuery(".empty_wrapper").addClass("keyword"),
        jQuery(".empty_wrapper span.keyword").text(e));
    }
    jQuery(document).mouseup(function (e) {
      var t = jQuery(".ht.form-item-options");
      t.is(e.target) ||
        0 !== t.has(e.target).length ||
        t.find(".option_block").slideUp();
    });
  } else sessionStorage.removeItem("keyword_ser");
  if (jQuery(".block_2_wrapper").length && jQuery(window).width() <= 480) {
    jQuery
      .when(
        (jQuery(".block_2_wrapper").addClass("swiper-container"),
        jQuery(".block_2_wrapper").append(
          '<div class="swiper-pagination"></div>'
        ),
        jQuery(".block_2_wrapper .imgs_wrapper")
          .addClass("swiper-wrapper")
          .removeClass("row"),
        void jQuery(".block_2_wrapper .imgs_wrapper .col-md-4").each(function (
          e,
          t
        ) {
          jQuery(this).addClass("swiper-slide").removeClass("col-md-4");
        }))
      )
      .done(function () {
        new Swiper(".block_2_wrapper", {
          slidesPerView: 1,
          pagination: { el: ".block_2_wrapper .swiper-pagination" },
        });
      });
  }
  if (jQuery(".block_4_wrapper").length && jQuery(window).width() <= 480) {
    jQuery
      .when(
        (jQuery(".block_4_wrapper").addClass("swiper-container"),
        jQuery(".block_4_wrapper > .item_wrapper")
          .addClass("swiper-wrapper")
          .removeClass("row"),
        void jQuery(".block_4_wrapper > .item_wrapper .col-md-4").each(
          function (e, t) {
            jQuery(this)
              .addClass("swiper-slide")
              .removeClass("col-md-4")
              .removeClass("aos-init")
              .removeClass("aos-animate")
              .removeAttr("data-aos");
          }
        ))
      )
      .done(function () {
        setTimeout(function () {
          new Swiper(".block_4_wrapper", {
            slidesPerView: 1.2,
            spaceBetween: 14,
            pagination: { el: ".block_4_wrapper .swiper-pagination" },
          });
        }, 500);
      });
  }
}
function ht_front_page() {
  if (jQuery(window).width() <= 480) {
    jQuery
      .when(
        (jQuery(
          ".vp-promotions-voucher > .container > .views-element-container"
        ).addClass("swiper-container"),
        jQuery(
          ".vp-promotions-voucher > .container > .views-element-container"
        ).css("width", "369"),
        jQuery(
          ".vp-promotions-voucher > .container > .views-element-container > .row"
        ).addClass("swiper-wrapper"),
        jQuery(
          ".vp-promotions-voucher > .container > .views-element-container > .row > .col-md-6"
        ).each(function (e, t) {
          jQuery(this).addClass("swiper-slide").removeClass("col-md-6 col-12");
        }),
        void jQuery(".row.view_all_promo").appendTo(
          ".vp-promotions-voucher > .container > .views-element-container"
        ))
      )
      .done(function () {
        new Swiper(".vp-promotions-voucher .swiper-container", {
          slidesPerView: 1.2,
          spaceBetween: 10,
        });
      }),
      jQuery
        .when(
          (jQuery(".pearlclub_block_wrapper .sw-container").addClass(
            "swiper-container"
          ),
          jQuery(".pearlclub_block_wrapper .sw-container").append(
            '<div class="swiper-pagination"></div>'
          ),
          jQuery(
            ".pearlclub_block_wrapper .sw-container > .utility_wrapper"
          ).addClass("swiper-wrapper"),
          void jQuery(
            ".pearlclub_block_wrapper .sw-container > .utility_wrapper > .uti"
          ).addClass("swiper-slide"))
        )
        .done(function () {
          setTimeout(function () {
            new Swiper(".pearlclub_block_wrapper .swiper-container", {
              slidesPerView: 1,
              pagination: { el: ".pearlclub_block_wrapper .swiper-pagination" },
            });
          }, 300);
        });
  }
}
function ht_tag_page() {
  let e = jQuery('.tags_page .views-exposed-form input[name="name"]'),
    t = jQuery(
      '.tags_page .views-exposed-form .form-actions input[type="submit"]'
    );
  jQuery('input[name="tag_name"]').val(e.val()),
    jQuery('input[name="tag_name"]').keyup(function (r) {
      if (13 == r.which) return t.trigger("click"), !1;
      let a = jQuery(this).val();
      e.val(a);
    }),
    jQuery('input[name="tag_name_submit"]').click(function (e) {
      t.trigger("click");
    });
}
function ht_contact_form_vp() {
  jQuery('.contact_form_content form input[type="submit"]').click(function (e) {
    let t = jQuery('.contact_form_content form input[name="name"]'),
      r = jQuery('.contact_form_content form input[name="email"]'),
      a = jQuery('.contact_form_content form input[name="phone"]');
    if ("" == t.val()) return t.siblings("span.err").show(), !1;
    if ((t.siblings("span.err").hide(), "" == r.val()))
      return r.siblings("span.err").show(), !1;
    if (
      (r.siblings("span.err").hide(),
      !(function (e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e
        );
      })(r.val()))
    )
      return r.siblings("span.err_format").show(), !1;
    if ((r.siblings("span.err_format").hide(), "" == a.val()))
      return a.siblings("span.err").show(), !1;
    if ((a.siblings("span.err").hide(), !a.val().match(/^\d{10}$/)))
      return a.siblings("span.err_wrong_num").show(), !1;
    a.siblings("span.err_wrong_num").hide();
    let n = [jQuery("select.sbj_related").val(), t.val(), a.val(), r.val()];
    jQuery("#subject").val(n.join("_"));
  });
  let e = null;
  jQuery("#pc-contact form").submit(function () {
    if (
      (clearTimeout(e),
      jQuery(".msg-error").remove(),
      "" == grecaptcha.getResponse())
    )
      return (
        jQuery("#pc-contact")
          .find(".g-recaptcha")
          .append(
            '<div class="msg-error" style="color:red;font-size:12px">' +
              jQuery(".captcha_error").text() +
              "</div>"
          ),
        (e = setTimeout(function () {
          jQuery(".msg-error").remove();
        }, 2e3)),
        !1
      );
    {
      let e = jQuery(this).attr("id");
      var t = drupalSettings.ivBytes,
        r = drupalSettings.keyBytes,
        a = CryptoJS.enc.Hex.parse(r),
        n = CryptoJS.enc.Hex.parse(t);
      let i = jQuery("#contact-form-vp #email").val();
      i = CryptoJS.AES.encrypt(i, a, {
        iv: n,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }).ciphertext.toString(CryptoJS.enc.Base64);
      let o = jQuery("#contact-form-vp #name").val();
      o = CryptoJS.AES.encrypt(o, a, {
        iv: n,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }).ciphertext.toString(CryptoJS.enc.Base64);
      let l = jQuery("#contact-form-vp #phone").val();
      (l = CryptoJS.AES.encrypt(l, a, {
        iv: n,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }).ciphertext.toString(CryptoJS.enc.Base64)),
        console.log("Phone Encript: "),
        console.log(l),
        dataLayer.push({
          event: "leave_contact",
          form_submit_id: e + "_" + Date.now(),
          form_name: "Vinpearl - Form hỗ trợ",
          user_property_1: i,
          user_property_2: o,
          user_property_3: l,
        });
    }
  });
}
