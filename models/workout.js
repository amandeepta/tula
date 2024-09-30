const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
    },
    
    plans : [
        {
            day : {type : String, required : true},
            workouts: [{ id: { type: Number, required: true }, name: { type: String, required: true }, reps: { type: Number, required: true }, sets: { type: Number, required: true }, }]
        }
    ]
    
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;
