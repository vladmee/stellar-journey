'use client';

import { useStore } from '@/store/store';

import styles from './crew-nav.module.scss';

function CrewNav() {
  const crew = useStore((state) => state.crew);
  const current = useStore((state) => state.currentCrew);

  return (
    <nav className={styles['crew-nav']}>
      <ul role="list">
        {crew.map((member, index) => {
          return (
            <li
              className={index === current ? styles['active'] : ''}
              key={index}
              onClick={() => {
                useStore.setState({ currentCrew: index });
              }}
            ></li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CrewNav;
