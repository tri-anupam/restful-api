const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
try{
    // mongoose.connect(process.env.MONGO_URI);
    // console.log("Database connection successful")

    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
    })

    connection.on('error',(err)=>{
        console.log(err)
        process.exit();
    })
}catch(error){
    console.log("Something went wrong.")
    console.log(error)
}