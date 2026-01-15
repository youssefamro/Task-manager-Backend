const Task = require('./TODO');

// create a new task
async function newTask(name = 'Sample Task', completed = false) {
    const task = new Task({ name, completed });
    await task.save().then(() => console.log('Task saved'));
}

// get all tasks
async function getTasks() {
    const tasks = await Task.find();
    // console.log(tasks);
    return tasks;
}


// update a task
async function updateTask(id) {
    await Task.findByIdAndUpdate(id, { completed: true });
    console.log('Task updated');

}



// delete a task
async function deleteTask(id) {
    await Task.findByIdAndDelete(id);
    console.log('Task deleted');
}

module.exports = {
    newTask,
    getTasks,
    updateTask,
    deleteTask
}