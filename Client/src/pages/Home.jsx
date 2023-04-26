import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Workoutform from '../components/WorkoutForm';
import Workoutlist from '../components/Workoutlist'
import './style/report.css'

const Home = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col">
                    <Workoutlist />
            </div>
            <div className="col">
                <Workoutform />
            </div>
        </div>
    </div>
    );
}
export default Home;


{/* Fetching Data to page  */}