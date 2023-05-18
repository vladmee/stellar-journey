import Navbar from '@/components/navbar/Navbar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['background-home']}>
      <Navbar />
      <div className={styles.home}>
        <h1>Home</h1>
        <h5>Some text to see how it looks</h5>
      </div>
    </main>
  );
}
