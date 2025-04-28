const fs = require('fs');

function saveTasks(filepath, tasks) {
   for (let task of tasks) {
    fs.appendFileSync(filepath, (task + '\n'));
   }
   console.log('This has been added to JSON');
}

function loadTasks(filepath) {    
    if(fs.existsSync(filepath)) {
        const data = fs.readFileSync(filepath, 'utf-8')
        let taskList = data.split('\n')
        return taskList;
    } else {

        return [];
    }
        
}


module.exports = { saveTasks, loadTasks };
