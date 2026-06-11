import Slider from "react-slick";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";
import style from "./RelatedMaterials.module.scss";
import RelatedMaterialCard from "@/components/RelatedMaterials/RelatedMaterialCard";
import {useReducedMotion} from "framer-motion";
import useSlickA11y from "@/utils/hooks/useSlickA11y";

const RelatedMaterials = ({materialData, slidesToShow}) => {
    const { t, lang } = useTranslation('cards')
    const shouldReduceMotion = useReducedMotion();
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);

    useSlickA11y(sliderContainerRef, [materialData, shouldReduceMotion, slidesToShow]);

    const sliderSettings = {
        dots: false,
        arrows: false,
        centerMode: false,
        infinite: materialData.length >= slidesToShow,
        autoplay: !shouldReduceMotion && materialData.length >= slidesToShow,
        speed: shouldReduceMotion ? 0 : 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        accessibility: true,
    };

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
        sliderRef.current?.slickNext();
    };
    const onPreviousClick = () => {
        sliderRef.current?.slickPrev();
    };

    if (materialData.length > 0) {
        return (
            <>
                <SectionFlipper
                    title={t('related_content')}
                    border={true}
                    showSlider={materialData.length >= slidesToShow}
                    onNextClick={onNextClick}
                    onPreviousClick={onPreviousClick}/>
                <div ref={sliderContainerRef}>
                    <Slider
                        ref={sliderRef}
                        className={style.Slider}
                        {...sliderSettings}>
                        {renderCards()}
                    </Slider>
                </div>
                <Media lessThan="md">
                    <SectionSlider
                        onPreviousClick={onPreviousClick}
                        onNextClick={onNextClick}
                    />
                    <Spacer />
                </Media>
                <Spacer size={'medium'} />
            </>
        )
    } else {
        return ''
    }

}

export default RelatedMaterials;
