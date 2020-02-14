import React, { useState } from 'react';
import { QueriedArticlesContainer } from './containers/QueriedArticlesContainer';
import { SearchBar } from './components/SearchBar';
import { TopArticlesContainer } from './containers/TopArticlesContainer';
import { RecommendedBubbleContainer } from './containers/RecommendedBubbleContainer';


export const App = () => {
    
    const [query, setQuery] = useState("");  

    /**
    * query is at an initial state of an empty string, rather than setting a default query here, I'm handling defaults in the service to avoid difficulties
    * there likely won't be any default user-queried display in the final product(since we will be using the home page), but just to let you know -anacan
    */
    
    const keywords = ["politics", "feminism", "technology", "business", "health"];



    return(
        <div>
            <SearchBar setQuery={(setQuery)}/>
            <RecommendedBubbleContainer setQuery = {(setQuery)} keywords = {keywords}/>
            <QueriedArticlesContainer query = {query}/>
            <TopArticlesContainer/>
        </div>
    );

}







