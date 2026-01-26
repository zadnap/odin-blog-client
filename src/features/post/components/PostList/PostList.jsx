import { Button, Input } from '@/components/ui';
import styles from './PostList.module.scss';

const PostList = () => {
  return (
    <section className={styles.postList} aria-labelledby="latest-posts">
      <h2 className={styles.title} id="latest-posts">
        Latest Posts
      </h2>
      <ul className={styles.postGrid}></ul>
      <nav className={styles.pagination} aria-label="Post pagination">
        <div className={styles.page}>
          <Input
            type="number"
            label="Current page"
            id="page-input"
            srOnly
            className={styles.pageInput}
          />
          <span>/ 10</span>
        </div>
        <div className={styles.actions}>
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </nav>
    </section>
  );
};

export default PostList;
