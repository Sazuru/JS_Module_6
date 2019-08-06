'use strict';

function User() {
    this.firstName =
        this.lastName =
        var date = new Date();
    this.regDate = date.toDateString;
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

var x = new UserList();

while (promptName !== null) {
    var promptName = prompt('Enter your full name');
    if (promptName !== null) {
        x.add(new User({
            firstName: promptName.trim().split(' ')[0],
            lastName: promptName.trim().split(' ')[1]
        }));
    } else {
        console.log(x.getAllUsers());
    }
}
