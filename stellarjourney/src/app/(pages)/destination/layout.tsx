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
  return <div className={styles.destination}>{children}</div>;
}
