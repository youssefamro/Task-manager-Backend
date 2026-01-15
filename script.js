
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./TODO');
const express = require('express');
require('dotenv').config();
const {
    newTask,
    getTasks,
    updateTask,
    deleteTask
} = require('./mongo_util.js');

const taskroutes = require('./routes');



const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = process.env.DB_URI;

// connect to MongoDB
mongoose.connect(DB_URI.replace("<db_password>", DB_PASSWORD))
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Connection failed:', err);
    });

//express app setup
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//middleware
app.use(logger);
app.use(express.json());
app.use('/tasks', taskroutes);



function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}
