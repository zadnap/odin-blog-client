import { PostSection } from '@/features/post/components';
import styles from './PostContent.module.scss';

const PostContent = ({ description, sections = [] }) => {
  return (
    <section className={styles.postContent}>
      <p>{description}</p>
      <ul>
        {sections.map((sect) => (
          <li key={sect.id}>
            <PostSection {...sect} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostContent;
