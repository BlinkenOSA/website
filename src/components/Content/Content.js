import style from './Content.module.scss';
import getColor from "@/utils/content/getColor";
import Video from "@/components/Content/elements/Video";
import ImageFull from "@/components/Content/elements/ImageFull";
import ContentWithImage from "@/components/Content/elements/ContentWithImage";
import ContentFull from "@/components/Content/elements/ContentFull";
import DividerLine from "@/components/Content/elements/DividerLine";
import DividerIcon from "@/components/Content/elements/DividerIcon";
import TextBox from "@/components/Content/elements/TextBox";
import Quote from "@/components/Content/elements/Quote";
import ImageGallery from "@/components/Content/elements/ImageGallery";
import Spacer from "@/components/Spacer/Spacer";
import dynamic from "next/dynamic";

const PDF = dynamic(() => import('@/components/Content/elements/PDF'), {
	ssr: false
})

const Content = ({contentObject, profile='Archivum'}) => {
	const color = getColor(profile)

	const renderContent = (content) => {
		switch (content['__component']) {
			// ContentWithImage
			case 'contents.content-left':
				return <ContentWithImage content={content} />
			// ContentFull
			case 'contents.content':
				return <ContentFull content={content} />
			// TextBox
			case 'contents.text-box':
				return <TextBox content={content} />
			case 'contents.quote':
				return <Quote profile={profile} content={content} />
			// DividerLine
			case 'components.divider-line':
				return <DividerLine profile={profile} content={content} />
			// DividerIcon
			case 'components.divider-icon':
				return <DividerIcon profile={profile} content={content} />
			// Booking iframe
			case 'components.i-frame':
				return <iframe style={{width: '100%', minHeight: '1235px', border: 'none', margin: 0, padding: 0}} src={content['Source']} />
			// ImageGallery
			case 'contents.image-gallery':
				return <ImageGallery content={content} />
			// Image
			case 'media.image':
				return <ImageFull content={content} />
			// Video
			case 'media.video':
				return <Video content={content} />
			case 'media.pdf':
				return <PDF content={content} />
		}
	}

	return (
		<div className={`${style.ContentWrapper} ${style[color]}`}>
			{
				contentObject.map((co, idx) => {
					return (
						<div key={idx}>
							{ renderContent(co) }
							<Spacer size={'medium'} />
						</div>
					)
				})
			}
		</div>
	)
}

export default Content