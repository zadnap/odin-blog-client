import { Link } from 'react-router';
import logo from '@/assets/images/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.siteBranding}>
        <Link
          to="/"
          className={styles.logo}
          aria-label="Hidden Progress homepage"
        >
          <img
            className={styles.logoImage}
            src={logo}
            alt="Hidden Progress logo"
          />
          <span className={styles.logoText}>Hidden Progress</span>
        </Link>
        <p className={styles.motto}>Dream big, start small.</p>
      </section>
      <section className={styles.mainNav}>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <ul className={styles.menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/posts/contact">Contact</Link>
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
    </header>
  );
};

export default Header;
