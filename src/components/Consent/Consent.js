import {CookieConsent} from "react-cookie-consent";
import useTranslation from "next-translate/useTranslation";
import style from "./Consent.module.scss";
import {inDevEnvironment} from "@/utils/inDevEnvironment";
import { getCookieConsentValue } from "react-cookie-consent";
import { GoogleAnalytics } from '@next/third-parties/google'
import {useState} from "react";
import Link from "next/link";

const Consent = () => {
	const { t, lang } = useTranslation('footer')
	const [consentAccepted, setConsentAccepted] = useState(getCookieConsentValue('BlinkenOSACookieConsent'))

	return (
		<>
			{
				consentAccepted === 'true' && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
			}
			<CookieConsent
				enableDeclineButton
				flipButtons={true}
				cookieName={'BlinkenOSACookieConsent'}
				buttonText={t('cookie_consent__accept')}
				containerClasses={style.Container}
				buttonWrapperClasses={style.ButtonWrapper}
				buttonClasses={style.AcceptButton}
				declineButtonClasses={style.DeclineButton}
				declineButtonText={t('cookie_consent__decline')}
				onAccept={() => setConsentAccepted('true')}
				onDecline={() => setConsentAccepted('false')}
			>
				<div className={style.ConsentText}>{t('cookie_consent')} <Link href={'/about-us/privacy-policy'}>{t('cookie_consent_page')}</Link>.</div>
			</CookieConsent>
		</>
	)
}

export default Consent;