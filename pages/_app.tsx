import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <SSRProvider>
      <AnyComponent {...pageProps} />
      <Analytics />
    </SSRProvider>
  )
}
