import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-satoshi',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-cabinet',
})

export const metadata: Metadata = {
  title: 'Mario Lopez | Creative Developer',
  description: 'Frontend Developer creando experiencias web unicas y de alto rendimiento. Especializado en React, TypeScript y diseno de interfaces modernas.',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'Creative Developer', 'Web Developer', 'Mario Lopez'],
  authors: [{ name: 'Mario Lopez' }],
  creator: 'Mario Lopez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Mario Lopez | Creative Developer',
    description: 'Frontend Developer creando experiencias web unicas y de alto rendimiento.',
    siteName: 'Mario Lopez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario Lopez | Creative Developer',
    description: 'Frontend Developer creando experiencias web unicas y de alto rendimiento.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
