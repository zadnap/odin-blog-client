import styles from './CommentForm.module.scss';
import { Textarea, Button } from '@/components/ui';

const CommentForm = () => {
  return (
    <form className={styles.commentForm}>
      <Textarea
        placeholder="Share your thoughts"
        id="comment-textarea"
        label="Comment textarea"
        name="comment"
        srOnly
      />
      <Button className={styles.sendBtn}>Send</Button>
    </form>
  );
};

export default CommentForm;
