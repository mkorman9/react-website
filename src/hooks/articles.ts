import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export interface Article {
  title: string;
  content: string;
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesLoadingError, setArticlesLoadingError] = useState<unknown>(null);
  const [articlesLoaded, setArticlesLoaded] = useState<boolean>(false);

  const refreshArticles = () => {
    setArticles([]);
    setArticlesLoaded(false);
    setArticlesLoadingError(null);

    getDocs(collection(db, 'articles'))
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data() as Article);
        setArticles(data);
      })
      .catch(e => {
        console.error(`Articles loading error: ${e}`);
        setArticlesLoadingError(e);
      })
      .finally(() => setArticlesLoaded(true));
  };

  useEffect(() => refreshArticles(), []);

  return {
    articles,
    articlesLoadingError,
    articlesLoaded,
    refreshArticles
  };
};
