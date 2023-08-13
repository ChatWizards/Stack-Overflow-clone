import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from "../pages/home/home";
import Auth from "../pages/auth/auth";
import Askquestion from "../pages/askquestion/askquestion";
import Displayquestion from "../pages/askquestion/displayquestion";


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Auth" element={<Auth />}/>
            <Route path="/Askquestion" element={<Askquestion />}></Route>
            <Route path="/Questions/:id" element={<Displayquestion />}/>
        </Routes>
    )
}

export default AllRoutes