import { ReactNode } from 'react';
import { getDictionary, Locale } from './dictionaries';
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

const baskerville = localFont({
  src: [
    {
      path: '../fonts/Baskerville.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Baskerville-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/Baskerville-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
  ],
  variable: '--font-baskerville',
  display: 'swap',
});

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang}>
      <body className={`${baskerville.variable} antialiased`}>
        <Header dict={dict.header} currentLang={lang as Locale} />
        {children}
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
