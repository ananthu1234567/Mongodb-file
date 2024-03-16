const express = require("express");
const morgan = require("morgan");
const db = require('./mongodb');
const studentRoute = require('./Routes/stuRoute');

const app = express();
app.use(morgan('dev'));
app.use('/api',studentRoute)


app.listen(3005,()=>{
    console.log("Listening to port 3005")
})