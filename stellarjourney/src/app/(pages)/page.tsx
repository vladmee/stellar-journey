import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['background-home']}>
      <Navbar />
      <div className={styles.home}>
        <div className={styles['home-info']}>
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <p>
            Let&rsquo;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&rsquo;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div className={styles['home-btn']}>
          <Link href={'/destination'}>Explore</Link>
        </div>
      </div>
    </main>
  );
}
