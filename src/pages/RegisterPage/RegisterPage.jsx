import { AuthForm } from '@/features/auth/components';
import { useRegister } from '@/features/auth/hooks';
import { Loading } from '@/components/ui';
import { useState } from 'react';

const RegisterPage = () => {
  const { register, loading, error } = useRegister();
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));

    setUsername(values.username);

    await register(values);
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
