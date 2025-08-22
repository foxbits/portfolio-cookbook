var pluginspreparer = function () {
    "use strict";

    function onLoadHandler() {
        setTimeout(function () {
            $("body").addClass("loaded");
            setTimeout(function () {
                afterLoadedDissapears();
            }, 200);
        }, 200);
    }

    if (document.readyState === "complete") {
        onLoadHandler();
    } else {
        $(window).on("load", onLoadHandler);
    }
};

function afterLoadedDissapears() {
    $("body").addClass("scrollbar");
    $("body").addClass("scyan");
    $('[data-toggle="tooltip"]').tooltip(); //enable tooltips    
};

$(pluginspreparer);