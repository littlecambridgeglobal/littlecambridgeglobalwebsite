import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import Navbar from './navbar/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});



export const metadata: Metadata = {
  metadataBase: new URL('https://littlecambridgeglobal.com'),
  title: 'Little Cambridge Global | Little Steps to Global Success',
  description:
    'A modern space where early learning feels like an adventure. Watch them discover their world with milestone-driven learning pathways, vibrant campuses, and joyful guidance.',
  keywords: [
    'Little Cambridge Global',
    'early learning',
    'preschool',
    'montessori',
    'learning pathways',
    'curious minds',
    'daycare',
    'kindergarten',
    'nursery',
    'playgroup',
    'child development',
    'modern early education',
    'preschool franchise',
    'delhi preschool',
    'bangalore preschool',
  ],
  icons: {
    icon: [
      { url: '/newlogo.jpeg' },
      { url: '/favicon.ico' },
    ],
    apple: '/newlogo.jpeg',
    shortcut: '/newlogo.jpeg',
  },
  openGraph: {
    title: 'Little Cambridge Global | Little Steps to Global Success',
    description:
      'A modern space where early learning feels like an adventure. Watch them discover their world with milestone-driven learning pathways, vibrant campuses, and joyful guidance.',
    url: 'https://littlecambridgeglobal.com',
    siteName: 'Little Cambridge Global',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/newlogo.jpeg',
        width: 1196,
        height: 896,
        alt: 'Little Cambridge Global Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Cambridge Global | Little Steps to Global Success',
    description:
      'A modern space where early learning feels like an adventure. Watch them discover their world with milestone-driven learning pathways, vibrant campuses, and joyful guidance.',
    images: ['/newlogo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      </head>
      <body className="font-jakarta antialiased bg-[#FAF8F5] text-slate-800 selection:bg-rose-100 selection:text-rose-900">
        <Navbar />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen'>
            <Analytics />
            <SpeedInsights />
            {children}
          </main>
        </ThemeProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
} 
