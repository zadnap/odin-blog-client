import { Outlet, Navigate } from 'react-router';
import styles from './AuthLayout.module.scss';
import { Testimonial } from '@/features/auth/components';
import { useAuth } from '@/features/auth/hooks';

const AuthLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.authLayout}>
      <Testimonial />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
