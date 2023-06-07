import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
