import style from "./lists.module.scss"
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";

const Publication = ({data}) => {

    const description = data['Description']
    const link = data['Link']

    return (
        <div className={style.ListWrapper}>
            <BlocksRenderer content={description} />
            {
                link && <Link href={link}>{link}</Link>
            }
        </div>
    )
}

export default Publication;