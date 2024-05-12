import style from "./ImageGallery.module.scss";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {useState} from "react";
import getImageData from "@/utils/content/getImageData";
import LightBox from "@/components/Content/elements/LightBox";

const ImageGallery = ({content}) => {
	const [index, setIndex] = useState(-1)
	const imageData = content['Image']

	const slides = () => {
		return imageData.map((data, idx) => {
			const id = getImageData(data['Image'], 'medium')

			return {
				src: id['url'],
				width: id['width'],
				height: id['height'],
				title: data['Caption']
			}
		})
	}

	const handleClick = ({event, index}) => {
		event.preventDefault()
		setIndex(index)
	}

	return (
		<div className={style.PhotoAlbum}>
			<PhotoAlbum
				layout="columns"
				photos={slides()}
				breakpoints={[400, 700, 1200]}
				columns={(containerWidth) => {
					if (containerWidth < 400) return 1;
					if (containerWidth < 700) return 2;
					return 3;
				}}
				onClick={handleClick}
			/>
			<LightBox
				index={index}
				imageData={imageData}
				onClose={() => setIndex(-1)}
			/>
		</div>
	)
}

export default ImageGallery;