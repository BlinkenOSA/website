import style from "./AuthorBadge.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/content/getImageUrl";

const AuthorBadge = ({authorStaff}) => {
    if (authorStaff) {
        const data = authorStaff['attributes']

        const name = data['Name']
        const image = data['Image']

        return (
            <div className={style.AuthorBadge}>
                <div className={style.Image}><MaskedImage src={getImageUrl(image)} type={'square'} /></div>
                <div className={`${style.Name} subtitle-small`}>{name}</div>
            </div>
        )
    } else {
        return ''
    }

}

export default AuthorBadge;