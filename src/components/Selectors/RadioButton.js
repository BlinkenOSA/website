import Form from "react-bootstrap/Form";
import style from "./Selectors.module.scss";

const RadioButton = ({id, size, disabled=false, text}) => {
    return (
        <div key={'radio'} className={size === 'small' ? `${style.RadioButton} ${style.Small}` : style.RadioButton}>
            <Form.Check type={'radio'} id={id}>
                <Form.Check.Input type={'radio'} disabled={disabled}/>
                <Form.Check.Label>{text}</Form.Check.Label>
            </Form.Check>
        </div>
    )
}

export default RadioButton;