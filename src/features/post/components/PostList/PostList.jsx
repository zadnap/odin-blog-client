import styles from './PostList.module.scss';

const PostList = () => {
  return (
    <section className={styles.postList} aria-labelledby="latest-posts">
      <h2 className={styles.title} id="latest-posts">
        Latest Posts
      </h2>
      <ul className={styles.postGrid}></ul>
    </section>
  );
};

export default PostList;
