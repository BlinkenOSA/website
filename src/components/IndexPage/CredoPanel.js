import Credo from "@/components/Credo/Credo";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Slider from "react-slick";

const CredoPanel = ({credoData}) => {
    const [activeCredo, setActiveCredo] = useState(0)
    const data = credoData['data']

    const handleChange = (index) => {
        setActiveCredo(index)
    }

    const sliderSettings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        pauseOnHover: false,
        afterChange: handleChange
    };

    return (
        <Slider
            {...sliderSettings}
        >
            {
                data.map((d, idx) => {
                    return <Credo key={`credo{idx}`} data={d['attributes']} active={idx === activeCredo} />
                })
            }
        </Slider>
    )
}

export default CredoPanel;