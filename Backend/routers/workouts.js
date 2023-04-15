const express = require('express');
const router = express.Router();
const {getWorkouts, getWorkoutById, createWorkout} = require('../controller/Controller');
//import model
const Workout = require('../Models/workoutModel');

//get workouts
router.get('/workout', getWorkouts);

router.get('/workout/:id', getWorkoutById);

//add workout
router.post('/workout', createWorkout);

//update workout
router.patch('/workout/:id', (req, res) => {
    res.send({mssg:'update workout'});
});

//delete workout
router.delete('/workout/:id', (req, res) => {
    res.send({mssg:'delete workout'});
}); 




module.exports = router;