var users;
var login;
var password;
var flag;
var i;

users = [
    {
        name: 'Василий',
        log: 'Vasya',
        pass: 'Pwd'
    },
    {
        name: 'Пётр',
        log: 'Petya',
        pass: 'Pwd'
    },
    {
        name: 'Серёжа',
        log: 'Sergio',
        pass: 'Pwd'
    }
];

function logOn() {
    'use strict';
    login = prompt('Введите логин', 'Логин');
    password = prompt('Введите пароль', 'Пароль');

    flag = false;
    for (i = 0; i < users.length; i++) {
        if (login === (users[i].log) && password === (users[i].pass)) {
            flag = true;
            break;
        }
    }

    if (flag) {
        console.log('Добро пожаловать, ' + users[i].name + '!');
    } else {
        console.log('Неверный логин или пароль');
    }
}
logOn();
