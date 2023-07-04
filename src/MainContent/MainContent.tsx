import './MainContent.css';
import { useArticles } from '../hooks/articles';

const MainContent = () => {
  const { articles } = useArticles();

  return (
    <article className="content-container">
      {articles.map((article, i) => (
        <div key={i} className="content-article">
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ))}
    </article>
  );
};

export default MainContent;
