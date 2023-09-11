import '@/styles/globals.scss'
import { Nunito_Sans } from 'next/font/google'
import Head from 'next/head';
import {MediaContextProvider, mediaStyles} from "@/utils/media";

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

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
      <main className={nunitoSans.className}>
        <MediaContextProvider disableDynamicMediaQueries>
          <Component {...pageProps} />
        </MediaContextProvider>
      </main>
    </>
  )
}
