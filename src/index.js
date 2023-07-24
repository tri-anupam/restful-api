const express = require("express");
//connect database
require("../src/db/conn")
//connect router
const router = require("../src/routers/route")

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(router)

app.listen(port,(req,res)=>{
    console.log(`Connection successful to port ${port}`);
})
