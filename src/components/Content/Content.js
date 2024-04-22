import { BlocksRenderer } from '@strapi/blocks-react-renderer';
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
			// Image
			case 'media.image':
				return <ImageFull content={content} />
			// Video
			case 'media.video':
				return <Video content={content} />
		}
	}

	return (
		<div className={`${style.ContentWrapper} ${style[color]}`}>
			{
				contentObject.map((co, idx) => {
					return (
						<>
							{ renderContent(co) }
							<div style={{height: '24px'}} />
						</>
					)
				})
			}
		</div>
	)
}

export default Content