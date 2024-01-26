import style from "@/components/Layout/Footer.module.scss";
import Logo from "@/components/Logo/Logo";
import {Col, Row} from "react-bootstrap";
import {SocialIconFB, SocialIconInsta, SocialIconYT} from "@/components/Icon/SocialIcon";

const Footer = () => {
	return (
		<div className={style.FooterWrapper}>
			<Row>
				<Col xs={3}>
					<Logo mode={'light'} height={30} />
				</Col>
				<Col xs={5} style={{padding: '0 20px'}}>
					<div className={style.InfoWrapperLeft}>
						<div className={style.Label}>Contact</div>
						<div className={style.Info}>
							For archival matters: info@osaarchivum.org<br/>
							For public programs: comms@ceu.edu<br/>
							<br/>
							Address: Arany János u. 32, 1051  Budapest, Hungary<br/>
							Tel: +36-1-327-3250
						</div>
					</div>
					<br/>
					<div className={style.InfoWrapperLeft}>
						<div className={style.Label}>Opening</div>
						<div className={style.Info}>
							Galeria: K-V 10:00 - 18:00
							Research Room: H-P 10:00 - 17:45
						</div>
					</div>
				</Col>
				<Col xs={4}>
					<div className={style.InfoWrapperRight}>
						<div className={style.Label}>About</div><br/>
						<div className={style.Links}>
							<ul>
								<li>Privacy Policy</li>
								<li>Terms & Conditions</li>
								<li>Sitemap</li>
							</ul>
						</div>
					</div>
					<br/>
					<div className={style.SocialIcons}>
						<a href={'#'}><SocialIconFB /></a>
						<a href={'#'}><SocialIconInsta /></a>
						<a href={'#'}><SocialIconYT /></a>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Footer