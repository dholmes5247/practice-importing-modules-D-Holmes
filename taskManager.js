function addTask(tasks, task) {
    tasks.push(task);
    console.log(`This ${task} has been added!`);
}

function listTasks(tasks) {
    console.log(tasks);
    return tasks;

}
module.exports = {addTask, listTasks} ;

