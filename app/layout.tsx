import type { Metadata } from 'next'
import './index.css'


export const metadata: Metadata = {
  title: 'QR Generator',
  description: '',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
