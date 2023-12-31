import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'PMKdex',
  description: 'explore Pokemon data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
            <Toaster />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
