import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout';
import { theme } from '../chakra/chakra';
import { RecoilRoot } from 'recoil';
import ToasterProvider from '@/context/ToasterProvider';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        
          <ToasterProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
          </ToasterProvider>

      </ChakraProvider>
    </RecoilRoot>
  )

}
