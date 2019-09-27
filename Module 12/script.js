var kick = false;
var ballWidth = $('.ball').width();
var ballHeight = $('.ball').height();

var posX = function () {
    var clientWidth = $(window).width();
    if (kick)
        return clientWidth - ballWidth - 20;
    else
        return 0;
};

var posY = function () {
    return Math.random() * ($('.field').height() - $('.ball').height());
};

$('.ball').click(function () {
    kick = !kick;
    var x = posX();
    var y = posY();
    $('.ball').animate({
        left: x,
        top: y
    }, 500, function () {
        var centerHeight = $('.field').height() / 2;
        var minY = centerHeight - ballHeight;
        var maxY = centerHeight + ballHeight;
        if (y >= minY && (y + ballHeight) <= maxY) {
            console.log('Goal!');
            $("h2").addClass("goal");
            if (x > 0) {
                resultLeft();
            } else {
                resultRight();
            }
        } else {
            $("h2").removeClass("goal");
        }
    });
});

function resultLeft() {
    var i = $(".left").text();
    i++;
    $(".left").text(i);
};

function resultRight() {
    var i = $(".right").text();
    i++;
    $(".right").text(i);
};

$(window).resize(function () {
    if (!kick) return;

    var clientWidth = $(window).width() - ballWidth - 20;
    $('.ball').css({
        left: clientWidth
    });
});
