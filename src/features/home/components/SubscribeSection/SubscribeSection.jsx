import { Input, Button } from '@/components/ui';
import styles from './SubscribeSection.module.scss';

const SubscribeSection = () => {
  return (
    <section className={styles.subscribeSection}>
      <h2>Stay with Hidden Progress</h2>
      <p>
        I share lessons from learning, building, and life. No spam — just quiet
        progress.
      </p>
      <form className={styles.form} noValidate>
        <Input
          id="email"
          type="email"
          label="Email address"
          placeholder="Your email address"
          srOnly
        />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
};

export default SubscribeSection;
