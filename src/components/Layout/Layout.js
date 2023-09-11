import style from './Layout.module.scss'
import DesktopMenu from "@/components/Layout/DesktopMenu/DesktopMenu";
import Header from "@/components/Layout/Header/Header";
import {Media} from "@/utils/media";
import MobileMenu from "@/components/Layout/MobileMenu/MobileMenu";

export const metadata = {
  title: 'OSA Web Testing',
  description: 'jajj de szép',
}

const Layout = ({ children }) => {
  return (
    <>
      <Media lessThan="md">
        <div className={style.MobileWrapper}>
          <div className={style.Content}>
            <Header />
            <div className={style.Page}>
              {children}
            </div>
          </div>
          <div className={style.Menu}>
            <MobileMenu />
          </div>
        </div>
      </Media>
      <Media greaterThanOrEqual="md">
        <div className={style.DesktopWrapper}>
          <div className={style.Content}>
            <Header />
            <div className={style.Page}>
              {children}
            </div>
          </div>
          <div className={style.Menu}>
            <DesktopMenu />
          </div>
        </div>
      </Media>
    </>
  )
}

export default Layout;
