const mongoose = require('mongoose');



const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Task', taskSchema);