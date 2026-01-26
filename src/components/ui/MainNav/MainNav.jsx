import { Link } from 'react-router';
import styles from './MainNav.module.scss';

const MainNav = () => {
  return (
    <section className={styles.mainNav}>
      <nav className={styles.navigation} aria-label="Primary navigation">
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts/slug/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/posts/slug/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ul className={styles.actions}>
        <li>
          <Link to="/auth/login" className={styles.loginBtn}>
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/auth/register" className={styles.registerBtn}>
            Sign Up
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MainNav;
