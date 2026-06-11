import CollectionCard from "@/components/Cards/CollectionCard";
import style from "@/pages/pages.module.scss";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import {Media} from "@/utils/media";
import Button from "@/components/Button/Button";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import {useReducedMotion} from "framer-motion";
import useSlickA11y from "@/utils/hooks/useSlickA11y";

const CollectionsPanel = ({collectionsData, slidesToShow=3}) => {
    const { t } = useTranslation('index')
    const shouldReduceMotion = useReducedMotion()
    const hasOverflow = collectionsData["data"].length > slidesToShow;
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);

    useSlickA11y(sliderContainerRef, [collectionsData, hasOverflow, slidesToShow]);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: hasOverflow,
        speed: shouldReduceMotion ? 0 : 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        pauseOnFocus: true,
        accessibility: true,
    };

    const renderCollectionCard = () => {
        return collectionsData["data"].map((collection, idx) => {
            return (
                <div key={`collection_${idx}`} className={style.SliderCard}>
                    <CollectionCard
                        data={collection['attributes']}
                    />
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

    return (
        <>
            <SectionFlipper
                title={t('collection-highlights')}
                border={false}
                showSlider={hasOverflow}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <div ref={sliderContainerRef}>
                <Slider
                    ref={sliderRef}
                    {...sliderSettings}>
                    {renderCollectionCard()}
                </Slider>
            </div>
            <Media lessThan="sm">
                <div style={{textAlign: "center"}}>
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'neutral'}
                        linkTarget={'_self'}
                        link={'/collections/collection-highlights'}>
                        {t('events__button')}
                    </Button>
                </div>
            </Media>
        </>
    )
}

export default CollectionsPanel;
