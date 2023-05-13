import Navbar from '@/pages/Navbar/Navbar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['background-home']}>
      <Navbar />
      <div className={styles.home}>Home</div>
    </main>
  );
}
