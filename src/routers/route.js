const express = require("express");
const Student = require("../models/models");

const router = new express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>hello World</h1>")
})

//post request
router.post("/student",async (req,res) =>{
    try{
        const user = new Student(req.body);
        // console.log(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

//get request
router.get("/student",async (req,res) =>{
    try{
        const studentDetails = await Student.find();
        res.status(200).send(studentDetails)
    }catch(e){
        res.status(500).send(e);
    }
})

//find by id
router.get("/student/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const getStudent = await Student.findById(_id);
        res.status(200).send(getStudent)
    }catch(e){
        res.status(400).send(e);
    }
})

//delete user 
router.delete("/student/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = Student.findByIdAndDelete(_id);
        res.status(400).send(deleteStudent)
        if(deleteStudent){
            console.log("User deleted successfully");
        }else{
            console.log("user not found")
        }
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;