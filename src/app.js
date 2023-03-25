const express = require("express");
require("../src/db/conn")
const MensRanking = require ("../src/models/mens")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//we will handle post req
app.post("/mens" , async (req, res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e);
    }
})
app.get("/" , async(req,res) =>{
    res.send("Hello from the safi")
})

app.listen(port, ()=>{
    console.log(` connection is live at port no. ${port}`);
})
