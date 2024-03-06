import Header from "@/components/Layout/Header";
import style from "@/components/Layout/Layout.module.scss";
import Menu from "@/components/Menu/v2/Menu";
import Footer from "@/components/Layout/Footer";
import { MenuProvider} from "@/utils/context/MenuContext";

const Layout = ({ children }) => {
    return (
        <MenuProvider>
            <div className={style.Header}>
                <Header />
            </div>
            <div className={`suisseIntlRegular`}>
                {children}
                <div className={style.Menu}>
                    <Menu />
                </div>
            </div>
            <Footer />
        </MenuProvider>
    )
}

export default Layout