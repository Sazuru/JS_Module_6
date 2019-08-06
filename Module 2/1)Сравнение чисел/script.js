'use strict'
var firstNumber = +prompt('Введите первое число');
var secondNumber = +prompt('Введите второе число');

if (firstNumber == ' ') {
    alert('Первое число не введено');
} else if (secondNumber == ' ') {
    alert('Второе число не введено');
} else if (firstNumber > secondNumber) {
    alert('Первое число больше второго');
} else if (firstNumber < secondNumber) {
    alert('Второе число больше первого');
} else if (firstNumber == secondNumber) {
    alert('Числа равны');
} else if (Number.isFinite() == false) {
    alert('Введено не число');
}
