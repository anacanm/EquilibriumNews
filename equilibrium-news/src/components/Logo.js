import React from 'react';
import logo from '../styles/Otto.jpg'
//replace the Otto.jpg in the styles folder and in the line above with the logo once it's made

export const Logo = (props) =>{
    return (
        <img src = {logo} alt = "abc" onClick = {() => props.setQuery("")} width = "150" height = "200" style = {{cursor:"pointer"}}/>
    );
}