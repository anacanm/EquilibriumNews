import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import "../styles/Articles.css";

export const Article = (props) => {

  const [showArticle, setShowArticle] = useState(false);
  const [frameStyle, setFrameStyle] = useState({
        display: "none",
        border: "none",
        marginLeft: "-2px",
        padding: "0px"
    })

  const articleStyle = {
        fontFamily: "Bree Serif",
        fontWeight: "normal",
        textAlign: "center",
        padding: "2% 10% 10% 10%",
    }

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

    useEffect(()=>{
        setShowArticle(false);
    }, [props.query])


    useEffect(()=>{
        if(showArticle){setFrameStyle({display:"flex", border: "none"})}
        else{setFrameStyle({display: "none", border: "none"})}
    }, [showArticle])

    return(
        <div className="iFrame">
        	<div className="innerFrame">
          <div onClick= {() => setShowArticle(!showArticle)} id = "articleTile" style = {{paddingLeft: "10px"}}>
            <h2 style={{color: 'black'}}> {props.a.title}</h2>
            <h3 style={{color: 'darkgray'}}> by {props.a.author}</h3>
            <p style={{color: 'gray'}}> {props.a.description}</p>
            <iframe src = {props.a.url} title = {props.a.title} width = "100%" height = "510px" style = {frameStyle}></iframe>
            </div>
            </div>
        </div>
    );
}
