document.addEventListener('DOMContentLoaded', function() {
    var demoLink = document.querySelector('a[href="https://demo.yugo-ai.com"]');
    if (demoLink) {
        demoLink.addEventListener('click', function(event) {
            event.preventDefault();
            gtag_report_conversion(this.href);
            setTimeout(function() {
                window.location.href = demoLink.href;
            }, 100);
        });
    }
});
