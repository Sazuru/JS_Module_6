'use strict';
var randomNumber;
var userNumber;
var userInt;
var attemptCount;

attemptCount = 3;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber = (getRandomInt(0, 1001));
console.log(randomNumber);

function pickRandom() {
    userNumber = prompt('Загадано число от 0 до 1000, попробуйте угадать :)', 'Введите число');
    userInt = parseInt(userNumber, 10);
    if (randomNumber == userInt) {
        return alert('Правильно!');
    } else if (randomNumber < userInt) {
        alert('Меньше!');
        attemptCount--;
        if (attemptCount === 0) {
            return (alert('Попытки кончились!'));
        } else if (attemptCount > 0) {
            if (attemptCount > 1) {
                alert('Осталось ' + attemptCount + ' попытки!');
            } else if (attemptCount === 1) {
                alert('Осталась ' + attemptCount + ' попытка!');
            }
        }
        pickRandom();
    } else if (randomNumber > userInt) {
        alert('Больше!');
        attemptCount--;
        if (attemptCount === 0) {
            return (alert('Попытки кончились!'));
        } else if (attemptCount > 0) {
            if (attemptCount > 1) {
                alert('Осталось ' + attemptCount + ' попытки!');
            } else if (attemptCount === 1) {
                alert('Осталась ' + attemptCount + ' попытка!');
            }
        }
        pickRandom();
    } else if (userNumber === null) {
        alert('До свидания!');
    } else if (!userInt) {
        alert('Введи число!');
        pickRandom();
    }
}
pickRandom();
