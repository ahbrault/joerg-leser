import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const baskerville = localFont({
  src: [
    {
      path: './fonts/Baskerville.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Baskerville-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Baskerville-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
  ],
  variable: '--font-baskerville',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joerg Leser - Redefining Luxury Hospitality Experiences',
  description:
    'We develop comprehensive brand and marketing strategies for hospitality businesses, leveraging our extensive network to connect you with key partners and stakeholders, creating a distinctive identity, engaging the right audience, and delivering memorable guest experiences that drive loyalty, growth, and long-term profitability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baskerville.variable} antialiased`}>{children}</body>
    </html>
  );
}
