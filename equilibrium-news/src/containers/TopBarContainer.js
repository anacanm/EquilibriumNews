import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Logo } from '../components/Logo';

export const TopBarContainer = (props) => {
    
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
        <div>
            <Logo setQuery = {props.setQuery}/>
            <SearchBar setQuery = {props.setQuery}/>
            <h1 style = {{color: "black"}}>{title} News</h1>
        </div>
    );




}