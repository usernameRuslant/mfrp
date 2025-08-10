import type { Article } from './types/article';

interface ArticleListProps {
  items: Article[];
}

const ArticleList = ({ items }: ArticleListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noreferrer noopener">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
