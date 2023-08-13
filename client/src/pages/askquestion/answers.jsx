import React from 'react';
import "./answers.css";
import Avatar from "../../components/avatar/avatar"

function Answers({question}){
    return (
        <div>
            {question.answer.map(question => (
                <div className='answer-component'>
                    <p style={{marginBottom:"0px"}}>{question.answerBody}</p>
                <div className='answer-content'>
                    <button>Share</button>
                <div className='answer-right'>
                    <p style={{margin:"0px"}}>asked 7 hours ago</p>
                    <div style={{margin:"0px"}}>
                        <Avatar item="k" />
                        <p style={{margin:"0px"}}>anil</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
            ))}
        </div>
    );
}

export default Answers;