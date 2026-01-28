import { AuthForm } from '@/features/auth/components';
import { useLogin, useAuth } from '@/features/auth/hooks';
import { Loading } from '@/components/ui';

const LoginPage = () => {
  const { login } = useAuth();
  const { loginRequest, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));

    const { data } = await loginRequest(values);
    login(data.user, data.token);
  };

  return loading ? (
    <Loading message="Signing in, please wait" />
  ) : (
    <AuthForm mode="login" onSubmit={handleSubmit} error={error} />
  );
};

export default LoginPage;
