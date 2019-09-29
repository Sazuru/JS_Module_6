'use strict'
let myName = prompt('Как вас зовут?', 'Введите Ваше имя');
let myLastName = prompt('Какая у вас фамилия?', 'Введите Вашу фамилию');
let myBirthYear = prompt('Введите Ваш год рождения');

let currentYear = new Date;
let age = currentYear.getFullYear() - myBirthYear;

if (age < 20) {
    alert(`Привет, ${myName} ${myLastName}!`);
} else if (age >= 20 && age < 40) {
    alert(`Добрый день, ${myName} ${myLastName}.`);
} else {
    alert(`Здравствуйте, ${myName} ${myLastName}.`);
}
