import style from "./SectionDivider.module.scss";
import {Row} from "react-bootstrap";
import Link from "next/link";
import Spacer from "@/components/Spacer/Spacer";
import {Media} from "@/utils/media";
import SectionSlider from "@/components/IndexPage/SectionSlider";

const SectionFlipper = ({title, link, border = false, onNextClick, onPreviousClick}) => {
    const getTitle = () => {
        if (link) {
            return (
                <Link href={link} target={'_self'}>
                    <h1>{title}</h1>
                </Link>
            )
        } else {
            return (<h1>{title}</h1>)
        }
    }

    return (
        <Row>
            <div className={style.Wrapper}>
                <div className={style.Header}>
                    {getTitle()}
                    <Media greaterThanOrEqual="md">
                        <SectionSlider
                            link={link}
                            onPreviousClick={onPreviousClick}
                            onNextClick={onNextClick}
                        />
                    </Media>
                </div>
                { border && <div className={style.Border} /> }
            </div>
            <Spacer size={'medium'} />
        </Row>
    )
}

export default SectionFlipper;