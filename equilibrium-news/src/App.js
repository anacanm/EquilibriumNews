import React, { useState } from 'react';
import { TopBarContainer } from './containers/TopBarContainer';
import { KeywordBubbleContainer } from './containers/KeywordBubbleContainer';
import { ArticlesContainer } from './containers/ArticlesContainer';
import { AboutUs } from './components/AboutUs';

import { BrowserRouter as Router, Route } from 'react-router-dom'

export const App = () => {

    const [query, setQuery] = useState("");

    //to make more KeywordBubbles just add the keyword you want to this array :)
    const keywords = ["politics", "feminism", "technology", "business", "health"];

    //Sumaiyah, you'll be working with styling the TopBarContainer and the components within them:  SearchBar and Logo(which acts as a home button to return to trending articles)
    //Jason, you'll be working with styling the KeywordBubbleContainer and the KeywordBubble component
    //Lexi, you'll be working with styling the ArticlesContainer and the Article component
    //any styling you choose not to do in the react file (which you can, it's pretty dope), put into the styles folder please

    return (
        <div>
            <Router>
                <Route exact={true} path="/" render={() =>
                    <div>
                        <TopBarContainer setQuery={setQuery} query={query} />
                        <KeywordBubbleContainer setQuery={setQuery} keywords={keywords} />
                        <ArticlesContainer query={query} />
                    </div>
                } />

                <Route path="/about" render={() => <AboutUs />} />


            </Router>
        </div>
    );

}







