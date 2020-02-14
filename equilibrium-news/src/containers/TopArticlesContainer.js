import React, {useEffect, useState} from 'react';
import { getTopArticles } from '../services/newsAPI';

export const TopArticlesContainer = () =>{
    const [articles, setArticles] = useState([]);

    useEffect(() =>{
       getTopArticles().then(result => setArticles(result));
    }, [])

    return(
    <div>
        <h1>Top Articles in the United States</h1>
        <ul>{articles.map( a => <div key = {Math.random()}> 
        <li> "{a.title}" by {a.author} from { a.source.name}</li> <a href = {a.url} target = {Math.random()}>{a.url}</a>
        </div>)}
        </ul>
    </div>
    );





}