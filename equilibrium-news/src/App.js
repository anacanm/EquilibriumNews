import React, { useState } from 'react';
import { QueriedArticlesContainer } from './containers/QueriedArticlesContainer';
import { SearchBar } from './components/SearchBar';
import { TopArticlesContainer } from './containers/TopArticlesContainer';


export const App = () => {
    
    const [query, setQuery] = useState("");  
    //query is at an initial state of an empty string, rather than setting a default query here, I'm handling defaults in the service to avoid difficulties
    //there likely won't be any default user-queried display in the final product(since we will be using the home page), but just to let you know
    
    return(
        <div>
            <SearchBar setQuery={(setQuery)}/>
            <QueriedArticlesContainer query = {query}/> 
            <TopArticlesContainer/>
        </div>
    );

}







