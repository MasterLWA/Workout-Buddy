const mongoose = require('mongoose')

const schema = mongoose.Schema

// create a schema
const workoutSchema = new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },

    load: {
        type: Number,
        required: true
    },
}, {timestamps: true})

// export the model
module.exports = mongoose.model('Workout', workoutSchema)

