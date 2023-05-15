import { Destination } from '@/data/types';
import { create } from 'zustand';

export const useStore = create<{
  destinations: Destination[];
  currentDestination: number;
}>((set) => ({
  destinations: [],
  currentDestination: 0,
}));
