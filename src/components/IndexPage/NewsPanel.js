import Slider from "react-slick";
import style from "@/pages/pages.module.scss";
import NewsCard from "@/components/Cards/NewsCard";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";

const NewsPanel = ({newsData}) => {
    const { t } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    let sliderRef = useRef(null);

    const renderNewsCard = () => {
        return newsData["data"].map(entry => {
            return (
                <div className={style.SliderCard}>
                    <NewsCard
                        id={`${entry["id"]}`}
                        key={`${entry["id"]}`}
                        data={entry['attributes']}
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
        </>
    )
}

export default NewsPanel;