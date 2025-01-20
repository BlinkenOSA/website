import Slider from "react-slick";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useEffect, useRef, useState} from "react";
import useTranslation from "next-translate/useTranslation";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";
import getRelatedMaterials from "@/utils/content/getRelatedMaterials";
import style from "./RelatedMaterials.module.scss";
import NewsCard from "@/components/Cards/NewsCard";
import RelatedMaterialCard from "@/components/Cards/RelatedMaterialCard";

const RelatedMaterials = ({materialData, pageType, slidesToShow=3}) => {
    const { t, lang } = useTranslation('index')
    const [data, setData] = useState([])

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    useEffect(() => {
        setData(getRelatedMaterials(materialData, pageType))
    }, [materialData])

    let sliderRef = useRef(null);

    const renderCards = () => {
        return data.map((d, idx) => {
            return (
                <div key={`related_material_${idx}`} className={style.SliderCard}>
                    <RelatedMaterialCard id={idx} data={d}/>
                </div>
            )
        })
    }

    const onNextClick = () => {
        sliderRef.slickNext();
    };
    const onPreviousClick = () => {
        sliderRef.slickPrev();
    };

    if (data.length > 0) {
        return (
            <>
                <SectionFlipper
                    title={t('related_content')}
                    border={true}
                    onNextClick={onNextClick}
                    onPreviousClick={onPreviousClick}/>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...sliderSettings}>
                    {renderCards()}
                </Slider>
                <Media lessThan="md">
                    <SectionSlider
                        onPreviousClick={onPreviousClick}
                        onNextClick={onNextClick}
                    />
                    <Spacer />
                </Media>
            </>
        )
    } else {
        return ''
    }

}

export default RelatedMaterials;