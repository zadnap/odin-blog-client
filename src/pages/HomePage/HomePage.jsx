import { HeroSection, SubscribeSection } from '@/features/home/components';
import { PostList } from '@/features/post/components';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <PostList />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
