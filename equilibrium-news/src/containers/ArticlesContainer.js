import React, {useEffect, useState} from 'react';
import { getArticles } from '../services/newsAPI';
import { Article } from '../components/Article';
import Iframe from 'react-iframe'

export const ArticlesContainer = (props) => {
    const [articles, setArticles] = useState([]);
    function getDuplicate(articles){
      var duplicateArray = [];

      for(var i = 0; i < articles.length; i++){
          if(duplicateArray.indexOf(articles[i]) === -1){
              duplicateArray.push(articles[i]);
          }
      }
  }
    getDuplicate(articles);

    useEffect(() => {
        getArticles(props.query).then(result => setArticles(result));
      }, [props.query]);

      return(
        <div>
          {articles.map( a => <Article a = {a} key = {Math.random()}/>)}
        </div>
      );
}
