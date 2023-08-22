"use client"
import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        type="text/javascript" src='https://qa-servedbydoceree.doceree.com/script/render-header.js'
      />
      <Script
        async strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        type="text/javascript" src='https://qa-servedbydoceree.doceree.com/resources/q/render.js'
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
