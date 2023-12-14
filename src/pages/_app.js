import '@/styles/globals.scss'
import localFont from 'next/font/local'
import Head from 'next/head';
import {MediaContextProvider, mediaStyles} from "@/utils/media";

const suisseIntl = localFont({
    src: [
        {
            path: '../../public/fonts/SuisseIntl-Regular-WebXL.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/SuisseIntl-Book-WebXL.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/SuisseIntl-Medium-WebXL.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/SuisseIntl-SemiBold-WebXL.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
})


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
      <main className={suisseIntl.className} style={{height: '100%'}}>
        <MediaContextProvider disableDynamicMediaQueries>
          <Component {...pageProps} />
        </MediaContextProvider>
      </main>
    </>
  )
}
