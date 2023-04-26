import { useState, useEffect } from "react";


const Workoutlist = (props) => {
    
    const [workouts,setWorkouts] = useState(null)

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
    }, [])
    
    return(
        <div className="container justify-content-center">
                {workouts && workouts.map((workoutz) => (
                 <div key={workoutz._id}  className='contrainer text-center' id='workoutlist' >   
                    <h2 className='text-danger' >{workoutz.title}</h2>
                    <p>Sets: {workoutz.reps}</p>
                    <p>Reps: {workoutz.load}</p>
                 </div>   
                ))}
        </div> 
    )
}

export default Workoutlist;