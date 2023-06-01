'use client';

import { useStore } from '@/store/store';

import styles from './technology-nav.module.scss';

function TechnologyNav() {
  const technology = useStore((state) => state.technology);
  const current = useStore((state) => state.currentTechnology);

  return (
    <nav className={styles['technology-nav']}>
      <ul>
        {technology.map((tech, index) => {
          return (
            <li
              className={index === current ? styles['active'] : ''}
              key={index}
              onClick={() => {
                useStore.setState({ currentTechnology: index });
              }}
            >
              {index + 1}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TechnologyNav;
