var today;
var day;
var days;
var month;
var year;
var hours;
var hoursText;
var minutes;
var minutesText;
var seconds;
var secondsText;
var allDate;

function getDate() {
    'use strict';
    today = new Date();

    function getMonthDay(today) {

        var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return month[today.getMonth()];
    } //выбирает нужный месяц в зависимости от getMonth

    function declOfNum(n, titles) {
        return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    } //выбирает нужное склонение(взято с https://gist.github.com/realmyst/1262561)

    function getWeekDay(today) {
        var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[today.getDay()];
    } //выбирает нужный день недели в зависимости от getDay

    day = today.getDate();

    month = getMonthDay(today);

    year = today.getFullYear();

    days = getWeekDay(today);

    hours = today.getHours();

    hoursText = declOfNum(hours, ['час', 'часа', 'часов']);

    minutes = today.getMinutes();
    minutesText = declOfNum(minutes, ['минута', 'минуты', 'минут']);

    seconds = today.getSeconds();
    secondsText = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

    allDate = 'Сегодня ' + day + ' ' + month + ' ' + year + ' года' + ', ' + days + ', ' + hours + ' ' + hoursText + ' ' + minutes + ' ' + minutesText + ' ' + seconds + ' ' + secondsText;

    console.log(allDate);
}
getDate();

//setInterval(getDate, 1000); //Включает обновление даты и времени в консоли каждую секунду
