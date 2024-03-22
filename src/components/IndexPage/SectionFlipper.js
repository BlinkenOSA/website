import style from "./SectionDivider.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {Row} from "react-bootstrap";

const SectionFlipper = ({title, border = false, onNextClick, onPreviousClick}) => {
    return (
        <Row>
            <div className={style.Wrapper}>
                <div className={style.Header}>
                    <h1>{title}</h1>
                    <div className={style.Controls}>
                        <Button
                            type={'primary'}
                            size={'medium'}
                            color={'neutral'}
                            onClick={onPreviousClick}
                            isIcon={true}><IconGeneralLeft/></Button>
                        <Button
                            type={'primary'}
                            size={'medium'}
                            color={'neutral'}
                            onClick={onNextClick}
                            isIcon={true}><IconGeneralRight/></Button>
                    </div>
                </div>
                { border && <div className={style.Border} /> }
            </div>
        </Row>
    )
}

export default SectionFlipper;