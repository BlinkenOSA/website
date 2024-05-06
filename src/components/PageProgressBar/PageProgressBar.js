import {useEffect, useState} from "react";
import NextNProgress from "nextjs-progressbar";

const PageProgressBar = () => {
    const [color, setColor] = useState('#777777')

    useEffect(() => {
        const colors = [
            '#DCCC7A', '#ED8251', '#8AB3B8', '#B3C5B4'
        ];

        setColor(colors[(Math.floor(Math.random() * colors.length))])
    }, [])


    return (
        <NextNProgress color={color} height={5} showOnShallow={true} />
    )
}

export default PageProgressBar;