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

    return(
        <div>
        <form onSubmit = {handleSubmit}>
        <label htmlFor = "name">Search:</label>
            <input type = "text" onChange = {handleChange} value = {content}></input>
            <button id = "submit">Submit!</button>
        </form>
        </div>
        
    );



}