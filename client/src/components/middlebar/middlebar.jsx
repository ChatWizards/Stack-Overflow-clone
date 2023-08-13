import React from "react";
import Bodybar from "./bodybar";
import "./middlebar.css";
import {Link} from "react-router-dom";

function Mainbar(){
    var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js","javascript", "R", "python"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]
    return (
        <div className="mid-container">
            <div className="mid-top">
                <h1 style={{marginTop: "0px"}}>Top Questions</h1>
                <Link to="/Askquestion" className="Ask-question">Ask Question</Link>
            </div>
            <div className="mid-num">
                {questionsList.length === null ? <h1>Loading...</h1>:
                <p>{questionsList.length} questions</p>}
            </div>
            <div className="mid-body">
                    <Bodybar quesList = {questionsList}/>   
            </div>
        </div>
    )
}

export default Mainbar