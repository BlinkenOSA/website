import style from "./SectionDivider.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {Row} from "react-bootstrap";
import Link from "next/link";

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
                    <div className={style.Controls}>
                        {
                            link &&
                            <Button
                                type={'primary'}
                                size={'medium'}
                                color={'neutral'}
                                link={link}
                                linkTarget={'_self'}
                                isIcon={false}>View All</Button>
                        }
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