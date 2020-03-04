import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Articles.css";
import Iframe from 'react-iframe'

export const Article = (props) =>{
    //I made this component just to see if it would work. It does, but it's all yours to make good. -anacan

    return(
        <div className="iFrame">
        	<div className="innerFrame">
            <h2>{props.a.title}</h2>
            <h3>by {props.a.author}</h3>
            <p style = {{color: "blue"}}>{props.a.description}</p>
            <Iframe url={props.a.url} width="450px" height="450px" id="myId" className="myClassname" display="initial" position="relative"/>
            </div>
        </div>
    );



}