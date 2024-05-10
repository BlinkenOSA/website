import style from "./Lightbox.module.scss";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import MobileMenuButton from "@/components/Layout/mobile/MobileMenuButton";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Lightbox from "yet-another-react-lightbox";
import getImageData from "@/utils/content/getImageData";
import {useState} from "react";
import {useUpdateEffect} from "react-use";

const LightBox = ({imageData, index, onClose}) => {
	const [selectedIndex, setSelectedIndex] = useState(-1)

	useUpdateEffect(() => {
		setSelectedIndex(index)
	}, [index])

	const handleClose = () => {
		onClose && onClose(-1)
	}

	const slidesLightbox = () => {
		return imageData.map((data, idx) => {
			const fullImage = getImageData(data['Image'], 'full')

			const thumbnailImage = getImageData(data['Image'], 'thumbnail')
			const smallImage = getImageData(data['Image'], 'small')
			const mediumImage = getImageData(data['Image'], 'medium')
			const largeImage = getImageData(data['Image'], 'large')

			return {
				src: fullImage['url'],
				width: fullImage['width'],
				height: fullImage['height'],
				description: <div className={'subtitle-large'}>{data['Caption']}</div>,
				srcSet: [
					{src: thumbnailImage['url'], width: thumbnailImage['width'], height: thumbnailImage['height']},
					{src: smallImage['url'], width: smallImage['width'], height: smallImage['height']},
					{src: mediumImage['url'], width: mediumImage['width'], height: mediumImage['height']},
					{src: largeImage['url'], width: largeImage['width'], height: largeImage['height']},
				]
			}
		})
	}

	return (
		<Lightbox
			className={style.Lightbox}
			slides={slidesLightbox()}
			open={selectedIndex >= 0}
			index={selectedIndex}
			noScroll={{disabled: true}}
			close={handleClose}
			captions={{ descriptionTextAlign: 'center' }}
			render={{
				iconPrev: () => {return <IconGeneralLeft size={'large'} />},
				iconNext: () => {return <IconGeneralRight size={'large'} />},
				iconClose: () => { return <MobileMenuButton menuOpen={[1]}/>}
			}}
			plugins={[Captions, Counter]}
		/>
	)
}

export default LightBox;