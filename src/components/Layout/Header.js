import style from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import SearchBox from "@/components/Input/SearchBox";
import {Col, Container, Row} from "react-bootstrap";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useContext} from "react";

const Header = () => {
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
					<Col xs={3} className={style.Logo} onClick={handleMenuClose}>
						<Logo height={30} link={'/'} mode={'dark'}/>
					</Col>
					<Col xs={5} />
					<Col xs={3}>
						<SearchBox />
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