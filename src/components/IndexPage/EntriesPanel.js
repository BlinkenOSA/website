import style from "@/pages/pages.module.scss";
import EntryCard from "@/components/Cards/EntryCard";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import Slider from "react-slick";
import {useRef} from "react";
import useTranslation from "next-translate/useTranslation";

const EntriesPanel = ({entriesData}) => {
    let sliderRef = useRef(null);

    const { t } = useTranslation('index')

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const renderEntryCard = () => {
        return entriesData["data"].map(entry => {
            return (
                <div className={style.SliderCard}>
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
        sliderRef.slickNext();
    };
    const onPreviousClick = () => {
        sliderRef.slickPrev();
    };

    return (
        <>
            <SectionFlipper
                title={t('entries')}
                link={'/entries'}
                border={true}
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}/>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...sliderSettings}>
                {renderEntryCard()}
            </Slider>
        </>
    )
}

export default EntriesPanel;