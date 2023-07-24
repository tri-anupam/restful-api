const express = require("express");
const Student = require("../models/models");

const router = new express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>RESTful API </h1></br>
    <h1>CRUD Operation</h1></br>
    <h2 style="color:blue;text-align:center;">POST Method</h2>
    <h3 style="text-align:center;">To create user "/student" ==> POST Request json name,rollno, email and dob</h3>
    <h2 style="color:blue;text-align:center;">GET Method</h2>
    <h3 style="text-align:center;">To read user "/student"</h3>
    <h2 style="color:blue;text-align:center;">PATCH/UPDATE Method</h2>
    <h3 style="text-align:center;">To update "/student/:id" update field</h3>
    <h2 style="color:blue;text-align:center;">DELETE Method</h2>
    <h3 style="text-align:center;">To delete "/student/:id" delete data</h3>
    `);
});

//post request
router.post("/student", async (req, res) => {
  try {
    const user = new Student(req.body);
    // console.log(req.body)
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get request
router.get("/student", async (req, res) => {
  try {
    const studentDetails = await Student.find();
    res.status(200).send(studentDetails);
  } catch (e) {
    res.status(500).send(e);
  }
});

//find by id
router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getStudent = await Student.findById(_id);
    res.status(200).send(getStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete user
router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    res.status(400).send(deleteStudent);
    if (deleteStudent) {
      console.log("User deleted successfully");
    } else {
      console.log("user not found");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//update user
router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateUser);
    console.log("update user");
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
