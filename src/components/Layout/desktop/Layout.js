import Header from "@/components/Layout/desktop/parts/Header";
import style from "@/components/Layout/desktop/Layout.module.scss";
import Menu from "@/components/Layout/desktop/parts/Menu";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={`${style.Page} suisseIntlRegular`}>
                {children}
            </div>
            <div className={style.Menu}>
                <Menu />
            </div>
        </>
    )
}

export default Layout