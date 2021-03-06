import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Logo } from '../components/Logo';
import './../styles/aboutButton.css'

import { Link } from 'react-router-dom'

export const TopBarContainer = (props) => {

    let title = "";
    if (props.query === "") {
        title = "Trending";
    }
    else {
        let burner = props.query;
        title = burner.charAt(0).toUpperCase() + burner.substring(1);
    }

    return (
        <div>
            <Logo setQuery={props.setQuery} />
            <SearchBar setQuery={props.setQuery} />
            <h1 style={{ color: "black",textAlign: "center", marginBottom: "5px" }}>{title} News</h1>
            <Link to="/about">
                <button id = "about" >About Us</button>
            </Link>
        </div>
    );




}