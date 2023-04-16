const { MongoDriverError, MongoServerClosedError } = require('mongodb');
const Workout = require('../Models/workoutModel');
const { default: mongoose, Mongoose } = require('mongoose');

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({})
    
    res.status(200).json(workouts)
}   


//get single workout by id
const getWorkoutById = async (req, res) => {
    const {id} = req.params

    //check for valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'invalid id'})
    }


    const workout = await Workout.findById(id)

    //if workout not found
    if(!workout){
        return res.status(400).json({error:'workout not found'})
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
const updateWorkout = async (req, res) => {

    const {id} = req.params

    //check for valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'invalid id'})
    }

    //check for existing workout
    const workout = await Workout.findOneAndUpdate({_id: id},
        {
            ...req.body
        } )


    //if workout not found
    if(!workout){
        return res.status(400).json({error:'workout not found'})
    }

    //return updated workout
    res.status(200).json(workout)
}


//delete workout
const deleteWorkout = async (req, res) => {
    
    const {id} = req.params

    //check for valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'invalid id'})
    }

    //check for existing workout
    const workout = await Workout.findByIdAndDelete({_id:id})

    //if workout not found
    if(!workout){
        return res.status(400).json({error:'workout not found'})
    }

    //return deleted workout
    res.status(200).json(workout)
}    

//export functions
module .exports = {
    createWorkout, getWorkoutById, getWorkouts, deleteWorkout, updateWorkout
}