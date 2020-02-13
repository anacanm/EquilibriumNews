import React, { useEffect, useState } from 'react';
import { getArticles } from "../services/newsAPI";




export const ArticlesContainer = (props) => {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
      getArticles(props.query).then(result => setArticles(result));
    }, [props.query])  

    //useEffect activates when the data in the array at the end is updated, this allows for proper waiting for the async
    //if you put articles into the [] at the end, it will infinitely re-render. So please don't

    return <div>
    <ul>
      {articles.map(a =><div key = {Math.random()}> 
        <li> "{a.title}" by {a.author} from { a.source.name}</li> <a href = {a.url} target = {Math.random()}>{a.url}</a>
        </div>)}
    </ul>
    </div>
    
  }
  