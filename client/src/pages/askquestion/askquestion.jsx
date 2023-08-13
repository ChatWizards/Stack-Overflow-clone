import React from "react";
import "./askquestion.css";

function Askquestion(){
    return (
        <div className="ask-ques-component">
        <div className="ask-ques-content">
        <p className="ask-ques-title">Ask a public question</p>
            <div>
                <form className="ask-ques-form">
                    <label htmlFor="title" className="ask-label">
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person</p>
                        <input type="text" id="title"></input>
                    </label>
                    <label htmlFor="body" className="ask-label">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea type="text" id="body"></textarea>
                    </label>
                    <label htmlFor="ask-tag" className="ask-label" style={{marginBottom:"25px"}}>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text" id="ask-tag"></input>
                    </label>
                </form>
            </div>
            <button className="ask-ques-review">Review your question</button>
        </div>
        </div>
    )
}

export default Askquestion