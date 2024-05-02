import style from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import {useContext} from "react";
import MobileMenuButton from "@/components/Layout/mobile/MobileMenuButton";
import Search from "@/components/Search/Search";

const Header = () => {
	const menuOpen = useContext(MenuContext);
	const dispatch = useContext(MenuDispatchContext);

	const handleMenuClick = () => {
		if (menuOpen.length > 0) {
			dispatch({
				type: 'close'
			})
		} else {
			dispatch({
				type: 'open-mobile-menu'
			});
		}
	}

	return (
		<div className={style.HeaderWrapper}>
			<div className={style.Logo} >
				<Logo height={25} link={'/'} mode={'dark'}/>
			</div>
			<div className={style.Search}>
				<Search />
			</div>
			<div className={style.LanguageSelector} >
				<LanguageSelector />
			</div>
			<div className={style.MenuButton}>
				<MobileMenuButton menuOpen={menuOpen} onMenuButtonClick={handleMenuClick}/>
			</div>
		</div>
	)
}

export default Header