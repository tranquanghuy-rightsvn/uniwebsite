!(function (o, n) {
  (n.behaviors.downloadApp = {
    attach: function (o, d) {
      n.downloadApp.run(o, d);
    },
  }),
    (n.downloadApp = n.downloadApp || {}),
    (n.downloadApp.run = function (d, a) {
      o(document, d)
        .once("downloadApp")
        .each(function () {
          n.downloadApp.handleLinkDownload();
        });
    }),
    (n.downloadApp.handleLinkDownload = function () {
      let d = n.downloadApp.getMobileOperatingSystem();
      if ((o("body").addClass(d), console.log(d), "ios" === d))
        o(".link-download .applestore").removeClass("d-none"),
          o(".link-download .chplay").addClass("d-none");
    }),
    (n.downloadApp.getMobileOperatingSystem = function () {
      var o = navigator.userAgent || navigator.vendor || window.opera;
      return /windows phone/i.test(o)
        ? "windows_phone"
        : /android/i.test(o)
        ? "android"
        : /iPad|iPhone|iPod/.test(o) && !window.MSStream
        ? "ios"
        : "unknown";
    });
})(jQuery, Drupal);
