'use client';

import { useRef } from 'react';

import { useStore } from '@/store/store';

import { Destination } from '@/data/types';

function StoreInitializer({ destinations }: { destinations: Destination[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ destinations });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
