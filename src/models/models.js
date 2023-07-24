const mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    rollno:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
})

const StudentDetail = new mongoose.model("StudentDetail",studentSchema);

module.exports = StudentDetail;