import React, { useState } from 'react';
import { TopBarContainer } from './containers/TopBarContainer';
import { KeywordBubbleContainer } from './containers/KeywordBubbleContainer';
import { ArticlesContainer } from './containers/ArticlesContainer';
import { AboutUs } from './components/AboutUs';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export const App = () => {

    const [query, setQuery] = useState("");

    //to make more KeywordBubbles just add the keyword you want to this array :)
    const keywords = ["politics", "feminism", "technology", "business", "health"];


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







