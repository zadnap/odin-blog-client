import { PostHeader, PostImage, PostContent } from '@/features/post/components';
import { CommentList, CommentForm } from '@/features/comment/components';
import { Loading } from '@/components/ui';
import { usePostBySlug } from '@/features/post/hooks/usePostBySlug';
import { useComments } from '@/features/comment/hooks/useComments';
import { useParams } from 'react-router';
import styles from './PostPage.module.scss';
import { formatDate } from '@/utils/date';
import { calculateReadingTime } from '@/utils/readTime';
import { useState } from 'react';
import useAuth from '@/features/auth/hooks/useAuth';
import useCreateComment from '@/features/comment/hooks/useCreateComment';

const PostPage = () => {
  const { isAuthenticated } = useAuth();
  const [page, setPage] = useState(1);
  const { slug } = useParams();
  const { post, loading } = usePostBySlug(slug);
  const { comments, meta, cmtLoading, refetch } = useComments(post?.id, {
    page,
  });
  const { createComment } = useCreateComment();

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('content');

    if (!content?.trim()) {
      return;
    }

    await createComment(post?.id, content);
    form.reset();

    setPage(1);
    await refetch();
  };

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
          postId={post?.id}
          page={page}
          setPage={setPage}
          meta={meta}
          comments={comments}
        />
      )}
      <CommentForm
        onSubmit={handleSubmitComment}
        isAuthenticated={isAuthenticated}
      />
    </article>
  );
};

export default PostPage;
