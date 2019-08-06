'use strict';

function User(personal) {
    this.firstName = personal.firstName;
    this.lastName = personal.lastName;
    var date = new Date();
    this.regDate = date.toString();
}

function UserList() {
    var i;
    this.users = [];
    for (i = 0; i < this.users.length; i++) {
        if (users[i] === userName) {
            return;
        }
    }
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
}

list.getAllUsers().forEach(function (c, i) {
    console.log(i + 1 + '. ' + c.firstName + ' ' + c.lastName + ' Reg date: ' + c.regDate);
});
