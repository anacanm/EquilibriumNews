import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Logo } from '../components/Logo';

export const TopBarContainer = (props ) => {
    let style = {
        width: "100%",
        height: "200px",
        backgroundColor: "#A9A9A9",
        position:"sticky",
        top:"0"

    }
    let title = "";
    if(props.query === "")
    {
        title = "Trending";
    }
    else
    {
        let burner = props.query;
        title = burner.charAt(0).toUpperCase() + burner.substring(1);
    }
    return(
        <div style = {style}>
            <Logo setQuery = {props.setQuery}/>
            <SearchBar setQuery = {props.setQuery}/>
            <h1 style = {{marginLeft: "42%", marginTop: "-120px", color: "white"}}>{title} News</h1>
            
        </div>
    );
}