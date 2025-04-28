
const taskManager = require('./taskManager.js');
const fileHandler = require('./fileHandler.js');

let taskList = ['Relax'];

taskManager.addTask(taskList, 'Clean my Car!');
taskManager.addTask(taskList, 'Wash House!');
taskManager.addTask(taskList, 'Cook Dinner!');
taskManager.addTask(taskList, 'Get the Mail');
taskManager.listTasks(taskList);

fileHandler.saveTasks('tasks.json', taskList);

let fileTasks = fileHandler.loadTasks('./tasks.json');
for (let task of fileTasks) {
    if (task.length > 0 && !taskList.includes(task)) {
        taskList.push(task);
    }
}

console.log(taskList);
