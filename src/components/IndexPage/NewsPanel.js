import Slider from "react-slick";
import style from "@/pages/pages.module.scss";
import NewsCard from "@/components/Cards/NewsCard";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";
import getLocalizedContent from "@/utils/content/getLocalizedContent";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";

const NewsPanel = ({newsData, slidesToShow=3}) => {
    const { t, lang } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    let sliderRef = useRef(null);

    const renderNewsCard = () => {
        return newsData["data"].map((entry, idx) => {
            return (
                <div key={`news_${idx}`} className={style.SliderCard}>
                    <NewsCard
                        id={`${entry["id"]}`}
                        key={`${entry["id"]}`}
                        data={getLocalizedContent(entry['attributes'], lang)}
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
                title={t('news')}
                link={'/news'}
                border={true}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...sliderSettings}>
                {renderNewsCard()}
            </Slider>
            <Media lessThan="md">
                <SectionSlider
                    link={'/news'}
                    onPreviousClick={onPreviousClick}
                    onNextClick={onNextClick}
                />
                <Spacer />
            </Media>
        </>
    )
}

export default NewsPanel;