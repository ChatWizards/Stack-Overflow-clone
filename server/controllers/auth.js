import Jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

import users from "../models/auth.js";

export const signup = async (req,res) => {
    const {name ,email ,password} = req.body;
    try{
        const existingUser = await users.findOne({email});
        if(existingUser){
            res.status(404).json("User already exists");
        }

        const hasedPassword = await bcryptjs.hash(password,12);
        const newUser = users.create({name,email,password:hasedPassword});
        const token = jwt.sign({email:newUser.email, id:newUser._id}, "test", {expiresIn: "1h"});
        res.status(200).json({result: newUser, token});
    }catch(error){
        res.status(500).json("something went wrong...");
    }
}
export function login(){
    const {email,password} = req.body;
    const existingUser = await users.findOne({email});
    if(!existingUser){
        res.status(404).json("User doesn't exists");
    }
    const ispassword = await bcryptjs.compare(password,existingUser.password);
    if(!ispassword){
        res.status(400).json("Invalid credentials");
    }
    const token = jwt.sign({email:newUser.email, id:newUser._id}, "test", {expiresIn: "1h"});
    res.status(200).json({result: newUser, token});
}