import pageStyle from "@/pages/pages.module.scss";
import style from "./errors.module.scss";
import useTranslation from "next-translate/useTranslation";
import Spacer from "@/components/Spacer/Spacer";
import Button from "@/components/Button/Button";
import {useRouter} from "next/router";


const Custom505Page = () => {
	const { t, lang } = useTranslation('server')
	const router = useRouter()

	return (
		<div className={pageStyle.Page} style={{position: 'relative'}}>
			<div className={style.Wrapper}>
				<p className={style.MaskedText}>
					500
				</p>
				<Spacer />
				<h3>
					{t('notfound__text')}
				</h3>
				<Spacer />
				<Button type={'primary'} color={'neutral'} size={'large'} onClick={() => router.back()}>
					{t('notfound__button')}
				</Button>
			</div>
		</div>
	)
}

export default Custom505Page;
