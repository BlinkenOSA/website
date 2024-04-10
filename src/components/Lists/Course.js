import style from "./lists.module.scss"
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";

const Course = ({data}) => {
    const title = data['Title']
    const university = data['University']
    const contentHighlight = data['ContentHighlight']
    const link = data['Link']

    return (
        <div className={style.ListWrapper}>
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