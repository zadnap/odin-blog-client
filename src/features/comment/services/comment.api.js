const API_URL = import.meta.env.VITE_API_URL;

export const getComments = async (postId, { page = 1, limit = 8 } = {}) => {
  const token = localStorage.getItem('token');
  const res = await fetch(
    `${API_URL}/posts/${postId}/comments?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};
