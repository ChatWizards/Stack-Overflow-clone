import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routers/user.js";

const app = express();

app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));

const password = encodeURIComponent('kp%HJqwNt2AxEW2');
const URL = "mongodb+srv://Anil:"+password+"@atack-over-flow.4v1idd2.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000 || process.env.PORT;

app.get("/",function(req,res){
    res.send("hello world");
})

app.use("/user",userRoutes);

mongoose.connect(URL,function(err){
    if(err){
        console.log(err);
    }
    else{
        app.listen(PORT,function(){
            console.log(`server started on port ${PORT}`);
        })
    }
});