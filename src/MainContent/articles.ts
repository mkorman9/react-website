import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export interface Article {
  title: string;
  content: string;
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesLoaded, setArticlesLoaded] = useState<boolean>(false);

  useEffect(() => {
    getDocs(collection(db, 'articles'))
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data() as Article);
        setArticles(data);
      })
      .catch(e => console.error(e))
      .finally(() => setArticlesLoaded(true));
  }, []);

  return {
    articles,
    articlesLoaded
  };
};
