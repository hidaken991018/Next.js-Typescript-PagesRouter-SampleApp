import { Header } from '@/components/molecules/Header/Header'
import { Sidebar } from '@/components/molecules/Sidebar/Sidebar'
import './globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
