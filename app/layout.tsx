import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CS1MLXHZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CS1MLXHZR');
          `}
        </Script>
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased')} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
