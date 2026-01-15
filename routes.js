const express = require('express');
const router = express.Router();

const {
    newTask,
    getTasks,
    updateTask,
    deleteTask
} = require('./mongo_util.js');


//routes
router
    .route('/')
    .get(async (req, res) => {
        const tasks_response = await getTasks();
        res.json(tasks_response);
    })
    .post(async (req, res) => {
        const task_name = req.body.name || 'Sample Task';
        const task_completed = req.body.completed || false;
        await newTask(task_name, task_completed);
        res.send('Task created');
    })



router
    .route('/:id')
    .put(async (req, res) => {
        const task_id = req.params.id;
        await updateTask(task_id);
        res.send('Task updated');
    })
    .delete(async (req, res) => {
        const task_id = req.params.id;
        await deleteTask(task_id);
        res.send('Task deleted');
    })



module.exports = router;