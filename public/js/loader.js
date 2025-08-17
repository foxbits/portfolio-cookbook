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
    loadData();

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


/* Classic attachment of data to placeholders (data is retrieved from data.js) using jQuery. */
function loadData() {
    attachContact();
    initProjects();
}

function attachContact() {
    var mails = '';
    _.forEach(contactData.mails, function (mail) {
        mails += `  <p>
                        <a href="mailto:` + mail + `">` + mail + `</a> 
                    </p>`;
    });

    var contactHours = '';
    _.forEach(contactData.whentocontact, function (contactHour) {
        contactHours += "<p>" + contactHour + "</p>";
    });

    var basicContact = `<li>
                            <div class="contact-list">
                                <i class="fa fa-map-marker"></i>
                                <div class="contact-info">
                                    <p>` + contactData.address + `</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-envelope"></i>
                                <div id="contact-mails" class="contact-info">
                                    ` + mails + `
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-phone"></i>
                                <div class="contact-info">
                                    <p>` + contactData.phone + `</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="contact-list">
                                <i class="fa fa-clock-o"></i>
                                <div class="contact-info">
                                    ` + contactHours + `
                                </div>
                            </div>
                        </li>`;

    var actionButtons = `<a id="send-mail" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Your (must-have) e-mail client will pop-up.">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Send mail
                        </a>
                        <a id="open-messenger" href="` + contactData.messengerLink + `" target="_blank" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Or chat with me on Facebook's Messenger.">
                            <i class="fa fa-commenting" aria-hidden="true"></i>
                            Messenger
                        </a>`;

    $('#contact-data ul').html(basicContact);
    $('#contact-form').append(actionButtons);

    // init actions
    $('[data-toggle="tooltip"]').tooltip();
    $('#send-mail').click(function () {
        var fromName = $('#form-name').val();
        var from = $('#form-email').val();
        var message = $('#form-message').val();
        var error = '';
        if (fromName == null || fromName == '')
            error = "So you have no name? 😞";
        if (error == '' && (from == null || from == ''))
            error = "It seams that there is no contact email address. You cannot send your precious message. 😞";
        if (error == '' && (message == null || message == '' || message.length < 50))
            error = "If you have no idea, then it means we have a problem - we can't communicate! 😭 (you must insert a message at least 50 characters)";

        if (error != '')
            return $.notify("Oh, snap! " + error, { position:"bottom-right", className: "error" });

        $.ajax({
            type: 'POST',
            url: '/mail.php',
            data: { 
                'name': fromName, 
                'from': from,
                'message': message
            },
            success: function(response){
                $.notify("Success!", { position:"bottom-right", className: "success" });
            },
            failure: function(response) {
                if (response && response.error){
                    $.notify("Cannot send. " + response.error, { position:"bottom-right", className: "warn" });
                }
                else {
                    $.notify("Cannot send. " + "Some error happened.", { position:"bottom-right", className: "warn" });
                }
            }
        });
        

        // var mailto = $('#contact-mails p:first-child a:first-child');
        // var mailstr = "mailto:" + mailto.text() + "?subject=" + subject + "&body=" + message;
        // window.open(mailstr, '_self');
    });
}

function initProjects() {
    _.forEach(allProjects, function (data) {
        var linkElement = data.url.link
            ? `<a target="_blank" href="` + data.url.link + `" class="button">` + data.url.title + `</a>`
            : `<a href="#" onclick="return false;" class="button">` + data.url.title + `</a>`;
        var element = `<li id="project-` + data.id + `" class="full-card card ` + data.category + ` col-xs-12 col-sm-6 col-md-4 mix">
                            <div class="wrapper" style="background: url(` + data.image + `) center/cover no-repeat;">
                                <div class="header">
                                <div class="date">
                                    <span class="year">` + data.time + `</span>
                                </div>
                                </div>
                                <div class="data">
                                    <div class="content">
                                        <span class="author">` + data.type + `</span>
                                        <h2 class="title">
                                            <a href="#">` + data.title + `</a>
                                        </h2>
                                        <p class="text">` + data.description + `</p>`
                                        + linkElement +
                                    `</div>
                                </div>
                            </div>
                        </li>`;
        $('.portfolio_items').append(element);
    });

}