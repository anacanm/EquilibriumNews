import React, { useState } from 'react';




export const RecommendedBubble = (props) =>{

    //below is some very, very basic styling I did to be able to see the buttons. It ugly
    let buttonStyle = {
        borderRadius: "50%",
        width: "120px",
        height: "75px",
        backgroundColor: "blue",
        color: "white"
    }

    //I probably want to change this into a container of bubbles. ¯\_(ツ)_/¯ not sure yet, going to discuss with my team.


    return(
        <div>
            <button style = {buttonStyle} onClick = {() => props.setQuery(props.keyword)}> {props.keyword} </button>
        </div>

    );



}