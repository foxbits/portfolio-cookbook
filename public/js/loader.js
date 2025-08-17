/* Initializers */
var imagesAvailable = 6;
var currentImage = 6;
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

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

    attachMisc();

    startChangingImages();
};

function attachMisc(){
    $("#cpyear").text(new Date().getFullYear());
    $("#appversion").html("<small>(v." + APP_VERSION + ")</small>");
}

function afterLoadedDissapears() {
    $("body").addClass("scrollbar");
    $("body").addClass("scyan");
    $('[data-toggle="tooltip"]').tooltip(); //enable tooltips
    
    setChangingInterval();
}
$(pluginspreparer);

function initializeImageLoad() {

}

function startChangingImages() {
    changeImage(currentImage, true);
}

function setChangingInterval() {
    let intrvl = setInterval(() => {
        var randomImageId = currentImage;
        while(true) {
            randomImageId = Math.floor(Math.random() * imagesAvailable + 1);
            if (randomImageId !== currentImage)
                break;
        }
        currentImage = randomImageId;
        changeImage(randomImageId);
    }, 7000);
}

function changeImage(randomImageId, direct) {
    let divContent = "<div class='lazy lazy" + randomImageId + "' data-src='img/portraits/portrait" + randomImageId + ".png' style='background-image:url(img/portraits/portrait" + randomImageId + ".png)'></div>"
    $(".hidden-images").html(divContent);

    setTimeout(() => {
        $(".banner").fadeOut(200, function() {
            $(".banner").css("background-image", "url(img/portraits/portrait" + randomImageId + "_small.jpeg)");
            $(".banner").attr("data-src", $(".lazy" + randomImageId).attr("data-src"));
            $(".banner").attr("data-was-processed", false);

            if (lazyLoadInstance) {
                lazyLoadInstance.update();
            }
        }).fadeIn(200);
    }, direct ? 100 : 6000);
}