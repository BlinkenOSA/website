import style from "./NewsletterPanel.module.scss";
import Input from "@/components/Input/Input";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";

const NewsletterPanel = ({type='landing'}) => {
    return (
        <div className={type === 'landing' ? `${style.Wrapper} ${style.Landing}` : style.Wrapper}>
            <div className={style.Left}>
                <h2>Keep in touch</h2>
                <p>
                    Subscribe to our newsletter for updates, behind-the-scenes
                    content, and curated insights into the world of archival treasures.<br/>
                    Join our community and never miss a moment.
                </p>
                <div className={style.Form}>
                    <div className={style.Email}>
                        <Input id={'email'} placeholder={'Email Address'} style={{width: 100}} />
                    </div>
                    <div className={style.Button}>
                        <Button size={'large'}>
                            Subscribe
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