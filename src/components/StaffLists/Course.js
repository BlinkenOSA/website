import style from "./lists.module.scss"
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const Course = ({data}) => {
    const { lang } = useTranslation('page')

    const title = getLocData(data, 'Title', lang)
    const university = getLocData(data, 'University', lang)
    const contentHighlight = getLocData(data, 'ContentHighlight', lang)
    const link = data['Link']

    return (
        <div className={`${style.ListWrapper} ${style.Courses}`}>
            <div className={'subtitle-large'}>{title}</div>
            <div style={{height: '8px'}}/>
            <p>
                {university}<br/>
                {contentHighlight}
            </p>
            {
                link && <Link href={link}>{link}</Link>
            }
        </div>
    )
}

export default Course;