const express = require("express");
require("../src/db/conn")
const MensRanking = require ("../src/models/mens")
const app = express();
const port = process.env.PORT || 3000;

app.get("/" , async(req,res) =>{
    res.send("Hello from the safi")
})

app.listen(port, ()=>{
    console.log(` connection is live at port no. ${port}`);
})