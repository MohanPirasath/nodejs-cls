
// const express=require("express");
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import {moviesRouter} from "./routes/movies.js";
// import { usersRouter } from "./user.js";
// import {usersRouter} from "./routes/users.js";

dotenv.config();

const app=express();

app.use(express.json())


// const movies=[{"id":"101","name":"RRR","src":"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG","rate":8.8,"notes":"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.","trailer":"https://www.youtube.com/embed/f_vbAtFSEc0"},
// {"id":"102","name":"Iron man 2","src":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg","rate":"7.9","notes":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.","trailer":"https://www.youtube.com/embed/wKtcmiifycU"},
// {"id":"103","name":"No Country for Old Men","src":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg","rate":8.1,"notes":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.","trailer":"https://www.youtube.com/embed/38A__WT3-o0"},
// {"id":"104","name":"Jai Bhim","src":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg","notes":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case","rate":8.8,"trailer":"https://www.youtube.com/embed/nnXpbTFrqXA"},
// {"id":"106","name":"Interstellar","src":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg","rate":8.6,"notes":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.","trailer":"https://www.youtube.com/embed/zSWdZVtXT7E"},
// {"id":"107","name":"Baahubali","src":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg","rate":8,"notes":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.","trailer":"https://www.youtube.com/embed/sOEg_YZQsTI"},
// {"id":"108","name":"Ratatouille","src":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=","rate":8,"notes":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.","trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w"}]

const PORT=process.env.PORT

// const MONGOURL="mongodb://localhost"
const MONGO_URL=process.env.MONGO_URL


 async function Connection(){
    const Client=new MongoClient(MONGO_URL);
    await Client.connect();
    console.log("Mongo Connected")
    return(Client)
}
 export const Client= await Connection();

app.get("/",function(req,res){
    res.send("welcome to Movies App ")
})


app.use("/movies", moviesRouter);
// app.use("/users", usersRouter);

app.listen(PORT,()=>console.log(`App started in ${PORT}`))


async function  Genhashpass(password){
    const No_of_round=10
    const salt= await bcrypt.genSalt(No_of_round);
    console.log("salt",salt);
    const hashedpassword = await bcrypt.hash(password,salt);
    console.log("hashpass",hashedpassword)
   
}

Genhashpass("password123")