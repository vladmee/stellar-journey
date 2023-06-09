import DestinationContent from '@/components/destination/DestinationContent';

import StoreInitializer from '@/components/destination/StoreInitializer';
import { Destination } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Destination() {
  const baseUrl = process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000';

  let data: Destination[] = [];
  try {
    const dataRes = await fetch(`${baseUrl}/api/destinations`);
    data = (await dataRes.json()) as Destination[];
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return <div>Failed to load data</div>;
  }

  useStore.setState({ destinations: data });

  return (
    <div>
      <StoreInitializer destinations={data} />
      <DestinationContent />
    </div>
  );
}
