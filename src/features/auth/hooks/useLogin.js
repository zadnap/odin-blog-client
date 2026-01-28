import { useState } from 'react';
import { loginApi } from '../services/auth.api';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginRequest = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginApi(data);
      return res;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loginRequest, loading, error };
};

export default useLogin;
