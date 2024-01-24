import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './(marketing)/_components/providers/theme-provider'
import { ConvexClientProvider } from './(marketing)/_components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Syntext',
  description: 'Generate notes, share , connect',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/document.gif",
        href: "/document.gif"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/writing.png",
        href: "/writing.png"
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
        attribute="class"
         defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey='jotion-theme-2'
        >
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
