import '@/src/styles/globals.scss'
import style from './layout.module.scss'
import { Nunito_Sans } from 'next/font/google'
import Menu from "@/src/components/Layout/desktop/Menu/Menu";
import Header from "@/src/components/Layout/desktop/Header/Header";

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'OSA Web Testing',
  description: 'jajj de szép',
}

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={nunitoSans.className} suppressHydrationWarning={true}>
        <div className={style.Wrapper}>
          <div className={style.Content}>
            <Header />
            <div className={style.Page}>
              {children}
            </div>
          </div>
          <div className={style.Menu}>
            <Menu />
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout;
