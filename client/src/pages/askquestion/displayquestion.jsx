import React from 'react';
import Leftsidebar from "../../components/leftside/leftside";
import Rightsidebar from "../../components/rightside/rightside";
import Displaydetails from './displaydetails';

function Displayquestion(){
    return (
        <div className="home-container-1">
            <Leftsidebar />
            <div className="home-container-2">
                <Displaydetails />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Displayquestion;



        