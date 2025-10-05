import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: "Aadit's Website",
  description: 'Personal portfolio of Aadit Gupta',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/a-svgrepo-com.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
