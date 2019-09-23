$('.ball').on('click', function () {
    var posY = 1 + Math.max(Math.random() * 500);
    if ($('.ball').css('left') == '50px') {
        $('.ball').animate({
            top: +posY,
            left: '1270px'
        }, 500);
        goal();
    } else {
        $('.ball').animate({
            top: +posY,
            left: '50px'
        }, 500);
        goal();
    }
    console.log(posY);

    function goal() {
        if (posY >= 290 && posY <= 410) {
            console.log('Goal!');
            $("h2").addClass("goal");
        } else {
            $("h2").removeClass("goal");
        }
    };
});
