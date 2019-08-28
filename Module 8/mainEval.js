//let yourCode = prompt('Введите ваш код: ', '2 + 2');
//
//function testCode() {
//    'use strict';
//    console.log(eval(yourCode));
//
//};
//
//try {
//    testCode();
//} catch (ex) {
//    console.log('Ошибка в вашем коде: ' + ex);
//}

//var userCode = document.querySelector('#btn');
//userCode.addEventListener('click', function () {
//    eval(text);
//});

//function evalCode() {
//    var yourCode = document.querySelector('textarea').value;
//    eval(yourCode);
//}

function testCode() {
    try {
        'use strict';
        var yourCode = document.getElementById('textarea').value;
        eval(yourCode);
    } catch (ex) {
        er.innerHTML = ('Ошибка в вашем коде: ' + ex);
        document.getElementById('er').style.color = 'red';
    }
}
