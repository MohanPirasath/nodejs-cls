import express from "express";
import { Client } from "../index";

const router=express.Router();

router.post("/signup",async function(req,res){
    const data= req.body
    console.log("data",data)
    const newuser= await Client.db("B33WD").collection("user").insertOne(data)
    console.log("newuser",newuser)
    res.send(newuser)
    

})

 export const usersRouter = router;