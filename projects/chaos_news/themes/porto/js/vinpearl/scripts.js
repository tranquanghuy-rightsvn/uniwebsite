function setWeatherData(e, t, a) {
  a &&
    (document.getElementById("weather-next-" + e + "-text") &&
      (document.getElementById("weather-next-" + e + "-text").innerHTML = t),
    document.getElementById("weather-next-" + e + "-value") &&
      (document.getElementById("weather-next-" + e + "-value").innerHTML =
        Math.round(10 * (a.main.temp - 274)) / 10 + "°"));
}
function getWetherData(e, t) {
  let a = new Date(new Date().getTime() + 864e5 * t),
    o = a.getMonth() + 1;
  o < 10 && (o = "0" + o);
  let i = a.getDate();
  i < 10 && (i = "0" + i);
  let n = a.getFullYear() + "-" + o + "-" + i + " 12:00:00",
    l = i + "/" + o;
  for (let a = 0; a < e.length; a++)
    e[a].dt_txt == n &&
      (setWeatherData(t, l, e[a]), setWeatherIcon(t, e[a].weather[0].main));
}
function setWeatherIcon(e, t) {
  let a = "weather-next-" + e + "-icon-" + t.toLowerCase();
  document.getElementById(a) &&
    (document.getElementById(a).style.display = "block");
}
function isOnScreen(e) {
  if (0 != e.length) {
    var t = jQuery(window),
      a = t.scrollTop(),
      o = t.height(),
      i = a + o,
      n = jQuery(e),
      l = n.offset().top,
      s = n.height(),
      d = l + s;
    return (
      (l >= a && l < i) || (d > a && d <= i) || (s > o && l <= a && d >= i)
    );
  }
}
!(function (e) {
  (window.lazyLoadImg = function (t = null) {
    null != t
      ? t.each(function () {
          e(this)
            .find("img.lazyload")
            .one("load", function (t) {
              var a = e(this);
              if ("" != a.data("src")) {
                var o = new Image();
                (o.onload = function () {
                  a.attr("src", this.src),
                    a.data("src", ""),
                    a.addClass("lazy-loaded");
                }),
                  a && a.data("src") && (o.src = a.data("src"));
              }
            })
            .each(function () {
              e(this).trigger("load");
            });
        })
      : e("img:not(.lazy-loaded):not(.lazyload)")
          .one("load", function (t) {
            var a = e(this);
            if ("" != a.data("src")) {
              var o = new Image();
              (o.onload = function () {
                a.attr("src", this.src),
                  a.data("src", ""),
                  a.addClass("lazy-loaded");
              }),
                a && a.data("src") && (o.src = a.data("src"));
            }
          })
          .each(function () {
            e(this).trigger("load");
          });
  }),
    e(".section-resort-content .card-body li.label-discovery.more").click(
      function () {
        e(this).parent().find("li.d-none").removeClass("d-none"),
          e(this).remove();
      }
    );
})(jQuery),
  jQuery("#vp-about-us-info").owlCarousel({
    items: 1,
    loop: !0,
    nav: !0,
    dots: !1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: !1,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  (function (e) {
    document.getElementById("customerInfo");
    if (e("#detail-content-order").offset()) {
      var t = e("#detail-content-order").offset().left,
        a = e("#detail-content-order").outerWidth(),
        o = e(window).width();
      e(window).scroll(function () {
        var i = e(window).scrollTop();
        t &&
          a &&
          o > 1023 &&
          (i >= 870
            ? (e("#detail-content-order").css({
                position: "fixed",
                top: "155px",
                left: t,
                width: a,
              }),
              e(".vp-content").outerHeight() - i <= 800 &&
                e("#detail-content-order").css({
                  position: "absolute",
                  top: "unset",
                  left: "unset",
                  bottom: "80px",
                }))
            : e("#detail-content-order").css({ position: "static" }));
      });
    }
  })(jQuery),
  jQuery(".vp-carousel-booking-search").owlCarousel({
    items: 1,
    loop: !0,
    nav: !0,
    dots: !1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: !1,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  (function (e) {
    var t = e("#vp-input-group-search");
    e("> .input-group-append > .btn", t).on("click", function () {
      t.toggleClass("is-active");
    }),
      e(".js-btn-booking").on("click", function () {
        e(this).toggleClass("is-active"),
          e("#vp-booking-form").toggleClass("is-active"),
          e(this).hasClass("is-active")
            ? (e(".js-btn-booking").addClass("is-active"),
              e("body").addClass("vp-lock"))
            : (e("body").removeClass("vp-lock"),
              e(".js-btn-booking").removeClass("is-active"));
      }),
      window.lazyLoadImg(),
      e(".js-btn-booking-sm").on("click", function () {
        e(this).toggleClass("is-active"),
          e("#vp-booking-form-sm").toggleClass("is-active");
      });
    var a = e(".btn-back-top");
    e(window).on("scroll", function () {
      e(window).scrollTop() > 100
        ? a.addClass("is-active")
        : a.removeClass("is-active");
    }),
      a.on("click", function () {
        e("html, body").animate({ scrollTop: 0 }, 1e3);
      }),
      e(".navbar-toggler").on("click", function () {
        e("body").addClass("vp-lock");
      }),
      e(".navbar-toggler-sm").on("click", function () {
        e("body").removeClass("vp-lock"),
          e("#vp-booking-form-sm").removeClass("is-active");
      });
    e('input[name="datetimessingle"], input[name="date"]').daterangepicker({
      singleDatePicker: !0,
      autoApply: !0,
      locale: { format: "DD/MM/YYYY" },
    }),
      e(".js-seclect-destinations").select2({ width: "resolve" }),
      e(".js-seclect-filter-booking").select2({
        width: "resolve",
        minimumResultsForSearch: 1 / 0,
        style: "filter-booking",
      }),
      e(".js-seclect-booking-gender").select2({
        width: "resolve",
        minimumResultsForSearch: 1 / 0,
      }),
      e(".js-seclect-booking-country").select2({
        width: "resolve",
        minimumResultsForSearch: 1 / 0,
      }),
      e(document).on(
        "click",
        ".dropdown.keep-open .dropdown-menu",
        function (e) {
          e.stopPropagation();
        }
      ),
      window.addEventListener(
        "load",
        function () {
          var e = document.getElementsByClassName("needs-validation");
          Array.prototype.filter.call(e, function (e) {
            e.addEventListener(
              "submit",
              function (t) {
                !1 === e.checkValidity() &&
                  (t.preventDefault(), t.stopPropagation()),
                  e.classList.add("was-validated");
              },
              !1
            );
          });
        },
        !1
      ),
      window.addEventListener(
        "load",
        function () {
          if ("travel-click" == VP.search.booking_mode) {
            var t = document.getElementsByClassName("vp-booking-hotel-form");
            Array.prototype.filter.call(t, function (t) {
              t.addEventListener(
                "submit",
                function (a) {
                  var o = e(".js-seclect-destinations", e(this)).val(),
                    i = "https://reservations.travelclick.com/" + o + "/";
                  !1 === t.checkValidity()
                    ? (a.preventDefault(), a.stopPropagation())
                    : (0 != o
                        ? window.open(i)
                        : alert(
                            "Điểm đến này đang cập nhật. Xin vui lòng chọn điểm đến khác"
                          ),
                      a.preventDefault(),
                      a.stopPropagation()),
                    t.classList.add("was-validated");
                },
                !1
              );
            });
          }
        },
        !1
      ),
      e(".js-load-modal-login").on("click", function () {
        e("#openModalRegister").modal("hide"),
          setTimeout(function () {
            e("#openModalLogin").modal("show");
          }, 600);
      }),
      e(".js-load-modal-register").on("click", function () {
        e("#openModalLogin").modal("hide"),
          setTimeout(function () {
            e("#openModalRegister").modal("show");
          }, 600);
      }),
      e(".js-event-slider").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !0,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    var t = e("#vp-input-group-search-2");
    e("> .input-group-append-2 > .btn", t).on("click", function () {
      t.toggleClass("is-active");
    }),
      e("#myContactInput").on("keyup", function () {
        var t = e(this).val().toLowerCase();
        e("#myContactTable tr").filter(function () {
          e(this).toggle(e(this).text().toLowerCase().indexOf(t) > -1);
        });
        var a = document.getElementsByClassName("vp-lien-he-content-box");
        for (let e = 0; e < a.length; e++) {
          var o = a[e].getElementsByTagName("p"),
            i = 0;
          for (let e = 0; e < o.length; e++)
            o[e].textContent.toLocaleLowerCase().search(t) > -1 && i++;
          a[e].style.display = i > 0 ? "block" : "none";
        }
      });
  })(jQuery),
  jQuery("#vp-destination-detail-info-carousel").owlCarousel({
    loop: !0,
    margin: 10,
    responsiveClass: !0,
    responsive: {
      0: { items: 1, nav: !0, dots: !0 },
      767: { items: 2, nav: !0, dots: !1 },
    },
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  (function (e) {
    e("#vp-destination-hotel-price-box").owlCarousel({
      items: 3,
      loop: !1,
      nav: !0,
      dots: !0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e("#vp-destination-hotel-promotion-box").owlCarousel({
        items: 3,
        loop: !1,
        nav: !0,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-destination-hotel-promotion-box-mb").owlCarousel({
        items: 1,
        loop: !1,
        nav: !1,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-card-mb-list").owlCarousel({
        items: 1,
        loop: !1,
        nav: !1,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayHoverPause: !0,
        responsive: {
          992: {
            items: 4,
            margin: 20,
            nav: !0,
            dots: !1,
            autoWidth: !1,
            center: !1,
          },
        },
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    e(".vp-entertainment-golf-slider").owlCarousel({
      loop: !0,
      nav: !0,
      dots: !0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      responsive: { 0: { items: 1 }, 768: { items: 3 } },
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e(".pearl-club-owl-carousel").owlCarousel({
        items: 2,
        loop: !1,
        margin: 16,
        nav: !0,
        dots: !1,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1023: { items: 2 },
          1440: { items: 2 },
        },
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  jQuery("#vp-full-banner").owlCarousel({
    items: 1,
    loop: !0,
    nav: !0,
    dots: !1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: !0,
    autoplayTimeout: 7e3,
    autoplayHoverPause: !0,
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  jQuery(".vp-promotions-voucher-slider").owlCarousel({
    items: 1,
    margin: 0,
    loop: !1,
    nav: !0,
    dots: !0,
    autoplay: !1,
    autoWidth: !0,
    center: !0,
    responsive: {
      992: {
        items: 1,
        margin: 0,
        nav: !0,
        dots: !1,
        autoWidth: !1,
        center: !1,
      },
    },
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  (function (e) {
    e("#vp-hotel-brand-slider").owlCarousel({
      items: 1,
      loop: !0,
      nav: !0,
      dots: !1,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e("#vp-hotel-brand-detail-slider").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-brand-slider-info1").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-brand-slider-info2").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-detail-slider-testimonial1").owlCarousel({
        items: 2,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-detail-slider-testimonial2").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-voucher-content-box").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-price-box").owlCarousel({
        items: 2,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-hotel-price-box-mb").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e(".vp-voucher-content-item-img-carosel").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    jQuery(".vp-list-hotel-adv").trigger("destroy.owl.carousel"),
      e(".vp-list-hotel-adv").owlCarousel({
        items: 3,
        loop: !1,
        nav: !0,
        dots: !0,
        center: !1,
        margin: 10,
        responsive: {
          0: { items: 1.2, center: !0 },
          480: { items: 2 },
          768: { items: 3 },
        },
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  jQuery(".vp-part-hotel-price-box").owlCarousel({
    loop: !0,
    nav: !0,
    dots: !0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: !1,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    responsive: { 0: { items: 1 }, 768: { items: 3 } },
    onInitialized: function (e) {
      window.lazyLoadImg();
    },
  }),
  (function (e) {
    e("#vp-meeting-detail-slider1").owlCarousel({
      items: 1,
      loop: !0,
      nav: !0,
      dots: !1,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e("#vp-meeting-detail-slider2").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-meeting-detail-slider3").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-meeting-detail-slider4").owlCarousel({
        loop: !0,
        nav: !0,
        dots: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsive: { 0: { items: 1 }, 768: { items: 3 } },
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    e("#vp-meeting-slider1").owlCarousel({
      items: 1,
      loop: !0,
      nav: !0,
      dots: !1,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e("#vp-meeting-slider2").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
      e("#vp-meeting-slider3").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    e("#share-fb").click(function () {
      return (
        window.open(
          e(this).attr("href"),
          "Facebook",
          "height=450, width=550, top=" +
            (e(window).height() / 2 - 275) +
            ", left=" +
            (e(window).width() / 2 - 225) +
            ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
        ),
        !1
      );
    }),
      e("#share-twitter").click(function () {
        return (
          window.open(
            e(this).attr("href"),
            "Twitter",
            "height=450, width=550, top=" +
              (e(window).height() / 2 - 275) +
              ", left=" +
              (e(window).width() / 2 - 225) +
              ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
          ),
          !1
        );
      }),
      e("#share-linkedin").click(function () {
        return (
          window.open(
            e(this).attr("href"),
            "Linkedin",
            "height=450, width=550, top=" +
              (e(window).height() / 2 - 275) +
              ", left=" +
              (e(window).width() / 2 - 225) +
              ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
          ),
          !1
        );
      });
  })(jQuery),
  (function (e) {
    e(document).ready(function () {
      var t = e(".vp-carousel-main"),
        a = t.closest(".vp-carousel-group").find(".vp-carousel-thumb");
      t
        .owlCarousel({
          items: 1,
          nav: !0,
          autoplay: !0,
          dots: !1,
          loop: !0,
          responsiveRefreshRate: 200,
          onInitialized: function (e) {
            window.lazyLoadImg();
          },
        })
        .on("changed.owl.carousel", function (e) {
          t.trigger("stop.owl.autoplay"),
            t.trigger("play.owl.autoplay"),
            (function (e) {
              var t = e.item.count - 1,
                o = Math.round(e.item.index - e.item.count / 2 - 0.5);
              o < 0 && (o = t);
              o > t && (o = 0);
              a.find(".owl-item")
                .removeClass("current")
                .eq(o)
                .addClass("current");
              var i = a.find(".owl-item.active").length - 1,
                n = a.find(".owl-item.active").first().index(),
                l = a.find(".owl-item.active").last().index();
              o > l && a.data("owl.carousel").to(o, 100, !0);
              o < n && a.data("owl.carousel").to(o - i, 100, !0);
            })(e);
        }),
        a
          .on("initialized.owl.carousel", function () {
            a.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
            items: 3,
            margin: 6,
            dots: !1,
            nav: !1,
            smartSpeed: 200,
            slideSpeed: 500,
            onInitialized: function (e) {
              window.lazyLoadImg();
            },
            slideBy: 3,
          })
          .on("changed.owl.carousel", function (e) {
            var a = e.item.index;
            t.data("owl.carousel").to(a, 100, !0);
          }),
        a.on("click", ".owl-item", function (a) {
          a.preventDefault();
          var o = e(this).index();
          t.data("owl.carousel").to(o, 300, !0);
        });
    });
  })(jQuery),
  (function (e) {
    e(document).ready(function () {
      for (var t = 0; t < e(".ti-tab-click").length; t++) {
        var a = e(e(".ti-tab-click")[t]).data("tab-id");
        0 == t
          ? (e("#tab-" + a).addClass("active"),
            e("#tab-" + a).attr("aria-selected", !0),
            e("#tab-row-item-content-" + a).show(),
            e("#tab-" + a + a).addClass("active"),
            e("#tab-" + a + a).addClass("show"))
          : (e("#tab-" + a).removeClass("active"),
            e("#tab-" + a).attr("aria-selected", !1),
            e("#tab-row-item-content-" + a).hide(),
            e("#tab-" + a + a).removeClass("active"),
            e("#tab-" + a + a).removeClass("show"));
      }
    }),
      e(".ti-tab-click").click(function (t) {
        for (
          var a = e(t.currentTarget).data("tab-id"), o = 0;
          o < e(".ti-tab-click").length;
          o++
        ) {
          var i = e(e(".ti-tab-click")[o]).data("tab-id");
          i == a
            ? (e("#tab-" + a).addClass("active"),
              e("#tab-" + a).attr("aria-selected", !0),
              e("#tab-row-item-content-" + a).show(),
              e("#tab-" + a + a).addClass("active"),
              e("#tab-" + a + a).addClass("show"))
            : (e("#tab-" + i).removeClass("active"),
              e("#tab-" + i).attr("aria-selected", !1),
              e("#tab-row-item-content-" + i).hide(),
              e("#tab-" + i + i).removeClass("active"),
              e("#tab-" + i + i).removeClass("show"));
        }
      }),
      e("#tab-mb-1").click(function () {
        e("#tab-mb-1").addClass("active"),
          e("#tab-mb-1").attr("aria-selected", !0),
          e("#tab-row-item-content-mb-1").show(),
          e("#tab-mb-11").addClass("active"),
          e("#tab-mb-11").addClass("show"),
          e("#tab-mb-2").removeClass("active"),
          e("#tab-mb-2").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-2").hide(),
          e("#tab-mb-22").removeClass("active"),
          e("#tab-mb-22").removeClass("show"),
          e("#tab-mb-3").removeClass("active"),
          e("#tab-mb-3").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-3").hide(),
          e("#tab-mb-33").removeClass("active"),
          e("#tab-mb-33").removeClass("show");
      }),
      e("#tab-mb-2").click(function () {
        e("#tab-mb-2").addClass("active"),
          e("#tab-mb-2").attr("aria-selected", !0),
          e("#tab-row-item-content-mb-2").show(),
          e("#tab-mb-22").addClass("active"),
          e("#tab-mb-22").addClass("show"),
          e("#tab-mb-1").removeClass("active"),
          e("#tab-mb-1").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-1").hide(),
          e("#tab-mb-11").removeClass("active"),
          e("#tab-mb-11").removeClass("show"),
          e("#tab-mb-3").removeClass("active"),
          e("#tab-mb-3").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-3").hide(),
          e("#tab-mb-33").removeClass("active"),
          e("#tab-mb-33").removeClass("show");
      }),
      e("#tab-mb-3").click(function () {
        e("#tab-mb-3").addClass("active"),
          e("#tab-mb-3").attr("aria-selected", !0),
          e("#tab-row-item-content-mb-3").show(),
          e("#tab-mb-33").addClass("active"),
          e("#tab-mb-33").addClass("show"),
          e("#tab-mb-2").removeClass("active"),
          e("#tab-mb-2").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-2").hide(),
          e("#tab-mb-22").removeClass("active"),
          e("#tab-mb-22").removeClass("show"),
          e("#tab-mb-1").removeClass("active"),
          e("#tab-mb-1").attr("aria-selected", !1),
          e("#tab-row-item-content-mb-1").hide(),
          e("#tab-mb-11").removeClass("active"),
          e("#tab-mb-11").removeClass("show");
      }),
      e("#payment-type-1").click(function () {
        e("#collapPay1").attr("class").indexOf("show") >= 0
          ? (e("#payment-icon-check-1").hide(),
            e("#payment-icon-1").show(),
            e("#payment-up-1").hide(),
            e("#payment-down-1").show())
          : (e("#payment-icon-check-1").show(),
            e("#payment-icon-1").hide(),
            e("#payment-up-1").show(),
            e("#payment-down-1").hide(),
            e("#payment-icon-check-2").hide(),
            e("#payment-icon-2").show(),
            e("#payment-up-2").hide(),
            e("#payment-down-2").show(),
            e("#payment-icon-check-3").hide(),
            e("#payment-icon-3").show(),
            e("#payment-up-3").hide(),
            e("#payment-down-3").show(),
            e("#collapPay2").removeClass("show"),
            e("#collapPay3").removeClass("show"));
      }),
      e("#payment-type-2").click(function () {
        e("#collapPay2").attr("class").indexOf("show") >= 0
          ? (e("#payment-icon-check-2").hide(),
            e("#payment-icon-2").show(),
            e("#payment-up-2").hide(),
            e("#payment-down-2").show())
          : (e("#payment-icon-check-2").show(),
            e("#payment-icon-2").hide(),
            e("#payment-up-2").show(),
            e("#payment-down-2").hide(),
            e("#payment-icon-check-1").hide(),
            e("#payment-icon-1").show(),
            e("#payment-up-1").hide(),
            e("#payment-down-1").show(),
            e("#payment-icon-check-3").hide(),
            e("#payment-icon-3").show(),
            e("#payment-up-3").hide(),
            e("#payment-down-3").show(),
            e("#collapPay1").removeClass("show"),
            e("#collapPay3").removeClass("show"));
      }),
      e("#payment-type-3").click(function () {
        e("#collapPay3").attr("class").indexOf("show") >= 0
          ? (e("#payment-icon-check-3").hide(),
            e("#payment-icon-3").show(),
            e("#payment-up-3").hide(),
            e("#payment-down-3").show())
          : (e("#payment-icon-check-3").show(),
            e("#payment-icon-3").hide(),
            e("#payment-up-3").show(),
            e("#payment-down-3").hide(),
            e("#payment-icon-check-2").hide(),
            e("#payment-icon-2").show(),
            e("#payment-up-2").hide(),
            e("#payment-down-2").show(),
            e("#payment-icon-check-1").hide(),
            e("#payment-icon-1").show(),
            e("#payment-up-1").hide(),
            e("#payment-down-1").show(),
            e("#collapPay2").removeClass("show"),
            e("#collapPay1").removeClass("show"));
      });
  })(jQuery),
  (function (e) {
    e("#vp-top-banner").owlCarousel({
      items: 1,
      loop: !0,
      nav: !1,
      dots: !0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: !0,
      autoplayTimeout: 7e3,
      autoplayHoverPause: !0,
      onInitialized: function (e) {
        window.lazyLoadImg();
      },
    }),
      e("#vp-bottom-banner").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: !0,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      });
  })(jQuery),
  (function (e) {
    e("#videoImg1").click(function () {
      e("#myVideo1").get(0).play(),
        e("#videoImg1").css("display", "none"),
        e("#videoImg2").css("display", "none"),
        e("#videoTitle1").css("display", "none"),
        e("#videoSub1").css("display", "none");
    }),
      e("#myVideo1").click(function () {
        this.paused
          ? (this.play(),
            e("#videoImg1").css("display", "none"),
            e("#videoImg2").css("display", "none"),
            e("#videoTitle1").css("display", "none"),
            e("#videoSub1").css("display", "none"))
          : (this.pause(),
            e("#videoImg1").css("display", "block"),
            e("#videoTitle1").css("display", "block"),
            e("#videoSub1").css("display", "block"));
      }),
      e("#vp-video-adv-content-text").click(function () {
        e("#myVideo1").get(0).paused
          ? (e("#myVideo1").get(0).play(),
            e("#videoImg1").css("display", "none"),
            e("#videoImg2").css("display", "none"),
            e("#videoTitle1").css("display", "none"),
            e("#videoSub1").css("display", "none"))
          : (e("#myVideo1").get(0).pause(),
            e("#videoImg1").css("display", "block"),
            e("#videoTitle1").css("display", "block"),
            e("#videoSub1").css("display", "block"));
      });
  })(jQuery),
  (function (e) {
    e(document).ready(function () {
      var t = e("#owl-demo"),
        a = e("#news-event-next"),
        o = e("#news-event-prev");
      t.owlCarousel({
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsiveClass: !0,
        autoWidth: !1,
        dots: !1,
        responsive: {
          0: { items: 1, loop: !0, nav: !1, center: !1, autoWidth: !1 },
          767: { items: 1, loop: !1, autoWidth: !1, nav: !0 },
        },
        onInitialized: function (e) {
          window.lazyLoadImg();
        },
      }),
        a.click(function () {
          t.trigger("next.owl.carousel");
        }),
        o.click(function () {
          t.trigger("prev.owl.carousel");
        }),
        t.on("changed.owl.carousel", function (e) {
          var t = e.item.index;
          0 === t &&
            (o.prop("disabled", !0).removeClass("active"),
            a.prop("disabled", !1).addClass("active")),
            t === e.item.count - 1 &&
              (o.prop("disabled", !1).addClass("active"),
              a.prop("disabled", !0).removeClass("active")),
            t > 0 &&
              t < e.item.count - 1 &&
              (a.prop("disabled", !1).addClass("active"),
              o.prop("disabled", !1).addClass("active"));
        });
      var i = e(".vpw-play-sale"),
        n = e("#play-sale-next"),
        l = e("#play-sale-prev");
      if (
        (i.owlCarousel({
          autoplay: !1,
          autoplayTimeout: 3e3,
          autoplayHoverPause: !0,
          responsiveClass: !0,
          autoWidth: !1,
          dots: !1,
          responsive: {
            0: { items: 1, loop: !0, nav: !1, center: !1, autoWidth: !1 },
            767: { items: 1, loop: !1, autoWidth: !1, nav: !0 },
          },
          onInitialized: function (e) {
            window.lazyLoadImg();
          },
        }),
        n.click(function () {
          i.trigger("next.owl.carousel");
        }),
        l.click(function () {
          i.trigger("prev.owl.carousel");
        }),
        i.on("changed.owl.carousel", function (e) {
          var t = e.item.index;
          0 === t &&
            (l.prop("disabled", !0).removeClass("active"),
            n.prop("disabled", !1).addClass("active")),
            t === e.item.count - 1 &&
              (l.prop("disabled", !1).addClass("active"),
              n.prop("disabled", !0).removeClass("active")),
            t > 0 &&
              t < e.item.count - 1 &&
              (n.prop("disabled", !1).addClass("active"),
              l.prop("disabled", !1).addClass("active"));
        }),
        e(".vpw-play-promo").trigger("destroy.owl.carousel"),
        e(".vpw-play-promo").owlCarousel({
          items: 1,
          margin: 56,
          dots: !1,
          responsive: {
            480: { items: 1, margin: 0 },
            768: { items: 2, margin: 0 },
            1023: { items: 3 },
            1440: { items: 3 },
          },
          onInitialized: function (e) {
            window.lazyLoadImg();
          },
        }),
        e("#image-map").length > 0)
      ) {
        var s = L.map("image-map", {
            minZoom: 0.5,
            maxZoom: 4,
            center: [0, 0],
            zoom: 1,
            crs: L.CRS.Simple,
          }),
          d = s.unproject([0, 6e3], s.getMaxZoom() - 1),
          r = s.unproject([6e3, 0], s.getMaxZoom() - 1),
          c = new L.LatLngBounds(d, r);
        L.imageOverlay("themes/porto/img/vinpearl/map.png", c).addTo(s),
          s.setMaxBounds(c);
      }
      if (
        (e("#detail-event .body").height() < 85 &&
          e("#detail-event a.view-more-arrow").hide(),
        e(".node-full.node-hotel #detail-about .box-more-event p").each(
          function (t, a) {
            let o = e(this).parent().next().attr("item");
            ("" != o && null != o && null != o) || (o = 1),
              e(this).is(":nth-child(1)") ||
                e(this).is(":nth-child(2)") ||
                e(this).is(":nth-child(3)") ||
                e(this).addClass("box-more-event-" + o);
          }
        ),
        e(
          ".block-views-blockhairan-taxonomy-functions-block-3 div > .tab-content .body p"
        ).each(function (t, a) {
          let o = e(this).parent().next().attr("item");
          ("" != o && null != o && null != o) || (o = 1),
            e(this).is(":nth-child(1)") ||
              e(this).addClass("box-more-event-" + o);
        }),
        e(".p49_des_block .box-more-event > div").height() <= 105 &&
          e(".p49_des_block a.view-more-arrow").hide(),
        e(document).on("click", ".view-more-arrow", function () {
          let t = e(".trans_block .view_more").text(),
            a = e(".trans_block .hide_less").text();
          var o = e(this).attr("item");
          e(".box-more-event-" + o).toggleClass("un-height"),
            e(this).toggleClass("view-more-arrow-fix"),
            e(this).text().trim() == t ? e(this).text(a) : e(this).text(t);
        }),
        e(".detail_meeting").length > 0)
      ) {
        var u =
          e(".box-more-event-1 > p:first-child").outerHeight() +
          e(".box-more-event-1 > p:nth-child(2)").outerHeight() +
          20;
        console.log(u),
          e(".box-more-event-1").attr("style", "height:" + u + "px");
      }
    });
  })(jQuery),
  (function (e, t, a) {
    "use strict";
    (t.behaviors.insiderVinpearl = {
      attach: function (t, o) {
        var i = a.user_info;
        if (i) {
          const e = {
            username: i.full_name,
            useremail: i.email,
            userphone: i.phone_number,
            userid: i.crm_id,
          };
          localStorage.setItem("aip-chatbot-user", JSON.stringify(e)),
            (window.insider_object = {
              user: {
                gdpr_optin: !0,
                name: i.full_name,
                email: i.email,
                email_optin: !0,
                phone_number: i.phone_number,
                sms_optin: !0,
                list_id: [1],
                udid: i.crm_id,
                Voucher_Apply_for: i.Voucher_Apply_for,
                Remaining_Amount: i.Remaining_Amount,
                Remaining_Item: i.Remaining_Item,
                Ma_chien_dich: i.Ma_chien_dich,
                Trang_thai_the: i.Trang_thai_the,
                Ngay_het_han_the: i.Ngay_het_han_the,
                member_type: i.membership_code,
                Tong_so_luong_uu_dai: i.Tong_so_luong_uu_dai,
                Ten_uu_dai: i.Ten_uu_dai,
                Ngay_bat_dau_uu_dai: i.Ngay_bat_dau_uu_dai,
                Ngay_ket_thuc_uu_dai: i.Ngay_ket_thuc_uu_dai,
                Gia_tri_tich_luy: i.Gia_tri_tich_luy,
              },
            });
        } else localStorage.removeItem("aip-chatbot-user");
        e(".lang-dropdown .dropdown-item").on("click", function () {
          var t = e(this).attr("_id");
          dataLayer.push({ event: "change_language", language: t });
        }),
          "news" == a.node_type
            ? dataLayer.push({
                page_type: a.page_type,
                page_platform: "Web",
                page_category_lv1: a.page_category_lv1,
                page_category_lv2: a.page_category_lv2,
                page_category_lv3: "",
                article_location: a.node.article_location,
                article_title: a.node.title,
                article_id: a.node.nid,
                article_published_date: a.node.created,
              })
            : dataLayer.push({
                page_type: a.page_type,
                page_platform: "Web",
                page_category_lv1: a.page_category_lv1,
                page_category_lv2: a.page_category_lv2,
                page_category_lv3: a.page_category_lv3,
              }),
          (function (e, t, a, o, i) {
            (e[o] = e[o] || []),
              e[o].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var n = t.getElementsByTagName(a)[0],
              l = t.createElement(a);
            (l.async = !0),
              (l.src =
                "https://www.googletagmanager.com/gtm.js?id=GTM-PXF6MB2"),
              n.parentNode.insertBefore(l, n);
          })(window, document, "script", "dataLayer"),
          e(".menu-switch-language-item").click(function () {
            switch (e("div").index(this)) {
              case 0:
                localStorage.setItem("aip-chatbot-language", "vi");
                break;
              case 1:
                localStorage.setItem("aip-chatbot-language", "en");
                break;
              case 2:
                localStorage.setItem("aip-chatbot-language", "zh");
                break;
              default:
                localStorage.setItem("aip-chatbot-language", "kr");
            }
          });
        let n = null;
        (n = setInterval(function () {
          e("#vinbase_submit_user_info").length &&
            (clearInterval(n),
            e("#vinbase_submit_user_info").on("click", function (t) {
              var o = a.ivBytes,
                i = a.keyBytes,
                n = CryptoJS.enc.Hex.parse(i),
                l = CryptoJS.enc.Hex.parse(o);
              let s = e("#vinbase_input_email").val();
              s = CryptoJS.AES.encrypt(s, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64);
              let d = e("#vinbase_input_name").val();
              d = CryptoJS.AES.encrypt(d, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64);
              let r = e("#vinbase_input_phone").val();
              (r = CryptoJS.AES.encrypt(r, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64)),
                "" != e("#vinbase_input_name").val() &&
                  "" != e("#vinbase_input_email").val() &&
                  dataLayer.push({
                    event: "leave_contact",
                    form_submit_id: "chat_bot_" + Date.now(),
                    form_name: "chat_bot",
                    user_property_1: s,
                    user_property_2: d,
                    user_property_3: r,
                  });
            }));
        }, 1e3)),
          e("form.webform-submission-custom-wf-contact-form").submit(
            function () {
              let t = e(this).attr("id");
              var o = a.ivBytes,
                i = a.keyBytes,
                n = CryptoJS.enc.Hex.parse(i),
                l = CryptoJS.enc.Hex.parse(o);
              let s = e("#email").val();
              s = CryptoJS.AES.encrypt(s, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64);
              let d = e("#last_name").val();
              d = CryptoJS.AES.encrypt(d, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64);
              let r = e("#phone").val();
              (r = CryptoJS.AES.encrypt(r, n, {
                iv: l,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
              }).ciphertext.toString(CryptoJS.enc.Base64)),
                dataLayer.push({
                  event: "leave_contact",
                  form_submit_id: t + "_" + Date.now(),
                  form_name: "Vinpearl Golf - Liên hệ",
                  user_property_1: s,
                  user_property_2: d,
                  user_property_3: r,
                });
            }
          );
      },
    }),
      e("meta[content='NOINDEX, FOLLOW']").length &&
        (console.log("tesssssssssss"),
        e("meta[content='index, follow']").remove()),
      e("meta[name='robots']").remove();
  })(jQuery, Drupal, drupalSettings);
