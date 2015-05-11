/// <reference path="../../lib/typings/tsd.d.ts" />
'use strict';

import $ = require('jquery');
import taskData = require('./data/taskData');
import taskRenderer = require('./renderers/taskRenderer');

export var render: () => void = () => {
    taskRenderer.renderTasks(taskData.load());
};

export var cancel: () => void = () => {
    render();
};

export var add: () => void = () => {
    taskRenderer.renderNew();
    console.log('hello there!');
};

export var remove: (clickEvent: JQueryEventObject) => void = (clickEvent: JQueryEventObject) => {
    var taskElement: Element = clickEvent.target;
    $(taskElement).closest('.task').remove();
};

export var clear: () => void = () => {
    taskData.clear();
    render();
};

export var save: () => void = () => {
    var tasks: any[] = <any>[];
    $('#task-list .task').each((index: any, task: any) => {
        var $task: JQuery = $(task);
        tasks.push({
            complete: $task.find('.complete').prop('checked'),
            description: $task.find('.description').val()
        });
    });

    taskData.save(tasks);
};