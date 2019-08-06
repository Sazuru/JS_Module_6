'use strict'
var sum = 0;

while (true) {
    var value = +prompt("Введите число", '');
    if (value === 0) break;
    if (!value) {
        alert('Вы ввели недопустимое значение')
        continue;
    }
    sum += value;
}
alert('Сумма: ' + sum);
