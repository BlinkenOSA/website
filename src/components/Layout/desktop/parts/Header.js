import style from "./Header.module.scss";
import logo from "../../../../../public/icons/blinken-osa-logo-fullwidth.svg"
import Image from 'next/image';
import SearchBar from "@/components/Layout/desktop/parts/SearchBar";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'} shallow={true}>
            <div className={style.Logo}>
                <Image
                    priority
                    src={logo}
                    height={20}
                    alt="Blinken OSA Archivum"
                />
            </div>
        </Link>
    )
}

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
                <Logo />
                <SearchBar />
                <LanguageSelector />
            </div>
        </div>
    )
}

export default Header;