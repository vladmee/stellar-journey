import CrewContent from '@/components/crew/CrewContent';
import StoreInitializer from '@/components/crew/StoreInitializer';
import { CrewMember } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Destination() {
  const baseUrl = process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000';

  let data: CrewMember[] = [];
  try {
    const dataRes = await fetch(`${baseUrl}/api/crew`);
    data = (await dataRes.json()) as CrewMember[];
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return <div>Failed to load data</div>;
  }

  useStore.setState({ crew: data });

  return (
    <>
      <StoreInitializer crew={data} />
      <CrewContent />
    </>
  );
}
