import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import style from './Content.module.scss';
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/getImageUrl";

const Content = ({contentObject}) => {
	const renderContent = (content) => {
		switch (content['__component']) {
			// ContentWithImage
			case 'contents.content-left':
				return renderContentWithImage(content)
			// ContentFull
			case 'contents.content':
				return renderContentFull(content)
			// Image
			case 'media.image':
				return renderFullImage(content)
		}
	}

	const renderContentFull = (content) => {
		return (
			<Row>
				<Col xs={12}>
					<BlocksRenderer content={content['Content']} />
				</Col>
			</Row>
		)
	}

	const renderContentWithImage = (content) => {
		const imagePlacement = content['ImagePlacement']

		const renderImages = () => {
			return content['Images'].map((imageData, idx) => {
				return (
					<div className={style.ImageWrapper}>
						{ renderImage(imageData, 'portrait') }
					</div>
				)
			})
		}

		switch (imagePlacement) {
			case 'Right':
				return (
					<Row>
						<Col xs={8}>
							<BlocksRenderer content={content['Content']} />
						</Col>
						<Col xs={4}>
							{renderImages()}
						</Col>
					</Row>
				)
			case 'Left':
				return (
					<Row>
						<Col xs={4}>
							{renderImages()}
						</Col>
						<Col xs={8}>
							<BlocksRenderer content={content['Content']} />
						</Col>
					</Row>
				)
		}
	}

	const renderFullImage = (content) => {
		return (
			<Row>
				<Col xs={12}>
					{ renderImage(content, 'landscape') }
				</Col>
			</Row>
		)
	}

	const renderImage = (imageContent, type) => {
		const source = getImageUrl(imageContent['Image'])
		const caption = imageContent['Caption']

		return (
			<div className={style.ImageWrapper}>
				<MaskedImage src={source} type={type} />
				{
					(caption && caption !== '') && <div className={style.Caption}>{caption}</div>
				}
			</div>
		)
	}

	return (
		<div className={style.ContentWrapper}>
			{
				contentObject.map((co, idx) => {
					return (
						<>
							{ renderContent(co) }
							<div style={{height: '48px'}} />
						</>
					)
				})
			}
		</div>
	)
}

export default Content