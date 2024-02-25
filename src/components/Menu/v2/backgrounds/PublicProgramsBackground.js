import publicProgramsTopLeft from "../../../../../public/icons/menu/public_programs_top_left.svg";
import publicProgramsBottomLeft from "../../../../../public/icons/menu/public_programs_bottom_left.svg";
import publicProgramsRight from "../../../../../public/icons/menu/public_programs_right.svg";

import Image from "next/image";
import style from "./PublicProgramsBackground.module.scss"

const PublicProgramsBackground = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Left}>
                <div className={style.Top}>
                    <Image
                        priority
                        src={publicProgramsTopLeft}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </div>
                <div className={style.Bottom}>
                    <Image
                        priority
                        src={publicProgramsBottomLeft}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </div>
            </div>
            <div className={style.Right}>
                <Image
                    priority
                    src={publicProgramsRight}
                    width={300}
                    height={300}
                    alt="Icon"
                />
            </div>
        </div>
    )

}

export default PublicProgramsBackground;