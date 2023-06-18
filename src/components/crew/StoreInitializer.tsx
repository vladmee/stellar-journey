'use client';

import { useRef } from 'react';

import { useStore } from '@/store/store';

import { CrewMember } from '@/data/types';

function StoreInitializer({ crew }: { crew: CrewMember[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ crew });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
