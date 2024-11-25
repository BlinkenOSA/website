import style from "./NewsletterPanel.module.scss";
import Input from "@/components/Input/Input";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import useTranslation from "next-translate/useTranslation";
import {Media} from "@/utils/media";

const NewsletterPanel = ({type='landing', color='neutral'}) => {
    const { t, lang } = useTranslation('index')

    return (
        <div className={type === 'landing' ? `${style.Wrapper} ${style.Landing}` : style.Wrapper}>
            <Media at="xs">
                <MaskedImage
                    src={'/images/newsletter.webp'}
                />
            </Media>
            <div className={style.Left}>
                <h2>{t('newsletter__title')}</h2>
                <p>
                    {t('newsletter__content_01')}<br/>
                    {t('newsletter__content_02')}
                </p>
                <div className={style.Form}>
                    <div className={style.Button}>
                        <Button
                            size={'large'}
                            type={'primary'}
                            color={color}
                            link={lang === 'en' ? 'https://dashboard.mailerlite.com/forms/982957/137999695450474370/share' : 'https://dashboard.mailerlite.com/forms/982957/137796678462735997/share'}
                            linkTarget={'_blank'}
                        >
                            {t('newsletter__subscribe')}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={style.Right}>
                <Media greaterThan="xs">
                    <MaskedImage
                        src={'/images/newsletter.webp'}
                    />
                </Media>
            </div>
        </div>
    )
}

export default NewsletterPanel;