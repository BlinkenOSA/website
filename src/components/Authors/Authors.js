import style from "./Authors.module.scss";
import AuthorBadge from "@/components/Authors/AuthorBadge";
import useTranslation from "next-translate/useTranslation";

const Authors = ({author, authorStaff}) => {
    const aStaff = Array.isArray(authorStaff['data']) ? authorStaff['data'] : [authorStaff['data']]

    return (
        <div className={style.Authors}>
            {
                author !== null &&
                <div className={style.AuthorBadge}>
                    <div style={{width: '48px'}} />
                    <div className={`subtitle-small`}>{author}</div>
                </div>
            }
            {
                aStaff.map(as => <AuthorBadge authorStaff={as} />)
            }
        </div>
    )
}

export default Authors;