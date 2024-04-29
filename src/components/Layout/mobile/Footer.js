import style from "@/components/Layout/mobile/Footer.module.scss";
import Logo from "@/components/Logo/Logo";
import {Col, Container, Row} from "react-bootstrap";
import {SocialIconFB, SocialIconInsta, SocialIconX, SocialIconYT} from "@/components/Icon/SocialIcon";
import useTranslation from "next-translate/useTranslation";
import Spacer from "@/components/Spacer/Spacer";
import React from "react";
import {Media} from "@/utils/media";

const Footer = () => {
	const { t } = useTranslation('footer')

	return (
		<div className={style.FooterContainer}>
			<div className={style.FooterWrapper}>
				<Container fluid={true}>
					<Row>
						<Col xs={12}>
							<div className={style.Logo}>
								<Logo mode={'light'} height={30} />
							</div>
						</Col>
						<Spacer />
						<Col xs={12} sm={6}>
							<div className={style.InfoWrapperLeft}>
								<div className={style.Label}>{t('contact')}</div>
								<div className={style.Info}>
									{t('contact__archival')}<br/>
									{t('contact__programs')}<br/>
									<br/>
									{t('address')}<br/>
									{t('phone')}
								</div>
							</div>
							<br/>
							<div className={style.InfoWrapperLeft}>
								<div className={style.Label}>{t('opening')}</div>
								<div className={style.Info}>
									{t('opening__galeria')}<br/>
									{t('opening__research-room')}
								</div>
							</div>
						</Col>
						<Media at="xs">
							<Spacer />
						</Media>
						<Col xs={12} sm={6}>
							<div className={style.InfoWrapperRight}>
								<div className={style.Label}>{t('about')}</div><br/>
								<div className={style.Links}>
									<ul>
										<li><a href={'/about-us/privacy-policy'}>{t('privacy-policy')}</a></li>
										<li>{t('sitemap')}</li>
									</ul>
								</div>
							</div>
							<br/>
							<div className={style.SocialIcons}>
								<a href={'https://www.facebook.com/OSAarchivum'} target={'_blank'}><SocialIconFB /></a>
								<a href={'https://www.instagram.com/blinkenosaarchivum/'} target={'_blank'}><SocialIconInsta /></a>
								<a href={'https://www.youtube.com/channel/UCToZ4NBHMP_DjBPh6XYF0og'} target={'_blank'}><SocialIconYT /></a>
								<a href={'https://twitter.com/blinkenosa'} target={'_blank'}><SocialIconX /></a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Footer