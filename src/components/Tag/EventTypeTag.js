import getColor from "@/utils/content/getColor";
import style from "./EventTypeTag.module.scss";
import getIconByEventType from "@/utils/content/getIconByType";

const EventTypeTag = ({eventType, profile}) => {
	const color = getColor(profile)
	const icon = getIconByEventType(eventType, 'small')

	return (
		<div className={`${style.EventType}`}>
			<div><span className={'subtitle-small'}>Event Type:</span> {eventType}</div>
			<div className={style.Icon}>{icon}</div>
		</div>
	)
}

export default EventTypeTag