import styles from './AuthForm.module.scss';

const AuthForm = ({ mode }) => {
  return (
    <form className={styles.authForm} action="">
      {mode}
    </form>
  );
};

export default AuthForm;
