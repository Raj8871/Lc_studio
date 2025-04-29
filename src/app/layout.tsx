
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Changed import name
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header'; // Import Header

const geistSans = Geist({ // Use the correct variable name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Use the correct variable name
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'React Component Converter',
  description: 'Convert HTML, CSS, and JS to React Components Instantly', // Improved description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header /> {/* Add Header component */}
        <main className="flex-grow">{children}</main> {/* Wrap children in main for semantic structure */}
        <Toaster />
      </body>
    </html>
  );
}
