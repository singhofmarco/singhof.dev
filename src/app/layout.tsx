import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    template: '%s - Marco Singhof',
    default:
      'Marco Singhof - Software engineer, multilingual in code and conversation',
  },
  description:
    'Looking to hire a software engineer? I’m Marco, an experienced developer skilled in TypeScript, React, Node.js, AWS, and more. I’m currently available for new opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
