'use strict'
/*var year;
for (year = 1900; year <= 2016; year++) {
    var isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (isLeapYear == true) {
        console.log(year);
    }
}*/
var firstYear = prompt('Введите начальный год', '1900');
var lastYear = prompt('Введите конечный год', '2016');
if (firstYear >= lastYear) {
    alert('Годы введены неверно');
}
var year;
for (year = firstYear; year <= lastYear; year++) {
    var isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (isLeapYear == true) {
        console.log(year);
    }
}
