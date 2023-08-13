import React from "react";
import Tagitem from "./tagitem";

function Bodybar({quesList}){
    return (
        <div className="bodybar-components">
            {quesList.map((list) => (
                <div className="bodybar-content">
                <div>
                    <div className="votes">
                        <span>{list.upVotes}</span>
                        <p>votes</p>
                    </div>
                    <div className="answers">
                        <span>{list.noOfAnswers}</span>
                        <p>answers</p>
                    </div>
                    <div className="questions">
                        <p>{list.questionBody}</p>
                        <div className="alltags" style={{display:"flex", flexWrap: "wrap"}}>
                            {list.questionTags.map((questag) => 
                                <Tagitem item={questag} />
                            )}
                        </div>
                    </div>       
                </div>
                <p>asked on {list.askedOn} {list.userPosted}</p>
                </div>
            ))}
        </div>
    )
}

export default Bodybar