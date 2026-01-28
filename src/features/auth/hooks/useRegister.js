import { useState } from 'react';
import { registerApi } from '../services/auth.api';

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const res = await registerApi(data);
      return res;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
