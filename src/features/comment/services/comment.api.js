const API_URL = import.meta.env.VITE_API_URL;

export const getComments = async (postId, { page = 1, limit = 8 } = {}) => {
  const res = await fetch(
    `${API_URL}/posts/${postId}/comments?page=${page}&limit=${limit}`
  );

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};

export const createCommentApi = async (postId, content) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};
