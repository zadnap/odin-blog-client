import { PostHeader, PostImage, PostContent } from '@/features/post/components';
import { CommentList } from '@/features/comment/components';
import { Loading } from '@/components/ui';
import { usePostBySlug } from '@/features/post/hooks/usePostBySlug';
import { useComments } from '@/features/comment/hooks/useComments';
import { useParams } from 'react-router';
import styles from './PostPage.module.scss';
import { formatDate } from '@/utils/date';
import { calculateReadingTime } from '@/utils/readTime';
import { useState } from 'react';

const PostPage = () => {
  const [page, setPage] = useState(1);
  const { slug } = useParams();
  const { post, loading } = usePostBySlug(slug);
  const { comments, meta, cmtLoading } = useComments(post?.id, { page });

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
      {cmtLoading ? (
        <Loading message="Loading comments" />
      ) : (
        <CommentList
          page={page}
          setPage={setPage}
          meta={meta}
          comments={comments}
        />
      )}
    </article>
  );
};

export default PostPage;
