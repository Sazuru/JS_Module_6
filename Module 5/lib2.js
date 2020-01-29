(function() {
  window.start = function() {
    var numberMain = Math.floor(Math.random() * 1000 + 1);
    var attempt = 0;
    var checkNumber = function() {
      if (attempt >= 10) {
        alert("попытки закончились!");
        checkResume();
        return;
      }

      var numberUser = prompt(
        "угадай число! осталось " + (10 - attempt) + " попыток!"
      );
      if (numberUser == null) {
        alert("GAME OVER");
        return;
      } else {
        numberUser = parseInt(numberUser);
      }

      if (isNaN(numberUser)) {
        alert("не число!");
        attempt += 1;
        checkNumber();
      } else if (numberUser > numberMain) {
        alert("меньше!");
        attempt += 1;
        checkNumber();
      } else if (numberUser < numberMain) {
        alert("больше!");
        attempt += 1;
        checkNumber();
      } else {
        alert("правильно!");
        checkResume();
      }
    };

    var checkResume = function() {
      var resume = confirm("сыграем еще?");
      if (resume) {
        start();
      } else {
        alert("GAME OVER");
        return;
      }
    };
    checkNumber();
  };
})();
