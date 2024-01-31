import style from "./EventsDivider.module.scss";
import Button from "@/components/Button/Button";

const EventsDivider = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <h1>Events</h1>
                <Button type={'primary'} size={'large'} color={'mustard'}>View All Events</Button>
            </div>
            <div className={style.SubText}>
                <span>* All our programs are free.</span>
            </div>
        </div>
    )
}

export default EventsDivider;