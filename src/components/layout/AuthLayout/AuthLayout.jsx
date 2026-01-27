import { Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';
import { Testimonial } from '@/features/auth/components';

const AuthLayout = () => {
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
