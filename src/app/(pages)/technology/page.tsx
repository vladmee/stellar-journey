import TechnologyContent from '@/components/technology/TechnologyContent';
import StoreInitializer from '@/components/technology/StoreInitializer';
import { Technology } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Technology() {
  const dataRes = await fetch('http://localhost:3000/api/technology');
  const data = (await dataRes.json()) as Technology[];

  useStore.setState({ technology: data });

  return (
    <>
      <StoreInitializer technology={data} />
      <TechnologyContent />
    </>
  );
}
