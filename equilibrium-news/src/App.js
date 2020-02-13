import React, { useState } from 'react';
import { ArticlesContainer } from './containers/ArticlesContainer';
import { SearchBar } from './components/SearchBar';


export const App = () => {
    
    const [query, setQuery] = useState("tech");
    
    return(
        <div>
            <SearchBar setQuery={(setQuery)}/>
            <ArticlesContainer query = {query} /> 
        </div>
    );

}







