import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>© 2026 Hidden Progress. All rights reserved.</small>
      <ul
        className={styles.socialList}
        aria-label="Contact me on other platforms"
      >
        <li>
          <a
            href="https://github.com/zadnap"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
