import React from 'react';
import { KeywordBubble } from '../components/KeywordBubble';

export const KeywordBubbleContainer = (props) => {
    //updated KeywordBubbleContainer to make it more readable and usable :) -anacan
    
    return (
    <div>
        {props.keywords.map( a => <KeywordBubble setQuery = {props.setQuery} a = {a}/>)}
    </div>
    );
}