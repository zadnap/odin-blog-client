import { Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
