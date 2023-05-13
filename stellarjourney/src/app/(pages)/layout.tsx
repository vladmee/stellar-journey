import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';

import '@/styles/main.scss';

export const bellefair = Bellefair({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bellefair',
});

export const barlow = Barlow({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
});

export const barlow_condensed = Barlow_Condensed({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow-condensed',
});

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
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlow_condensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
