/// <reference path="../../../lib/typings/tsd.d.ts" />
'use strict';
var $ = require('jquery');
var taskTemplate = '<li class="task">' + 'Task: <input class="complete" type="checkbox" /> ' + '<input class="description" type="text" placeholder="Enter task description..." /> ' + '<button class="delete-button">Delete</button></li>';
function _renderTask(task) {
    'use strict';
    var $task = $(taskTemplate);
    if (task.complete) {
        $task.find('.complete').attr('checked', 'checked');
        console.log('hello there!');
    }
    $task.find('.description').val(task.description);
    return $task;
}
exports.renderTasks = function (tasks) {
    var elementArray = $.map(tasks, _renderTask);
    console.log('testing...');
    $('#task-list').empty().append(elementArray);
};
exports.renderNew = function () {
    var $taskList = $('#task-list');
    $taskList.prepend(_renderTask({}));
};
