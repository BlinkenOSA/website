import style from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import SearchBox from "@/components/Input/SearchBox";

const Header = () => {
	return (
		<div className={style.HeaderWrapper}>
			<div className={style.HeaderRow}>
				<Logo height={30} link={'/'} mode={'dark'}/>
				<div style={{flex: '1'}} />
				<div style={{width: '200px'}}>
					<SearchBox />
				</div>
				<div>
					<LanguageSelector />
				</div>
			</div>
		</div>
	)
}

export default Header