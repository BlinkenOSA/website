import '@/styles/custom.scss';

import localFont from 'next/font/local'
import Head from 'next/head';
import {MediaContextProvider, mediaStyles} from "@/utils/media";

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Layout from "@/components/Layout/Layout";

const suisseIntlRegular = localFont({src: '../../public/fonts/SuisseIntl-Regular-WebXL.woff2', variable: "--font-suisseIntlRegular"})
const suisseIntlBook = localFont({src: '../../public/fonts/SuisseIntl-Book-WebXL.woff2', variable: "--font-suisseIntlBook"})
const suisseIntlMedium = localFont({src: '../../public/fonts/SuisseIntl-Medium-WebXL.woff2', variable: "--font-suisseIntlMedium"})
const suisseIntlSemiBold = localFont({src: '../../public/fonts/SuisseIntl-SemiBold-WebXL.woff2', variable: "--font-suisseIntlSemiBold"})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${suisseIntlRegular.variable} ${suisseIntlBook.variable} ${suisseIntlMedium.variable} ${suisseIntlSemiBold.variable}`}
        style={{height: '100%'}}>
        <MediaContextProvider disableDynamicMediaQueries>
          <ThemeProvider
            breakpoints={['xs', 'sm', 'md']}
          >
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
        </MediaContextProvider>
      </main>
    </>
  )
}
