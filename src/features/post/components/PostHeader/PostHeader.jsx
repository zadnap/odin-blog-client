import styles from './PostHeader.module.scss';

const PostHeader = ({ title, createdAt, readTime }) => {
  return (
    <header className={styles.postHeader}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.time}>
        <time dateTime={createdAt}>{createdAt}</time> · {readTime} read
      </p>
    </header>
  );
};

export default PostHeader;
