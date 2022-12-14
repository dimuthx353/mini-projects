$(document).ready(function () {
    var open = $("#open");
    var close = $("#close");
    var lightbox = $(".lightbox");
    var mobileTools = $(".mobile-tools");

    console.log(mobileTools);



    open.click(function (e) {
        lightbox.css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        });
        open.hide();
        close.css("display", "flex");
    });

    close.click(function (e) {
        lightbox.toggle();
        close.hide();
        open.show();
    })

    lightbox.click(function (e) {
        lightbox.hide();
        close.hide();
        open.show();
    })
});