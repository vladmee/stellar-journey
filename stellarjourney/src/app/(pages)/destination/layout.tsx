import StepTitle from '@/components/StepTitle';
import styles from './destination.module.scss';

export const metadata = {
  title: 'Destination — Stellar Journey',
  description: 'Find your way through the stars!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles['background-destination']}>
      <div className={styles.step}>
        <StepTitle stepNo="01" stepTitle="Pick your destination" />
        {children}
      </div>
    </main>
  );
}
