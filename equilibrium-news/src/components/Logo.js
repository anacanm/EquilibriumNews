import React from 'react';
import logo from '../styles/EQlogo.png'
import "../styles/Logo.css";


export const Logo = (props) =>{
    return (
        <img src = {logo} alt = "abc" onClick = {() => props.setQuery("")} width = "687" height = "200"/>
    );
}