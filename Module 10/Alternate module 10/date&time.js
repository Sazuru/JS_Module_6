;(function () {

    "use strict";

    var time = document.createElement('div');
    document.body.appendChild(time);
    time.style.cssText = '\
    position: absolute;\
    top: 90%;\
    left: 60%;\
    ';


    var rightTime = function(num, str1, str2, str3) {

         var numEnd = num % 10;

         if (num>=11 && num<=19) {

            return num+' '+str2;

         } else if (numEnd == 1) {

            return num+' '+str1;

         } else if (numEnd>=2 && numEnd<=4) {

            return num+' '+str3;

         } else {
             
            return num+' '+str2;
         
         }
    };



    window.currentDate = function () {

        var d = new Date();

        var week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


        var weekNow = week[d.getDay()];

        var monthNow = month[d.getMonth()];

        var day = d.getDate();

        var year = d.getFullYear();

        var hour = d.getHours();

        var minute = d.getMinutes();

        var sec = d.getSeconds();
        
        var h = rightTime(hour, 'час', 'часов', 'часа');

        var m = rightTime(minute, 'минута', 'минут', 'минуты');

        var s = rightTime(sec, 'секунда', 'секунд', 'секунды');
        

        var fullDate = "Сегодня "+day+" "+monthNow+" "+year+" года , "+weekNow+", "+h+" "+m+" "+s+".";
        
        time.innerHTML = fullDate; 


    }

    setInterval("currentDate()", 1000);

}());