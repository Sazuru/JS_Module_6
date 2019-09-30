'use strict'
let myName = prompt('Как вас зовут?', 'Введите Ваше имя');
let myLastName = prompt('Какая у вас фамилия?', 'Введите Вашу фамилию');
let myBirthYear = prompt('Введите Ваш год рождения');
let currentYear = new Date;
let age;

//let currentYear = new Date;
//let age = currentYear.getFullYear() - myBirthYear;

let myAge = () => {
    let age = currentYear.getFullYear() - myBirthYear;
    return age;
};

if (myAge() < 20) {
    alert(`Привет, ${myName} ${myLastName}!`);
} else if (myAge() >= 20 && myAge() < 40) {
    alert(`Добрый день, ${myName} ${myLastName}.`);
} else {
    alert(`Здравствуйте, ${myName} ${myLastName}.`);
}
