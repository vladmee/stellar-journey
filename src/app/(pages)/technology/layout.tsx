import StepTitle from '@/components/StepTitle';
import styles from './technology.module.scss';
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'Technology — Stellar Journey',
  description: 'Find your way through the stars!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles['background-technology']}>
      <Navbar />
      <section className={styles['section-technology']}>
        <StepTitle stepNo="03" stepTitle="SPACE LAUNCH 101" />
        {children}
      </section>
    </main>
  );
}
