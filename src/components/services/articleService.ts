import axios from 'axios';
import type { Article } from '../types/article';

interface ArticlesHttpResponse {
  hits: Article[];
}
// const myKey = import.meta.env.VITE_API_KEY;
// import.meta.env – це спеціальний об’єкт, через який Vite дає доступ до змінних оточенн.

export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return response.data.hits;
};
