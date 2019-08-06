'use strict';

var randomizer = (function () {
    return Math.floor(Math.random() * (1001 - 0 + 1)) + 0;
}());

var counter = (function () {
    var count = 10;
    return function () {
        return --count;
    };
}());

var chooseRandom = function () {
    function declOfNum(n, titles) {
        return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    }
    var userNumber = prompt('Загадано число от 0 до 1000, попробуйте угадать :)', 'Введите число'),
        userInt = parseInt(userNumber, 10),
        countNumber = parseInt(counter(), 10),
        countNumberText = declOfNum(countNumber, ['попытка', 'попытки', 'попыток']),
        countText = declOfNum(countNumber, ['Осталась', 'Осталось', 'Осталось']);
    if (randomizer === userInt) {
        return alert('Правильно!');
    } else if (randomizer < userInt) {
        console.log(countText + ' ' + countNumber + ' ' + countNumberText);

        if (countNumber == 0) {
            return (alert('Попытки кончились!'));
        }
        alert('Меньше!');
        return chooseRandom();

    } else if (randomizer > userInt) {
        console.log(countText + ' ' + countNumber + ' ' + countNumberText);

        if (countNumber == 0) {
            return (alert('Попытки кончились!'));
        }
        alert('Больше!');
        return chooseRandom();
    } else if (userNumber === null) {
        alert('До свидания!');
    } else if (!userInt) {
        alert('Введи число!');
        chooseRandom();
    }
}
