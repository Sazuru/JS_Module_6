'use strict';

var getText = document.getElementById('editable');

function editText() {
    var editButton = document.getElementById('edit')
    if (getText.contentEditable == "true") {
        getText.contentEditable = "false";
        editButton.setAttribute('value', 'Редактировать');
    } else {
        getText.contentEditable = "true";
        editButton.setAttribute('value', 'Не редактировать');
    }
}

function saveText() {
    sessionStorage.setItem("save", getText.textContent);
}
