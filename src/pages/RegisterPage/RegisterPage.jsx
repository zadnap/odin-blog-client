import { AuthForm } from '@/features/auth/components';
import { useRegister, useAuth } from '@/features/auth/hooks';
import { Loading } from '@/components/ui';
import { useState } from 'react';

const RegisterPage = () => {
  const { login } = useAuth();
  const { register, loading, error } = useRegister();
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));

    setUsername(values.username);

    const { data } = await register(values);
    login(data.user, data.token);
  };

  return loading ? (
    <Loading message="Signing up, please wait" />
  ) : (
    <AuthForm
      mode="register"
      onSubmit={handleSubmit}
      error={error}
      defaultValues={{ username }}
    />
  );
};
export default RegisterPage;
