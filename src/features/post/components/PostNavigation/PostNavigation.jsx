import styles from './PostNavigation.module.scss';

const PostNavigation = () => {
  return (
    <aside className={styles.postNavigation}>
      <h3 className={styles.title}>Sections</h3>
      <nav>
        <ul>
          <li>
            <a className={styles.active} href="#">
              Organize your contact
            </a>
          </li>
          <li>
            <a href="#">Organize your contact</a>
          </li>
          <li>
            <a href="#">Organize your contact</a>
          </li>
          <li>
            <a href="#">Organize your contact</a>
          </li>
          <li>
            <a href="#">Organize your contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default PostNavigation;
