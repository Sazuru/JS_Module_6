'use strict';

function editText() {
    var edit = document.getElementById('editable');
    if (edit.contentEditable == "true") {
        edit.contentEditable = "false";
    } else {
        edit.contentEditable = "true";
    }
}

function saveText() {}
