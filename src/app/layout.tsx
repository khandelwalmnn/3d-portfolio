import type { Metadata } from 'next'
import { Fredoka, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const display = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manan Khandelwal',
  description: 'AI Engineer, React Native developer, and builder — portfolio of Manan Khandelwal.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
