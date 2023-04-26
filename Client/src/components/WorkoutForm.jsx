import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const Workoutform = (props) => {

    //use state to set the initial state of the form
    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        {/*  Create a workout object to send to the server */}
        const workout = {title, reps, load}

        {/*  Send the workout object to the server */}
        const res = await fetch('/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {"Content-Type": "application/json"},
        })

        const json = await res.json()

         {/*  If the response is not ok, throw an error  */}
        if(!res.ok){
           console.log("cannot add workout", json)
        } 

        {/*  If the response is ok, clear the form and alert the user */}
        if(res.ok){
            setLoad("")
            setReps("")
            setTitle("")
            alert("Workout Added")
            {/*Workout Added*/}
            window.location.reload()
        }
    }
        return(
            <div classname="Container d-flex justify-content-center text-center d-flex align-items-center" id="workoutform">
                <form className="create" onClick={handleSubmit}>

                    <h2 className="text-center">Add Workout</h2>

                      <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required/>
                        {/*  Break line  */}
                        <br/>

                        <input
                          type="text"
                          placeholder="Reps"
                          value={reps}
                          onChange={(e) => setReps(e.target.value)}
                          required/>
                        {/*  Break line  */}
                        <br/>
                            <input
                                type="text" 
                                placeholder="Load"
                                value={load}
                                onChange={(e) => setLoad(e.target.value)}
                            required/>
                        {/*  Break line  */}
                        <br/>

                            <button type="submit">Add Workout</button>
                </form>
            </div>
            )
}

export default Workoutform;