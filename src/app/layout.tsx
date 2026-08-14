import type { Metadata } from 'next'
import { Instrument_Serif, JetBrains_Mono, Outfit } from 'next/font/google'
import './globals.css'

const display = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manan · A Universe',
  description:
    'An interactive cinematic journey through the world of Manan Khandelwal — AI Engineer, React Native Developer, and builder.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
