import React from "react";
import Leftsidebar from "../../components/leftside/leftside";
import Mainbar from "../../components/middlebar/middlebar";
import Rightsidebar from "../../components/rightside/rightside";
import "../../App.css"
import "./home.css"

function Home(){
    return (
        <div className="home-container-1">
            <Leftsidebar />
            <div className="home-container-2">
                <Mainbar />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Home