'use strict';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function User(personal) {
    this.firstName = personal.firstName;
    this.lastName = personal.lastName;
    var date = new Date();
    this.regDate = date.toString();
}

function UserList() {
    this.users = [];
    this.add = function (user) {
        this.users.push(user);
    };
    this.getAllUsers = function () {
        return this.users;
    };
}

var list = new UserList();

while (userName !== null) {
    var userName = prompt('Введите ваши имя и фамилию', 'Вилли Токарев');
    if (userName !== null) {
        list.add(new User({
            firstName: userName.split(' ')[0],
            lastName: userName.split(' ')[1]
        }));
    }
    for (var i = 0; i < list.users.length; i++) {
        if (isNumeric(list.users[i].firstName) == true || isNumeric(list.users[i].lastName) == true) {
            alert('Пожалуйста, не вводите цифры!');
            location.reload();
        }
    }
}

for (var i = 0; i < list.users.length; i++) {
    console.log(i + 1 + '. ' + list.users[i].firstName + ' ' + list.users[i].lastName + ', ' + 'дата регистрации: ' + list.users[i].regDate);
}
