const mongoose = require('mongoose');

//schema creation
const studentschema = mongoose.Schema({
    name:String,
    age:Number,
    place:String
});

const studentModel = mongoose.model('student',studentschema);

module.exports=studentModel