import React from 'react';
import '../styles/KeywordBubble.css';

export const KeywordBubble = (props) =>{


    return(
        <div>
            <button id = "bubble" onClick = {() => props.setQuery(props.a)}>{props.a}</button>
        </div>
    );
}