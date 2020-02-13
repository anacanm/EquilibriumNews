import axios from 'axios';
export const baseUrl = `https://newsapi.org/v2/`;
export const everythingStoriesUrl = `${baseUrl}/everything?q=bitcoin&from=2020-01-12&sortBy=publishedAt&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`;
export const storyUrl = `${baseUrl}`;

const query = "bitcoin"

export const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=2020-01-12&sortBy=publishedAt&apiKey=b33dbee3e1ba4628aad5dd2f485a83b6`

export const getArticles = async () => {
    const result = await axios.get(url).then( ({ data }) => data.articles)

    return result;

}