import CollectionCard from "@/components/Cards/CollectionCard";
import style from "@/pages/pages.module.scss";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import {Media} from "@/utils/media";
import Button from "@/components/Button/Button";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";

const CollectionsPanel = ({collectionsData, slidesToShow=3}) => {
    const { t } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    let sliderRef = useRef(null);

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
        sliderRef.slickNext();
    };

    const onPreviousClick = () => {
        sliderRef.slickPrev();
    };

    return (
        <>
            <SectionFlipper
                title={t('collection-highlights')}
                border={false}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...sliderSettings}>
                {renderCollectionCard()}
            </Slider>
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