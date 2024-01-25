import style from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import LanguageSelector from "@/components/Selectors/LanguageSelector";
import SearchBox from "@/components/Input/SearchBox";
import {Col, Row} from "react-bootstrap";

const Header = () => {
	return (
		<div className={style.HeaderWrapper}>
			<Row>
				<Col xs={3} className={style.Logo}>
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
		</div>
	)
}

export default Header