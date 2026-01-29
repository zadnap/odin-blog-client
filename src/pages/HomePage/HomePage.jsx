import { HeroSection } from '@/features/home/components';
import { PostList, Pagination } from '@/features/post/components';
import { Loading } from '@/components/ui';
import { usePosts } from '@/features/post/hooks/usePosts';
import styles from './HomePage.module.scss';
import { useState } from 'react';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { posts, meta, loading } = usePosts({ page });

  return (
    <div className={styles.homePage}>
      <HeroSection />
      {loading ? (
        <Loading message="Loading posts" />
      ) : (
        <PostList title="Latest Posts" posts={posts} />
      )}
      {meta && (
        <Pagination
          page={meta.page}
          totalPages={meta.totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default HomePage;
