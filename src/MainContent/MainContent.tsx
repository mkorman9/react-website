import './MainContent.css';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

interface Article {
  title: string;
  content: string;
}

const MainContent = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getDocs(collection(db, 'articles'))
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data() as Article);
        setArticles(data);
      })
      .catch(e => console.error(e));
  }, []);

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
