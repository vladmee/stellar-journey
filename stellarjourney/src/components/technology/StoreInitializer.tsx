'use client';

import { useRef } from 'react';

import { useStore } from '@/store/store';

import { Technology } from '@/data/types';

function StoreInitializer({ technology }: { technology: Technology[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ technology });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
