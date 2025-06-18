import style from "./AuthorBadge.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";

const AuthorBadge = ({authorStaff}) => {
    if (authorStaff) {
        const data = authorStaff['attributes']

        const name = data['Name']
        const image = data['Image']

        const imageData = getImageData(data['Image'], "thumbnail")

        return (
            <div className={style.AuthorBadge}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'square'} alt={`Small photo of the author ${name}`}/>
                </div>
                <div className={`${style.Name} subtitle-small`}>{name}</div>
            </div>
        )
    } else {
        return ''
    }

}

export default AuthorBadge;