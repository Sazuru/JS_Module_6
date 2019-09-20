$('.ball').on('click', function () {
    var posY = 1 + Math.max(Math.random() * 100);
    var posX = 1 + Math.floor(Math.random() * 1000);
    console.log(posX, posY);
    $('.ball').animate({
        top: +posY,
        left: +posX
    }, 500);
});
