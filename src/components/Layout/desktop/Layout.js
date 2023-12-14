import Header from "@/components/Layout/desktop/parts/Header";
import style from "@/components/Layout/desktop/Layout.module.scss";
import DesktopMenu from "@/components/Layout/desktop/parts/DesktopMenu";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={style.Page}>
                {children}
            </div>
            <div className={style.Menu}>
                <DesktopMenu />
            </div>
        </>
    )
}

export default Layout