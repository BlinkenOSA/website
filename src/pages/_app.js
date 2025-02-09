import '@/styles/custom.scss';

import localFont from 'next/font/local'
import Head from 'next/head';
import {MediaContextProvider, mediaStyles} from "@/utils/media";

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Layout from "@/components/Layout/Layout";
import PageProgressBar from "@/components/PageProgressBar/PageProgressBar";
import Consent from "@/components/Consent/Consent";
import {inDevEnvironment} from "@/utils/inDevEnvironment";

const suisseIntlRegular = localFont({src: '../../public/fonts/SuisseIntl-Regular-WebXL.woff2', variable: "--font-suisseIntlRegular"})
const suisseIntlMedium = localFont({src: '../../public/fonts/SuisseIntl-Medium-WebXL.woff2', variable: "--font-suisseIntlMedium"})
const suisseIntlSemiBold = localFont({src: '../../public/fonts/SuisseIntl-SemiBold-WebXL.woff2', variable: "--font-suisseIntlSemiBold"})

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{__html: mediaStyles}}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main
            className={`${suisseIntlRegular.variable} ${suisseIntlMedium.variable} ${suisseIntlSemiBold.variable}`}
        style={{height: '100%'}}>
        <MediaContextProvider disableDynamicMediaQueries>
          <ThemeProvider
            breakpoints={['xs', 'sm', 'md']}
          >
              <Layout>
                  <PageProgressBar />
                  <Component {...pageProps} />
                  {!inDevEnvironment && <Consent />}
              </Layout>
          </ThemeProvider>
        </MediaContextProvider>
      </main>
    </>
  )
}
