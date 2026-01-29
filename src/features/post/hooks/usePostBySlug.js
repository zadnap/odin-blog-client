import { useEffect, useState } from 'react';
import { getPostBySlugApi } from '../services/post.api';

export const usePostBySlug = (slug) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await getPostBySlugApi(slug);
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  return { post, loading, error };
};
