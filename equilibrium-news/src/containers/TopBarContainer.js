import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Logo } from '../components/Logo';

export const TopBarContainer = (props ) => {
    return(
        <div>
            <Logo setQuery = {props.setQuery}/>
            <SearchBar  setQuery = {props.setQuery}/>
        </div>
    );
}