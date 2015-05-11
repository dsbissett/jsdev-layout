/// <reference path="../../lib/typings/tsd.d.ts" />
'use strict';
import tasks = require('./tasks');
import $ = require('jquery');

function _addTask(): void {
    'use strict';
    tasks.add();
}

function _deleteAllTasks(): void {
    'use strict';
    tasks.clear();
}

function _saveChanges(): void {
    'use strict';
    tasks.save();
}

function _cancelChanges(): void {
    'use strict';
    tasks.cancel();
}

function _deleteTask(clickEvent: JQueryEventObject): void {
    'use strict';
    tasks.remove(clickEvent);
}

function _registerEventHandlers(): void {
    'use strict';
    $('#new-task-button').on('click', _addTask);
    $('#delete-all-button').on('click', _deleteAllTasks);
    $('#save-button').on('click', _saveChanges);
    $('#cancel-button').on('click', _cancelChanges);
    $('#task-list').on('click', '.delete-button', _deleteTask);
}

_registerEventHandlers();
tasks.render();