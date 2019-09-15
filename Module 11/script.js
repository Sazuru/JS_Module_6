var API_KEY = 'trnsl.1.1.20190915T104025Z.3e27a676c53a5add.b9cb4fd9ad1c22453b59a804d154f15ad55bedc2';

window.onload = function () {
    var urlLangs = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
    urlLangs += '?key=' + API_KEY;
    urlLangs += '&ui=ru';

    var dropdown1 = document.getElementById('originLanguage');
    dropdown1.length = 0;
    var defaultOption1 = document.createElement('option');
    defaultOption1.text = 'Язык исходного текста';
    dropdown1.add(defaultOption1);
    dropdown1.selectedIndex = 0;

    var dropdown2 = document.getElementById('translationLanguage');
    dropdown2.length = 0;
    var defaultOption2 = document.createElement('option');
    defaultOption2.text = 'Язык перевода';
    dropdown2.add(defaultOption2);
    dropdown2.selectedIndex = 0;

    var request = new XMLHttpRequest();
    request.open('GET', urlLangs, true);
    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.response);
            var option;
            var langs = data.langs;
            for (var prop in langs) {
                option = document.createElement('option');
                option.text = langs[prop];
                option.value = prop;
                dropdown1.add(option);
            };
            for (var prop in langs) {
                option = document.createElement('option');
                option.text = langs[prop];
                option.value = prop;
                dropdown2.add(option);
            };
        } else {
            'Произошла ошибка при получении ответа от сервера'
            return;
        }

    }
    request.onerror = function () {
        console.error('An error occurred fetching the JSON from ' + url);
    };
    request.send();
};

function trans() {
    var req = new XMLHttpRequest();

    // Сохраняем адрес API
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

    var word = document.getElementById("word");

    var text = '&text=' + word.value;
    var dropdown1 = document.getElementById('originLanguage');
    var origin = dropdown1.value;
    var dropdown2 = document.getElementById('translationLanguage');
    var translation = dropdown2.value;

    // Формируем полный адрес запроса:
    url += '?key=' + API_KEY; // добавляем к запросу ключ API
    url += text; // текст для перевода
    url += '&lang=' + origin + '-' + translation; // направление перевода

    var translate = document.querySelector('.translate');

    // Назначаем обработчик события load
    req.addEventListener('load', function () {
        console.log(req.response); // отображаем в консоли текст ответа сервера
        var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект

        // Проверяем статус-код, который прислал сервер
        // 200 — это ОК, остальные — ошибка или что-то другое
        if (response.code !== 200) {
            translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
            return;
        }

        // Проверяем, найден ли перевод для данного слова
        if (response.text.length === 0) {
            translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
            return;
        }

        // Если все в порядке, то отображаем перевод на странице
        translate.innerHTML = response.text.join('<br>'); // вставляем его на страницу
    });

    // Обработчик готов, можно отправлять запрос
    // Открываем соединение и отправляем
    req.open('get', url);
    req.send();
}
