import Form from 'react-bootstrap/Form';
import style from "./Input.module.scss";
import {useState} from "react";
import {InputGroup} from "react-bootstrap";
import {IconGeneralEye, IconGeneralSearch} from "@/components/Icon/Icon";

const Input = ({id, type='input', disabled=false, placeholder, hasError=false}) => {
    const [showPassword, setShowPassword] = useState(false)

    const getType = () => {
        switch (type) {
            case 'password':
                return showPassword ? "text" : "password"
            default:
                return type
        }
    }

    switch (type) {
        case 'search':
            return (
                <InputGroup className={style.InputGroup}>
                    <InputGroup.Text id={disabled ? 'search-icon-disabled' : 'search-icon'}>
                      <IconGeneralSearch size={'small'} />
                    </InputGroup.Text>
                    <Form.Control
                        type={getType()}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                </InputGroup>
            )
        case 'input':
            return (
                <div className={style.Input}>
                    <Form.Control
                        type={getType()}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                </div>
            )
        case 'password': {
            return (
                <InputGroup className={style.InputGroup} disabled={disabled}>
                    <Form.Control
                        type={getType()}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)} disabled={disabled}  id={disabled ? 'eye-icon-disabled' : 'eye-icon'}>
                      <IconGeneralEye size={'small'} />
                    </InputGroup.Text>
                </InputGroup>
            )
        }
    }
}

export default Input