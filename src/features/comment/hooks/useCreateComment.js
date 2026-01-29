import { useState } from 'react';
import { createCommentApi } from '../services/comment.api';

const useCreateComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createComment = async (postId, content) => {
    try {
      setLoading(true);
      setError(null);

      const res = await createCommentApi(postId, content);
      return res;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { createComment, loading, error };
};

export default useCreateComment;
