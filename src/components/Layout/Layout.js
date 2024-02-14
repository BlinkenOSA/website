import Header from "@/components/Layout/Header";
import style from "@/components/Layout/Layout.module.scss";
import Menu from "@/components/Menu/v2/Menu";
import Footer from "@/components/Layout/Footer";

const Layout = ({ children }) => {
    return (
      <>
            <div className={style.Header}>
                <Header />
            </div>
            <div className={`${style.Content} suisseIntlRegular`}>
                {children}
                <div className={style.Menu}>
                    <Menu />
                </div>
            </div>
            <Footer />
      </>
    )
}

export default Layout