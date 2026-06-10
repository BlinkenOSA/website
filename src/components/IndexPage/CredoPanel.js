import Credo from "@/components/Credo/Credo";
import {useState} from "react";
import Slider from "react-slick";
import {useReducedMotion} from "framer-motion";

const CredoPanel = ({credoData}) => {
    const [activeCredo, setActiveCredo] = useState(0)
    const data = credoData['data']
    const shouldReduceMotion = useReducedMotion();

    const handleChange = (index) => {
        setActiveCredo(index)
    }

    const sliderSettings = {
        dots: false,
        fade: !shouldReduceMotion,
        infinite: true,
        speed: shouldReduceMotion ? 0 : 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !shouldReduceMotion,
        autoplaySpeed: 6000,
        waitForAnimate: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        accessibility: true,
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
