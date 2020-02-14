



export const getTopArticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`
    
    const result = await fetch(url)
    .then(data => data.json())
    .then(res => res.articles);

    return result;
}



export const getArticlesByQuery = async (query = "tech", language = "en") => {
    if(query === "") {query = "tech"} //probably will remove this in final product

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=${encodeURIComponent(language)}&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`
    //in the url, please do not include a "from" request parameter, because the api defaults to the oldest time we can access articles from (1 month). 
    const result = await fetch(url)
    .then( data => data.json())
    .then( res => res.articles);

    //fetches the data from the url
    //then, specifies that the data should be in JSON format
    //then, returns the array of articles :)

    return result;

}