const API_URL = import.meta.env.VITE_API_URL;

export const getPostsApi = async ({ page = 1, limit = 8 } = {}) => {
  const res = await fetch(`${API_URL}/posts?page=${page}&limit=${limit}`);

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};

export const getPostBySlugApi = async (slug) => {
  const res = await fetch(`${API_URL}/posts/slug/${slug}`);

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
};
