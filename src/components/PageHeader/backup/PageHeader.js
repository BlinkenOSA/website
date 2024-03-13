import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import getColor from "@/utils/content/getColor";
import Image from "next/image";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const PageHeader = ({breadcrumbObject, title, profile, image}) => {
    const color = getColor(profile)

    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <div className={`${style.Color} ${style[color]}`}></div>
                <div className={style.Image}>
                    <MaskedImage type={"landscape"} src={image} mask={false} />
                </div>
            </div>
            <div className={style.HeaderContent}>
                <Container>
                    <Breadcrumb breadcrumbObject={breadcrumbObject} />
                    <h1>{title}</h1>
                </Container>
            </div>
        </div>
    )
}

export default PageHeader;