import { formatDate } from '@/utils/date';
import styles from './CommentItem.module.scss';

const CommentItem = ({ content, createdAt, author }) => {
  return (
    <section className={styles.commentItem}>
      <header className={styles.header}>
        <span className={styles.author}>@{author?.username}</span>
        <time className={styles.time} dateTime={createdAt}>
          {formatDate(createdAt)}
        </time>
      </header>
      <p className={styles.content}>{content}</p>
    </section>
  );
};

export default CommentItem;
