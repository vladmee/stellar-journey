'use client';

import Image from 'next/image';
import { useStore } from '@/store/store';

import styles from './technology-content.module.scss';
import TechnologyNav from './TechnologyNav';

function TechnologyContent() {
  const technology = useStore((state) => state.technology);
  const current = useStore((state) => state.currentTechnology);

  return (
    <div className={styles['technology-content']}>
      <div className={styles['technology-image-container']}>
        <Image
          src={technology[current].images.portrait}
          alt={technology[current].name}
          fill={true}
          style={{ objectFit: 'contain' }}
          className={`${styles['image']} ${styles['desktop-image']}`}
        />
        <Image
          src={technology[current].images.landscape}
          alt={technology[current].name}
          fill={true}
          style={{ objectFit: 'contain', objectPosition: 'center top' }}
          className={`${styles['image']} ${styles['mobile-image']}`}
        />
      </div>
      <TechnologyNav />
      <div className={styles['technology-info-container']}>
        <h5>THE TERMINOLOGY…</h5>
        <h3>{technology[current].name}</h3>
        <p>{technology[current].description}</p>
      </div>
    </div>
  );
}

export default TechnologyContent;
