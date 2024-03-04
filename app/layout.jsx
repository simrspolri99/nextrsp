import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Divider from '@/components/divider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RUMAH SAKIT BHAYANGKARA TK. I PUSDOKKES POLRI',
  description: 'RUMAH SAKIT BHAYANGKARA TK. I PUSDOKKES POLRI, RSPOLRI, RS POLRI KRAMAT JATI, RUMAH SAKIT RADEN SAID SUKANTO, RUMAH SAKIT POLRI KRAMAT JATI, RUMAH SAKIT, RUMAH SAKIT POLISI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow py-auto">
          {children}
        </div>
        <Footer />
        <Divider />
        </div>
        </body>
    </html>
  )
}
