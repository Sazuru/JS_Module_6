'use strict';

var getText = document.getElementById('editable');
var editButton = document.getElementById('edit');
var saveButton = document.getElementById('save');
var returnButton = document.getElementById('return');

function editText() {
    if (getText.contentEditable == 'true') {
        getText.contentEditable = 'false';
        editButton.setAttribute('disabled', true);
    } else {
        getText.contentEditable = 'true';
        editButton.setAttribute('disabled', true)
        saveButton.removeAttribute('disabled');
        returnButton.removeAttribute('disabled');
    }
}

function saveText() {
    sessionStorage.setItem('save', getText.textContent);
    getText.contentEditable = 'false';
    editButton.removeAttribute('disabled');
    saveButton.setAttribute('disabled', true);
    returnButton.setAttribute('disabled', true);
}

function returnText() {
    var oldText = sessionStorage.getItem('save', getText.textContent);
    getText.textContent = oldText;
    getText.contentEditable = 'false';
    editButton.removeAttribute('disabled');
    saveButton.setAttribute('disabled', true);
    returnButton.setAttribute('disabled', true);
}

window.onload = function () {
    if (sessionStorage.getItem('save', getText.textContent) != null) {
        getText.textContent = sessionStorage.getItem('save', getText.textContent)
    } else {
        getText.textContent = document.getElementById('editable').textContent
    }
}
