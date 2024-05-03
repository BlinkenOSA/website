import pageStyle from "@/pages/pages.module.scss";
import style from "./404.module.scss";
import useTranslation from "next-translate/useTranslation";
import Spacer from "@/components/Spacer/Spacer";
import Button from "@/components/Button/Button";


const Custom404Page = () => {
	const { t, lang } = useTranslation('server')

	return (
		<div className={pageStyle.Page} style={{position: 'relative'}}>
			<div className={style.Wrapper}>
				<p className={style.MaskedText}>
					404
				</p>
				<Spacer />
				<h3>
					{t('notfound__text')}
				</h3>
				<Spacer />
				<Button type={'primary'} color={'neutral'} size={'large'}>
					{t('notfound__button')}
				</Button>
			</div>
		</div>
	)
}

export default Custom404Page;
