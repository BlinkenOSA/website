import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import style from './Content.module.scss';
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/content/getImageUrl";
import getImageType from "@/utils/content/getImageType";
import getColor from "@/utils/content/getColor";
import YouTube from 'react-youtube';
import Video from "@/components/Content/elements/Video";
import ImageWithCaption from "@/components/Content/elements/ImageWithCaption";
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