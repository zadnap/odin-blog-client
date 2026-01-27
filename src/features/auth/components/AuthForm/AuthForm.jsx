import { Link } from 'react-router';
import styles from './AuthForm.module.scss';
import { Input, Button } from '@/components/ui';

const AuthForm = ({ mode, onSubmit }) => {
  const isRegister = mode === 'register';

  return (
    <form className={styles.authForm} onSubmit={onSubmit} noValidate>
      <header>
        <h1>
          {isRegister ? 'Create an account' : 'Welcome back to Hidden Progress'}
        </h1>
        <p>
          {isRegister
            ? 'Begin your journey of steady, meaningful progress.'
            : 'Continue building with clarity and focus.'}
        </p>
      </header>
      <Input
        className={styles.input}
        label="Username"
        name="username"
        placeholder="Username"
        id="username"
        required
      />
      <Input
        className={styles.input}
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
        id="password"
        required
      />
      {isRegister && (
        <Input
          className={styles.input}
          type="password"
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm Password"
          id="confirmPassword"
          required
        />
      )}
      {isRegister ? (
        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      ) : (
        <p>
          No account yet? <Link to="/auth/register">Register</Link>
        </p>
      )}
      <Button className={styles.submitBtn} type="submit">
        {isRegister ? 'Sign up' : 'Log in'}
      </Button>
      <p className={styles.goHome}>
        Or continue without signing in <Link to="/">Go home</Link>
      </p>
    </form>
  );
};

export default AuthForm;
