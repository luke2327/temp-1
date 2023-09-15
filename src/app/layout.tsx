import { Providers } from './Providers';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'WHO',
  description: ' 응원단 WHO',
  openGraph: {
    title: 'WHO',
    description: '수원하이텍 고등학교 응원단 WHO',
    url: 'https://who-alpha.vercel.app/',
    siteName: 'WHO',

    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="w-screen">
        <Providers>
          <NavBar></NavBar>
          {children}
        </Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
