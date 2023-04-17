import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Workoutform from '../components/WorkoutForm';


const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    {/* Fetching Data to page  */}
    useEffect(() => {
        const fetchWorkouts = async () => {
            {/* get workouts throgh the API and save to res variable*/}
            const res = await fetch('/workout')
            const json = await res.json()
            
            if(res.ok){
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, []);

    return (
        <div>
            <div className="workout">
                {workouts && workouts.map((workoutz) => (
                 <div key={workoutz._id}  className='contrainer text-center' >   
                    <h2 className='text-danger'>Title: {workoutz.title}</h2>
                    <p>Repsz: {workoutz.reps}</p>
                    <p>Load: {workoutz.load}</p>
                    <hr className='container' />
                 </div>   
                ))}
            </div>

            <div className="container">
                <Workoutform />
            </div>
        </div>
    );
}

export default Home;


{/* Fetching Data to page  */}