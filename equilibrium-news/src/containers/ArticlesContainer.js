import React, {useEffect, useState} from 'react';
import { getArticles } from '../services/newsAPI';
import { Article } from '../components/Article';


export const ArticlesContainer = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles(props.query).then(result => setArticles(result));
      }, [props.query]);

      

      return(
        <div>
          {articles.map( a => <Article a = {a} query = {props.query} key = {Math.random()}/>)}
        </div>
      );
}