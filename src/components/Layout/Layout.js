import Header from "@/components/Layout/Header";
import style from "@/components/Layout/Layout.module.scss";
import Menu from "@/components/Menu/v1/Menu";
import Footer from "@/components/Layout/Footer";

const Layout = ({ children }) => {
    return (
      <>
            <div className={style.Header}>
                <Header />
            </div>
            <div className={`suisseIntlRegular`}>
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