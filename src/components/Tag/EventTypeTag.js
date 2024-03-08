import getColor from "@/utils/getColor";
import style from "./EventTypeTag.module.scss";
import getIconByEventType from "@/utils/getIconByType";

const EventTypeTag = ({eventType, profile}) => {
	const color = getColor(profile)
	const icon = getIconByEventType(eventType, 'small')

	return (
		<div className={`${style.EventType} ${style[color]}`}>
			<div className={style.Icon}>{icon}</div>
			<div className={'subtitle-small'}>{eventType}</div>
		</div>
	)
}

export default EventTypeTag