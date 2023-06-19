import CrewContent from '@/components/crew/CrewContent';
import StoreInitializer from '@/components/crew/StoreInitializer';
import { CrewMember } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Destination() {
  const baseUrl = process.env.NEXT_PUBLIC_HOSTNAME;

  let data: CrewMember[] = [];
  try {
    const dataRes = await fetch(`${baseUrl}/api/crew`);
    data = (await dataRes.json()) as CrewMember[];
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  useStore.setState({ crew: data });

  return (
    <>
      <StoreInitializer crew={data} />
      <CrewContent />
    </>
  );
}
