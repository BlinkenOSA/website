import style from "@/components/Layout/desktop/Footer.module.scss";
import Logo from "@/components/Logo/Logo";
import {Col, Container, Row} from "react-bootstrap";
import {
	SocialIconBlueSky,
	SocialIconFB,
	SocialIconInsta, SocialIconLinkedin,
	SocialIconX,
	SocialIconYT
} from "@/components/Icon/SocialIcon";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import CEUIcon from "@/components/Icon/CEUIcon";

const Footer = () => {
	const { t } = useTranslation('footer')

	return (
		<div className={style.FooterContainer}>
			<div className={style.FooterWrapper}>
				<Container>
					<Row>
						<Col sm={12} md={3}>
							<div className={style.Logo}>
								<Logo mode={'light'} height={30} />
							</div>
						</Col>
						<Col sm={6} md={6} style={{paddingRight: '20px'}}>
							<div className={style.InfoWrapperLeft}>
								<div className={style.Label}>{t('contact')}</div>
								<div className={style.Info}>
									{t('contact__archival')}<br/>
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
						<Col sm={6} md={3}>
							<div className={style.InfoWrapperRight}>
								<div className={style.Links}>
									<ul>
										<li><Link href={'/about-us/privacy-policy'}>{t('privacy-policy')}</Link></li>
									</ul>
								</div>
							</div>
							<br/>
							<div className={style.SocialIcons}>
								<Link href={'https://www.facebook.com/OSAarchivum'} target={'_blank'}><SocialIconFB /></Link>
								<Link href={'https://www.instagram.com/blinkenosaarchivum/'} target={'_blank'}><SocialIconInsta /></Link>
								<Link href={'https://www.youtube.com/channel/UCToZ4NBHMP_DjBPh6XYF0og'} target={'_blank'}><SocialIconYT /></Link>
								<Link href={'https://bsky.app/profile/archivum.org'} target={'_blank'}><SocialIconBlueSky /></Link>
								<Link href={'https://www.linkedin.com/company/blinken-osa-archivum'} target={'_blank'}><SocialIconLinkedin /></Link>
							</div>
							<br/>
							<div className={style.CEULogo}>
								<Link href={'https://www.ceu.edu'} target={'_blank'}>
									<CEUIcon />
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Footer