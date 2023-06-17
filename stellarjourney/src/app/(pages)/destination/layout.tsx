import StepTitle from '@/components/StepTitle';
import styles from './destination.module.scss';
import Navbar from '@/components/navbar/Navbar';

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
      <Navbar />
      <section>
        <StepTitle stepNo="01" stepTitle="Pick your destination" />
        {children}
      </section>
    </main>
  );
}
