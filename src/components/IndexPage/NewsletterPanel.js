import style from "./NewsletterPanel.module.scss";
import Input from "@/components/Input/Input";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import useTranslation from "next-translate/useTranslation";

const NewsletterPanel = ({type='landing', color='neutral'}) => {
    const { t } = useTranslation('index')

    return (
        <div className={type === 'landing' ? `${style.Wrapper} ${style.Landing}` : style.Wrapper}>
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
                            link={'https://newsletter.osaarchivum.org/public-programs'}
                            linkTarget={'_blank'}
                        >
                            {t('newsletter__subscribe')}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={style.Right}>
                <MaskedImage
                    src={'https://fortepan.download/file/fortepan-eu/1600/fortepan_56385.jpg'}
                />
            </div>
        </div>
    )
}

export default NewsletterPanel;