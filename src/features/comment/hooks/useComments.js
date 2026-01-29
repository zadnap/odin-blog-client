import { useEffect, useState } from 'react';
import { getComments } from '../services/comment.api';

export const useComments = (postId, { page = 1, limit = 8 } = {}) => {
  const [comments, setComments] = useState([]);
  const [meta, setMeta] = useState(null);
  const [cmtLoading, setCmtLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    let cancelled = false;

    const loadComments = async () => {
      try {
        setCmtLoading(true);
        setError(null);

        const { data, meta } = await getComments(postId, { page, limit });

        if (!cancelled) {
          setComments(data);
          setMeta(meta);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setCmtLoading(false);
      }
    };

    loadComments();

    return () => {
      cancelled = true;
    };
  }, [postId, page, limit]);

  return { comments, meta, cmtLoading, error };
};
