import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Twin example',
  description: '',
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
            {/* <Navbar /> */}
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
