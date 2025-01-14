const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        default: false
    },
    status: {
        type: String,
        default: 'To do'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task