'use strict';

var STORE_NAME: string = 'tasks';

export var save: Function = (tasks: any) => {
    localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
};

export var load: Function = () => {
    var storedTasks: string = localStorage.getItem(STORE_NAME);

    if (storedTasks) {
        console.log('test');
        return JSON.parse(storedTasks);
    }

    return <any>[];
};

export var clear: Function = () => {
    localStorage.removeItem(STORE_NAME);
};