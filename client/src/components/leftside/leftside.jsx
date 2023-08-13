import React from "react";
import {NavLink} from "react-router-dom";
import Globe from "../../images/Globe.svg";
import "./leftside.css";

function Leftsidebar(){
    return (
        <div className="leftside-components">
            <div className="leftside-container">
            <NavLink to="/" className="home-tag">Home</NavLink>
            <p className="public">PUBLIC</p>
            <div className="globe-tag">
                    <img src={Globe} alt="globe"></img>
                <div className="questions-tag">
                    <NavLink to="/Questions" className="question">Questions</NavLink>
                    <NavLink to="/Tags" className="tag">Tags</NavLink>
                    <NavLink to="/Users" className="user">Users</NavLink>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Leftsidebar