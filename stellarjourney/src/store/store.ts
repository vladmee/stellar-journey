import { CrewMember, Destination } from '@/data/types';
import { create } from 'zustand';

export const useStore = create<{
  destinations: Destination[];
  currentDestination: number;
  crew: CrewMember[];
  currentCrew: number;
}>((set) => ({
  destinations: [],
  currentDestination: 0,
  crew: [],
  currentCrew: 0,
}));
