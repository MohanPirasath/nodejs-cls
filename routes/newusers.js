import express from "express";

import { getallmovies, getmoviebyid, getuserbyname, createmovie, updatebyid, deletebyid, createuser } from "./helper.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken"

const router = express.Router();


async function  Genhashpass(password){
    const No_of_round=10
    const salt= await bcrypt.genSalt(No_of_round);
    // console.log("salt",salt);
    const hashedpassword = await bcrypt.hash(password,salt);
   return hashedpassword
   
}



router.post("/signup",async function (req,res){
    const {username,password}=req.body;

const hashedpassword = await Genhashpass(password)

const isuserexist= await getuserbyname(username)

if(isuserexist){
    res.status(404).send("use any other username")
}
else{
    const results=await createuser(
        {
            username:username,
            password:hashedpassword
        }
        )
    res.send(results)
}

    // console.log(data)
   

    // const result=await Client.db("B33WD").collection("newuser").insertOne(data)
    // res.send(data)
    // return await Client.db("B33WD").collection("movies").insertMany(data);

})



router.post("/login",async function (req,res){

    const {username,password}=req.body;

// const hashedpassword = await Genhashpass(password)

const userfromdb= await getuserbyname(username)

if(!userfromdb){
    res.status(401).send("username is not valid")
}
else{
    const passwordformdb= userfromdb.password;
    const checkpassword= await bcrypt.compare(password,passwordformdb)

    if(checkpassword){
        const token= jwt.sign({id:userfromdb._id},process.env.SECRET_KEY)
          res.send({msg:"successful login",token: token})
    }else{
       res.send("invalid")
    }
}

    // console.log(data)
   

    // const result=await Client.db("B33WD").collection("newuser").insertOne(data)
    // res.send(data)
    // return await Client.db("B33WD").collection("movies").insertMany(data);

})




export const newusersRouter=router;