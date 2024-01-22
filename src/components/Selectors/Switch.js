import style from "@/components/Selectors/Selectors.module.scss";
import Form from "react-bootstrap/Form";


const Switch = ({id, size, disabled=false, text}) => {
    return (
        <div key={'switch'} className={size === 'small' ? `${style.Switch} ${style.Small}` : style.Switch}>
            <Form.Check type={'switch'} id={id}>
                <Form.Check.Input disabled={disabled}/>
                <Form.Check.Label>{text}</Form.Check.Label>
            </Form.Check>
        </div>
    )
}

export default Switch;