import { useEffect, useState } from 'react';
import { getPostsApi } from '../services/post.api';

export const usePosts = ({ page = 1, limit = 8 } = {}) => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, meta } = await getPostsApi({ page, limit });
        setPosts(data);
        setMeta(meta);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page, limit]);

  return { posts, meta, loading, error };
};
