'use strict';
let yourCode = prompt('Введите ваш код: ', '2 + 2');

function testCode() {
    'use strict';
    console.log(eval(yourCode));

};

try {
    testCode();
} catch (ex) {
    console.log('Ошибка в вашем коде: ' + ex);
}
