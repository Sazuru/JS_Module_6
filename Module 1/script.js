'use strict'
var myName = prompt('Как вас зовут?', 'Введите Ваше имя');
var myLastName = prompt('Какая у вас фамилия?', 'Введите Вашу фамилию');
var myBirthYear = prompt('Введите Ваш год рождения');

var currentYear = new Date;
var age = currentYear.getFullYear() - myBirthYear;

if (age < 20) {
    alert('Привет,' + myName + ' ' + myLastName + '!');
} else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + myName + ' ' + myLastName);
} else {
    alert('Здравствуйте, ' + myName + ' ' + myLastName);
}
