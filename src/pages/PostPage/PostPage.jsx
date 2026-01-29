import { PostHeader, PostImage, PostContent } from '@/features/post/components';
import { Loading } from '@/components/ui';
import { usePostBySlug } from '@/features/post/hooks/usePostBySlug';
import { useParams } from 'react-router';
import styles from './PostPage.module.scss';
import { formatDate } from '@/utils/date';
import { calculateReadingTime } from '@/utils/readTime';

const PostPage = () => {
  const { slug } = useParams();
  const { post, loading, error } = usePostBySlug(slug);

  return loading ? (
    <Loading message="Loading post" />
  ) : (
    <article className={styles.postPage}>
      <PostHeader
        title={post.title}
        createdAt={formatDate(post.createdAt)}
        readTime={calculateReadingTime({
          description: post.description,
          sections: post.postSections,
        })}
      />
      <PostImage
        image={post.imageUrl}
        alt={`${post.title}'s image`}
        figcaption={post.title}
      />
      <PostContent
        description={post.description}
        sections={post.postSections}
      />
    </article>
  );
};

export default PostPage;
