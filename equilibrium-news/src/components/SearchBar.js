import React, { useState } from 'react';
import "../styles/SearchBar.css";


export const SearchBar = (props) =>{

    let [content, setContent] = useState("")

    let handleChange = (e) =>
    {
        e.preventDefault();
        setContent(e.target.value)
    }

    let handleSubmit = (e) =>
    {
        e.preventDefault();
        let trimmedContent = content.trim();
        if(trimmedContent.length !== 0 && trimmedContent)
        {
            props.setQuery(trimmedContent);
        }
        setContent("");
    }

    const homeStyle = {
        top: "15px",
        right: "15px",
        position: "fixed"
    }

    const inputStyle = {
        width: "200px",
        height: "30px",
        fontSize: "20px",
        backgroundColor: "lightGrey 0.9",
        borderRadius: "10px",
        borderColor: "lightGrey 0.3",
        visibility: "visible",
        paddingLeft: "10px",
        fontColor: "grey"
    }
    const buttonBarStyle = {
        width: "50px",
        height: "25px",
        borderRadius: "5px",
        marginBottom: "10px",
        borderColor: "lightGrey",
        borderOutline: "none"

    }

    return(
        <div style = {homeStyle}>
        <form onSubmit = {handleSubmit}>
            <input placeholder = "Search" type = "text" onChange = {handleChange} value = {content} style = {inputStyle}></input>
            <button id = "submit" style = {buttonBarStyle}>Submit</button>
        </form>
        </div>

    );



}
