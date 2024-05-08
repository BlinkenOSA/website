import style from "./lists.module.scss"
import Link from "next/link";

const Course = ({data}) => {
    const title = data['Title']
    const university = data['University']
    const contentHighlight = data['ContentHighlight']
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