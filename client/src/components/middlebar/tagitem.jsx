import React from "react";

function Tagitem(props){
    var style = {
        margin : "0px",
        backgroundColor: "#e1ecf4",
        padding: "2px",
        borderRadius : "3px",
        width :"fit-content",
        color: "#3986c1",
        fontSize : "small"
    }
    return (
        <div style={{marginRight: "3px", marginBottom: "2px"}} className="tagitem">
            <p style={style}>{props.item}</p>
        </div>
    )
}

export default Tagitem