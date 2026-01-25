import { Link } from 'react-router';
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
          Hidden Progress
        </Link>
        <p className={styles.motto}>Dream big, start small.</p>
      </section>
    </header>
  );
};

export default Header;
