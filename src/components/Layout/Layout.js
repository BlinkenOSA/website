import style from './Layout.module.scss'
import Menu from "@/components/Layout/desktop/Menu/Menu";
import Header from "@/components/Layout/desktop/Header/Header";

export const metadata = {
  title: 'OSA Web Testing',
  description: 'jajj de szép',
}

const Layout = ({ children }) => {
  return (
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
  )
}

export default Layout;
