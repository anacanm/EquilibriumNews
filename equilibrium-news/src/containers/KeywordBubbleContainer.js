import React from 'react';
import { KeywordBubble } from '../components/KeywordBubble';

export const KeywordBubbleContainer = (props) => {
    //updated KeywordBubbleContainer to make it more readable and usable :) -anacan
    
    const containerStyle = {
      position: "sticky",
      float: "right",
      top: "200px",
      right: "10px"
    }



    return (

    <div style = {containerStyle}>
        {props.keywords.map( a => <KeywordBubble setQuery = {props.setQuery} a = {a} key = {Math.random()}/>)}
    </div>
    );
}
