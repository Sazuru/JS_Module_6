"use strict";

(function() {
  window.onload = function() {

var randomizer = Math.floor(Math.random() * (1001 - 0 + 1)) + 0;

var count = 11;

var counter = function() {
    return --count;
};

var retry = function() {
 var resume = confirm("сыграем еще?");
      if (resume) {
        onload();
      } else {
        alert("До свидания!");
        return;
      }
};

var chooseRandom = function() {
  function declOfNum(n, titles) {
    return titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ];
  }
  var countNumber = parseInt(counter(), 10),
    countNumberText = declOfNum(countNumber, ["попытка", "попытки", "попыток"]),
    countText = declOfNum(countNumber, ["Осталась", "Осталось", "Осталось"]),
    userNumber = prompt(
      "Загадано число от 0 до 1000, осталось " + count + " "+countNumberText+"!",
      "Введите число"
    ),
    userInt = parseInt(userNumber, 10);
  if (randomizer === userInt) {
    return alert("Правильно!");
  } else if (randomizer < userInt) {
    if (countNumber == 0) {
      alert("Попытки кончились! Правильный ответ: "+ randomizer);
      return retry();
    }
    alert("Меньше!");
    return chooseRandom();
  } else if (randomizer > userInt) {
    if (countNumber == 0) {
      alert("Попытки кончились! Правильный ответ: "+ randomizer);
      return retry();
    }
    alert("Больше!");
    return chooseRandom();
  } else if (userNumber === null) {
    alert("До свидания!");
  } else if (!userInt) {
    alert("Введи число!");
    chooseRandom();
  }
};
chooseRandom();
}})();