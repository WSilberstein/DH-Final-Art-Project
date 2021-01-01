let mouseX = 0;
let mouseY = 0;

$('#birthday').click(function(event) {
    let img = document.createElement("img");

    let imageNumber = Math.floor(Math.random() * 9) + 1
    img.src = "res/ad" + imageNumber + ".PNG";
    img.style.position = "absolute";

    var x = event.clientX;
    var y = event.clientY;

    img.clientHeight = 100;

    console.log(img.clientHeight);
    img.style.left = x - (100) + "px";
    img.style.top = (y - (100)) +  "px";
    img.classList.add(imageNumber);
    document.body.appendChild(img);

    img.addEventListener('click', function() {

        img.style.display = "none";
        if(img.className == "1") {
            window.location = "https://www.amazon.com/Fujifilm-Instax-Mini-Instant-Camera/dp/B06WW64YM6";
        } else if(img.className == "2") {
            window.location = "https://www.amazon.com/Swiffer-Mopping-Cleaning-Starter-Products/dp/B07YQD44YX/ref=asc_df_B07YQD44YX/?tag=hyprod-20&linkCode=df0&hvadid=416808699331&hvpos=&hvnetw=g&hvrand=304779301798069484&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004193&hvtargid=pla-888998602201&psc=1&tag=&ref=&adgrpid=90729932821&hvpone=&hvptwo=&hvadid=416808699331&hvpos=&hvnetw=g&hvrand=304779301798069484&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004193&hvtargid=pla-888998602201";
        } else if(img.className == "3") {
            window.location = "https://www.amazon.com/Vera-Wang-Embrace-Toilette-Blossom/dp/B01DYW5LCW/ref=sr_1_2?dchild=1&keywords=vera+wang+embrace+eau+de+toilette&qid=1609353907&sr=8-2";
        } else if(img.className == "4") {
            window.location = "https://www.amazon.com/KLIQ-UberTuner-Clip-Instruments-Chromatic/dp/B00O4L3F9E/ref=sr_1_5?dchild=1&keywords=kliq+ubertuner&qid=1609353928&sr=8-5";
        } else if(img.className == "5") {
            window.location = "https://www.amazon.com/Charmin-Toilet-Family-Cushiony-Sheets/dp/B0798DVT68/ref=sr_1_2?dchild=1&keywords=charmin+ultra+soft+toilet+paper&qid=1609353948&sr=8-2";
        } else if(img.className == "6") {
            window.location = "https://www.amazon.com/Samsung-POWERbot-Powerful-Selection-Assistant/dp/B01DZWX5II/ref=sr_1_3?dchild=1&keywords=samsung+powerbot+r9350&qid=1609353984&sr=8-3";
        } else if(img.className == "7") {
            window.location = "https://www.amazon.com/New-Microsoft-Surface-Pro-Touch-Screen/dp/B07YNJGMH6/ref=sr_1_5?crid=2XMH1HHDVM1W3&dchild=1&keywords=microsoft+lgp-00001+surface+pro+6&qid=1609354012&sprefix=microsoft+lg%2Caps%2C144&sr=8-5";
        } else if(img.className == "8") {
            window.location = "https://www.amazon.com/Listerine-Ultraclean-Antiseptic-Mouthwash-Breath/dp/B008CO4TDK/ref=sr_1_5?dchild=1&keywords=listerine+ultraclean+oral+care&qid=1609354129&sr=8-5";
        } else if(img.className == "9") {
            window.location = "https://www.amazon.com/Listerine-Freshburst-Pocketmist-Non-Aerosol-Sugar-Free/dp/B00HQRCMOM/ref=sr_1_6?dchild=1&keywords=listerine+freshburst&qid=1609354155&sr=8-6";
        } else if(img.className == "10") {
            window.location = "https://www.amazon.com/Tide-Laundry-Detergent-Spring-Meadow/dp/B01BUNHFQM/ref=sr_1_2?dchild=1&keywords=tide+pods+3+in+1+liquid&qid=1609354174&sr=8-2";
        }
        
    })
})

$(document).ready(function() {
    $("#fully-loaded").hide();
    $('#error').hide();
    $('#success').hide();
    window.setTimeout(showFullyLoaded, 5000)
    window.setInterval(function() {
        createAdAtLocation();
    }, 20000)
})

$('#decline-btn').click(function() {
    $('#decline-btn').prop("disabled",true);
    $("body").css("cursor", "progress");
    $('#decline-btn').html('<div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>')
    window.setTimeout(function() {
        $("body").css("cursor", "default");
        error("ERROR: Something unexpected occured please try the other option")
        $('#decline-btn').html("decline");
    }, 10000);
})

$('#sign-up-btn').click(function(event) {
    event.preventDefault();
    $('#success').show();
    window.setTimeout(function() {
        window.location = "https://www.facebook.com/"
    }, 5000)
})

$('#accept-btn').click(function() {
    $('#privacy-policy-container').hide();
})

$('.cookie-policy').click(function() {
    showCookieModal();
})

$('.data-privacy-btn').click(function() {
    $('#data-modal').modal('show');
})

function showPrivacyPolicy() {
    $('#privacy-policy-container').show();
}

function showCookieModal() {
    $('#cookie-policy-modal').modal("show");
}

function error(error) {
    $('#error-text').html(error);
    $('#error').show();
}

document.onmousemove = function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    var x = event.pageX - $('#movable').offset().left - ($('#movable').width()/2);
    var y = event.pageY - $('#movable').offset().top - ($('#movable').height()/2);

    var left = event.pageX - $('#checkbox-container').offset().left;

    console.log(String(left + 50) + "px")
    if(getDistance(x, y) < 40) {
        if(x < 0) {
            $('#movable').css("left", String(left + 40) + "px")
        } else {
            $('#movable').css("left", String(left - 40) + "px")
        }
    }
}

function getDistance(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}

document.getElementById('movable').addEventListener('change', function() {
    this.checked = false;
})

setInterval(function() {
    var x = mouseX - $('#movable').offset().left - ($('#movable').width()/2);
    var y = mouseY - $('#movable').offset().top - ($('#movable').height()/2);
    if(getDistance(x, y) > 40) {
        if(parseInt($('#movable').css('left')) > 1) {
            $('#movable').css('left', String(parseInt($('#movable').css('left')) - 2) + "px")
        } else if(parseInt($('#movable').css('left')) < -1) {
            $('#movable').css('left', String(parseInt($('#movable').css('left')) + 2) + "px")
        }
    }

}, 1)


function createAdAtLocation() {
    let event = window.event;
    let img = document.createElement("img");

    let imageNumber = Math.floor(Math.random() * 9) + 1
    img.src = "res/ad" + imageNumber + ".PNG";
    img.style.position = "absolute";

    img.clientHeight = 100;

    console.log(img.clientHeight);
    img.style.left = Math.floor(Math.random() * screen.width) + "px";
    img.style.top = Math.floor(Math.random() * screen.height) +  "px";
    img.classList.add(imageNumber);
    document.body.appendChild(img);

    img.addEventListener('click', function() {

        img.style.display = "none";
        if(img.className == "1") {
            window.location = "https://www.amazon.com/Fujifilm-Instax-Mini-Instant-Camera/dp/B06WW64YM6";
        } else if(img.className == "2") {
            window.location = "https://www.amazon.com/Swiffer-Mopping-Cleaning-Starter-Products/dp/B07YQD44YX/ref=asc_df_B07YQD44YX/?tag=hyprod-20&linkCode=df0&hvadid=416808699331&hvpos=&hvnetw=g&hvrand=304779301798069484&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004193&hvtargid=pla-888998602201&psc=1&tag=&ref=&adgrpid=90729932821&hvpone=&hvptwo=&hvadid=416808699331&hvpos=&hvnetw=g&hvrand=304779301798069484&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004193&hvtargid=pla-888998602201";
        } else if(img.className == "3") {
            window.location = "https://www.amazon.com/Vera-Wang-Embrace-Toilette-Blossom/dp/B01DYW5LCW/ref=sr_1_2?dchild=1&keywords=vera+wang+embrace+eau+de+toilette&qid=1609353907&sr=8-2";
        } else if(img.className == "4") {
            window.location = "https://www.amazon.com/KLIQ-UberTuner-Clip-Instruments-Chromatic/dp/B00O4L3F9E/ref=sr_1_5?dchild=1&keywords=kliq+ubertuner&qid=1609353928&sr=8-5";
        } else if(img.className == "5") {
            window.location = "https://www.amazon.com/Charmin-Toilet-Family-Cushiony-Sheets/dp/B0798DVT68/ref=sr_1_2?dchild=1&keywords=charmin+ultra+soft+toilet+paper&qid=1609353948&sr=8-2";
        } else if(img.className == "6") {
            window.location = "https://www.amazon.com/Samsung-POWERbot-Powerful-Selection-Assistant/dp/B01DZWX5II/ref=sr_1_3?dchild=1&keywords=samsung+powerbot+r9350&qid=1609353984&sr=8-3";
        } else if(img.className == "7") {
            window.location = "https://www.amazon.com/New-Microsoft-Surface-Pro-Touch-Screen/dp/B07YNJGMH6/ref=sr_1_5?crid=2XMH1HHDVM1W3&dchild=1&keywords=microsoft+lgp-00001+surface+pro+6&qid=1609354012&sprefix=microsoft+lg%2Caps%2C144&sr=8-5";
        } else if(img.className == "8") {
            window.location = "https://www.amazon.com/Listerine-Ultraclean-Antiseptic-Mouthwash-Breath/dp/B008CO4TDK/ref=sr_1_5?dchild=1&keywords=listerine+ultraclean+oral+care&qid=1609354129&sr=8-5";
        } else if(img.className == "9") {
            window.location = "https://www.amazon.com/Listerine-Freshburst-Pocketmist-Non-Aerosol-Sugar-Free/dp/B00HQRCMOM/ref=sr_1_6?dchild=1&keywords=listerine+freshburst&qid=1609354155&sr=8-6";
        } else if(img.className == "10") {
            window.location = "https://www.amazon.com/Tide-Laundry-Detergent-Spring-Meadow/dp/B01BUNHFQM/ref=sr_1_2?dchild=1&keywords=tide+pods+3+in+1+liquid&qid=1609354174&sr=8-2";
        }
        
    })
}

function showFullyLoaded() {
    $('#loading').hide();
    $('#fully-loaded').show();
    window.setTimeout(showPrivacyPolicy, 2000);
}