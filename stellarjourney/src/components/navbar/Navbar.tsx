'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import logo from '@/images/logo.svg';
import iconHamburger from '@/images/icon-hamburger.svg';
import iconClose from '@/images/icon-close.svg';

import styles from './navbar.module.scss';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'Destination', href: '/destination' },
  { text: 'Crew', href: '/crew' },
  { text: 'Technology', href: '/technology' },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const pathname = usePathname();

  return (
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <div className={styles['nav-logo']}>
          <Link href={'/'}>
            <Image
              alt="Stellar Journey logo"
              src={logo}
              width={48}
              height={48}
            />
          </Link>
          <div className={styles['nav-divider']}></div>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles['nav-menu-bar']}
        >
          {navActive ? (
            <Image alt="Close menu" src={iconClose} width={21} height={21} />
          ) : (
            <Image alt="Open menu" src={iconHamburger} width={24} height={21} />
          )}
        </div>
        <div
          className={`${navActive ? styles['active'] : ''} ${
            styles['nav-menu-list']
          }`}
        >
          {MENU_LIST.map((menu, index) => (
            <Link
              href={menu.href}
              onClick={() => {
                setNavActive(false);
              }}
              className={`${pathname === menu.href ? styles['active'] : ''} ${
                styles['nav-link']
              }`}
              key={menu.text}
            >
              <span className={styles['index']}>{`0${index}`}</span> {menu.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
