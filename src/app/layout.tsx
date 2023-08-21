import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Merriweather, Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import AppProvider from '@/providers'


const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-merriweather"
})
const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-poppins"
})
export const metadata: Metadata = {
  title: "Edu's blog",
  description: "Eduardo Souto personal blog website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${poppins.variable} font-poppins text-primaryDark`}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
