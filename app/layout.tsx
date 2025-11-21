import './globals.scss';
import React, { ReactNode } from 'react';
import StoreProvider from 'components/providers/StoreProvider';
import Link from 'next/link';
import styles from '@styles/layout.module.scss';

export const metadata = {
  title: 'Next 15 Atomic Scaffold',
  description: 'Atomic design + Redux Toolkit + App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <nav className={styles.navBar}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
