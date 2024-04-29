import style from "./SectionDivider.module.scss";
import Button from "@/components/Button/Button";
import {Row} from "react-bootstrap";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";

const SectionDivider = ({title, buttonText, buttonLink, subTitle, border = false}) => {
    return (
        <Row>
            <div className={style.Wrapper}>
                <div className={style.Header}>
                    <h1>{title}</h1>
                    <Media greaterThanOrEqual="sm">
                        <Button
                            type={'primary'}
                            size={'large'}
                            color={'neutral'}
                            linkTarget={'_self'}
                            link={buttonLink ? buttonLink : undefined}>
                            {buttonText}
                        </Button>
                    </Media>
                </div>
                { border && <div className={style.Border} /> }
                {
                    subTitle &&
                    <div className={style.SubText}>
                        <span>{subTitle}</span>
                    </div>
                }
            </div>
            <Spacer size={'medium'} />
        </Row>
    )
}

export default SectionDivider;