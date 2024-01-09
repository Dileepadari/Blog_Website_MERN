import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ThemeProvider from '@/providers/ThemeProvider'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Website',
  description: 'created by delhi in next js with mongodb, react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className='container'>
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
