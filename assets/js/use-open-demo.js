document.addEventListener("DOMContentLoaded", function () {
  function demo_gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-16662230717/JBkjCLTMh80ZEL3tlYk-",
      value: 1.0,
      currency: "JPY",
      event_callback: callback,
    });
    return false;
  }
  var demoLink = document.querySelector(
    'a[href="https://demo.yugo-ai.com/login"]',
  );
  if (demoLink) {
    demoLink.addEventListener("click", function (event) {
      event.preventDefault();
      demo_gtag_report_conversion(this.href);
      setTimeout(function () {
        window.location.href = demoLink.href;
      }, 100);
    });
  }
});
