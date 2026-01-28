import { PostCard } from '@/components/ui';
import styles from './PostList.module.scss';

const PostList = ({ title, posts = [] }) => {
  return (
    <section className={styles.postList} aria-labelledby="latest-posts">
      <h2 className={styles.title} id="latest-posts">
        {title}
      </h2>
      <ul className={styles.postGrid}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostList;
