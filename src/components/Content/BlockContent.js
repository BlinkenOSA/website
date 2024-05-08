import getColor from "@/utils/content/getColor";
import style from "./Content.module.scss";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const BlockContent = ({content, profile='Archives'}) => {
    const color = getColor(profile)

    return (
        <div className={`${style.ContentWrapper} ${style[color]}`}>
            <BlocksRenderer content={content} />
        </div>
    )
}

export default BlockContent;