import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/template/navbar/navbar';
import GlobalProvider from '@/context/globalContext';
import 'react-multi-carousel/lib/styles.css';
import Footer from '@/components/template/footer/footer';

const sans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netimóveis',
  description: 'Netimóveis - Sistema para alocação de apartamentos e casas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
        <body className={sans.className}>
          <GlobalProvider>
            <NavBar />
            { children }
            <Footer />
          </GlobalProvider>
        </body>
      </html>
  )
}
