import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Articles.css";

export const Article = (props) =>{
    //I made this component just to see if it would work. It does, but it's all yours to make good. -anacan

    return(
        <div>
            <h2>{props.a.title}</h2>
            <h3>by {props.a.author}</h3>
            <p style = {{color: "blue"}}>{props.a.description}</p>
        </div>
    );



}
