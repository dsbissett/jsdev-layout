/// <reference path="../../lib/typings/tsd.d.ts" />
'use strict';
var tasks = require('./tasks');
var $ = require('jquery');
function _addTask() {
    'use strict';
    tasks.add();
}
function _deleteAllTasks() {
    'use strict';
    tasks.clear();
}
function _saveChanges() {
    'use strict';
    tasks.save();
}
function _cancelChanges() {
    'use strict';
    tasks.cancel();
}
function _deleteTask(clickEvent) {
    'use strict';
    tasks.remove(clickEvent);
}
function _registerEventHandlers() {
    'use strict';
    $('#new-task-button').on('click', _addTask);
    $('#delete-all-button').on('click', _deleteAllTasks);
    $('#save-button').on('click', _saveChanges);
    $('#cancel-button').on('click', _cancelChanges);
    $('#task-list').on('click', '.delete-button', _deleteTask);
}
_registerEventHandlers();
tasks.render();
