import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loading.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = ({ message }) => {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon icon={faSpinner} />
      <p>{message}</p>
    </div>
  );
};

export default Loading;
