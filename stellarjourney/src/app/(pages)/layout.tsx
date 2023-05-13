import { Inter } from 'next/font/google';

import '@/styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stellar Journey',
  description: 'Find your way through the stars!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
