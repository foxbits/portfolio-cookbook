/* Initializers */
var imagesArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
];
var currentImageIndex = 6;
var usedImageIndexes = [];
var intervalChangeMs = 8000;
/* Lazy Load */
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
    
    startChangingImages();
};

function afterLoadedDissapears() {
    $("body").addClass("scrollbar");
    $("body").addClass("scyan");
    $('[data-toggle="tooltip"]').tooltip(); //enable tooltips    
};

$(pluginspreparer);

function startChangingImages() {
    changeImage(imagesArray[currentImageIndex]);
    usedImageIndexes.push(currentImageIndex);
    setChangingInterval();
}

function setChangingInterval() {
    if (!imagesArray || imagesArray.length === 0) {
        console.warn("No images available for changing.");
        return;
    }

    setInterval(setNextImage, intervalChangeMs);
}

function setNextImage() {
    if (usedImageIndexes.length >= imagesArray.length) {
        usedImageIndexes = [];
    }

    var randomImageId = currentImageIndex;
    while (true) {
        randomImageId = Math.floor(Math.random() * imagesArray.length);
        if (usedImageIndexes.indexOf(randomImageId) === -1)
            break;
    }
    usedImageIndexes.push(randomImageId);
    currentImageIndex = imagesArray[randomImageId];

    changeImage(currentImageIndex);
}

function changeImage(imageId) {
    let divContent = "<div class='lazy lazy" + imageId + "' data-src='img/portraits/portrait" + imageId + ".jpeg' style='background-image:url(img/portraits/portrait" + imageId + ".jpeg)'></div>"
    $(".hidden-images").html(divContent);

    setTimeout(() => {
        $(".banner").fadeOut(200, function() {
            $(".banner").css("background-image", "url(img/portraits/portrait" + imageId + "_small.jpeg)");
            $(".banner").attr("data-src", $(".lazy" + imageId).attr("data-src"));
            $(".banner").attr("data-was-processed", false);

            if (lazyLoadInstance) {
                lazyLoadInstance.update();
            }
        }).fadeIn(200);
    }, 100);
}