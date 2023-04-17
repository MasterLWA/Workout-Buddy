import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const Workoutform = (props) => {

    //use state to set the initial state of the form
    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        const res = await fetch('/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {"Content-Type": "application/json"},
        })

        const json = await res.json()

        if(!res.ok){
           console.log("cannot add workout", json)
        } 

        if(res.ok){
            setLoad("")
            setReps("")
            setTitle("")
            alert("Workout Added")
        }
    }
        return(
            <div classname="Container d-flex justify-content-center text-center">
                <form className="create" onClick={handleSubmit}>

                    <div className="text-center">Add Workout</div>

                      <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required/>

                        <input
                          type="text"
                          placeholder="Reps"
                          value={reps}
                          onChange={(e) => setReps(e.target.value)}
                          required/>

                            <input
                                type="text" 
                                placeholder="Load"
                                value={load}
                                onChange={(e) => setLoad(e.target.value)}
                            required/>

                            <button type="submit">Add Workout</button>
                </form>
            </div>
            )
}

export default Workoutform;