import styles from './CommentForm.module.scss';
import { Textarea, Button } from '@/components/ui';
import { Link } from 'react-router';

const CommentForm = ({ onSubmit, isAuthenticated }) => {
  return isAuthenticated ? (
    <form className={styles.commentForm} onSubmit={onSubmit}>
      <Textarea
        placeholder="Share your thoughts"
        id="comment-textarea"
        label="Comment textarea"
        name="content"
        srOnly
      />
      <Button className={styles.sendBtn} type="submit">
        Send
      </Button>
    </form>
  ) : (
    <p className={styles.notiBox}>
      <Link to="/auth/login">Sign in</Link> to comment
    </p>
  );
};

export default CommentForm;
