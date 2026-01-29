import CommentItem from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';
import { Pagination } from '@/components/ui';

const CommentList = ({ page, setPage, meta, comments = [] }) => {
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
    </section>
  );
};

export default CommentList;
