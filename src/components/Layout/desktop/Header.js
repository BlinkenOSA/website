import style from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import CEUIcon from "@/components/Icon/CEUIcon";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import {Col, Container, Row} from "react-bootstrap";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useContext} from "react";
import Search from "@/components/Search/Search";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
	const {lang} = useTranslation('header');
	const dispatch = useContext(MenuDispatchContext);

	const handleMenuClose = () => {
		dispatch({
			type: 'close'
		})
	}

	return (
		<div className={style.HeaderWrapper}>
			<Container>
				<Row>
					<Col xs={5} className={style.Logo} onClick={handleMenuClose}>
						<Logo height={30} link={'/'} mode={'dark'} marginRight={20}/>
						<span className={style.LogoDivider} aria-hidden={true} />
						<Link
							className={style.CEULogo}
							href={'https://www.ceu.edu'}
							target={'_blank'}
							rel="noopener noreferrer"
							aria-label={lang === 'hu' ? 'A Közép-európai Egyetem weboldala (megnyitás új lapon)' : 'Central European University website (opens in a new tab)'}
						>
							<CEUIcon ariaHidden={true} />
						</Link>
					</Col>
					<Col xs={3} />
					<Col xs={3}>
						<Search />
					</Col>
					<Col xs={1} className={style.LanguageSelector}>
						<LanguageSelector />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
