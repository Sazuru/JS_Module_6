'use strict';

var list = document.getElementById('taskList');

function addTask() {
    var task = document.getElementById('newTask').value;
    var lastChild = list.lastElementChild.innerHTML;
    if (task == 0) {
        console.log('Ничего не введено!');
    } else {
        if (task == lastChild) {
            var ask = confirm('Такая задача уже есть, добавить?')
            if (ask === true) {
                var entry = document.createElement('li');
                entry.appendChild(document.createTextNode(task));
                list.appendChild(entry);
            }
        } else {
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(task));
            list.appendChild(entry);
        }
    }
}

list.onclick = function (e) {
    if (e.target.tagName != "UL") {
        e.target.className == "done" ? e.target.className = "" :
            e.target.className = "done";
    }
}
