import TechnologyContent from '@/components/technology/TechnologyContent';
import StoreInitializer from '@/components/technology/StoreInitializer';
import { Technology } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Technology() {
  const baseUrl = process.env.NEXT_PUBLIC_HOSTNAME;

  let data: Technology[] = [];
  try {
    const dataRes = await fetch(`${baseUrl}/api/technology`);
    data = (await dataRes.json()) as Technology[];
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  useStore.setState({ technology: data });

  return (
    <>
      <StoreInitializer technology={data} />
      <TechnologyContent />
    </>
  );
}
