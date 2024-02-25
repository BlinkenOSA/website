import style from "./MenuPage.module.scss"
import AboutUsBackground from "@/components/Menu/v2/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/v2/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/v2/backgrounds/PublicProgramsBackground";

const MenuPage = ({submenuConfig, menuID, number}) => {
    const getSubmenu = () => {
        return submenuConfig.map((sm, idx) => {
            return <div key={`submenu_${idx}`} className={'menu-text'}>{sm['title']}</div>
        })
    }

    const getMenuBackground = () => {
        switch (menuID) {
            case 'about_us':
                return <AboutUsBackground />
            case 'academics':
                return <AcademicsBackground />
            case 'public_programs':
                return <PublicProgramsBackground />
        }
    }

    return (
        <div className={style.MenuPageWrapper} style={{width: `calc(100vw - (${number * 56 - (4 - number)}px))`}}>
            <div className={style.SubmenuWrapper}>
                <div className={style.Submenu}>
                    {getSubmenu()}
                </div>
            </div>
            <div className={style.SubmenuSecondLevel}>
                <div className={style.BackgroundIcon}>
                    {getMenuBackground()}
                </div>
            </div>
        </div>
    )
}

export default MenuPage;