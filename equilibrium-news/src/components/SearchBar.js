import React, { useState } from 'react';


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
        right: "10px",
        position: "fixed"
    }

    const inputStyle = {
        width: "200px",
        height: "30px",
        fontSize: "18px",
        borderWidth: "5px",
        borderColor: "darkgray",
        paddingLeft: "5px",
        fontColor: "darkgray",
        borderStyle: "solid"
    }
    const buttonBarStyle = {
        width: "50px",
        height: "25px",
        borderWidth: "2px",
        marginBottom: "10px",
        borderColor: "darkgray",
        borderOutline: "none",
        marginLeft: "5px",
        fontColor: "darkgray",
        justifyContent: "center"

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
