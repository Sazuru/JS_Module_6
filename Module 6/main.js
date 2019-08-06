'use strict';

function User(personal) {
    this.firstName = personal.firstName;
    this.lastName = personal.lastName;
    var date = new Date();
    this.regDate = date.toString();
}

function UserList() {
    this.users = [];
    for (var i = 0; i < this.users.length; i++) {
        if (users[i] == promptName) {
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

while (promptName !== null) {
    var promptName = prompt('Введите ваши имя и фамилию', 'Вилли Токарев');
    if (promptName !== null) {
        list.add(new User({
            firstName: promptName.trim().split(' ')[0],
            lastName: promptName.trim().split(' ')[1]
        }));
    } else {
        console.log(list.getAllUsers());
    }
}
