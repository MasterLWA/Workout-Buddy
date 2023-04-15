const { MongoDriverError } = require('mongodb');
const Workout = require('../Models/workoutModel');

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({})
    
    res.status(200).json(workouts)
}   


//get single workout by id
const getWorkoutById = async (req, res) => {
    const {id} = req.params

    if (!MongoDriverError.isValidObjectId(id)){
        return res.status(200).json({error:'invalid id'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(200).json({error:'workout not found'})
    }

    res.status(200).json(workout)
}


//add workout
const createWorkout = async (req, res) => {
    
    const {title, reps, load} = req.body

    //simple validation
    //add doc to db 
    try{
        //check for existing workout
        const newWorkout = await Workout.create({title, reps, load})
        res.status(200).json(newWorkout);
    }
    catch(error){
        res.status(500).send({mssg:'server error'});
    }
}


//update workout


//delete workout
module .exports = {
    createWorkout, getWorkoutById, getWorkouts
}