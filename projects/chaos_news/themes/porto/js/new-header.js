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
    (t.behaviors.newHeader = {
      attach: function (e, o) {
        t.headerController.run(e, o);
      },
    }),
    (t.headerController = t.headerController || {}),
    (t.headerController.run = function (o, a) {
      e(document, o).each(function () {
        t.headerController.initLang(),
          t.headerController.panelMenu(),
          t.headerController.subPanelMenu(),
          t.headerController.mainMenu(),
          t.headerController.stickyMainmenu(),
          t.headerController.stickyMainmenu2(),
          t.headerController.bookingSearch.main(),
          t.headerController.rightPanelBookingSearch.handler();
      });
    }),
    (t.headerController.initLang = function () {
      (window.lang = e("html").attr("lang")),
        e("a.show_lang_" + lang).removeClass("d-none"),
        e("a.show_lang_" + lang)
          .siblings("a")
          .addClass("d-none"),
        e('[_target="show_lang_' + lang + '"]').each(function () {
          e(this).addClass("act");
        });
    }),
    (t.headerController.languageSwitcher = function (t) {
      switch (e(t).attr("_id")) {
        case "vi":
          localStorage.setItem("aip-chatbot-language", "vi");
          break;
        case "en":
          localStorage.setItem("aip-chatbot-language", "en");
          break;
        case "zh-hans":
          localStorage.setItem("aip-chatbot-language", "zh");
          break;
        default:
          localStorage.setItem("aip-chatbot-language", "kr");
      }
      var o,
        a,
        n = e(t).attr("_target");
      if (e("." + n).hasClass("d-none")) {
        e("." + n)
          .siblings(".nav-link")
          .addClass("d-none"),
          e("." + n).removeClass("d-none");
        var i = e(t).attr("_id");
        (o = i),
          (a = function () {
            window.location.href = e('a[hreflang="' + i + '"]').attr("href");
          }),
          (document.cookie = "_vpLangCustom=" + o + ";path=/"),
          "function" == typeof a && a();
      }
    }),
    (t.headerController.panelMenu = function () {
      let t = e(".header-wrapper .header-left-panel.desktop"),
        o = e(".header-wrapper .panel-open-btn"),
        a = ".panel-backdrop.desktop";
      e(window).width() < 992 &&
        ((t = e(".header-wrapper .header-left-panel.mobile")),
        (o = e(".header-wrapper .panel-open-btn-mb")),
        (a = ".panel-backdrop.mobile")),
        t.find(".panel-body>ul>li.menu-item--expanded").click(function () {
          e(this).toggleClass("open");
        }),
        o.click(function (o) {
          o.preventDefault(),
            t.addClass("open"),
            e(".header-wrapper .header-left-block").addClass("open");
        }),
        t
          .find(".panel-close-btn")
          .add(a)
          .click(function () {
            t.removeClass("open"),
              e(".header-wrapper .header-left-block").removeClass("open");
          });
    }),
    (t.headerController.mainMenu = function () {
      let t = e(window).width();
      if (t > 1199) {
        let a = e(".left-nav>li:nth-child(1)"),
          n =
            (t -
              e(".header-wrapper>.ht_tablet_hide_>.container").outerWidth()) /
            2;
        var o = t - a.offset().left - n;
        e("style.custom-width").remove(),
          e("head").append(
            '<style class="custom-width">:root{--dropdown-w:' +
              o +
              "px}</style>"
          );
      }
      e('a[href="/not_click"]').click(function (e) {
        e.preventDefault();
      });
      let a = e(".custom-menu.hotel-view-custom");
      if (
        (e(".main_menu_wrapper li.hotel .links-wrapper").html(""),
        a.appendTo(e(".main_menu_wrapper li.hotel .links-wrapper")),
        a.removeClass("d-none"),
        t < 992)
      ) {
        let t = e("ul.custom-menu-hotel");
        e('.header-left-panel.mobile .panel-body a[title="hotel"]')
          .next()
          .remove(),
          e('.header-left-panel.mobile .panel-body a[title="hotel"]').after(t),
          t.removeClass("d-none"),
          e(document).on(
            "click",
            "ul.custom-menu-hotel>li.menu-item--expanded",
            function () {
              e(this).toggleClass("open");
            }
          );
      } else {
        let t = e("ul.custom-menu-hotel");
        e('.header-left-panel.desktop .panel-body a[title="hotel"]')
          .next()
          .remove(),
          e('.header-left-panel.desktop .panel-body a[title="hotel"]').after(t),
          t.removeClass("d-none"),
          e(document).on(
            "click",
            "ul.custom-menu-hotel>li.menu-item--expanded",
            function () {
              e(this).toggleClass("open");
            }
          );
      }
      let n = e(".custom-exp-menu.hotel-view-custom");
      if (
        (e(".main_menu_wrapper li.exp .links-wrapper").html(""),
        n.appendTo(e(".main_menu_wrapper li.exp .links-wrapper")),
        n.removeClass("d-none"),
        t < 992)
      ) {
        let t = e("ul.custom-menu-exp");
        e('.header-left-panel.mobile .panel-body a[title="exp"]')
          .next()
          .remove(),
          e('.header-left-panel.mobile .panel-body a[title="exp"]').after(t),
          t.removeClass("d-none"),
          e(document).on(
            "click",
            "ul.custom-menu-exp>li.menu-item--expanded",
            function () {
              e(this).toggleClass("open");
            }
          );
      } else {
        let t = e("ul.custom-menu-exp");
        e('.header-left-panel.desktop .panel-body a[title="exp"]')
          .next()
          .remove(),
          e('.header-left-panel.desktop .panel-body a[title="exp"]').after(t),
          t.removeClass("d-none"),
          e(document).on(
            "click",
            "ul.custom-menu-exp>li.menu-item--expanded",
            function () {
              e(this).toggleClass("open");
            }
          );
      }
    }),
    (t.headerController.subPanelMenu = function () {
      e(window).width() < 992 &&
        (e(document).on("click", ".sub-panel-mb-open", function () {
          let o = e(this).attr("data-name").split(",");
          t.headerController.resetSubPanel(o),
            e(e(this).attr("data-sub-panel")).addClass("open");
        }),
        e(document).on("click", ".sub-panel-close", function () {
          e(e(this).attr("data-sub-panel")).removeClass("open");
        }),
        e(document).on("click", ".sub-panel-mb .confirm-btn", function () {
          t.headerController.closeSubPanel(e(this).attr("data-sub-panel"));
          let o = e('input[name="room_n_guest"]').val(),
            a = "";
          (roomOccupancy_arr = []),
            e("#sub-panel-room-guest .room-detail-item:not(.d-none)").each(
              function (e, t) {
                var o = jQuery(this).find("input.num-adult").val(),
                  a = jQuery(this).find("input.num-children").val(),
                  n = jQuery(this).find("input.num-infant").val();
                roomOccupancy_arr.push(o + "_" + a + "_" + n);
              }
            ),
            (a = roomOccupancy_arr.join(",")),
            e(".bs-item.room_n_guest .bs-info").text(o),
            e(".bs-item.room_n_guest .bs-info").attr("data-value", a);
        }));
    }),
    (t.headerController.resetSubPanel = function (t = []) {
      e(".sub-panel-mb").each(function () {
        let o = e(this).attr("data-name");
        -1 == e.inArray(o, t) && e(this).removeClass("open");
      });
    }),
    (t.headerController.closeSubPanel = function (t) {
      e(t).removeClass("open");
    }),
    (t.headerController.bookingSearch = t.headerController.bookingSearch || {}),
    (t.headerController.bookingSearch.main = function () {
      e(window).width() < 992
        ? t.headerController.bookingSearch.mobile()
        : (t.headerController.bookingSearch.desktop(),
          e(".bs .bs-wrapper.desktop").on("click", function (e) {
            document
              .querySelector(".bs .bs-wrapper.desktop")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }),
          e(".bs .bs-item-desktop.hotel_n_des.dropdown").on(
            "show.bs.dropdown",
            function () {
              document
                .querySelector(".bs .bs-wrapper.desktop")
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }
          ));
    }),
    (t.headerController.bookingSearch.mobile = function () {
      t.headerController.bookingSearch.hotel("desktop", ".bs"),
        t.headerController.bookingSearch.date("desktop", ".bs"),
        t.headerController.bookingSearch.room("desktop", ".bs"),
        t.headerController.bookingSearch.submit("desktop", ".bs");
    }),
    (t.headerController.bookingSearch.desktop = function () {
      t.headerController.bookingSearch.hotel("desktop", ".bs"),
        t.headerController.bookingSearch.date("desktop", ".bs"),
        t.headerController.bookingSearch.room("desktop", ".bs"),
        t.headerController.bookingSearch.submit("desktop", ".bs");
    }),
    (t.headerController.bookingSearch.hotel = function (
      o = "mobile",
      a = ".bs"
    ) {
      let n = drupalSettings.bs_hotel_n_flight,
        i = drupalSettings.bs_tour_n_exp;
      if ("mobile" == o)
        e("#sub-panel-hotel span.hotel").click(function () {
          let o = e(this).attr("data-tag-group-id"),
            a = e(this).text();
          t.headerController.closeSubPanel(".sub-panel-hotel"),
            e('[data-name="hotel_n_des"]').attr("data-value", o),
            e('[data-name="hotel_n_des"]').text(a),
            t.headerController.bookingSearch.autoJump("date", "mobile");
        }),
          e(".hotel_n_flight_mobile").attr("href", n),
          e(".tour_n_exp_mobile").attr("href", i);
      else if (e(a).hasClass("done")) {
        if (!e(a).hasClass("done")) {
          e(a).addClass("done");
          let o = [],
            n = [];
          e(a + " .hotel-view .view-content .tit").each(function () {
            o.push({
              name: e(this).text().trim(),
              tid: e(this).find("span").attr("data-tid"),
              location_id: e(this).find("span").attr("data-location-id"),
            });
          });
          for (let t in o) {
            let i = o[t].name,
              r = o[t].tid,
              s = o[t].location_id,
              l = [];
            e(a + ' .bs-item-desktop.hotel_n_des [des="' + i + '"]').each(
              function () {
                l.push([
                  e(this).attr("data-tag-group-id"),
                  e(this).text().trim(),
                  e(this).attr("data-alias"),
                ]);
              }
            ),
              n.push({ [i]: { hotelArray: l, tid: r, location_id: s } });
          }
          let i = "";
          for (let e in n) {
            let t = n[e];
            for (let e in t) {
              (i += '<div class="des-item" data-tid="' + t[e].tid + '">'),
                (i +=
                  '  <div class="des-item-name" data-location-id="' +
                  t[e].location_id +
                  '">' +
                  e +
                  "</div>"),
                (i += '  <div class="des-item-hotels">');
              for (let o in t[e].hotelArray)
                i +=
                  '<div class="des-item-hotel" data-tag-group-id="' +
                  t[e].hotelArray[o][0] +
                  '" data-alias="' +
                  t[e].hotelArray[o][2] +
                  '">' +
                  t[e].hotelArray[o][1] +
                  "</div>";
              (i += "  </div>"), (i += "</div>");
            }
          }
          e(a + " .hotel-view-custom").html(i),
            e(a + ' .des-item[data-tid="62"]').addClass("des-in-des"),
            e(a + ' .des-item[data-tid="62"]').appendTo(
              e(a + ' .des-item[data-tid="63"]')
            ),
            e(document).on(
              "click",
              a + " .bs-item-desktop.hotel_n_des [data-tag-group-id]",
              function () {
                e(
                  a + " .bs-item-desktop.hotel_n_des .bs-info-desktop"
                ).removeAttr("data-location-id");
                let o = e(this).attr("data-tag-group-id"),
                  n = e(this).text().trim();
                e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").text(n),
                  e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").attr(
                    "data-tag-group-id",
                    o
                  ),
                  t.headerController.bookingSearch.autoJump(
                    "date",
                    "desktop",
                    a
                  );
              }
            ),
            e(document).on(
              "click",
              a + " .bs-item-desktop.hotel_n_des .des-item-name",
              function () {
                e(
                  a + " .bs-item-desktop.hotel_n_des .bs-info-desktop"
                ).removeAttr("data-tag-group-id");
                let o = e(this).attr("data-location-id"),
                  n = e(this).text().trim();
                e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").text(n),
                  e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").attr(
                    "data-location-id",
                    o
                  ),
                  t.headerController.bookingSearch.autoJump(
                    "date",
                    "desktop",
                    a
                  );
              }
            );
        }
      } else {
        e(a).addClass("done"),
          e(a + " .hotel_n_flight_desktop").attr("target", "_self"),
          e(a + " .tour_n_exp_desktop").attr("target", "_self");
        let o = [],
          n = [];
        e(a + " .hotel-view .view-content .tit").each(function () {
          o.push({
            name: e(this).text().trim(),
            tid: e(this).find("span").attr("data-tid"),
            location_id: e(this).find("span").attr("data-location-id"),
          });
        });
        for (let t in o) {
          let i = o[t].name,
            r = o[t].tid,
            s = o[t].location_id,
            l = [];
          e(a + ' .bs-item-desktop.hotel_n_des [des="' + i + '"]').each(
            function () {
              l.push([
                e(this).attr("data-tag-group-id"),
                e(this).text().trim(),
                e(this).attr("data-alias"),
              ]);
            }
          ),
            n.push({ [i]: { hotelArray: l, tid: r, location_id: s } });
        }
        let i = "";
        for (let e in n) {
          let t = n[e];
          for (let e in t) {
            (i += '<div class="des-item" data-tid="' + t[e].tid + '">'),
              (i +=
                '  <div class="des-item-name" data-location-id="' +
                t[e].location_id +
                '">' +
                e +
                "</div>"),
              (i += '  <div class="des-item-hotels">');
            for (let o in t[e].hotelArray)
              i +=
                '<div class="des-item-hotel" data-tag-group-id="' +
                t[e].hotelArray[o][0] +
                '" data-alias="' +
                t[e].hotelArray[o][2] +
                '">' +
                t[e].hotelArray[o][1] +
                "</div>";
            (i += "  </div>"), (i += "</div>");
          }
        }
        e(a + " .hotel-view-custom").html(i),
          e(a + ' .des-item[data-tid="62"]').addClass("des-in-des"),
          e(a + ' .des-item[data-tid="62"]').appendTo(
            e(a + ' .des-item[data-tid="63"]')
          ),
          e(document).on(
            "click",
            a + " .bs-item-desktop.hotel_n_des [data-tag-group-id]",
            function () {
              e(
                a + " .bs-item-desktop.hotel_n_des .bs-info-desktop"
              ).removeAttr("data-location-id");
              let o = e(this).attr("data-tag-group-id"),
                n = e(this).text().trim();
              e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").text(n),
                e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").attr(
                  "data-tag-group-id",
                  o
                ),
                t.headerController.bookingSearch.autoJump("date", "desktop", a);
            }
          ),
          e(document).on(
            "click",
            a + " .bs-item-desktop.hotel_n_des [data-location-id]",
            function () {
              e(
                a + " .bs-item-desktop.hotel_n_des .bs-info-desktop"
              ).removeAttr("data-tag-group-id");
              let o = e(this).attr("data-location-id"),
                n = e(this).text().trim();
              e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").text(n),
                e(a + " .bs-item-desktop.hotel_n_des .bs-info-desktop").attr(
                  "data-location-id",
                  o
                ),
                t.headerController.bookingSearch.autoJump("date", "desktop", a);
            }
          );
      }
    }),
    (t.headerController.bookingSearch.date = function (
      o = "mobile",
      a = ".bs"
    ) {
      var n = moment().startOf("hour"),
        i = moment().startOf("hour").add(48, "hour"),
        r = "DD/MM/YYYY",
        s = "YYYY/MM/DD",
        l = (monthNames = "");
      e(a + " .daterangepicker_lang .days_of_week").each(function () {
        l = e(this).text().split(",");
      }),
        e(a + ".daterangepicker_lang .month_names").each(function () {
          monthNames = e(this).text().split(",");
        }),
        e(".nt-complex-hotel-item .book-btn-wrapper button").click(function () {
          e(function () {
            let o = {
              minDate: moment().startOf("hour"),
              startDate: n,
              endDate: i,
              autoApply: !0,
              locale: {
                format: r,
                daysOfWeek: l,
                monthNames: monthNames,
                cancelLabel: drupalSettings.translation.bs_delete,
                applyLabel: drupalSettings.translation.bs_apply,
              },
            };
            ".bs" != a &&
              ((o.parentEl = a + " .checkin_n_checkout"),
              (o.linkedCalendars = !1)),
              e(a + ' input[name="daterange-desktop"]').daterangepicker(
                o,
                function (o, n) {
                  e(
                    a + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
                  ).attr("data-start", o.format(r)),
                    e(
                      a +
                        " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
                    ).attr("data-end", n.format(r)),
                    t.headerController.bookingSearch.autoJump(
                      "room",
                      "desktop",
                      a
                    );
                }
              ),
              ".bs" != a &&
                (e(a + " .drp-calendar.right").hide(),
                e(a + " .drp-calendar.left").addClass("single"),
                e(a + " .calendar-table").on("DOMSubtreeModified", function () {
                  var t = e(".prev.available").parent().children().last();
                  t.hasClass("next available") ||
                    (t.addClass("next available"), t.append("<span></span>"));
                })),
              e(a + ' input[name="daterange-desktop"]').on(
                "cancel.daterangepicker",
                function (t, o) {
                  e(this).val("d/m/Y - d/m/Y"),
                    e(this).parent().attr("data-start", ""),
                    e(this).parent().attr("data-end", "");
                }
              ),
              e(a + ' input[name="daterange-desktop"]').on(
                "show.daterangepicker",
                function (t, o) {
                  e(this).parents(".bs-item-desktop").addClass("show");
                }
              ),
              e(a + ' input[name="daterange-desktop"]').on(
                "hide.daterangepicker",
                function (t, o) {
                  e(this).parents(".bs-item-desktop").removeClass("show");
                }
              );
          }),
            e(a + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop").attr(
              "data-start",
              n.format(r)
            ),
            e(a + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop").attr(
              "data-end",
              i.format(r)
            );
        }),
        "mobile" == o
          ? (e(".bs-item.checkin_n_checkout .bs-info").attr(
              "data-start",
              n.format(s)
            ),
            e(".bs-item.checkin_n_checkout .bs-info").attr(
              "data-end",
              i.format(s)
            ),
            e(".bs-item.checkin_n_checkout .bs-info").text(
              n.format(r) + " - " + i.format(r)
            ),
            e(function () {
              e('input[name="daterange-mb"]').daterangepicker(
                {
                  minDate: moment().startOf("hour"),
                  startDate: n,
                  endDate: i,
                  autoApply: !0,
                  locale: { format: r, daysOfWeek: l, monthNames: monthNames },
                  parentEl: "#sub-panel-checkin-checkout .sub-panel-body",
                  linkedCalendars: !1,
                },
                function (o, a) {
                  e(".bs-item.checkin_n_checkout .bs-info").attr(
                    "data-start",
                    o.format(r)
                  ),
                    e(".bs-item.checkin_n_checkout .bs-info").attr(
                      "data-end",
                      a.format(r)
                    ),
                    e(".bs-item.checkin_n_checkout .bs-info").text(
                      o.format(r) + " - " + a.format(r)
                    ),
                    t.headerController.closeSubPanel(
                      ".sub-panel-checkin-checkout"
                    ),
                    t.headerController.bookingSearch.autoJump("room", "mobile");
                }
              ),
                e(".drp-calendar.right").hide(),
                e(".drp-calendar.left").addClass("single"),
                e(".calendar-table").on("DOMSubtreeModified", function () {
                  var t = e(".prev.available").parent().children().last();
                  t.hasClass("next available") ||
                    (t.addClass("next available"), t.append("<span></span>"));
                });
            }))
          : (e(function () {
              let o = {
                minDate: moment().startOf("hour"),
                startDate: n,
                endDate: i,
                autoApply: !0,
                locale: {
                  format: r,
                  daysOfWeek: l,
                  monthNames: monthNames,
                  cancelLabel: drupalSettings.translation.bs_delete,
                  applyLabel: drupalSettings.translation.bs_apply,
                },
              };
              ".bs" != a &&
                ((o.parentEl = a + " .checkin_n_checkout"),
                (o.linkedCalendars = !1)),
                e(a + ' input[name="daterange-desktop"]').daterangepicker(
                  o,
                  function (o, n) {
                    e(
                      a +
                        " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
                    ).attr("data-start", o.format(r)),
                      e(
                        a +
                          " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
                      ).attr("data-end", n.format(r)),
                      t.headerController.bookingSearch.autoJump(
                        "room",
                        "desktop",
                        a
                      );
                  }
                ),
                ".bs" != a &&
                  (e(a + " .drp-calendar.right").hide(),
                  e(a + " .drp-calendar.left").addClass("single"),
                  e(a + " .calendar-table").on(
                    "DOMSubtreeModified",
                    function () {
                      var t = e(".prev.available").parent().children().last();
                      t.hasClass("next available") ||
                        (t.addClass("next available"),
                        t.append("<span></span>"));
                    }
                  )),
                e(a + ' input[name="daterange-desktop"]').on(
                  "cancel.daterangepicker",
                  function (t, o) {
                    e(this).val("d/m/Y - d/m/Y"),
                      e(this).parent().attr("data-start", ""),
                      e(this).parent().attr("data-end", "");
                  }
                ),
                e(a + ' input[name="daterange-desktop"]').on(
                  "show.daterangepicker",
                  function (t, o) {
                    e(this).parents(".bs-item-desktop").addClass("show");
                  }
                ),
                e(a + ' input[name="daterange-desktop"]').on(
                  "hide.daterangepicker",
                  function (t, o) {
                    e(this).parents(".bs-item-desktop").removeClass("show");
                  }
                );
            }),
            e(a + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop").attr(
              "data-start",
              n.format(r)
            ),
            e(a + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop").attr(
              "data-end",
              i.format(r)
            )),
        e(a + " .bs-item.checkin_n_checkout").click(function () {
          setTimeout(function () {
            e(a + ' [name="daterange-mb"]').trigger("click");
          }, 500);
        });
    }),
    (t.headerController.bookingSearch.room = function (
      o = "mobile",
      a = ".bs"
    ) {
      "mobile" == o
        ? e(a + " .new-room-n-guest.desktop").remove()
        : (e(".new-room-n-guest.mobile").remove(),
          e(document).on(
            "click",
            ".dropdown.keep-open .dropdown-menu",
            function (e) {
              e.stopPropagation();
            }
          ),
          e(a + " .bs-item-desktop.room_n_guest .dropdown").on(
            "show.bs.dropdown",
            function () {
              e(a + " .bs-item-desktop.room_n_guest").addClass("show");
            }
          ),
          e(a + " .bs-item-desktop.room_n_guest .dropdown").on(
            "hide.bs.dropdown",
            function () {
              e(a + " .bs-item-desktop.room_n_guest").removeClass("show"),
                e(
                  a + " .bs-item-desktop.room_n_guest .vp-room-choose"
                ).removeClass("change-top");
            }
          ),
          e(a + " .bs-item-desktop.promo input").focus(function () {
            e(this).parent().addClass("show");
          }),
          e(a + " .bs-item-desktop.promo input").blur(function () {
            e(this).parent().removeClass("show");
          })),
        t.headerController.bookingSearch.niceNumber(a);
    }),
    (t.headerController.bookingSearch.niceNumber = function (t = ".bs") {
      !(function (t) {
        function o(e, t, o) {
          "mousedown" == e
            ? ((t.timeout = setTimeout(function () {
                t.actualInterval = setInterval(function () {
                  o();
                }, 100);
              }, 200)),
              o())
            : (t.timeout && clearTimeout(t.timeout),
              t.actualInterval && clearInterval(t.actualInterval));
        }
        t.fn.niceNumber = function (a) {
          if (e("#p-nt .cus__booking__rooms--2").length)
            var n = t.extend(
              {
                autoSize: !0,
                autoSizeBuffer: 1,
                buttonDecrement:
                  '<img src="../../themes/porto/images/new-homepage/minus-btn.svg" />',
                buttonIncrement:
                  '<img src="../../themes/porto/images/new-homepage/plus-btn.svg" />',
                buttonPosition: "around",
              },
              a
            );
          else
            n = t.extend(
              {
                autoSize: !0,
                autoSizeBuffer: 1,
                buttonDecrement:
                  '<img src="themes/porto/images/new-homepage/minus-btn.svg" />',
                buttonIncrement:
                  '<img src="themes/porto/images/new-homepage/plus-btn.svg" />',
                buttonPosition: "around",
              },
              a
            );
          return this.each(function () {
            var a = this,
              i = t(a),
              r = null,
              s = null;
            if (!i.attr("data-nice-number-initialized")) {
              void 0 !== i.attr("max") &&
                !1 !== i.attr("max") &&
                (r = parseFloat(i.attr("max"))),
                void 0 !== i.attr("min") &&
                  !1 !== i.attr("min") &&
                  (s = parseFloat(i.attr("min"))),
                s && !a.value && i.val(s);
              var l = t("<div/>", { class: "nice-number" }).insertAfter(a),
                d = {},
                c = t("<button/>")
                  .attr({ type: "button", class: "left" })
                  .html(n.buttonDecrement)
                  .on("mousedown mouseup", function (t) {
                    o(t.type, d, function () {
                      e(a).hasClass("change-nice-number") ||
                        ((null == s || s < parseFloat(a.value)) && a.value--,
                        e(a).addClass("change-nice-number"));
                    }),
                      ("mouseup" != t.type && "mouseleave" != t.type) ||
                        i.trigger("input");
                  }),
                p = t("<button/>")
                  .attr({ type: "button", class: "right" })
                  .html(n.buttonIncrement)
                  .on("mousedown mouseup", function (t) {
                    o(t.type, d, function () {
                      e(a).hasClass("change-nice-number") ||
                        ((null == r || r > parseFloat(a.value)) && a.value++,
                        e(a).addClass("change-nice-number"));
                    }),
                      ("mouseup" != t.type && "mouseleave" != t.type) ||
                        i.trigger("input");
                  });
              switch (
                (i.attr("data-nice-number-initialized", !0), n.buttonPosition)
              ) {
                case "left":
                  c.appendTo(l), p.appendTo(l), i.appendTo(l);
                  break;
                case "right":
                  i.appendTo(l), c.appendTo(l), p.appendTo(l);
                  break;
                default:
                  c.appendTo(l), i.appendTo(l), p.appendTo(l);
              }
              n.autoSize &&
                (i.width(i.val().length + n.autoSizeBuffer + "ch"),
                i.on("keyup input", function () {
                  i.animate(
                    { width: i.val().length + n.autoSizeBuffer + "ch" },
                    200
                  );
                }));
            }
          });
        };
      })(jQuery);
      const o = {};
      function a(a) {
        var n = a.find(".vp-input-group-input"),
          i = "_bookingCount" + a.attr("id"),
          r = a.find(
            ".room-detail-items .room-detail-item .num-adult:not(.input-template)"
          );
        if (0 == r.length) return;
        for (
          var s = a.find(
              ".room-detail-items .num-children:not(.input-template)"
            ),
            l = a.find(".room-detail-items .num-infant:not(.input-template)"),
            d = a.find(".num-room"),
            c = 0,
            p = 0,
            h = 0,
            u = 0;
          u < r.length;
          u++
        )
          parseInt(r[u].value) > 8 && e(r[u]).val(8),
            (c += parseInt(r[u].value));
        for (var m = 0; m < s.length; m++)
          parseInt(s[m].value) + parseInt(l[m].value) > 8 &&
            (e(s[m]).val(o[i + "-" + m]._children),
            e(l[m]).val(o[i + "-" + m]._infant)),
            (p += +parseInt(s[m].value));
        for (var b = 0; b < l.length; b++) {
          parseInt(s[b].value) + parseInt(l[b].value) > 8 &&
            (e(s[b]).val(o[i + "-" + b]._children),
            e(l[b]).val(o[i + "-" + b]._infant)),
            (h += +l[b].value);
          var f = {
            _adult: parseInt(e(r)[b].value),
            _children: parseInt(e(s)[b].value),
            _infant: parseInt(e(l)[b].value),
          };
          o[i + "-" + b] = f;
        }
        let g = drupalSettings.translation.bs_room,
          k = drupalSettings.translation.bs_adult,
          _ = drupalSettings.translation.bs_child,
          v = drupalSettings.translation.bs_infant;
        n.hasClass("no_room")
          ? (inputVal = `${c} ${k} - ${p} ${_} - ${h} ${v}`)
          : (inputVal = `${d.val()} ${g} - ${c} ${k} - ${p} ${_} - ${h} ${v}`),
          n.val(inputVal),
          n.attr("adult-amount", `${c}`),
          n.attr("room-amount", `${d.val()}`),
          n.attr(
            "total-passengers",
            parseInt(`${c}`) + parseInt(`${p}`) + parseInt(`${h}`)
          ),
          e(t + " .change-nice-number").removeClass("change-nice-number");
      }
      e(t + " .vp-input-group").each(function (t, o) {
        a(e(o));
      }),
        e(document).on("input", t + " input.num-room", function (o) {
          if (1 !== this.value) {
            var n = e(o.currentTarget.closest(t + " .bookingFormQuantity")),
              i = n.find(".room-detail-items");
            if (i) {
              e(this).attr("data-target");
              var r = n
                  .find(".room-detail-items .room-detail-item:first")
                  .clone(),
                s =
                  (n.find(".room-detail-items .room-detail-item").length || 1) -
                  1;
              this.value > s && !e(this).parents("#_t_hotel").length
                ? (r.removeClass("d-none"),
                  (r.find(".room-number-info > p.label").get(0).innerHTML =
                    r
                      .find(".room-number-info > p.label")
                      .get(0)
                      .innerHTML.split(" ")[0] +
                    " " +
                    this.value),
                  r.find("input.input-template").removeClass("input-template"),
                  r
                    .find("input.nice-number-template")
                    .removeClass("nice-number-template")
                    .addClass("nice-number")
                    .niceNumber(),
                  i.append(r))
                : this.value < s && i.find(".room-detail-item:last").remove(),
                a(e(o.currentTarget.closest(t)));
            }
          }
        }),
        e(document).on(
          "input",
          t + " .vp-input-group input.nice-number",
          function (t) {
            a(
              e(t.currentTarget.closest(".bookingFormQuantity")).find(
                ".vp-input-group"
              )
            );
          }
        ),
        e(t + " .nice-number").niceNumber();
    }),
    (t.headerController.bookingSearch.submit = function (
      t = "mobile",
      o = ".bs"
    ) {
      "mobile" == t
        ? e("#sub-panel-bs .bs-item.submit").click(function (t) {
            t.preventDefault();
            let o = e(".bs-item.hotel_n_des .bs-info").attr("data-value");
            if (!o || "" == o)
              return (
                e(".bs-item.hotel_n_des").addClass("red"),
                setTimeout(function () {
                  e(".bs-item.hotel_n_des").removeClass("red");
                }, 2e3),
                !1
              );
            let a = e(".bs-item.checkin_n_checkout .bs-info").attr(
                "data-start"
              ),
              n = e(".bs-item.checkin_n_checkout .bs-info").attr("data-end");
            if (!a || !n || "" == a || "" == n)
              return (
                e(".bs-item.checkin_n_checkout").addClass("red"),
                setTimeout(function () {
                  e(".bs-item.checkin_n_checkout").removeClass("red");
                }, 2e3),
                !1
              );
            {
              let e = a.split("/");
              var i = new Date(e[0], e[1] - 1, e[2]),
                r = n.split("/"),
                s =
                  (new Date(r[0], r[1] - 1, r[2]).getTime() - i.getTime()) /
                  864e5;
            }
            var l = drupalSettings.user.uid ? "true" : "false";
            let d = e(".bs-item.promo input").val(),
              c = e(".bs-item.room_n_guest .bs-info").attr("data-value"),
              p =
                drupalSettings.hms_booking_domain +
                "/hotel/search?hotelId=" +
                o +
                "&promotionCode=" +
                d +
                "&arrivalDate=" +
                a +
                "&lengthOfStay=" +
                s +
                "&roomOccupancy=" +
                c +
                "&isLogged=" +
                l;
            window.open(p);
          })
        : e(o + " .bs-item-desktop.submit").click(function (t) {
            t.preventDefault();
            var a = e(t.currentTarget.closest(o));
            let n = a
                .find(".bs-item-desktop.hotel_n_des .bs-info-desktop")
                .attr("data-tag-group-id"),
              i = a
                .find(".bs-item-desktop.hotel_n_des .bs-info-desktop")
                .attr("data-location-id"),
              r = a.find(".bs-holtel-booking-right").attr("data-tag-group-id");
            if ((r && (n = r), !((n && "" != n) || (i && "" != i))))
              return (
                a.find(".bs-item-desktop.hotel_n_des").addClass("red"),
                setTimeout(function () {
                  a.find(".bs-item-desktop.hotel_n_des").removeClass("red");
                }, 2e3),
                !1
              );
            n || (n = ""), i || (i = "");
            let s = a
                .find(".bs-item-desktop.checkin_n_checkout .bs-info-desktop")
                .attr("data-start"),
              l = a
                .find(".bs-item-desktop.checkin_n_checkout .bs-info-desktop")
                .attr("data-end");
            if (!s || !l || "" == s || "" == l)
              return (
                a.find(".bs-item-desktop.checkin_n_checkout").addClass("red"),
                setTimeout(function () {
                  $form
                    .find(".bs-item-desktop.checkin_n_checkout")
                    .removeClass("red");
                }, 2e3),
                !1
              );
            {
              let e = s.split("/");
              var d = new Date(e[2], e[1] - 1, e[0]),
                c = e[2] + "/" + e[1] + "/" + e[0],
                p = l.split("/"),
                h =
                  (new Date(p[2], p[1] - 1, p[0]).getTime() - d.getTime()) /
                  864e5;
            }
            var u = drupalSettings.user.uid ? "true" : "false";
            let m = a.find(".bs-item-desktop.promo input").val(),
              b = "",
              f = [];
            a
              .find(
                ".bs-item-desktop.room_n_guest .room-detail-item:not(.d-none)"
              )
              .each(function (e, t) {
                var o = jQuery(this).find("input.num-adult").val(),
                  a = jQuery(this).find("input.num-children").val(),
                  n = jQuery(this).find("input.num-infant").val();
                f.push(o + "_" + a + "_" + n);
              }),
              (b = f.join(","));
            let g =
              drupalSettings.hms_booking_domain_book +
              "/hotel/search?locationId=" +
              i +
              "&hotelId=" +
              n +
              "&promotionCode=" +
              m +
              "&arrivalDate=" +
              c +
              "&lengthOfStay=" +
              h +
              "&roomOccupancy=" +
              b +
              "&isLogged=" +
              u;
            window.open(g);
          });
    }),
    (t.headerController.bookingSearch.autoJump = function (t, o, a = ".bs") {
      switch (t) {
        case "date":
          "desktop" == o
            ? setTimeout(function () {
                e(
                  a +
                    ' .bs-item-desktop.checkin_n_checkout [data-toggle="dropdown"]'
                ).dropdown("show");
              }, 0)
            : setTimeout(function () {
                e(".bs-item.checkin_n_checkout.sub-panel-mb-open").trigger(
                  "click"
                );
              }, 500);
          break;
        case "room":
          "desktop" == o
            ? (setTimeout(function () {
                e(
                  a + ' .bs-item-desktop.room_n_guest [data-toggle="dropdown"]'
                ).dropdown("show");
              }, 0),
              e(a + " .bs-item-desktop.room_n_guest .vp-room-choose").addClass(
                "change-top"
              ))
            : setTimeout(function () {
                e(".bs-item.room_n_guest.sub-panel-mb-open").trigger("click");
              }, 500);
      }
    }),
    (t.headerController.stickyMainmenu = function () {
      e(window).width() > 992 &&
        (($bsElem = e("#block-homepage-banner-block .bs")),
        $bsElem.length &&
          (($offsetTop = $bsElem.offset().top),
          ($bsHeight = $bsElem.height()),
          ($checkpoint = $offsetTop + $bsHeight),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          })),
        ($bsElem2 = e(".c-vg__topbanner__slider, .c-vg__topbanner-big")),
        $bsElem2.length &&
          (($offsetTop2 = $bsElem2.offset().top),
          ($bsHeight2 = $bsElem2.height()),
          ($checkpoint2 = $offsetTop2 + $bsHeight2),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint2
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          })),
        ($bsElem3 = e("c-vg__topbanner-big")),
        $bsElem3.length &&
          (($offsetTop3 = $bsElem3.offset().top),
          ($bsHeight3 = $bsElem3.height()),
          ($checkpoint3 = $offsetTop3 + $bsHeight3),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint3
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          }))),
        ($bsElem4 = e(".about_us .banner")),
        $bsElem4.length &&
          (($offsetTop4 = $bsElem4.offset().top),
          ($bsHeight4 = $bsElem4.height()),
          ($checkpoint4 = $offsetTop4 + $bsHeight4),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint4
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          })),
        ($bsElem5 = e(".show_complex .banner")),
        $bsElem5.length &&
          (($offsetTop5 = $bsElem5.offset().top),
          ($bsHeight5 = $bsElem5.height()),
          ($checkpoint5 = $offsetTop5 + $bsHeight5),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint5
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          })),
        e("body.path-frontpage") &&
          e(window).scroll(function () {
            e(this).scrollTop() >= 54
              ? e("body").addClass("header-scroll")
              : e("body").removeClass("header-scroll");
          });
    }),
    (t.headerController.stickyMainmenu2 = function () {
      e(window).width() > 992 &&
        (($bsElem = e(".p-landing__mv")),
        $bsElem.length &&
          (($offsetTop = $bsElem.offset().top),
          ($bsHeight = $bsElem.height()),
          ($checkpoint = $offsetTop + $bsHeight),
          e(window).scroll(function () {
            e(this).scrollTop() >= $checkpoint
              ? e("body").addClass("fixed-bs")
              : e("body").removeClass("fixed-bs");
          }))),
        e("body.path-frontpage") &&
          e(window).scroll(function () {
            e(this).scrollTop() >= 54
              ? e("body").addClass("header-scroll")
              : e("body").removeClass("header-scroll");
          });
    }),
    (t.headerController.rightPanelBookingSearch =
      t.headerController.rightPanelBookingSearch || {}),
    (t.headerController.rightPanelBookingSearch.handler = function () {
      t.headerController.rightPanelBookingSearch.panel();
    }),
    (t.headerController.rightPanelBookingSearch.panel = function () {
      e(".right-panel-open-btn").click(function () {
        e(".header-right-panel").addClass("open"),
          e(".header-right-block").addClass("open"),
          e("body").css("overflow", "hidden");
      }),
        e(".header-right-block .panel-close-btn").click(function () {
          e(".header-right-panel").removeClass("open"),
            e(".header-right-block").removeClass("open"),
            e("body").css("overflow", "unset");
        }),
        e(".header-right-block .panel-backdrop").click(function () {
          e(".header-right-panel").removeClass("open"),
            e(".header-right-block").removeClass("open"),
            e("body").css("overflow", "unset"),
            e("html").removeClass("gsb-popup-show"),
            e("html").css("height", "auto");
        }),
        e(".header-right-panel .tab-nav").click(function () {
          e(this).addClass("show"),
            e(this).siblings(".show").removeClass("show");
          let t = e(".panel-body .tabs-wrapper").offset().left,
            o = e(this).offset().left - t;
          1 != e(this).attr("data-index") && (o += "px"),
            e("style.custom-w").remove(),
            e("head").append(
              '<style class="custom-w">.header-right-panel .tabs-nav::before{left:' +
                o +
                "}</style>"
            ),
            e(e(this).attr("data-target")).addClass("show"),
            e(e(this).attr("data-target"))
              .siblings(".show")
              .removeClass("show");
          let a = e(this).attr("data-title");
          e(".header-right-panel .panel-tit").text(a);
        }),
        e(".dropdown").each(function () {
          let t = e(this),
            o = e(this).find("input");
          t.on("show.bs.dropdown", function () {
            setTimeout(function () {
              o.focus();
            }, 300);
          });
        }),
        t.headerController.rightPanelBookingSearch.hotelSearch(),
        t.headerController.rightPanelBookingSearch.bundleSearch(),
        t.headerController.rightPanelBookingSearch.tourSearch();
    }),
    (t.headerController.rightPanelBookingSearch.newHistory = function (
      e,
      t,
      o = {}
    ) {
      let a = localStorage.getItem(e);
      if ("save" == t) {
        let t = o.inputValue,
          n = o.id;
        if (null != t)
          if (null == a) {
            let o = {};
            (o[n] = { html: t }), localStorage.setItem(e, JSON.stringify(o));
          } else {
            let o = localStorage.getItem(e);
            o = JSON.parse(o);
            let a = Object.keys(o).length;
            if (a >= 5)
              for (let e in o) {
                if (!(a >= 5)) break;
                delete o[e], a--;
              }
            (o[n] = { html: t }), localStorage.setItem(e, JSON.stringify(o));
          }
      } else if ("get" == t) {
        let t = o.outputTarget,
          a = localStorage.getItem(e);
        if (((a = JSON.parse(a)), "" != a && null != a)) {
          let e = "";
          for (let t in a)
            o.changeInput &&
              (a[t].html = a[t].html.replace(
                o.changeInput[0],
                o.changeInput[1]
              )),
              (e += a[t].html);
          t.html(e);
        }
      }
    }),
    (t.headerController.rightPanelBookingSearch.hotelSearch = function () {
      t.headerController.bookingSearch.hotel(
        "desktop",
        ".header-right-panel #bs-hotel"
      ),
        t.headerController.bookingSearch.date(
          "desktop",
          ".header-right-panel #bs-hotel"
        ),
        t.headerController.bookingSearch.room(
          "desktop",
          ".header-right-panel #bs-hotel"
        ),
        t.headerController.bookingSearch.submit(
          "desktop",
          ".header-right-panel #bs-hotel"
        );
    }),
    (t.headerController.rightPanelBookingSearch.bundleSearch = function () {
      t.headerController.rightPanelBookingSearch.fromTo(
        ".header-right-panel #bs-bundle",
        ".from"
      ),
        t.headerController.rightPanelBookingSearch.fromTo(
          ".header-right-panel #bs-bundle",
          ".to"
        ),
        t.headerController.bookingSearch.date(
          "desktop",
          ".header-right-panel #bs-bundle"
        ),
        t.headerController.bookingSearch.room(
          "desktop",
          ".header-right-panel #bs-bundle"
        ),
        t.headerController.rightPanelBookingSearch.bundleSubmit(
          ".header-right-panel #bs-bundle"
        );
    }),
    (t.headerController.rightPanelBookingSearch.fromTo = function (
      o,
      a = ".from"
    ) {
      let n = o + " " + a;
      e(document).on("click", n + " .switch-btn", function () {
        let t = e(o + " .from .bs-info-desktop"),
          a = e(o + " .to .bs-info-desktop");
        var n = t.find("input").val(),
          i = a.find("input").val(),
          r = t.attr("data-value"),
          s = a.attr("data-value");
        a.find("input").val(n),
          t.find("input").val(i),
          t.attr("data-value", s),
          a.attr("data-value", r);
      }),
        e(document).on("click", n + " .booking-item", function () {
          let t = e(this).parents(".bs-item-desktop").find(".bs-info-desktop"),
            o = e(this).attr("value");
          t.attr("data-value", o),
            t.find("input").val(e(this).text()),
            t.find("input").addClass("picked");
        });
      var i = null;
      e(n + ' input[name="to"]').on("keyup focus", function (o) {
        var r = e(this);
        clearTimeout(i),
          (i = setTimeout(function () {
            var o;
            (o = r.val()),
              e.ajax({
                type: "get",
                url:
                  drupalSettings.hms_booking_link_api +
                  "/api/bundle/locations/" +
                  o,
                data: {},
                headers: { "accept-language": drupalSettings.hms_langcode },
                dataType: "json",
                success: function (o) {
                  if (o.length > 0) {
                    let i = "";
                    for (let e in o) {
                      let t = o[e],
                        a = t.name;
                      i +=
                        '<div class="booking-item destination" value="' +
                        t.id +
                        '"><img class="custom_deg" src="' +
                        new URL(
                          "/themes/porto/img/icons/airplane-to.svg",
                          window.location.origin
                        ).href +
                        '" alt="">' +
                        a +
                        " (" +
                        t.code +
                        ") </div>";
                    }
                    let r = e(n + " .history-wrapper .result"),
                      s = "ls_combo_endPoint",
                      l = {
                        outputTarget: r,
                        changeInput: [
                          n + ' input[name="from"]',
                          n + ' input[name="to"]',
                        ],
                      };
                    ".from" == a &&
                      ((s = "ls_combo_startPoint"), (l = { outputTarget: r })),
                      t.headerController.rightPanelBookingSearch.newHistory(
                        s,
                        "get",
                        l
                      ),
                      e(n + " .main-wrapper .result").html(i),
                      e(n + " .main-wrapper .result").removeClass("d-none");
                  }
                },
                error: function (e) {
                  console.log(e);
                },
              });
          }, 300));
      }),
        e(n + ' input[name="from"]').on("keyup focus", function (t) {
          clearTimeout(i);
          var o = e(this).val();
          i = setTimeout(function () {
            e.ajax({
              type: "get",
              url: "https://booking-hotel-api.vinpearl.com/api/bundle/locations/all",
              data: {},
              headers: { "accept-language": drupalSettings.hms_langcode },
              dataType: "json",
              success: function (t) {
                let a = new URL(
                  "/themes/porto/img/icons/airplane-to.svg",
                  window.location.origin
                ).href;
                if (t.length > 0) {
                  o &&
                    o.trim() &&
                    o.trim().length > 0 &&
                    (t = t.filter(
                      (e) =>
                        e.name.toLowerCase().indexOf(o.toLowerCase().trim()) >=
                          0 ||
                        e.code.toLowerCase().indexOf(o.toLowerCase().trim()) >=
                          0
                    )),
                    t || (t = []);
                  let i = "",
                    r = "";
                  for (let e in t) {
                    let o = t[e];
                    o.isDomestic
                      ? (i += `<li  value="${o.id}">\n                                            <img src="${a}" alt="err">\n                                            <p value="${o.id}" class="booking-item destination">${o.name} (${o.code})</p>\n                                        </li>`)
                      : (r += `<li  value="${o.id}">\n                                                    <img src="${a}" alt="err">\n                                                    <p value="${o.id}" class="booking-item destination">${o.name} (${o.code})</p>\n                                                </li>`);
                  }
                  e(n + " .main-wrapper #pills-home").html(i),
                    e(n + " .main-wrapper #pills-profile").html(r);
                }
              },
              error: function (e) {
                console.log(e);
              },
            });
          }, 300);
        }),
        e(n + ' input[name="to"]').on("blur", function () {
          "" == e(this).val()
            ? e(this).removeClass("show")
            : e(this).addClass("show");
        }),
        e(".pills-tab button").click(function () {
          let t = e(this).attr("id");
          e(".pills-tab button").removeClass("active"),
            e(this).addClass("active"),
            e(n + " #pills-tabContent div[aria-labelledby]").removeClass(
              "show active"
            ),
            e(n + ' div[aria-labelledby="' + t + '"]').addClass("show active");
        });
    }),
    (t.headerController.rightPanelBookingSearch.bundleSubmit = function (t) {
      e(t + " .bs-item-desktop.submit").click(function (o) {
        o.preventDefault();
        let a = e(t + " .bs-item-desktop.from .bs-info-desktop").attr(
            "data-value"
          ),
          n = e(t + " .bs-item-desktop.to .bs-info-desktop").attr("data-value");
        if (!a || "" == a || !n || "" == n)
          return (
            e(t + " .bs-item-desktop.from").addClass("red"),
            e(t + " .bs-item-desktop.to").addClass("red"),
            setTimeout(function () {
              e(t + " .bs-item-desktop.from").removeClass("red"),
                e(t + " .bs-item-desktop.to").removeClass("red");
            }, 2e3),
            !1
          );
        let i = e(
            t + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
          ).attr("data-start"),
          r = e(
            t + " .bs-item-desktop.checkin_n_checkout .bs-info-desktop"
          ).attr("data-end");
        if (!i || !r || "" == i || "" == r)
          return (
            e(t + " .bs-item-desktop.checkin_n_checkout").addClass("red"),
            setTimeout(function () {
              e(t + " .bs-item-desktop.checkin_n_checkout").removeClass("red");
            }, 2e3),
            !1
          );
        {
          let e = i.split("/");
          var s = new Date(e[2], e[1] - 1, e[0]),
            l = e[2] + "/" + e[1] + "/" + e[0],
            d = r.split("/"),
            c = new Date(d[2], d[1] - 1, d[0]),
            p = d[2] + "/" + d[1] + "/" + d[0],
            h = (c.getTime() - s.getTime()) / 864e5;
        }
        var u = drupalSettings.user.uid ? "true" : "false";
        let m = e(t + " .bs-item-desktop.promo input").val(),
          b = "",
          f = [];
        e(
          t + " .bs-item-desktop.room_n_guest .room-detail-item:not(.d-none)"
        ).each(function (e, t) {
          var o = jQuery(this).find("input.num-adult").val(),
            a = jQuery(this).find("input.num-children").val(),
            n = jQuery(this).find("input.num-infant").val();
          f.push(o + "_" + a + "_" + n);
        }),
          (b = f.join(","));
        let g =
          drupalSettings.hms_booking_domain_book +
          "/combo/search?startPointId=" +
          a +
          "&endPointId=" +
          n +
          "&promotionCode=" +
          m +
          "&departureDate=" +
          l +
          "&returnDate=" +
          p +
          "&lengthOfStay=" +
          h +
          "&roomOccupancy=" +
          b +
          "&isLogged=" +
          u;
        window.open(g);
      });
    }),
    (t.headerController.rightPanelBookingSearch.tourSearch = function () {
      var t = "#bs-tour";
      let o = null;
      e('input[name="tour-search"]').on("keyup focus", function () {
        clearTimeout(o);
        let a = "?keyword=" + e(this).val() + "&PageIndex=1&PageSize=6";
        o = setTimeout(function () {
          e(t).find(".history-block").show(),
            e.ajax({
              type: "get",
              url:
                drupalSettings.hms_booking_voucher +
                "/api/frontend/experience/autocomplete" +
                a,
              headers: { "accept-language": drupalSettings.hms_langcode },
              dataType: "json",
              success: function (o) {
                if (o.totalCount > 0) {
                  let a = '<div class="row">';
                  for (let e in o.result) {
                    let t = o.result[e].urlSlug,
                      n = o.result[e].name;
                    (a += '<div class="hot-item col-md-6">'),
                      (a += '  <div class="img-wrapper"></div>'),
                      (a += '  <div class="info-wrapper">'),
                      (a +=
                        '    <a href="' +
                        drupalSettings.hms_booking_domain_book +
                        "/tour/" +
                        t +
                        '" target="_blank">'),
                      (a +=
                        '      <span class="title three_dots_3" title="' +
                        n +
                        '">' +
                        n +
                        "</span>"),
                      (a += "    </a>"),
                      (a += '    <span class="price"></span>'),
                      (a += "  </div>"),
                      (a += "</div>");
                  }
                  (a += "</div>"), e(t).find(".main-wrapper .result").html(a);
                  let n = localStorage.getItem("tour_exp_his");
                  if (null != n) {
                    n = JSON.parse(n);
                    let o = "";
                    for (let e in n)
                      o +=
                        '<a class="tour-item" href="' +
                        drupalSettings.hms_booking_domain_book +
                        "/tours-and-experiences/search?keyword=" +
                        n[e].key +
                        '" target="_blank">' +
                        n[e].key +
                        "</a>";
                    e(t).find(".history-wrapper .result").html(o);
                  }
                }
              },
            });
        }, 300);
      }),
        e('input[name="tour-search"]').on("blur", function () {
          "" == e(this).val()
            ? e(this).removeClass("show")
            : e(this).addClass("show");
        }),
        e(t + " .bs-item-desktop.submit").click(function (o) {
          var a = e(t + ' input[name="tour-search"]').val();
          if ("" != a)
            if (null == localStorage.getItem("tour_exp_his")) {
              let e = {};
              (e[0] = { key: a }),
                localStorage.setItem("tour_exp_his", JSON.stringify(e));
            } else {
              let e = localStorage.getItem("tour_exp_his");
              (e = JSON.parse(e)),
                (e[Object.keys(e).length] = { key: a }),
                localStorage.setItem("tour_exp_his", JSON.stringify(e));
            }
          window.open(
            drupalSettings.hms_booking_domain_book +
              "/tours-and-experiences/search?keyword=" +
              a
          );
        });
    }),
    e(".body #block-porto-content table").wrap(
      "<div style='overflow-x: auto'></div>"
    );
  e(".body #block-porto-content table");
  e(".header-right-panel .bs-item-desktop.from .main-wrapper span ul li").click(
    function (e) {
      e.stopPropagation();
    }
  );
})(jQuery, Drupal);
