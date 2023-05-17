'use client';

import Image from 'next/image';
import { useStore } from '@/store/store';

import styles from './destination-item.module.scss';
import DestinationNav from './DestinationNav';

function DestinationItem() {
  const destinations = useStore((state) => state.destinations);
  const current = useStore((state) => state.currentDestination);

  return (
    <div className={styles['dest-item']}>
      <div className={styles['dest-image-container']}>
        <div className={styles['image-wrapper']}>
          <Image
            src={destinations[current].images.png}
            alt={destinations[current].name}
            fill={true}
          />
        </div>
      </div>
      <div className={styles['dest-info-container']}>
        <DestinationNav />
        <h2>{destinations[current].name}</h2>
        <p>{destinations[current].description}</p>
        <hr />
        <div className={styles['details']}>
          <div className={styles['detail']}>
            <label>AVG. DISTANCE</label>
            <h6>{destinations[current].distance}</h6>
          </div>
          <div className={styles['detail']}>
            <label>Est. travel time</label>
            <h6>{destinations[current].travel}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationItem;
