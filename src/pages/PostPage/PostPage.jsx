import {
  PostList,
  PostHeader,
  PostImage,
  PostContent,
  PostNavigation,
} from '@/features/post/components';
import styles from './PostPage.module.scss';

const PostPage = () => {
  return (
    <article className={styles.postPage}>
      <div className={styles.currentPost}>
        <div className={styles.postDetail}>
          <PostHeader
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            createdAt="Jan 6, 2026"
            readTime="8 min"
          />
          <PostImage />
          <PostContent />
        </div>
        <PostNavigation />
      </div>
      <PostList title="Recommended Posts" />
    </article>
  );
};

export default PostPage;
