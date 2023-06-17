import StepTitle from '@/components/StepTitle';
import styles from './crew.module.scss';
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'Crew — Stellar Journey',
  description: 'Find your way through the stars!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles['background-crew']}>
      <Navbar />
      <section className={styles['section-crew']}>
        <StepTitle stepNo="02" stepTitle="Meet your crew" />
        {children}
      </section>
    </main>
  );
}
