


export const getArticles = async (query) => {
    //const result = await axios.get(url).then( ({ data }) => data.articles)
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=2020-01-13&sortBy=publishedAt&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`
    
    const result = await fetch(url)
    .then( data => data.json())
    .then( res => res.articles);

    //fetches the data from the url
    //then, specifies that the data should be in JSON format
    //then, returns the array of articles :)

    return result;

}