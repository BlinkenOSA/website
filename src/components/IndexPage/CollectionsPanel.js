import CollectionCard from "@/components/Cards/CollectionCard";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import style from "@/pages/pages.module.scss";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import getLocalizedContent from "@/utils/content/getLocalizedContent";
import {Media} from "@/utils/media";
import Button from "@/components/Button/Button";

const CollectionsPanel = ({collectionsData, slidesToShow=3}) => {
    const { t, lang } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    const renderCollectionCard = () => {
        return collectionsData["data"].map((collection, idx) => {
            return (
                <div key={`collection_${idx}`} className={style.SliderCard}>
                    <CollectionCard
                        data={getLocalizedContent(collection['attributes'], lang)}
                    />
                </div>
            )
        })
    }

    return (
        <>
            <SectionDivider
                title={t('collection-highlights')}
                buttonText={t('collection-highlights__button')}
                buttonLink={'/collections/collection-highlights'}
            />
            <Slider
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