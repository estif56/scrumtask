const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    sprint: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del sprint
        ref: 'Sprint' // Nombre del modelo al que hace referencia
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;