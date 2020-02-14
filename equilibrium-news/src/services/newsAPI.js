
export const getArticles = async (query, language = "en") => {
    let url = ``;
    //if performing a search
    if(query !== ''){url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=${encodeURIComponent(language)}&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`;}
    
    //otherwise, get the popular articles
    else{url = `https://newsapi.org/v2/top-headlines?country=us&language=${encodeURIComponent(language)}&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`;}

    const result = await fetch(url)
    .then(data => data.json())
    .then(res => res.articles);

    //fetches the data from the url
    //then, specifies that the data should be in JSON format
    //then, returns the array of articles :)

    return result;
}