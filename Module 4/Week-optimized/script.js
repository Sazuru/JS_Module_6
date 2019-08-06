function getDate() {
    'use strict';

    function declOfNum(n, titles) {
        return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    } //выбирает нужное склонение(взято с https://gist.github.com/realmyst/1262561)

    var today = new Date(),
        week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        weekToday = week[today.getDay()],
        month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        monthToday = month[today.getMonth()],
        day = today.getDate(),
        year = today.getFullYear(),
        hours = today.getHours(),
        hoursText = declOfNum(hours, ['час', 'часа', 'часов']),
        minutes = today.getMinutes(),
        minutesText = declOfNum(minutes, ['минута', 'минуты', 'минут']),
        seconds = today.getSeconds(),
        secondsText = declOfNum(seconds, ['секунда', 'секунды', 'секунд']),
        show = document.getElementById("clock").innerHTML = 'Сегодня ' + day + ' ' + monthToday + ' ' + year + ' года' + ', ' + weekToday + ', ' + hours + ' ' + hoursText + ' ' + minutes + ' ' + minutesText + ' ' + seconds + ' ' + secondsText;

    return show;
}

setInterval(getDate, 1000);
