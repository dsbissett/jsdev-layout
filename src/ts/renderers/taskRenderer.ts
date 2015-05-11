/// <reference path="../../../lib/typings/tsd.d.ts" />
'use strict';
import $ = require('jquery');
var taskTemplate: string = '<li class="task">' +
    'Task: <input class="complete" type="checkbox" /> ' +
    '<input class="description" type="text" placeholder="Enter task description..." /> ' +
    '<button class="delete-button">Delete</button></li>';

function _renderTask(task: any): JQuery {
    'use strict';
    var $task: JQuery = $(taskTemplate);

    if (task.complete) {
        $task.find('.complete').attr('checked', 'checked');
        console.log('hello there!');
    }

    $task.find('.description').val(task.description);

    return $task;
}

export var renderTasks: Function = (tasks: any) => {
    var elementArray: JQuery = $.map(tasks, _renderTask);
    console.log('testing...');
    $('#task-list').empty().append(elementArray);
};

export var renderNew: Function = () => {
    var $taskList: JQuery = $('#task-list');
    $taskList.prepend(_renderTask({}));
};