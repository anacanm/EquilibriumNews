import React from 'react';



export const KeywordBubble = (props) =>{

    //below is the basic button styling I made to be able to see the buttons, this won't exist (here at least) when you're done -anacan
    const buttonStyle = {

        borderRadius: "8px",
        width: "120px",
        height: "75px",
        backgroundColor: "#696969",
        borderColor: "#4d4d4d",
        borderStyle: "outset",
        borderWidth: "5px",
        color: "#f5f5f5",
        fontSize: "14px",
        margin: "10px",
        cursor: "pointer",

        borderRadius: "50%",
        width: "120px",
        height: "75px",
        backgroundColor: "blue",
        color: "white",

        borderRadius: "50px",
        width: "120px",
        height: "75px",
        backgroundColor: "black",
        color: "white",
        right: "50px",
        top: "50px",
        float: "right",
        // padding: "10px",
        position: "static",
        clear: "right",
        // outlineStyle: "dotted",
        // outlineColor: "grey"
    }

    return(
        <div>
            <button onClick = {() => props.setQuery(props.a)} style = {buttonStyle}>{props.a}</button>
        </div>
    );
}
