import { CrewMember, Destination, Technology } from '@/data/types';
import { create } from 'zustand';

export const useStore = create<{
  destinations: Destination[];
  currentDestination: number;
  crew: CrewMember[];
  currentCrew: number;
  technology: Technology[];
  currentTechnology: number;
}>((set) => ({
  destinations: [],
  currentDestination: 0,
  crew: [],
  currentCrew: 0,
  technology: [],
  currentTechnology: 0,
}));
