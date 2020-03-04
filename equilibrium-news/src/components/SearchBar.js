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
    const labelStyle = {
      postion: "fixed",
      fontSize: "15px",
      color: "black",
      marginRight: "4px"

    }
    const inputStyle = {
      postion: "fixed",
      borderColor:"grey",
      fontSize: "15px"

    }
    const buttonBarStyle = {
      postion: "fixed",
      fontSize: "15px",
      borderRadius: "2px",
      borderStyle: "outset",
      borderColor: "grey",
      marginLeft: "5px",
      fontSize: "15px",




    }

    return(
        <div >
        <form onSubmit = {handleSubmit}>
        <label htmlFor = "name" style = {labelStyle}>Search:</label>
            <input type = "text" onChange = {handleChange} value = {content} style = {inputStyle}></input>
            <button id = "submit" style = {buttonBarStyle}>Submit!</button>
        </form>
        </div>

    );



}
