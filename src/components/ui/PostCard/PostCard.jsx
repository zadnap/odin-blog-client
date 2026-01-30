import { Link } from 'react-router';
import postFallback from '@/assets/images/post-fallback.jpg';
import styles from './PostCard.module.scss';

const PostCard = ({ imageUrl, title, description, slug }) => {
  return (
    <article className={styles.postCard}>
      <img
        className={styles.postImage}
        src={imageUrl ?? postFallback}
        alt={title ? `${title}'s image` : 'Post image'}
      />
      <h3 className={styles.postTitle}>{title}</h3>
      <p className={styles.postDescription}>{description}</p>
      <Link to={`/posts/slug/${slug}`} className={styles.postLink}>
        Learn More
      </Link>
    </article>
  );
};

export default PostCard;
