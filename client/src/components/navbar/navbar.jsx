import React from "react";
import {Link} from "react-router-dom";
import Avatar from "../avatar/avatar";
import logo from "../../images/logo.png";
import search from "../../images/search-solid.svg";
import "./navbar.css"

function Navbar(){
    var User = null
    return (
        <nav>
            <div className="navbar">
                <Link to="/" className="nav-item nav-logo"><img src={logo} alt="Logo"></img></Link>
                <Link to="/about" className="nav-item nav-btn"><p>About</p></Link>
                <Link to="/products" className="nav-item nav-btn"><p>Products</p></Link>
                <Link to="/forteams" className="nav-item nav-btn"><p>For Teams</p></Link>
                <form>
                    <input type="text" placeholder="Search..."></input>
                    <img src={search} alt="search-icon" width="18"></img>
                </form>
                {User === null ? 
                    <Link to="/Auth" className="nav-item nav-link">login</Link>:
                    <>
                    <Avatar color="white" py="5px" px="10px" radius="50%" cursor="pointer" background="#009dff"><Link to="/"></Link></Avatar>
                    <Link to="/" className="nav-item nav-link">logout</Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar