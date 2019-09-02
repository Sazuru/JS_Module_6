'use strict';

var list = document.getElementById('taskList');

function addTask() {
    var task = document.getElementById('newTask').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}
