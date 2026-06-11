import style from "@/pages/pages.module.scss";
import EntryCard from "@/components/Cards/EntryCard";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import Slider from "react-slick";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";
import {Media} from "@/utils/media";
import SectionSlider from "@/components/IndexPage/SectionSlider";
import Spacer from "@/components/Spacer/Spacer";
import {useReducedMotion} from "framer-motion";
import useSlickA11y from "@/utils/hooks/useSlickA11y";

const EntriesPanel = ({entriesData, slidesToShow=3}) => {
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);

    const { t, lang } = useTranslation('index')
    const shouldReduceMotion = useReducedMotion()
    const hasOverflow = entriesData["data"].length > slidesToShow;

    useSlickA11y(sliderContainerRef, [entriesData, hasOverflow, slidesToShow]);

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

    const renderEntryCard = () => {
        return entriesData["data"].map((entry, idx) => {
            return (
                <div key={`entry_${idx}`} className={style.SliderCard}>
                    <EntryCard
                        id={`${entry["id"]}`}
                        key={`${entry["id"]}`}
                        data={entry['attributes']}
                        type={entry['EntryType']}
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
                title={t('entries')}
                link={'/entries'}
                border={true}
                showSlider={hasOverflow}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <div ref={sliderContainerRef}>
                <Slider
                    ref={sliderRef}
                    {...sliderSettings}>
                    {renderEntryCard()}
                </Slider>
            </div>
            <Media lessThan="md">
                {hasOverflow && (
                    <>
                        <SectionSlider
                            link={'/entries'}
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

export default EntriesPanel;
