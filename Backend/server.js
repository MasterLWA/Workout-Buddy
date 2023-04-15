require('dotenv').config();

const express = require('express');
const mongoos = require('mongoose');

const workouts = require('./routers/workouts');

//express app
const app = express();

//middleware
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use(workouts); 



//connect to db
mongoos.connect(process.env.MGDB)
    .then(() => {
        console.log('connected to db');
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
    })
    })
    
    .catch((error) => {
        console.log(error);
    })
    
    