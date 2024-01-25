import style from "./Header.module.scss";
import SearchBar from "@/components/experiementing/Layout/desktop/parts/SearchBar";
import Logo from "@/components/Logo/Logo";

const LanguageSelector = () => {
    return (
        <div className={`${style.LanguageSelector} suisseIntlMedium`}>
            <a href={'#'}>EN</a>
            <div>/</div>
            <a href={'#'}>HU</a>
        </div>
    )
}

const Header = () => {
    return (
        <div className={style.HeaderWrapper}>
            <div className={style.HeaderRow}>
                <div className={style.Logo}>
                  <Logo mode={'dark'} height={25} link={'/'} />
                </div>
                <SearchBar />
                <LanguageSelector />
            </div>
        </div>
    )
}

export default Header;