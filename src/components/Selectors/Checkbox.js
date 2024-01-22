import Form from "react-bootstrap/Form";
import style from "./Selectors.module.scss";

const Checkbox = ({id, size, disabled=false, text}) => {
    return (
        <div key={'checkbox'} className={size === 'small' ? `${style.Checkbox} ${style.Small}` : style.Checkbox}>
            <Form.Check type={'checkbox'} id={id}>
                <Form.Check.Input type={'checkbox'} disabled={disabled}/>
                <Form.Check.Label>{text}</Form.Check.Label>
            </Form.Check>
        </div>
    )
}

export default Checkbox;