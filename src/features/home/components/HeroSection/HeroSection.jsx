import styles from './HeroSection.module.scss';
import logo from '@/assets/images/logo.png';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img className={styles.logo} src={logo} alt="Hidden Progress's logo" />
      <h1 className={styles.title}>Welcome to Hidden Progress</h1>
      <p className={styles.description}>
        My name is <strong>Shiki</strong>. This blog is a small space where I
        capture my journey of learning, building, and growing one step at a
        time. I believe real progress often happens quietly — through daily
        practice, small experiments, and consistent effort.{' '}
        <strong>Hidden Progress</strong> is where those moments are written
        down.
      </p>
    </section>
  );
};

export default HeroSection;
