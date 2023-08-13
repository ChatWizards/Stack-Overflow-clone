import React from "react";

function Avatar(props){
    const style = {
        color: props.color,
        backgroundColor : props.background,
        borderRadius : props.radius,
        fontSize : props.size,
        textAlign : "center",
        cursor: props.cursor,
        textDecoration : "none",
        padding: `${props.py} ${props.px}`
        }
    return (
        <div style={style}>
            k
        </div>
    )
}

export default Avatar