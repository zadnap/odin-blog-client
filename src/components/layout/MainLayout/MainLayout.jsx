import { Header, Footer } from '@/components/ui';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
