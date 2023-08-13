import React from "react"
import comment from '../../images/comment-alt-solid.svg'
import pen from '../../images/pen-solid.svg'
import blackLogo from '../../images/blacklogo.svg'
import Tagitem from "../middlebar/tagitem"
import "./rightside.css"

function Rightsidebar(){
    var taglist = ["java", "node js", "react js", "mongo db", "express js","javascript", "R", "python","c","c++","java1","java2"]
    return (
        <div className="righside-components">
            <div className="box-item first">
                <h4 style={{marginTop:"0px"}}>The Overflow Blog</h4>
                <div className="rightside-content">
                    <img src={pen} alt="pen"></img>
                    <p>Observability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className="rightside-content">
                    <img style={{marginTop:"-16px"}} src={pen} alt="pen"></img>
                    <p style={{marginBottom:"13px"}}>Podcast 374: How valuable is your screen name?</p>
                </div>
            </div>
            <div className="box-item">
                <h4 style={{marginTop:"0px"}}>Featured on Meta</h4>
                <div className="rightside-content">
                    <img src={comment} alt="comment"></img>
                    <p>Review queue workflows - Final release....</p>
                </div>
                <div className="rightside-content">
                    <img src={comment} alt="comment"></img>
                    <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
                </div>
                <div className="rightside-content">
                    <img style={{marginTop:"-16px"}} src={blackLogo} alt="logo"></img>
                    <p style={{marginBottom:"13px"}}>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <div className="box-item">
                <h4 style={{marginTop:"0px"}}>Hot Meta Posts</h4>
                <div className="rightside-content">
                    <span>38</span>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className="rightside-content">
                    <span>20</span>
                    <p>What is the best course of action when a user has high enough rep to...</p>
                </div>
                <div className="rightside-content">
                    <span style={{marginTop:"-16px"}}>14</span>
                    <p style={{marginBottom:"13px"}}>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
            </div>
            <div className="box-item recent-tags">
                <h4>Watched Tags</h4>
                <div className="watched-tags">
                    {taglist.map((list1) => <Tagitem item = {list1}/>)}
                </div>
            </div>
        </div>
    )
}

export default Rightsidebar