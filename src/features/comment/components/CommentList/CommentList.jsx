import useAuth from '@/features/auth/hooks/useAuth';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';
import { Pagination } from '@/components/ui';
import { Link } from 'react-router';

const CommentList = ({ page, setPage, meta, comments = [] }) => {
  const { isAuthenticated } = useAuth();

  return (
    <section className={styles.commentList}>
      {meta?.total > 0 ? (
        <ul className={styles.list}>
          {comments.map((cmt) => (
            <li key={cmt.id}>
              <CommentItem {...cmt} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.notiBox}>No comment yet</p>
      )}
      {meta?.totalPages > 0 && (
        <Pagination
          ariaLabel="Comment pagination"
          page={page}
          totalPages={meta.totalPages}
          setPage={setPage}
        />
      )}
      {isAuthenticated ? (
        <CommentForm />
      ) : (
        <p className={styles.notiBox}>
          <Link to="/auth/login">Sign in</Link> to comment
        </p>
      )}
    </section>
  );
};

export default CommentList;
