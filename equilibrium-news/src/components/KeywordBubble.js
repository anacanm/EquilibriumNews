import React from 'react';

export const KeywordBubble = (props) =>{

    //below is the basic button styling I made to be able to see the buttons, this won't exist (here at least) when you're done -anacan
    const buttonStyle = {
        borderRadius: "50%",
        width: "120px",
        height: "75px",
        backgroundColor: "blue",
        color: "white"
    }

    return(
        <div>
            <button onClick = {() => props.setQuery(props.a)} style = {buttonStyle}>{props.a}</button>
        </div>
    );
}