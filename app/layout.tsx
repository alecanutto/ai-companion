import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR, enUS } from '@clerk/localizations'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { ProModal } from '@/components/pro-modal'

import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Companion',
  description: 'Generated by create next app',
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const locale = useLocale()
  // Receive messages provided in `i18n.ts`
  const messages = useMessages()

  return (
    <ClerkProvider localization={locale === 'pt' ? ptBR : enUS}>
      <html lang={locale} suppressHydrationWarning>
        <body className={cn('bg-secondary', inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ProModal />
              {children}
            </NextIntlClientProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
