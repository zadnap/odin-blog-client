import styles from './PostImage.module.scss';
import fallback from '@/assets/images/post-fallback.jpg';

const PostImage = ({ image, alt, figcaption }) => {
  return (
    <figure className={styles.postImage}>
      <img src={image || fallback} alt={alt} />
      <figcaption>{figcaption}</figcaption>
    </figure>
  );
};

export default PostImage;
