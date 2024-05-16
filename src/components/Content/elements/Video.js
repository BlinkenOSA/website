import style from "./Video.module.scss";
import YouTube from "react-youtube";
import {Col, Row} from "react-bootstrap";

const Video = ({content}) => {
    const youtube = content['YouTube']
    const caption = content['Caption']

    const renderContent = () => {
        if (youtube) {
            let youtubeURL = youtube.replace('https://youtu.be/', '')
            youtubeURL = youtubeURL.replace('https://www.youtube.com/watch?v=', '')

            return (
                <div className={style.YouTubePlayer}>
                    <YouTube videoId={youtubeURL} />
                    <div className={style.Caption}>{caption}</div>
                </div>
            )
        }
    }

    return (
        <Row>
            <Col xs={12}>
                {renderContent()}
            </Col>
        </Row>
    )
}

export default Video;