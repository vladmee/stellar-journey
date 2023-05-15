import DestinationItem from '@/components/destination/DestinationItem';
import styles from './destination.module.scss';

import StoreInitializer from '@/components/destination/StoreInitializer';
import { Destination } from '@/data/types';

import { useStore } from '@/store/store';

export default async function Destination() {
  const dataRes = await fetch('http://localhost:3000/api/destinations');
  const data = (await dataRes.json()) as Destination[];

  useStore.setState({ destinations: data });

  return (
    <div>
      <StoreInitializer destinations={data} />
      <DestinationItem />
    </div>
  );
}
