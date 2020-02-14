import React from 'react';

export const RecommendedBubbleContainer = (props) => {

    //below is some very, very basic styling I did to be able to see the buttons. It's pretty ugly, so make it look pretty please <3 -anacan
    const buttonStyle = {
        borderRadius: "50%",
        width: "120px",
        height: "75px",
        backgroundColor: "blue",
        color: "white"
    }

    return (
    <div>
        {props.keywords.map( a => <button onClick = {() => props.setQuery(a)} style = {buttonStyle}> {a} </button> )}
    </div>
    );
}