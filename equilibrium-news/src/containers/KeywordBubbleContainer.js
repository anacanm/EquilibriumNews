import React from 'react';
import { KeywordBubble } from '../components/KeywordBubble';

export const KeywordBubbleContainer = (props) => {

    let containerStyle = {
        position:"sticky",
        float: "right",
        top: "247px"
    }

    return (
    <div style = {containerStyle}>
        {props.keywords.map( a => <KeywordBubble setQuery = {props.setQuery} a = {a} key = {Math.random()}/>)}
    </div>
    );
}