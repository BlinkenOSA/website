import style from "./lists.module.scss"
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const Appearance = ({data}) => {
    const { lang } = useTranslation('page')

    const description = getLocData(data, 'Description', lang)
    const link = data['Link']

    return (
        <div className={`${style.ListWrapper} ${style.Appearance}`}>
            <BlocksRenderer content={description} />
            {
                link && <Link href={link}>{link}</Link>
            }
        </div>
    )
}

export default Appearance;