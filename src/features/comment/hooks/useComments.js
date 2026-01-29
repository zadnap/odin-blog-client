import { useEffect, useState, useCallback } from 'react';
import { getComments } from '../services/comment.api';

export const useComments = (postId, { page = 1, limit = 8 } = {}) => {
  const [comments, setComments] = useState([]);
  const [meta, setMeta] = useState(null);
  const [cmtLoading, setCmtLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadComments = useCallback(async () => {
    if (!postId) return;

    try {
      setCmtLoading(true);
      setError(null);

      const { data, meta } = await getComments(postId, { page, limit });
      setComments(data);
      setMeta(meta);
    } catch (err) {
      setError(err);
    } finally {
      setCmtLoading(false);
    }
  }, [postId, page, limit]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return {
    comments,
    meta,
    cmtLoading,
    error,
    refetch: loadComments,
  };
};
