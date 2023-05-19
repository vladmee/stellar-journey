'use client';

import Image from 'next/image';
import { useStore } from '@/store/store';

import styles from './crew-item.module.scss';
import CrewNav from './CrewNav';

function CrewItem() {
  const crew = useStore((state) => state.crew);
  const current = useStore((state) => state.currentCrew);

  return (
    <div className={styles['crew-item']}>
      <div className={styles['crew-info-container']}>
        <h4>{crew[current].role}</h4>
        <div className={styles['name-wrapper']}>
          <h3>{crew[current].name}</h3>
        </div>
        <p>{crew[current].bio}</p>
        <CrewNav />
      </div>
      <div className={styles['crew-image-container']}>
        <Image
          src={crew[current].images.png}
          alt={crew[current].name}
          fill={true}
          style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
        />
      </div>
    </div>
  );
}

export default CrewItem;
