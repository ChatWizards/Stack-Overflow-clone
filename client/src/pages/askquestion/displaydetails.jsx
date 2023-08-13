import React from 'react';
import {useParams} from "react-router-dom";
import Tagitem from '../../components/middlebar/tagitem';
import upVote from "../../images/sort-up.svg";
import downVote from "../../images/sort-down.svg";
import "./displaydetails.css"
import Answers from './answers';

function Displaydetails(){
    let {id} = useParams();
    console.log(id);
    var questionsList = [{ 
        _id: '1',
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
        },{
            answerBody: "Answer2",
            userAnswered: 'kumar2',
            answeredOn: "jan 22",
            userId: 2,
        }]
    },{ 
        _id: '2',
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
        <div className='display-details-component'>
            {questionsList.filter((question) => question._id === id).map((question)=>
                <section className='display-details-content' key={id}>
                    <h1 className='display-title'>{question.questionTitle}</h1>
                    <div className='display-content'>
                        <div className='display-left'>
                            <div className='display-left-left'>
                                <img src={upVote} alt="upvote"></img>
                                <p>{question.upVotes - question.downVotes}</p>
                                <img src={downVote} alt='downvote'></img>
                            </div>
                            <div className='display-left-right'>
                                <p style={{marginTop: '10px'}}>{question.questionBody}</p>
                                <p><Tagitem item="hello"/></p>
                            </div>
                        </div>
                        <div className='display-right'>
                            <div className='display-button'>
                                    <button>Share</button>
                                    <button>Delete</button>
                            </div>
                            <div className='display-user'>
                                <p style={{margin:"0px"}}>asked a month ago</p>
                                <div>
                                    <h1 style={{margin:"0px"}}>K</h1>
                                    <p style={{margin:"0px"}}>Manoj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <h3>{question.noOfAnswers} Answers</h3>
                        <Answers question={question}/>
                    </div>
                    <div className='details-answer-section'>
                        <h3>Your Answer</h3>
                        <textarea style={{maxWidth:"100%", height:"150px"}} />
                        <button className='display-post-ans'>Post your answer</button>
                    </div>
                </section>
            )}  
        </div>
    )
}

export default Displaydetails;