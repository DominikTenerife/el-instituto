import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css"; // Updated import path
import ClientProvider from '../components/ClientProvider';
import Navbar from '../components/Navbar';

import { ConfigProvider } from 'antd';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "El Instituto",
  description: "Help to understand and learn uploaded material in the foreign language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider>
          <ClientProvider>
            <div className="flex min-h-screen w-full ">
              <Navbar />
              <div className="flex-1">
                {children}
              </div>
             
            </div>
          </ClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
