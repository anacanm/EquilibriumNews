import React, { useEffect, useState } from 'react';
import { getArticles } from "../services/newsAPI";
import { Article } from "../components/Article";

export const ArticlesContainer = () => {

    const [articles, setArticles] = useState([]);

  
    useEffect(() => {
      getArticles().then(result => setArticles(result));
    }, [])  
    //useEffect activates when the empty array is changed(to where it is no longer empty) this allows for proper waiting for the async
    //if you put articles into the [] at the end, it will infinitely re-render. So please don't

    return <div>
    <ul>{articles.map(a => <li key = {Math.random()}>Title = {a.title}  source = { a.source.name}</li>)}
    </ul>
    </div>
    
  }
  