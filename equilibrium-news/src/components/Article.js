import React, { useEffect, useState } from 'react';
import '../styles/Article.css';

export const Article = (props) =>{

    const [showArticle, setShowArticle] = useState(false);
    const [frameStyle, setFrameStyle] = useState({
        display: "none",
        border: "none",
        marginLeft: "-2px",
        padding: "0px"
    })

    //if the query is updated, closes all articles
    useEffect(()=>{
        setShowArticle(false);
    }, [props.query])

    //if article is clicked, opens or closes the article
    useEffect(()=>{
        if(showArticle){setFrameStyle({display:"flex", border: "none"})}
        else{setFrameStyle({display: "none", border: "none"})}
    }, [showArticle])

    let authorText = ""
    if(props.a.author!== "" && props.a.author !== null)
    {
        authorText = "by "+props.a.author;
    }
     
    


    return(
        
        <div onClick= {() => setShowArticle(!showArticle)} id = "articleTile" style = {{paddingLeft: "10px"}}>
            <h2 id = "title">{props.a.title}</h2>
            <h3>{authorText}</h3>
            <p>{props.a.description}</p>
            <iframe src = {props.a.url} title = {props.a.title} width = "100%" height = "510px" style = {frameStyle}></iframe>
        </div>
    );



}