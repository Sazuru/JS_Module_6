'use strict';
//Базовая функция-конструктор

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

//Дочернаяя функция-конструктор
function Manager(firstName, lastName) {
    User.apply(this, arguments);

    this.sayHello = function () {
        alert('Здравствуйте');
    }

    this.changeName = function (name) {
        this.firstName = name;
    }
}
