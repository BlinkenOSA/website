import getColor from "@/utils/content/getColor";
import style from "./Content.module.scss";
import BlocksContentRenderer from "@/components/Content/BlocksContentRenderer";

const BlockContent = ({content, profile='Archives'}) => {
    const color = getColor(profile)

    return (
        <div className={`${style.ContentWrapper} ${style[color]}`}>
            <BlocksContentRenderer content={content} />
        </div>
    )
}

export default BlockContent;
