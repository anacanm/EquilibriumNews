import React, { useEffect, useState } from 'react';
import { getArticlesByQuery } from "../services/newsAPI";




export const QueriedArticlesContainer = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      getArticlesByQuery(props.query).then(result => setArticles(result));
    }, [props.query])  

    //useEffect activates when the data in the array at the end is updated, this allows for proper waiting for the async
    //if you put articles into the [] at the end, it will infinitely re-render. So please don't.
    //you need the ".then" because getArticlesByQuery is an async function. talk to Toal or Ian more about this if you're confused


    //below is the component that I set up just to be able to visualize some results. Change it around completely and make it look pretty
    return <div>
    <h1>Search results (default is currently tech news)</h1>
    <ul>
      {articles.map(a =><div key = {Math.random()}> 
        <li> "{a.title}" by {a.author} from { a.source.name}</li> <a href = {a.url} target = {Math.random()}>{a.url}</a>
        {/* <iframe src = {a.url} height = "200" width = "200"></iframe> */}
        </div>)}
    </ul>
    </div>
    
  }
  