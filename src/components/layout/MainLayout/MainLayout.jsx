import { Header, Footer, MainNav } from '@/components/ui';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <MainNav />
      <div className={styles.outLet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
