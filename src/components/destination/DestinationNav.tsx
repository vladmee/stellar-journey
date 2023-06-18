'use client';

import { useStore } from '@/store/store';

import styles from './destination-nav.module.scss';

function DestinationNav() {
  const destinations = useStore((state) => state.destinations);
  const current = useStore((state) => state.currentDestination);

  return (
    <nav className={styles['destination-nav']}>
      <ul role="list">
        {destinations.map((dest, index) => {
          return (
            <li
              className={index === current ? styles['active'] : ''}
              key={index}
              onClick={() => {
                useStore.setState({ currentDestination: index });
              }}
            >
              {dest.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DestinationNav;
