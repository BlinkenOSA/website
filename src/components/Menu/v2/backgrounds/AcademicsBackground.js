import academicsBottomLeft from "../../../../../public/icons/menu/academics_bottom_left.svg";
import academicsBottomRight from "../../../../../public/icons/menu/academics_bottom_right.svg";
import academicsTop from "../../../../../public/icons/menu/academics_top.svg";
import Image from "next/image";
import style from "./AcademicsBackground.module.scss"

const AcademicsBackground = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Top}>
                <Image
                    priority
                    src={academicsTop}
                    width={300}
                    height={300}
                    alt="Icon"
                />
            </div>
            <div className={style.Bottom}>
                <div className={style.Left}>
                    <Image
                        priority
                        src={academicsBottomLeft}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </div>
                <div className={style.Right}>
                    <Image
                        priority
                        src={academicsBottomRight}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </div>
            </div>
        </div>
    )

}

export default AcademicsBackground;