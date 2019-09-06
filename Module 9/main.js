'use strict';

var list = document.getElementById('taskList');

function addTask() {
    var task = document.getElementById('newTask').value;
    var entry = document.createElement('li');
    if (task == 0) {
        console.log('Ничего не введено!');
        return;
    }
    for (var i = 0; i < list.children.length; i++) {
        if (task == list.children[i].innerHTML) {
            if (confirm('Такая задача уже есть, добавить?')) {
                break;
            } else {
                return;
            }
        }
    }
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}

list.onclick = function (e) {
    if (e.target.tagName != "UL") {
        e.target.className == "done" ? e.target.className = "" :
            e.target.className = "done";
    }
}
