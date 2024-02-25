import aboutUsLeft from "../../../../../public/icons/menu/about_us_left.svg";
import aboutUsRight from "../../../../../public/icons/menu/about_us_right.svg";
import Image from "next/image";
import style from "./AboutUsBackground.module.scss";

const AboutUsBackground = () => {
    return (
        <div className={style.Wrapper}>
            <div style={{flex: 1}}>
                <Image
                    priority
                    src={aboutUsLeft}
                    width={300}
                    height={300}
                    alt="Icon"
                />
            </div>
            <div style={{flex: 1}}>
                <Image
                    priority
                    src={aboutUsRight}
                    width={300}
                    height={300}
                    alt="Icon"
                />
            </div>
        </div>
    )

}

export default AboutUsBackground;