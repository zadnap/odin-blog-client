import styles from './Testimonial.module.scss';

const Testimonial = () => {
  return (
    <aside className={styles.testimonial}>
      <figure>
        <blockquote>“Quiet work leads to real progress.”</blockquote>
        <figcaption>
          <cite>
            <strong>Shiki</strong>
          </cite>
          <br />
          <span>Author of Hidden Progress</span>
        </figcaption>
      </figure>
    </aside>
  );
};

export default Testimonial;
