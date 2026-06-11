import Slider from "react-slick";
import style from "@/pages/pages.module.scss";
import NewsCard from "@/components/Cards/NewsCard";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";
import {useReducedMotion} from "framer-motion";
import useSlickA11y from "@/utils/hooks/useSlickA11y";

const NewsPanel = ({newsData, slidesToShow=3}) => {
    const { t, lang } = useTranslation('index')
    const shouldReduceMotion = useReducedMotion()
    const hasOverflow = newsData["data"].length > slidesToShow;
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);

    useSlickA11y(sliderContainerRef, [hasOverflow, slidesToShow, newsData]);

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

    const renderNewsCard = () => {
        return newsData["data"].map((entry, idx) => {
            return (
                <div key={`news_${idx}`} className={style.SliderCard}>
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
        sliderRef.current?.slickNext();
    };
    const onPreviousClick = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <>
            <SectionFlipper
                title={t('news')}
                link={'/news'}
                border={true}
                showSlider={hasOverflow}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <div ref={sliderContainerRef}>
                <Slider
                    ref={sliderRef}
                    {...sliderSettings}>
                    {renderNewsCard()}
                </Slider>
            </div>
            <Media lessThan="md">
                {hasOverflow && (
                    <>
                        <SectionSlider
                            link={'/news'}
                            onPreviousClick={onPreviousClick}
                            onNextClick={onNextClick}
                        />
                        <Spacer />
                    </>
                )}
            </Media>
        </>
    )
}

export default NewsPanel;
