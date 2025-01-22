import Slider from "react-slick";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";
import style from "./RelatedMaterials.module.scss";
import RelatedMaterialCard from "@/components/RelatedMaterials/RelatedMaterialCard";

const RelatedMaterials = ({materialData, slidesToShow}) => {
    const { t, lang } = useTranslation('cards')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    let sliderRef = useRef(null);

    const renderCards = () => {
        return materialData.map((d, idx) => {
            return (
                <div key={`related_material_${idx}`} className={style.SliderCard}>
                    <RelatedMaterialCard id={idx} key={idx} data={d}/>
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

    if (materialData.length > 0) {
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