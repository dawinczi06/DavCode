import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import AppContextProvider from '../providers/AppContextProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>DavCode</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContextProvider>
        </>
    )
}

export default MyApp
