import React from 'react';
import { Logo } from './Logo'

import { Link } from 'react-router-dom'

export const AboutUs = () => {
    const aboutStyle = {
        fontFamily: "Bree Serif",
        fontWeight: "10",
        textAlign: "center",
        padding: "2% 10% 10% 10%" 
    }
    return (
        <div style={aboutStyle}>
            <Link to = "/">
            <Logo setQuery = {() => {}}/>
            </Link>
            <link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet"></link>
            <h1 style={{ marginBottom: "40px" }}>About Us</h1>

            <p style = {{fontSize: "40px"}}>The mission of Equilibrium News is to create a balanced news platform where users
                are exposed to various news sources on the topic of their choice. Our team knows
                that in these politically turbulent times that it can be easy to become biased
                to one side of the news. Equilibrium News hopes to serve those who want to change that.
                To make an informed decision, it is important to have knowledge of both sides.
          </p>
        </div>
    );
}

