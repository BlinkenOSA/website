import Header from "@/components/Layout/Header";
import style from "@/components/experiementing/Layout/desktop/Layout.module.scss";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Layout/Footer";

const Layout = ({ children }) => {
    return (
      <>
            <div className={style.Header}>
              <Header />
            </div>
            <div className={`${style.Page} suisseIntlRegular`}>
              {children}
            </div>
            <div className={style.Menu}>
                <Menu />
            </div>
            <Footer />
      </>
    )
}

export default Layout