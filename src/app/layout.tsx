import type { Metadata } from 'next';
import 'minireset.css';

export const metadata: Metadata = {
  title: 'React Accordion Demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
