import {Col, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import style from "@/pages/pages.module.scss";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";

const CollectionsPanel = ({collectionsData}) => {
    const { t } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const renderCollectionCard = () => {
        return collectionsData["data"].map(collection => {
            return (
                <div key={collection['id']} className={style.SliderCard}>
                    <CollectionCard
                        key={`${collection["id"]}`}
                        data={collection['attributes']}
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
        </>
    )
}

export default CollectionsPanel;