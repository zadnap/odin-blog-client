import styles from './Pagination.module.scss';
import { Button, Input } from '@/components/ui';

const Pagination = () => {
  return (
    <nav className={styles.pagination} aria-label="Post pagination">
      <div className={styles.page}>
        <Input
          type="number"
          label="Current page"
          id="page-input"
          srOnly
          className={styles.pageInput}
        />
        <span>/ 10</span>
      </div>
      <div className={styles.actions}>
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </nav>
  );
};

export default Pagination;
