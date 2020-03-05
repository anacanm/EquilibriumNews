import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Articles.css";
import Iframe from 'react-iframe'

export const Article = (props) =>{
    //I made this component just to see if it would work. It does, but it's all yours to make good. -anacan
    function isAuthor(props) {
      return <h3>by {props.a.author}</h3>;
    }

    function noAuthor(props) {
      return <h3> </h3>;
    }

    function authorCheck(props) {
      if (props.a.author === null) {
        return noAuthor(props);
      }
      else if (props.a.author === "") {
        return noAuthor(props);
      }
      return isAuthor(props);
    }
    return(
        <div>
            <h2>{props.a.title}</h2>
            <h3>{authorCheck(props)}</ h3>
            <p style = {{color: "blue"}}>{props.a.description}</p>
            <Iframe url={props.a.url} position="absolute" width="100%" id="myId" className="myClassname"/>
        </div>
    );



}
