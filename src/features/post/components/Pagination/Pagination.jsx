import styles from './Pagination.module.scss';
import { Button } from '@/components/ui';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <nav className={styles.pagination} aria-label="Post pagination">
      <div className={styles.page}>
        <span>
          {page} / {totalPages}
        </span>
      </div>
      <div className={styles.actions}>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </nav>
  );
};

export default Pagination;
