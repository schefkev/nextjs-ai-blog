import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built wiht Next.js 13 that uses AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
