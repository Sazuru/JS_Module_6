'use strict';
var regDate = new Date();

var askName = prompt('Введите имя и фамилию через пробел');
askName = askName.split(' ');

function User(firstName, lastName, regDate) {
    this.sayHi = function () {
        return askName[0] + ' ' + askName[1] + '. ' + regDate();
    }
}
var printName = new User(askName);

var users = [];

users.push(printName);
console.log(users);

//function User(firstName, lastName, regDate) {
//    this.sayHi = function () {
//        return firstName + ' ' + lastName + ', ' + regDate;
//    }
//    var regDate = new Date();
//}
//var i = prompt('Введите имя и фамилию через пробел!');
//i = i.split(' ');
//
//var printName = new User(i[0], i[1]);
//console.log(printName.sayHi());

//function UserList {
//    this.users: [],
//    add: function (user) {},
//    getAllUsers: function () {},
//};
