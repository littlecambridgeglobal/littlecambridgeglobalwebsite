import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import Navbar from './navbar/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import logo from '../public/logo.png';
import logonew from "../public/newlogo.jpeg";
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

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Little Cambridge Global | Little Steps to Global Success',
  description: 'Preschool and Daycare',
  keywords: [
    'Little Cambridge Global', 'early learning', 'preschool', 'montessori', 'learning pathways',
    'curious minds', 'daycare', 'kindergarten', 'nursery', 'playgroup', 'child development',
    'modern early education', 'preschool franchise', 'delhi preschool', 'bangalore preschool'
  ],
  openGraph: {
    title: 'Little Cambridge Global | Little Steps to Global Success',
    description: 'Preschool and Daycare',
    url: 'https://www.littlecambridgeglobal.com',
    siteName: 'Little Cambridge Global',
    images: [
      {
        url: "/newlogo.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
